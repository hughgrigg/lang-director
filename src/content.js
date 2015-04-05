var targetCode, aElements, hrefLang;

targetCode = 'zh';

if (document.documentElement.lang !== targetCode) {
  aElements = document.getElementsByTagName('a');
  for (var i = aElements.length; i--;) {
    aElement = aElements[i];
    hrefLang = aElement.getAttribute('hreflang');
    console.log(hrefLang);
    if (hrefLang === targetCode) {
      window.location = aElement.getAttribute('href');
    }
  }
}
