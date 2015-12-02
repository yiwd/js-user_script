// ==UserScript==
// @name        autoSdudy
// @namespace   csz
// @description autoSdudy
// @include     http://www.jppt.com.cn/xmpublic/student/theory.do*
// @version     1
// @grant       none
// ==/UserScript==
function beginStudy() {
  beginTrain();
  window.close();
};
(function () {
  $(document).ready(function () {
    setTimeout(beginStudy, 5000);
  });
}) ();
