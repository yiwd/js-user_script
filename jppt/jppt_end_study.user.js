// ==UserScript==
// @name        autoStudyEnd
// @namespace   csz
// @description autoStudyEnd
// @include     http://www.jppt.com.cn/xmllvip/book/detail.do*
// @version     1
// @grant       none
// ==/UserScript==
function customEndTrain() {
  window.open('http://www.jppt.com.cn/gzpt/index/study');
  endTrain();
};
(function () {
  $(document).ready(function () {
    setTimeout(customEndTrain, 899000);//899秒
  });
}) ();
