"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// ES6 Class Creation
var Myclass = /*#__PURE__*/function () {
  function Myclass(name) {
    _classCallCheck(this, Myclass);

    this.name = name;
  }

  _createClass(Myclass, [{
    key: "myfucntion",
    value: function myfucntion() {
      console.log("my name is ".concat(this.name));
    }
  }]);

  return Myclass;
}();

var myclass = new Myclass("naseer");
myclass.myfucntion();