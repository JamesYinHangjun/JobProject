!(function(doc, win) {
  // 拿到html元素的dom对象
  var docEle = doc.documentElement,
      evt = "onorientationchange" in window ? "orientationchange" : "resize",
      fn = function() {
          // 拿到当前屏幕的尺寸
          var width = docEle.clientWidth;
          if(width > 640) {
            return;
          }
          width && (docEle.style.fontSize = 100 * (width / 640) + "px");
      };

  win.addEventListener(evt, fn, false);
  doc.addEventListener("DOMContentLoaded", fn, false);

}(document, window));
