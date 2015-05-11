
var currentScript = document.currentScript;
if(!currentScript) {  //  IE
  var scripts = document.getElementsByTagName( 'script' );
  currentScript = scripts[ scripts.length - 1 ];
}
var trackingID = currentScript.getAttribute("tracking-id");
if(!trackingID) {
  trackingID = "UA-41589840-10";
}

// GOOGLE ANALYTICS CODE
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', trackingID, 'auto');
  ga('send', 'pageview');

