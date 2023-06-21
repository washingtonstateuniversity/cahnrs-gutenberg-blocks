/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/src/js/partials/block-components/ApiRenderBlock.js":
/*!*******************************************************************!*\
  !*** ./assets/src/js/partials/block-components/ApiRenderBlock.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


var blockResponse = {
  requestData: '',
  rendered: 'hello world'
};
var ApiRenderBlock = function ApiRenderBlock(_ref) {
  var attributes = _ref.attributes,
    blockName = _ref.blockName,
    onChange = _ref.onChange,
    children = _ref.children;
  var _useState = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(''),
    _useState2 = _slicedToArray(_useState, 2),
    blockRendered = _useState2[0],
    setBlockRendered = _useState2[1];
  blockName = blockName.replace('/', '--');
  attributes.apiRender = true;
  var requestData = JSON.stringify(attributes);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default()({
      path: '/cahnrswsu-gutenberg/v1/render-block/' + blockName,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: requestData
    }).then(function (res) {
      var block = JSON.parse(res);
      setBlockRendered(block.rendered);
    });
  }, [requestData]);
  if (blockRendered) {
    return /*#__PURE__*/React.createElement("div", {
      className: "wsu-bc-api-render",
      dangerouslySetInnerHTML: {
        __html: blockRendered
      }
    });
  } else {
    return children;
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ApiRenderBlock);

/***/ }),

/***/ "./assets/src/js/partials/block-components/blockComponents.js":
/*!********************************************************************!*\
  !*** ./assets/src/js/partials/block-components/blockComponents.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiRenderBlock": () => (/* reexport safe */ _ApiRenderBlock__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _ApiRenderBlock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ApiRenderBlock */ "./assets/src/js/partials/block-components/ApiRenderBlock.js");


/***/ }),

/***/ "./assets/src/js/partials/block-controls/AlignItemControl.js":
/*!*******************************************************************!*\
  !*** ./assets/src/js/partials/block-controls/AlignItemControl.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _blockControls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blockControls */ "./assets/src/js/partials/block-controls/blockControls.js");
/* harmony import */ var _block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../block-utilities/blockUtilities */ "./assets/src/js/partials/block-utilities/blockUtilities.js");
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var AlignItemControl = function AlignItemControl(props) {
  var attributes = props.attributes,
    setAttributes = props.setAttributes;
  var buttonOptions = [{
    label: 'Align Left',
    value: 'left',
    svg: /*#__PURE__*/React.createElement("svg", {
      width: "24",
      height: "24",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      "aria-hidden": "true",
      focusable: "false"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M4 19.8h8.9v-1.5H4v1.5zm8.9-15.6H4v1.5h8.9V4.2zm-8.9 7v1.5h16v-1.5H4z"
    }))
  }, {
    label: 'Align Center',
    value: 'center',
    svg: /*#__PURE__*/React.createElement("svg", {
      width: "24",
      height: "24",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      "aria-hidden": "true",
      focusable: "false"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M16.4 4.2H7.6v1.5h8.9V4.2zM4 11.2v1.5h16v-1.5H4zm3.6 8.6h8.9v-1.5H7.6v1.5z"
    }))
  }, {
    label: 'Align Right',
    value: 'right',
    svg: /*#__PURE__*/React.createElement("svg", {
      width: "24",
      height: "24",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      "aria-hidden": "true",
      focusable: "false"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M11.1 19.8H20v-1.5h-8.9v1.5zm0-15.6v1.5H20V4.2h-8.9zM4 12.8h16v-1.5H4v1.5z"
    }))
  }];
  return /*#__PURE__*/React.createElement(_blockControls__WEBPACK_IMPORTED_MODULE_1__.SvgButtonGroupControl, _extends({}, props, {
    onClick: function onClick(value) {
      (0,_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_2__.setBlockClassName)(attributes, setAttributes, 'wsu-align-item--', value);
    },
    isActive: function isActive(value) {
      return false;
    },
    currentValue: (0,_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_2__.getBlockClassNameValue)(attributes, 'wsu-align-item--'),
    label: "Align Element",
    buttonOptions: buttonOptions
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AlignItemControl);

/***/ }),

/***/ "./assets/src/js/partials/block-controls/AnchorControl.js":
/*!****************************************************************!*\
  !*** ./assets/src/js/partials/block-controls/AnchorControl.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);

var AnchorControl = function AnchorControl(props) {
  var _attributes$id;
  var attributes = props.attributes,
    setAttributes = props.setAttributes;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.TextControl, {
    label: "HTML anchor",
    value: (_attributes$id = attributes.id) !== null && _attributes$id !== void 0 ? _attributes$id : '',
    onChange: function onChange(id) {
      return setAttributes({
        id: id
      });
    },
    help: "Enter a word or two \u2014 without spaces \u2014 to make a unique web address just for this block, called an \u201Canchor.\u201D Then, you\u2019ll be able to link directly to this section of your page."
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AnchorControl);

/***/ }),

/***/ "./assets/src/js/partials/block-controls/BorderControl.js":
/*!****************************************************************!*\
  !*** ./assets/src/js/partials/block-controls/BorderControl.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _blockControls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blockControls */ "./assets/src/js/partials/block-controls/blockControls.js");
/* harmony import */ var _block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../block-utilities/blockUtilities */ "./assets/src/js/partials/block-utilities/blockUtilities.js");
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


var BorderControl = function BorderControl(props) {
  var attributes = props.attributes,
    setAttributes = props.setAttributes,
    _props$classKey = props.classKey,
    classKey = _props$classKey === void 0 ? 'className' : _props$classKey;
  var buttonOptions = [{
    label: 'Border Left',
    value: 'left',
    svg: /*#__PURE__*/React.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 30 30"
    }, /*#__PURE__*/React.createElement("rect", {
      x: "3.41",
      y: "3.18",
      width: "23.18",
      height: "23.63",
      fill: "#fff",
      stroke: "#bcbec0",
      "stroke-miterlimit": "10"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "3.41",
      y1: "2.67",
      x2: "3.41",
      y2: "27.33",
      fill: "none",
      stroke: "#231f20",
      "stroke-miterlimit": "10",
      "stroke-width": "2"
    }))
  }, {
    label: 'Border Top',
    value: 'top',
    svg: /*#__PURE__*/React.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 30 30"
    }, /*#__PURE__*/React.createElement("rect", {
      x: "3.41",
      y: "3.18",
      width: "23.18",
      height: "23.63",
      fill: "#fff",
      stroke: "#bcbec0",
      "stroke-miterlimit": "10"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "2.9",
      y1: "3.52",
      x2: "27.1",
      y2: "3.52",
      fill: "none",
      stroke: "#231f20",
      "stroke-miterlimit": "10",
      "stroke-width": "2"
    }))
  }, {
    label: 'Border Bottom',
    value: 'bottom',
    svg: /*#__PURE__*/React.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 30 30"
    }, /*#__PURE__*/React.createElement("rect", {
      x: "3.41",
      y: "3.27",
      width: "23.18",
      height: "23.63",
      fill: "#fff",
      stroke: "#bcbec0",
      "stroke-miterlimit": "10"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "2.9",
      y1: "26.34",
      x2: "27.1",
      y2: "26.34",
      fill: "none",
      stroke: "#231f20",
      "stroke-miterlimit": "10",
      "stroke-width": "2"
    }))
  }, {
    label: 'Border Right',
    value: 'right',
    svg: /*#__PURE__*/React.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 30 30"
    }, /*#__PURE__*/React.createElement("rect", {
      x: "3.41",
      y: "3.18",
      width: "23.18",
      height: "23.63",
      fill: "#fff",
      stroke: "#bcbec0",
      "stroke-miterlimit": "10"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "26.09",
      y1: "2.67",
      x2: "26.09",
      y2: "27.33",
      fill: "none",
      stroke: "#231f20",
      "stroke-miterlimit": "10",
      "stroke-width": "2"
    }))
  }];
  return /*#__PURE__*/React.createElement(_blockControls__WEBPACK_IMPORTED_MODULE_0__.SvgButtonGroupControl, _extends({}, props, {
    onClick: function onClick(value) {
      (0,_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_1__.setBlockClassName)(attributes, setAttributes, 'wsu-border--add-', value, classKey);
    },
    isActive: function isActive(value) {
      return false;
    },
    currentValue: (0,_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_1__.getBlockClassNameValue)(attributes, 'wsu-border--add-', '', classKey),
    label: "Add Border",
    buttonOptions: buttonOptions
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BorderControl);

/***/ }),

/***/ "./assets/src/js/partials/block-controls/BreakPointControl.js":
/*!********************************************************************!*\
  !*** ./assets/src/js/partials/block-controls/BreakPointControl.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../block-utilities/blockUtilities */ "./assets/src/js/partials/block-utilities/blockUtilities.js");
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


var BreakPointWidthControl = function BreakPointWidthControl(props) {
  var label = props.label,
    value = props.value,
    setAttributes = props.setAttributes,
    attributes = props.attributes;
  return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.SelectControl, {
    label: 'Width at ' + label,
    value: (0,_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_1__.getBlockClassNameValue)(attributes, 'wsu-break--' + value + '-'),
    onChange: function onChange(size) {
      return (0,_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_1__.setBlockClassName)(attributes, setAttributes, 'wsu-break--' + value + '-', size);
    },
    options: [{
      label: 'N/A',
      value: ''
    }, {
      label: 'Auto',
      value: 'auto'
    }, {
      label: '100%',
      value: '100'
    }, {
      label: '66.66%',
      value: '66'
    }, {
      label: '50%',
      value: '50'
    }, {
      label: '33.33%',
      value: '33'
    }, {
      label: '25%',
      value: '25'
    }]
  });
};
var BreakPointControl = function BreakPointControl(props) {
  var attributes = props.attributes,
    setAttributes = props.setAttributes;
  var defaultBreakPoints = [{
    label: 'xxUltrawide (2400px)',
    value: 'xxultrawide'
  }, {
    label: 'xUltrawide (1900px)',
    value: 'xultrawide'
  }, {
    label: 'Ultrawide (1600px)',
    value: 'ultrawide'
  }, {
    label: 'Desktop (1260px)',
    value: 'desktop'
  }, {
    label: 'Tablet Large (992px)',
    value: 'tablet-large'
  }, {
    label: 'Tablet Medium (860px)',
    value: 'tablet-medium'
  }, {
    label: 'Tablet (768px)',
    value: 'tablet'
  }, {
    label: 'Phone (576px)',
    value: 'phone'
  }, {
    label: 'Phone Small (450px)',
    value: 'phone-small'
  }];
  return /*#__PURE__*/React.createElement(React.Fragment, null, defaultBreakPoints.map(function (breakPoint) {
    return /*#__PURE__*/React.createElement(BreakPointWidthControl, _extends({}, breakPoint, props));
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BreakPointControl);

/***/ }),

/***/ "./assets/src/js/partials/block-controls/ButtonControl.js":
/*!****************************************************************!*\
  !*** ./assets/src/js/partials/block-controls/ButtonControl.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);

var ButtonControl = function ButtonControl(_ref) {
  var attributes = _ref.attributes,
    setAttributes = _ref.setAttributes;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.TextControl, {
    label: "Button Text",
    value: attributes.buttonText ? attributes.buttonText : '',
    onChange: function onChange(buttonText) {
      return setAttributes({
        buttonText: buttonText
      });
    }
  }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.TextControl, {
    label: "Button Link",
    value: attributes.buttonLink ? attributes.buttonLink : '',
    onChange: function onChange(buttonLink) {
      return setAttributes({
        buttonLink: buttonLink
      });
    }
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ButtonControl);

/***/ }),

/***/ "./assets/src/js/partials/block-controls/ColorClassControl.js":
/*!********************************************************************!*\
  !*** ./assets/src/js/partials/block-controls/ColorClassControl.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../block-utilities/blockUtilities */ "./assets/src/js/partials/block-utilities/blockUtilities.js");
var _wp$components = wp.components,
  PanelBody = _wp$components.PanelBody,
  TextControl = _wp$components.TextControl,
  SelectControl = _wp$components.SelectControl,
  Button = _wp$components.Button,
  FocalPointPicker = _wp$components.FocalPointPicker,
  BaseControl = _wp$components.BaseControl,
  ColorPalette = _wp$components.ColorPalette;

var ColorClassControl = function ColorClassControl(props) {
  var attributes = props.attributes,
    setAttributes = props.setAttributes,
    colors = props.colors,
    _props$label = props.label,
    label = _props$label === void 0 ? 'Color' : _props$label,
    _props$prefix = props.prefix,
    prefix = _props$prefix === void 0 ? 'wsu-color-background--' : _props$prefix,
    _props$value = props.value,
    value = _props$value === void 0 ? '#ffffff' : _props$value,
    _props$onSetColor = props.onSetColor,
    onSetColor = _props$onSetColor === void 0 ? false : _props$onSetColor;
  var getSelectedColor = function getSelectedColor() {
    var _attributes$className;
    var selectedValue = '';
    var classNames = (_attributes$className = attributes.className) !== null && _attributes$className !== void 0 ? _attributes$className : '';
    var selectedColor = onSetColor ? value : (0,_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_0__.getBlockClassName)(classNames, prefix);
    if ('' !== selectedColor) {
      colors.forEach(function (colorObj, index) {
        if (selectedColor === colorObj.name) {
          selectedValue = colorObj.color;
        }
      });
    }
    return selectedValue;
  };
  var getColorName = function getColorName(color) {
    var colorName = '';
    colors.forEach(function (colorObj, index) {
      if (color === colorObj.color) {
        colorName = colorObj.name;
      }
    });
    return colorName;
  };
  var addColor = function addColor(color) {
    var _attributes$className2;
    var selectedColor = getColorName(color);
    var classNames = (_attributes$className2 = attributes.className) !== null && _attributes$className2 !== void 0 ? _attributes$className2 : '';
    var updatedClasses = (0,_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_0__.addBlockClassName)(classNames, prefix, selectedColor);
    setAttributes({
      className: updatedClasses
    });
  };
  var returnColorName = function returnColorName(color) {
    var colorName = getColorName(color);
    onSetColor(colorName);
  };
  var pickerId = 'color-picker-' + Math.floor(Math.random() * 1000000);
  return /*#__PURE__*/React.createElement(BaseControl, {
    id: pickerId,
    label: label
  }, /*#__PURE__*/React.createElement(ColorPalette, {
    colors: colors,
    value: getSelectedColor(),
    onChange: function onChange(color) {
      onSetColor ? returnColorName(color) : addColor(color);
    },
    clearable: false,
    disableCustomColors: true
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ColorClassControl);

/***/ }),

/***/ "./assets/src/js/partials/block-controls/ColorClassNameSelector.js":
/*!*************************************************************************!*\
  !*** ./assets/src/js/partials/block-controls/ColorClassNameSelector.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);


/*
 @example 
 <ColorClassNameSelector
    title="Color Settings"
    colorSettings={[
        {
            label: 'Background Color',
            prefix: 'wsu-color-background--',
            colors: [
                { name: 'Gray 85', color: '#262626', className: 'gray-85' },
                { name: 'Gray 95', color: '#080808', className: 'gray-95' },
            ],
        },
        {
            label: 'Text Color',
            prefix: 'wsu-color-text--',
            colors: [			
                { name: 'Gray 0', color: '#f7f7f7', className: 'gray-0' },
                { name: 'Gray 5', color: '#f2f2f2', className: 'gray-5' },
            ],
        }
    ]}
    {...props}>
</ColorClassNameSelector>
*/

/**
 * Functions just like the Wordpress color picker (PanelColorSettings), but instead of 
 * saving a color code it adds a class to the component className field.
 * Each color setting requires a prefix e.g. wsu-color-text--
 * Each color requires a className e.g. gray-10
 * The result will be a class of 'wsu-color-text--gray-10' added to the component className
 */
var ColorClassNameSelector = function ColorClassNameSelector(props) {
  var title = props.title,
    attributes = props.attributes,
    setAttributes = props.setAttributes,
    colorSettings = props.colorSettings;
  function getColorSetting(prefix) {
    return lodash.find(colorSettings, function (cs) {
      return cs.prefix === prefix;
    });
  }
  function getColorObjectByClassName(prefix, className) {
    if (!className) {
      return;
    }
    var colorName = className.replace(prefix, '');
    var colors = getColorSetting(prefix).colors;
    return lodash.find(colors, function (c) {
      return c.className === colorName;
    });
  }
  var getSelectedColorByPrefix = function getSelectedColorByPrefix(prefix) {
    var _getColorObjectByClas;
    if (!attributes.className) {
      return;
    }
    var appliedClasses = attributes.className.split(' ');
    var selectedColorClassName = lodash.find(appliedClasses, function (c) {
      return c.startsWith(prefix);
    });
    return (_getColorObjectByClas = getColorObjectByClassName(prefix, selectedColorClassName)) === null || _getColorObjectByClas === void 0 ? void 0 : _getColorObjectByClas.color;
  };
  var updateSelectedColors = function updateSelectedColors(prefix, color) {
    var _attributes$className, _attributes$className2;
    var colors = getColorSetting(prefix).colors;
    var colorObject = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.getColorObjectByColorValue)(colors, color);
    var colorClass = colorObject ? prefix + colorObject.className : '';
    var appliedClasses = (_attributes$className = (_attributes$className2 = attributes.className) === null || _attributes$className2 === void 0 ? void 0 : _attributes$className2.split(' ')) !== null && _attributes$className !== void 0 ? _attributes$className : [];
    var newClasses = lodash.filter(appliedClasses, function (c) {
      return !c.startsWith(prefix);
    }).concat(colorClass);
    var newClassName = newClasses.map(function (c) {
      return c.trim();
    }).filter(function (c) {
      return c;
    }).join(' ');
    setAttributes({
      className: newClassName
    });
  };
  return /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.PanelColorSettings, {
    title: title,
    colorSettings: colorSettings.map(function (cs) {
      return {
        colors: cs.colors,
        value: getSelectedColorByPrefix(cs.prefix),
        onChange: function onChange(color) {
          updateSelectedColors(cs.prefix, color);
        },
        label: cs.label
      };
    }),
    disableCustomGradients: true,
    disableCustomColors: true
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ColorClassNameSelector);

/***/ }),

/***/ "./assets/src/js/partials/block-controls/CountControl.js":
/*!***************************************************************!*\
  !*** ./assets/src/js/partials/block-controls/CountControl.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);

var CountControl = function CountControl(_ref) {
  var attributes = _ref.attributes,
    setAttributes = _ref.setAttributes;
  return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.TextControl, {
    label: "Count",
    value: attributes.count ? attributes.count : '0',
    onChange: function onChange(count) {
      return setAttributes({
        count: count
      });
    }
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CountControl);

/***/ }),

/***/ "./assets/src/js/partials/block-controls/DeveloperToolsControl.js":
/*!************************************************************************!*\
  !*** ./assets/src/js/partials/block-controls/DeveloperToolsControl.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);

var DeveloperToolsControl = function DeveloperToolsControl(props) {
  var _attributes$developer;
  var attributes = props.attributes,
    setAttributes = props.setAttributes;
  console.log(attributes);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.ToggleControl, {
    label: "Developer Tools",
    checked: (_attributes$developer = attributes.developerTools) !== null && _attributes$developer !== void 0 ? _attributes$developer : '',
    onChange: function onChange(developerTools) {
      return setAttributes({
        developerTools: developerTools
      });
    },
    help: "Show developer tools panel."
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DeveloperToolsControl);

/***/ }),

/***/ "./assets/src/js/partials/block-controls/FeedPostsControl.js":
/*!*******************************************************************!*\
  !*** ./assets/src/js/partials/block-controls/FeedPostsControl.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2__);



var FeedPostsControl = function FeedPostsControl(props) {
  var attributes = props.attributes,
    setAttributes = props.setAttributes,
    setPostType = props.setPostType,
    setTaxonomy = props.setTaxonomy,
    setTerms = props.setTerms,
    setCount = props.setCount,
    setOffset = props.setOffset,
    setUseFeed = props.setUseFeed;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.ToggleControl, {
    label: "Use Feed",
    checked: attributes.useFeed ? attributes.useFeed : false,
    onChange: function onChange(value) {
      return setUseFeed(value);
    }
  }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.SelectControl, {
    label: "Post Type",
    value: attributes.postType ? attributes.postType : '',
    options: [{
      label: 'Post',
      value: 'page'
    }, {
      label: 'Page',
      value: 'page'
    }, {
      label: 'Any',
      value: 'any'
    }],
    onChange: function onChange(value) {
      return setPostType(value);
    }
  }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.SelectControl, {
    label: "Taxonomy",
    value: attributes.taxonomy ? attributes.taxonomy : '',
    options: [{
      label: 'Category',
      value: 'category'
    }, {
      label: 'Tags',
      value: 'post_tag'
    }],
    onChange: function onChange(value) {
      return setTaxonomy(value);
    }
  }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.TextControl, {
    label: "Term IDs",
    value: attributes.terms ? attributes.terms : '',
    onChange: function onChange(value) {
      return setTerms(value);
    }
  }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.TextControl, {
    label: "Count",
    value: attributes.count ? attributes.count : '',
    onChange: function onChange(value) {
      return setCount(value);
    }
  }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.TextControl, {
    label: "Offset",
    value: attributes.offset ? attributes.offset : '',
    onChange: function onChange(value) {
      return setOffset(value);
    }
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FeedPostsControl);

/***/ }),

/***/ "./assets/src/js/partials/block-controls/FontSizeControl.js":
/*!******************************************************************!*\
  !*** ./assets/src/js/partials/block-controls/FontSizeControl.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../block-utilities/blockUtilities */ "./assets/src/js/partials/block-utilities/blockUtilities.js");
/* harmony import */ var _blockControls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blockControls */ "./assets/src/js/partials/block-controls/blockControls.js");



var wsuFontSizes = [{
  label: 'Not Set',
  value: ''
}, {
  label: 'xxSmall',
  value: 'xxsmall'
}, {
  label: 'xSmall',
  value: 'xsmall'
}, {
  label: 'Small',
  value: 'small'
}, {
  label: 'Medium',
  value: 'medium'
}, {
  label: 'xMedium',
  value: 'xmedium'
}, {
  label: 'xxMedium',
  value: 'xxmedium'
}, {
  label: 'Large',
  value: 'large'
}, {
  label: 'xLarge',
  value: 'xlarge'
}, {
  label: 'xxLarge',
  value: 'xxlarge'
}, {
  label: 'Hero',
  value: 'hero'
}];
var FontSizeControl = function FontSizeControl(props) {
  var _attributes$prefix, _attributes$label, _sizes;
  var attributes = props.attributes,
    setAttributes = props.setAttributes,
    sizes = props.sizes,
    _props$elementClass = props.elementClass,
    elementClass = _props$elementClass === void 0 ? 'className' : _props$elementClass;
  var prefix = (_attributes$prefix = attributes.prefix) !== null && _attributes$prefix !== void 0 ? _attributes$prefix : 'wsu-font-size--';
  var label = (_attributes$label = attributes.label) !== null && _attributes$label !== void 0 ? _attributes$label : 'Font Size';
  sizes = (_sizes = sizes) !== null && _sizes !== void 0 ? _sizes : wsuFontSizes;
  // let blockClassNames = attributes.className ?? '';
  // let classNames = attributes.elementClass ?? blockClassNames;

  console.log(attributes);

  //let value = getBlockClassNameOption( classNames, prefix );
  var value = (0,_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_1__.getBlockClassNameValue)(attributes, prefix, '', elementClass);
  console.log(value);
  var setFontSize = function setFontSize(size) {
    if ('onChange' in attributes) {
      attributes.onChange(size);
    } else {
      //setBlockClassName( attributes, setAttributes, prefix, size );
      (0,_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_1__.setBlockClassName)(attributes, setAttributes, prefix, size, elementClass);
    }
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.SelectControl, {
    label: label,
    value: value,
    options: sizes,
    onChange: function onChange(fontSize) {
      return setFontSize(fontSize);
    }
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FontSizeControl);

/***/ }),

/***/ "./assets/src/js/partials/block-controls/FormatSelector.js":
/*!*****************************************************************!*\
  !*** ./assets/src/js/partials/block-controls/FormatSelector.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var OptionItem = function OptionItem(option, onSelect) {
  console.log(option);
  return /*#__PURE__*/React.createElement("li", {
    className: "wsu-gutenberg-format-selector__option",
    onClick: function onClick(event) {
      onSelect(option.slug);
    }
  }, option.icon, /*#__PURE__*/React.createElement("span", {
    className: "wsu-gutenberg-format-selector__option__label"
  }, option.label));
};
var FormatSelector = function FormatSelector(_ref) {
  var options = _ref.options,
    onSelect = _ref.onSelect,
    title = _ref.title;
  if (options) {
    console.log(options);
    return /*#__PURE__*/React.createElement("div", {
      className: "wsu-gutenberg-format-selector"
    }, /*#__PURE__*/React.createElement("div", {
      className: "wsu-gutenberg-format-selector__title"
    }, title), /*#__PURE__*/React.createElement("ul", {
      className: "wsu-gutenberg-format-selector__options"
    }, options.map(function (option) {
      return OptionItem(option, onSelect);
    })));
  } else {
    return '';
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormatSelector);

/***/ }),

/***/ "./assets/src/js/partials/block-controls/HeadingControl.js":
/*!*****************************************************************!*\
  !*** ./assets/src/js/partials/block-controls/HeadingControl.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _blockControls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blockControls */ "./assets/src/js/partials/block-controls/blockControls.js");


var HeadingControl = function HeadingControl(props) {
  var attributes = props.attributes,
    setAttributes = props.setAttributes;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_blockControls__WEBPACK_IMPORTED_MODULE_1__.HeadingTagControl, props), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.TextControl, {
    label: "Heading Text",
    value: attributes.headingText ? attributes.headingText : '',
    onChange: function onChange(headingText) {
      return setAttributes({
        headingText: headingText
      });
    }
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeadingControl);

/***/ }),

/***/ "./assets/src/js/partials/block-controls/HostControl.js":
/*!**************************************************************!*\
  !*** ./assets/src/js/partials/block-controls/HostControl.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);

var HostControl = function HostControl(_ref) {
  var attributes = _ref.attributes,
    setAttributes = _ref.setAttributes;
  return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.TextControl, {
    label: "Host",
    value: attributes.host ? attributes.host : '',
    onChange: function onChange(host) {
      return setAttributes({
        host: host
      });
    },
    placeholder: "https://...."
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HostControl);

/***/ }),

/***/ "./assets/src/js/partials/block-controls/MaxWidthControl.js":
/*!******************************************************************!*\
  !*** ./assets/src/js/partials/block-controls/MaxWidthControl.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../block-utilities/blockUtilities */ "./assets/src/js/partials/block-utilities/blockUtilities.js");


var MaxWidthControl = function MaxWidthControl(props) {
  var attributes = props.attributes,
    setAttributes = props.setAttributes;
  return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.SelectControl, {
    label: "Max Width",
    value: (0,_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_1__.getBlockClassNameValue)(attributes, 'wsu-max-width--'),
    options: [{
      label: 'None',
      value: ''
    }, {
      label: 'Hero (1200px)',
      value: 'hero'
    }, {
      label: 'xxLarge (1000px)',
      value: 'xxlarge'
    }, {
      label: 'xLarge (900px)',
      value: 'xlarge'
    }, {
      label: 'Large (800px)',
      value: 'large'
    }, {
      label: 'xxMedium (693px)',
      value: 'xxmedium'
    }, {
      label: 'xMedium (600px)',
      value: 'xmedium'
    }, {
      label: 'Medium (506px)',
      value: 'medium'
    }, {
      label: 'Small (400px)',
      value: 'small'
    }, {
      label: 'xSmall (318px)',
      value: 'xsmall'
    }, {
      label: 'xxSmall (225px)',
      value: 'xxsmall'
    }, {
      label: 'sxxSmall (150px)',
      value: 'sxxsmall'
    }],
    onChange: function onChange(width) {
      return (0,_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_1__.setBlockClassName)(attributes, setAttributes, 'wsu-max-width--', width);
    }
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MaxWidthControl);

/***/ }),

/***/ "./assets/src/js/partials/block-controls/OffsetControl.js":
/*!****************************************************************!*\
  !*** ./assets/src/js/partials/block-controls/OffsetControl.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);

var OffsetControl = function OffsetControl(_ref) {
  var attributes = _ref.attributes,
    setAttributes = _ref.setAttributes;
  return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.TextControl, {
    label: "Offset",
    value: attributes.offset ? attributes.offset : '0',
    onChange: function onChange(offset) {
      return setAttributes({
        offset: offset
      });
    }
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OffsetControl);

/***/ }),

/***/ "./assets/src/js/partials/block-controls/PerRowControl.js":
/*!****************************************************************!*\
  !*** ./assets/src/js/partials/block-controls/PerRowControl.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);

var PerRow = function PerRow(_ref) {
  var attributes = _ref.attributes,
    _onChange = _ref.onChange;
  return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.TextControl, {
    label: "Cards Per Row",
    value: attributes.perRow ? attributes.perRow : '',
    onChange: function onChange(value) {
      return _onChange(value);
    }
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PerRow);

/***/ }),

/***/ "./assets/src/js/partials/block-controls/PostTypeSelectControl.js":
/*!************************************************************************!*\
  !*** ./assets/src/js/partials/block-controls/PostTypeSelectControl.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);

var PostTypeSelectControl = function PostTypeSelectControl(props) {
  console.log(props);
  var attributes = props.attributes,
    setAttributes = props.setAttributes;
  return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.SelectControl, {
    label: "Post Type",
    value: attributes.postType ? attributes.postType : 'post',
    options: [{
      label: 'Post',
      value: 'post'
    }, {
      label: 'Page',
      value: 'page'
    }, {
      label: 'Any',
      value: 'any'
    }],
    onChange: function onChange(postType) {
      return setAttributes({
        postType: postType
      });
    }
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PostTypeSelectControl);

/***/ }),

/***/ "./assets/src/js/partials/block-controls/RequireFirstImageControl.js":
/*!***************************************************************************!*\
  !*** ./assets/src/js/partials/block-controls/RequireFirstImageControl.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);

var RequireFirstImageControl = function RequireFirstImageControl(_ref) {
  var attributes = _ref.attributes,
    setAttributes = _ref.setAttributes;
  return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.ToggleControl, {
    label: "Require First Image",
    checked: attributes.requireFirstImage ? attributes.requireFirstImage : false,
    onChange: function onChange(requireFirstImage) {
      return setAttributes({
        requireFirstImage: requireFirstImage
      });
    }
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RequireFirstImageControl);

/***/ }),

/***/ "./assets/src/js/partials/block-controls/RequireImageControl.js":
/*!**********************************************************************!*\
  !*** ./assets/src/js/partials/block-controls/RequireImageControl.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);

var RequireImageControl = function RequireImageControl(_ref) {
  var attributes = _ref.attributes,
    setAttributes = _ref.setAttributes;
  return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.ToggleControl, {
    label: "Require Image",
    checked: attributes.requireImage ? attributes.requireImage : false,
    onChange: function onChange(requireImage) {
      return setAttributes({
        requireImage: requireImage
      });
    }
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RequireImageControl);

/***/ }),

/***/ "./assets/src/js/partials/block-controls/TaxonomyTermSelectControl.js":
/*!****************************************************************************!*\
  !*** ./assets/src/js/partials/block-controls/TaxonomyTermSelectControl.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);

var TaxonomyTermSelectControl = function TaxonomyTermSelectControl(_ref) {
  var attributes = _ref.attributes,
    setAttributes = _ref.setAttributes;
  return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.TextControl, {
    label: "Term IDs",
    value: attributes.terms ? attributes.terms : '',
    onChange: function onChange(terms) {
      return setAttributes({
        terms: terms
      });
    }
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TaxonomyTermSelectControl);

/***/ }),

/***/ "./assets/src/js/partials/block-controls/TaxonomyTypeSelectControl.js":
/*!****************************************************************************!*\
  !*** ./assets/src/js/partials/block-controls/TaxonomyTypeSelectControl.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);

var TaxonomyTypeSelectControl = function TaxonomyTypeSelectControl(_ref) {
  var attributes = _ref.attributes,
    setAttributes = _ref.setAttributes;
  return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.SelectControl, {
    label: "Filter By",
    value: attributes.taxonomy ? attributes.taxonomy : '',
    options: [{
      label: 'Category',
      value: 'category'
    }, {
      label: 'Tags',
      value: 'post_tag'
    }],
    onChange: function onChange(taxonomy) {
      return setAttributes({
        taxonomy: taxonomy
      });
    }
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TaxonomyTypeSelectControl);

/***/ }),

/***/ "./assets/src/js/partials/block-controls/TitleTagControl.js":
/*!******************************************************************!*\
  !*** ./assets/src/js/partials/block-controls/TitleTagControl.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);

var TitleTagControl = function TitleTagControl(_ref) {
  var attributes = _ref.attributes,
    setAttributes = _ref.setAttributes;
  return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.SelectControl, {
    label: "Title Tag",
    value: attributes.titleTag ? attributes.titleTag : 'h2',
    options: [{
      label: 'H2',
      value: 'h2'
    }, {
      label: 'H3',
      value: 'h3'
    }, {
      label: 'H4',
      value: 'h4'
    }, {
      label: 'H5',
      value: 'h5'
    }, {
      label: 'H6',
      value: 'h6'
    }, {
      label: 'div',
      value: 'div'
    }],
    onChange: function onChange(titleTag) {
      return setAttributes({
        titleTag: titleTag
      });
    }
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TitleTagControl);

/***/ }),

/***/ "./assets/src/js/partials/block-controls/blockControls.js":
/*!****************************************************************!*\
  !*** ./assets/src/js/partials/block-controls/blockControls.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlignItemControl": () => (/* reexport safe */ _AlignItemControl__WEBPACK_IMPORTED_MODULE_30__["default"]),
/* harmony export */   "AnchorControl": () => (/* reexport safe */ _AnchorControl__WEBPACK_IMPORTED_MODULE_27__["default"]),
/* harmony export */   "BorderControl": () => (/* reexport safe */ _BorderControl__WEBPACK_IMPORTED_MODULE_32__["default"]),
/* harmony export */   "BreakPointControl": () => (/* reexport safe */ _BreakPointControl__WEBPACK_IMPORTED_MODULE_28__["default"]),
/* harmony export */   "ButtonControl": () => (/* reexport safe */ _ButtonControl__WEBPACK_IMPORTED_MODULE_13__["default"]),
/* harmony export */   "ColorClassControl": () => (/* reexport safe */ _ColorClassControl__WEBPACK_IMPORTED_MODULE_21__["default"]),
/* harmony export */   "ColorClassNameSelector": () => (/* reexport safe */ _ColorClassNameSelector__WEBPACK_IMPORTED_MODULE_4__["default"]),
/* harmony export */   "CountControl": () => (/* reexport safe */ _CountControl__WEBPACK_IMPORTED_MODULE_10__["default"]),
/* harmony export */   "DeveloperToolsControl": () => (/* reexport safe */ _DeveloperToolsControl__WEBPACK_IMPORTED_MODULE_33__["default"]),
/* harmony export */   "DisplayFieldControl": () => (/* reexport safe */ _display_fields_control_DisplayFieldsControl__WEBPACK_IMPORTED_MODULE_25__["default"]),
/* harmony export */   "FeedPostsControl": () => (/* reexport safe */ _FeedPostsControl__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   "FontIconPickerControl": () => (/* reexport safe */ _font_icon_picker_control_FontIconPickerControl__WEBPACK_IMPORTED_MODULE_6__["default"]),
/* harmony export */   "FontSizeControl": () => (/* reexport safe */ _FontSizeControl__WEBPACK_IMPORTED_MODULE_17__["default"]),
/* harmony export */   "FormatSelector": () => (/* reexport safe */ _FormatSelector__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "HeadingControl": () => (/* reexport safe */ _HeadingControl__WEBPACK_IMPORTED_MODULE_14__["default"]),
/* harmony export */   "HeadingTagControl": () => (/* reexport safe */ _heading_tag_control_js_HeadingTagControl__WEBPACK_IMPORTED_MODULE_15__["default"]),
/* harmony export */   "HostControl": () => (/* reexport safe */ _HostControl__WEBPACK_IMPORTED_MODULE_12__["default"]),
/* harmony export */   "ImageFrameControl": () => (/* reexport safe */ _image_frame_control_ImageFrameControl__WEBPACK_IMPORTED_MODULE_24__["default"]),
/* harmony export */   "MaxWidthControl": () => (/* reexport safe */ _MaxWidthControl__WEBPACK_IMPORTED_MODULE_31__["default"]),
/* harmony export */   "MultipleImagePicker": () => (/* reexport safe */ _multiple_image_picker_MultipleImagePicker__WEBPACK_IMPORTED_MODULE_26__["default"]),
/* harmony export */   "OffsetControl": () => (/* reexport safe */ _OffsetControl__WEBPACK_IMPORTED_MODULE_11__["default"]),
/* harmony export */   "PerRow": () => (/* reexport safe */ _PerRowControl__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   "PostPicker": () => (/* reexport safe */ _post_picker_PostPicker__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   "PostTypeSelectControl": () => (/* reexport safe */ _PostTypeSelectControl__WEBPACK_IMPORTED_MODULE_8__["default"]),
/* harmony export */   "RequireFirstImageControl": () => (/* reexport safe */ _RequireFirstImageControl__WEBPACK_IMPORTED_MODULE_20__["default"]),
/* harmony export */   "RequireImageControl": () => (/* reexport safe */ _RequireImageControl__WEBPACK_IMPORTED_MODULE_19__["default"]),
/* harmony export */   "RequiredAlertControl": () => (/* reexport safe */ _required_alert_control_RequiredAlertControl__WEBPACK_IMPORTED_MODULE_22__["default"]),
/* harmony export */   "ResetControl": () => (/* reexport safe */ _reset_control_ResetControl__WEBPACK_IMPORTED_MODULE_18__["default"]),
/* harmony export */   "SlideSelector": () => (/* reexport safe */ _slide_selector_slideSelector__WEBPACK_IMPORTED_MODULE_34__["default"]),
/* harmony export */   "SpacingClassNameSelector": () => (/* reexport safe */ _spacing_class_name_selector_spacing_class_name_selector__WEBPACK_IMPORTED_MODULE_5__["default"]),
/* harmony export */   "SvgButtonGroupControl": () => (/* reexport safe */ _svg_button_group_control_SvgButtonGroupControl__WEBPACK_IMPORTED_MODULE_29__["default"]),
/* harmony export */   "TaxonomyTermSelectControl": () => (/* reexport safe */ _TaxonomyTermSelectControl__WEBPACK_IMPORTED_MODULE_9__["default"]),
/* harmony export */   "TaxonomyTypeSelectControl": () => (/* reexport safe */ _TaxonomyTypeSelectControl__WEBPACK_IMPORTED_MODULE_7__["default"]),
/* harmony export */   "TermSelectorControl": () => (/* reexport safe */ _term_selector_control_TermSelectorControl__WEBPACK_IMPORTED_MODULE_23__["default"]),
/* harmony export */   "TitleTagControl": () => (/* reexport safe */ _TitleTagControl__WEBPACK_IMPORTED_MODULE_16__["default"])
/* harmony export */ });
/* harmony import */ var _FormatSelector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormatSelector */ "./assets/src/js/partials/block-controls/FormatSelector.js");
/* harmony import */ var _post_picker_PostPicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./post-picker/PostPicker */ "./assets/src/js/partials/block-controls/post-picker/PostPicker.js");
/* harmony import */ var _FeedPostsControl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FeedPostsControl */ "./assets/src/js/partials/block-controls/FeedPostsControl.js");
/* harmony import */ var _PerRowControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PerRowControl */ "./assets/src/js/partials/block-controls/PerRowControl.js");
/* harmony import */ var _ColorClassNameSelector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ColorClassNameSelector */ "./assets/src/js/partials/block-controls/ColorClassNameSelector.js");
/* harmony import */ var _spacing_class_name_selector_spacing_class_name_selector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./spacing-class-name-selector/spacing-class-name-selector */ "./assets/src/js/partials/block-controls/spacing-class-name-selector/spacing-class-name-selector.js");
/* harmony import */ var _font_icon_picker_control_FontIconPickerControl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./font-icon-picker-control/FontIconPickerControl */ "./assets/src/js/partials/block-controls/font-icon-picker-control/FontIconPickerControl.js");
/* harmony import */ var _TaxonomyTypeSelectControl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TaxonomyTypeSelectControl */ "./assets/src/js/partials/block-controls/TaxonomyTypeSelectControl.js");
/* harmony import */ var _PostTypeSelectControl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./PostTypeSelectControl */ "./assets/src/js/partials/block-controls/PostTypeSelectControl.js");
/* harmony import */ var _TaxonomyTermSelectControl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./TaxonomyTermSelectControl */ "./assets/src/js/partials/block-controls/TaxonomyTermSelectControl.js");
/* harmony import */ var _CountControl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./CountControl */ "./assets/src/js/partials/block-controls/CountControl.js");
/* harmony import */ var _OffsetControl__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./OffsetControl */ "./assets/src/js/partials/block-controls/OffsetControl.js");
/* harmony import */ var _HostControl__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./HostControl */ "./assets/src/js/partials/block-controls/HostControl.js");
/* harmony import */ var _ButtonControl__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ButtonControl */ "./assets/src/js/partials/block-controls/ButtonControl.js");
/* harmony import */ var _HeadingControl__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./HeadingControl */ "./assets/src/js/partials/block-controls/HeadingControl.js");
/* harmony import */ var _heading_tag_control_js_HeadingTagControl__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./heading-tag-control.js/HeadingTagControl */ "./assets/src/js/partials/block-controls/heading-tag-control.js/HeadingTagControl.js");
/* harmony import */ var _TitleTagControl__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./TitleTagControl */ "./assets/src/js/partials/block-controls/TitleTagControl.js");
/* harmony import */ var _FontSizeControl__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./FontSizeControl */ "./assets/src/js/partials/block-controls/FontSizeControl.js");
/* harmony import */ var _reset_control_ResetControl__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./reset-control/ResetControl */ "./assets/src/js/partials/block-controls/reset-control/ResetControl.js");
/* harmony import */ var _RequireImageControl__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./RequireImageControl */ "./assets/src/js/partials/block-controls/RequireImageControl.js");
/* harmony import */ var _RequireFirstImageControl__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./RequireFirstImageControl */ "./assets/src/js/partials/block-controls/RequireFirstImageControl.js");
/* harmony import */ var _ColorClassControl__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./ColorClassControl */ "./assets/src/js/partials/block-controls/ColorClassControl.js");
/* harmony import */ var _required_alert_control_RequiredAlertControl__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./required-alert-control/RequiredAlertControl */ "./assets/src/js/partials/block-controls/required-alert-control/RequiredAlertControl.js");
/* harmony import */ var _term_selector_control_TermSelectorControl__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./term-selector-control/TermSelectorControl */ "./assets/src/js/partials/block-controls/term-selector-control/TermSelectorControl.js");
/* harmony import */ var _image_frame_control_ImageFrameControl__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./image-frame-control/ImageFrameControl */ "./assets/src/js/partials/block-controls/image-frame-control/ImageFrameControl.js");
/* harmony import */ var _display_fields_control_DisplayFieldsControl__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./display-fields-control/DisplayFieldsControl */ "./assets/src/js/partials/block-controls/display-fields-control/DisplayFieldsControl.js");
/* harmony import */ var _multiple_image_picker_MultipleImagePicker__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./multiple-image-picker/MultipleImagePicker */ "./assets/src/js/partials/block-controls/multiple-image-picker/MultipleImagePicker.js");
/* harmony import */ var _AnchorControl__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./AnchorControl */ "./assets/src/js/partials/block-controls/AnchorControl.js");
/* harmony import */ var _BreakPointControl__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./BreakPointControl */ "./assets/src/js/partials/block-controls/BreakPointControl.js");
/* harmony import */ var _svg_button_group_control_SvgButtonGroupControl__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./svg-button-group-control/SvgButtonGroupControl */ "./assets/src/js/partials/block-controls/svg-button-group-control/SvgButtonGroupControl.js");
/* harmony import */ var _AlignItemControl__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./AlignItemControl */ "./assets/src/js/partials/block-controls/AlignItemControl.js");
/* harmony import */ var _MaxWidthControl__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./MaxWidthControl */ "./assets/src/js/partials/block-controls/MaxWidthControl.js");
/* harmony import */ var _BorderControl__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./BorderControl */ "./assets/src/js/partials/block-controls/BorderControl.js");
/* harmony import */ var _DeveloperToolsControl__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./DeveloperToolsControl */ "./assets/src/js/partials/block-controls/DeveloperToolsControl.js");
/* harmony import */ var _slide_selector_slideSelector__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./slide-selector/slideSelector */ "./assets/src/js/partials/block-controls/slide-selector/slideSelector.js");




































/***/ }),

/***/ "./assets/src/js/partials/block-controls/display-fields-control/DisplayFieldsControl.js":
/*!**********************************************************************************************!*\
  !*** ./assets/src/js/partials/block-controls/display-fields-control/DisplayFieldsControl.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var _wp$components = wp.components,
  PanelBody = _wp$components.PanelBody,
  TextControl = _wp$components.TextControl,
  SelectControl = _wp$components.SelectControl,
  Button = _wp$components.Button,
  FocalPointPicker = _wp$components.FocalPointPicker,
  BaseControl = _wp$components.BaseControl,
  IconButton = _wp$components.IconButton,
  ToggleControl = _wp$components.ToggleControl;
var DisplayFieldControl = function DisplayFieldControl(props) {
  var attributes = props.attributes,
    setAttributes = props.setAttributes,
    _props$fieldOptions = props.fieldOptions,
    fieldOptions = _props$fieldOptions === void 0 ? [] : _props$fieldOptions;
  var _attributes$displayFi = attributes.displayFields,
    displayFields = _attributes$displayFi === void 0 ? [] : _attributes$displayFi;
  var DisplayField = function DisplayField(_ref) {
    var field = _ref.field;
    var _field$label = field.label,
      label = _field$label === void 0 ? '' : _field$label,
      _field$value = field.value,
      value = _field$value === void 0 ? '' : _field$value;
    return /*#__PURE__*/React.createElement(ToggleControl, {
      label: label,
      checked: displayFields.includes(value),
      onChange: function onChange(value) {
        return updateDisplayFieldArray(field, value);
      }
    });
  };
  var updateDisplayFieldArray = function updateDisplayFieldArray(field, value) {
    console.log(value);
    var fieldValues = displayFields.split(',');
    if (value) {
      fieldValues.push(field.value);
    } else {
      var index = fieldValues.indexOf(field.value);
      if (index > -1) {
        fieldValues.splice(index, 1); // 2nd parameter means remove one item only
      }
    }

    console.log(fieldValues);
    setAttributes({
      displayFields: fieldValues.join(',')
    });
  };
  return fieldOptions.map(function (field) {
    return /*#__PURE__*/React.createElement(DisplayField, {
      field: field
    });
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DisplayFieldControl);

/***/ }),

/***/ "./assets/src/js/partials/block-controls/feed-controls/FeedCountControl.js":
/*!*********************************************************************************!*\
  !*** ./assets/src/js/partials/block-controls/feed-controls/FeedCountControl.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);

var FeedCountControl = function FeedCountControl(_ref) {
  var attributes = _ref.attributes,
    setAttributes = _ref.setAttributes;
  return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.TextControl, {
    label: "Count",
    value: attributes.count,
    onChange: function onChange(count) {
      return setAttributes({
        count: count
      });
    },
    help: "Number of results to return"
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FeedCountControl);

/***/ }),

/***/ "./assets/src/js/partials/block-controls/feed-controls/FeedHostControl.js":
/*!********************************************************************************!*\
  !*** ./assets/src/js/partials/block-controls/feed-controls/FeedHostControl.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var abortController = null;
var FeedHostControl = function FeedHostControl(_ref) {
  var attributes = _ref.attributes,
    setAttributes = _ref.setAttributes;
  var _useState = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(attributes.host),
    _useState2 = _slicedToArray(_useState, 2),
    value = _useState2[0],
    setValue = _useState2[1];
  var _useState3 = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isValid = _useState4[0],
    setIsValid = _useState4[1];
  var instanceId = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_0__.useInstanceId)(FeedHostControl);
  var id = "inspector-text-control-".concat(instanceId);
  function isValidUrl(url) {
    try {
      new URL(url);
    } catch (e) {
      return false;
    }
    return true;
  }
  function checkWpApi(url) {
    var _abortController, _abortController2;
    // cancel existing requests and set up new abort controller
    (_abortController = abortController) === null || _abortController === void 0 ? void 0 : _abortController.abort();
    abortController = typeof AbortController === "undefined" ? undefined : new AbortController();
    return fetch(url + "/wp-json/wp/v2/statuses", {
      method: "GET",
      signal: (_abortController2 = abortController) === null || _abortController2 === void 0 ? void 0 : _abortController2.signal
    });
  }
  function updateValidity(url) {
    if (isValidUrl(url)) {
      checkWpApi(url).then(function (response) {
        if (response.ok) {
          setIsValid(true);
          setAttributes({
            host: url
          });
        } else {
          setIsValid(false);
        }
      })["catch"](function (error) {
        setIsValid(false);
      });
    } else {
      setIsValid(false);
    }
  }
  function handleHostChange(_x2) {
    return _handleHostChange.apply(this, arguments);
  }
  function _handleHostChange() {
    _handleHostChange = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(url) {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            setValue(url);

            // reset if empty
            if (!(url === "")) {
              _context.next = 5;
              break;
            }
            setIsValid(false);
            setAttributes({
              host: ""
            });
            return _context.abrupt("return");
          case 5:
            // validate if url is a valid WP site
            updateValidity(url);
          case 6:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return _handleHostChange.apply(this, arguments);
  }
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    updateValidity(attributes.host);
  }, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl, {
    label: "Host (optional)",
    id: id,
    help: "URL for the site to get results from (i.e. https://news.wsu.edu)."
  }, /*#__PURE__*/React.createElement("div", {
    className: "wsu-gutenberg-input-with-icon"
  }, value && /*#__PURE__*/React.createElement("span", {
    "class": "dashicon wsu-gutenberg-input-with-icon__icon ".concat(isValid ? "dashicons dashicons-yes wsu-gutenberg-input-with-icon__icon--success" : "dashicons dashicons-no-alt wsu-gutenberg-input-with-icon__icon--error")
  }), /*#__PURE__*/React.createElement("input", {
    className: "components-text-control__input",
    type: "text",
    id: id,
    value: value,
    onChange: function onChange(e) {
      return handleHostChange(e.target.value);
    },
    "aria-describedby": id + "__help"
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FeedHostControl);

/***/ }),

/***/ "./assets/src/js/partials/block-controls/feed-controls/FeedOffsetControl.js":
/*!**********************************************************************************!*\
  !*** ./assets/src/js/partials/block-controls/feed-controls/FeedOffsetControl.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);

var FeedOffsetControl = function FeedOffsetControl(_ref) {
  var attributes = _ref.attributes,
    setAttributes = _ref.setAttributes;
  return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.TextControl, {
    label: "Offset",
    value: attributes.offset,
    onChange: function onChange(offset) {
      return setAttributes({
        offset: offset
      });
    },
    help: "Offset skips a given number of items before starting results."
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FeedOffsetControl);

/***/ }),

/***/ "./assets/src/js/partials/block-controls/feed-controls/FeedPanel.js":
/*!**************************************************************************!*\
  !*** ./assets/src/js/partials/block-controls/feed-controls/FeedPanel.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);

var FeedPanel = function FeedPanel(props) {
  var _props$isOpen = props.isOpen,
    isOpen = _props$isOpen === void 0 ? false : _props$isOpen;
  return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.PanelBody, {
    title: "Feed Options",
    initialOpen: isOpen
  }, props.children);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FeedPanel);

/***/ }),

/***/ "./assets/src/js/partials/block-controls/feed-controls/FeedPanelAdvanced.js":
/*!**********************************************************************************!*\
  !*** ./assets/src/js/partials/block-controls/feed-controls/FeedPanelAdvanced.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);

var FeedPanelAdvanced = function FeedPanelAdvanced(props) {
  var _props$isOpen = props.isOpen,
    isOpen = _props$isOpen === void 0 ? false : _props$isOpen;
  return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.PanelBody, {
    title: "Advanced Feed Options",
    initialOpen: isOpen
  }, props.children);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FeedPanelAdvanced);

/***/ }),

/***/ "./assets/src/js/partials/block-controls/feed-controls/FeedPostTypeControl.js":
/*!************************************************************************************!*\
  !*** ./assets/src/js/partials/block-controls/feed-controls/FeedPostTypeControl.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


var defaultOptions = [{
  label: "Any",
  value: "any"
}];
var FeedPostTypeControl = function FeedPostTypeControl(props) {
  var _useState = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultOptions),
    _useState2 = _slicedToArray(_useState, 2),
    options = _useState2[0],
    setOptions = _useState2[1];
  var defaultIgnorePostTypes = ["attachment", "tribe_organizer", "wp_block", "theme_part", "tribe_venue", "customize_changeset", "curated_news", "news_feed", "tribe_events"];
  var _props$ignorePostType = props.ignorePostTypes,
    ignorePostTypes = _props$ignorePostType === void 0 ? defaultIgnorePostTypes : _props$ignorePostType;
  function shouldListPostType(postType) {
    if (ignorePostTypes && ignorePostTypes.includes(postType)) return false;
    return true;
  }
  function optionSorter(a, b) {
    var aLabel = a.label.toUpperCase();
    var bLabel = b.label.toUpperCase();
    if (aLabel < bLabel) {
      return -1;
    }
    if (aLabel > bLabel) {
      return 1;
    }
    return 0;
  }
  function fetchOptions() {
    return _fetchOptions.apply(this, arguments);
  }
  function _fetchOptions() {
    _fetchOptions = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var response, postTypes, fetchedOptions, key, postType, newOptions;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch(props.host + "/wp-json/wp/v2/types", {
              method: "GET"
            });
          case 2:
            response = _context.sent;
            if (!response.ok) {
              _context.next = 8;
              break;
            }
            _context.next = 6;
            return response.json();
          case 6:
            postTypes = _context.sent;
            if (postTypes) {
              fetchedOptions = [];
              for (key in postTypes) {
                if (postTypes.hasOwnProperty(key)) {
                  postType = postTypes[key];
                  if (shouldListPostType(postType["slug"])) {
                    fetchedOptions.push({
                      label: postType["name"],
                      value: postType["slug"]
                    });
                  }
                }
              }
              fetchedOptions.sort(optionSorter);
              newOptions = defaultOptions.concat(fetchedOptions);
              setOptions(newOptions);
            }
          case 8:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return _fetchOptions.apply(this, arguments);
  }
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    fetchOptions();
  }, [props.host]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
    label: props.label || "Post Type",
    help: props.help,
    value: props.value,
    options: options,
    onChange: function onChange(postType) {
      return props.onChange(postType);
    }
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FeedPostTypeControl);

/***/ }),

/***/ "./assets/src/js/partials/block-controls/feed-controls/FeedTaxonomyControl.js":
/*!************************************************************************************!*\
  !*** ./assets/src/js/partials/block-controls/feed-controls/FeedTaxonomyControl.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


var defaultOptions = [];
var FeedTaxonomyControl = function FeedTaxonomyControl(props) {
  var _useState = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultOptions),
    _useState2 = _slicedToArray(_useState, 2),
    options = _useState2[0],
    setOptions = _useState2[1];
  function shouldListTaxonomy(taxonomy) {
    if (!props.postType || props.postType === "any") return true;
    var supportedTypes = taxonomy["types"];
    return supportedTypes.includes(props.postType);
  }
  function optionSorter(a, b) {
    var aLabel = a.label.toUpperCase();
    var bLabel = b.label.toUpperCase();
    if (aLabel < bLabel) {
      return -1;
    }
    if (aLabel > bLabel) {
      return 1;
    }
    return 0;
  }
  function fetchOptions() {
    return _fetchOptions.apply(this, arguments);
  }
  function _fetchOptions() {
    _fetchOptions = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var response, taxonomies, fetchedOptions, key, taxonomy, newOptions;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch(props.host + "/wp-json/wp/v2/taxonomies", {
              method: "GET"
            });
          case 2:
            response = _context.sent;
            if (!response.ok) {
              _context.next = 8;
              break;
            }
            _context.next = 6;
            return response.json();
          case 6:
            taxonomies = _context.sent;
            if (taxonomies) {
              fetchedOptions = [];
              for (key in taxonomies) {
                if (taxonomies.hasOwnProperty(key)) {
                  taxonomy = taxonomies[key];
                  if (shouldListTaxonomy(taxonomy)) {
                    fetchedOptions.push({
                      label: taxonomy["name"],
                      value: taxonomy["slug"]
                    });
                  }
                }
              }
              fetchedOptions.sort(optionSorter);
              newOptions = defaultOptions.concat(fetchedOptions);
              setOptions(newOptions);
            }
          case 8:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return _fetchOptions.apply(this, arguments);
  }
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    fetchOptions();
  }, [props.host, props.postType]);
  return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
    label: props.label || "Taxonomy",
    help: props.help,
    value: props.value,
    options: options.length ? options : [{
      label: "",
      value: ""
    }],
    onChange: function onChange(taxonomy) {
      return props.onChange(taxonomy);
    }
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FeedTaxonomyControl);

/***/ }),

/***/ "./assets/src/js/partials/block-controls/feed-controls/FeedTermControl.js":
/*!********************************************************************************!*\
  !*** ./assets/src/js/partials/block-controls/feed-controls/FeedTermControl.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _blockControls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../blockControls */ "./assets/src/js/partials/block-controls/blockControls.js");

var FeedTermControl = function FeedTermControl(props) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_blockControls__WEBPACK_IMPORTED_MODULE_0__.TermSelectorControl, {
    label: props.label || "Terms",
    help: props.help,
    host: props.host,
    taxonomy: props.taxonomy,
    value: props.value,
    onChange: function onChange(newval) {
      return props.onChange(newval);
    }
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FeedTermControl);

/***/ }),

/***/ "./assets/src/js/partials/block-controls/feed-controls/FeedUseAndLogicControl.js":
/*!***************************************************************************************!*\
  !*** ./assets/src/js/partials/block-controls/feed-controls/FeedUseAndLogicControl.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);

var FeedUseAndLogicControl = function FeedUseAndLogicControl(_ref) {
  var attributes = _ref.attributes,
    setAttributes = _ref.setAttributes;
  return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.ToggleControl, {
    label: "Use AND logic for terms",
    checked: attributes.useAndLogic,
    onChange: function onChange(useAndLogic) {
      setAttributes({
        useAndLogic: useAndLogic
      });
    },
    help: "AND Logic limits results to only those that have ALL terms."
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FeedUseAndLogicControl);

/***/ }),

/***/ "./assets/src/js/partials/block-controls/feed-controls/feed-controls.js":
/*!******************************************************************************!*\
  !*** ./assets/src/js/partials/block-controls/feed-controls/feed-controls.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FeedCountControl": () => (/* reexport safe */ _FeedCountControl__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   "FeedHostControl": () => (/* reexport safe */ _FeedHostControl__WEBPACK_IMPORTED_MODULE_6__["default"]),
/* harmony export */   "FeedOffsetControl": () => (/* reexport safe */ _FeedOffsetControl__WEBPACK_IMPORTED_MODULE_4__["default"]),
/* harmony export */   "FeedPanel": () => (/* reexport safe */ _FeedPanel__WEBPACK_IMPORTED_MODULE_7__["default"]),
/* harmony export */   "FeedPanelAdvanced": () => (/* reexport safe */ _FeedPanelAdvanced__WEBPACK_IMPORTED_MODULE_8__["default"]),
/* harmony export */   "FeedPostTypeControl": () => (/* reexport safe */ _FeedPostTypeControl__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "FeedTaxonomyControl": () => (/* reexport safe */ _FeedTaxonomyControl__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   "FeedTermControl": () => (/* reexport safe */ _FeedTermControl__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   "FeedUseAndLogicControl": () => (/* reexport safe */ _FeedUseAndLogicControl__WEBPACK_IMPORTED_MODULE_5__["default"])
/* harmony export */ });
/* harmony import */ var _FeedPostTypeControl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FeedPostTypeControl */ "./assets/src/js/partials/block-controls/feed-controls/FeedPostTypeControl.js");
/* harmony import */ var _FeedTaxonomyControl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FeedTaxonomyControl */ "./assets/src/js/partials/block-controls/feed-controls/FeedTaxonomyControl.js");
/* harmony import */ var _FeedTermControl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FeedTermControl */ "./assets/src/js/partials/block-controls/feed-controls/FeedTermControl.js");
/* harmony import */ var _FeedCountControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FeedCountControl */ "./assets/src/js/partials/block-controls/feed-controls/FeedCountControl.js");
/* harmony import */ var _FeedOffsetControl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FeedOffsetControl */ "./assets/src/js/partials/block-controls/feed-controls/FeedOffsetControl.js");
/* harmony import */ var _FeedUseAndLogicControl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./FeedUseAndLogicControl */ "./assets/src/js/partials/block-controls/feed-controls/FeedUseAndLogicControl.js");
/* harmony import */ var _FeedHostControl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./FeedHostControl */ "./assets/src/js/partials/block-controls/feed-controls/FeedHostControl.js");
/* harmony import */ var _FeedPanel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./FeedPanel */ "./assets/src/js/partials/block-controls/feed-controls/FeedPanel.js");
/* harmony import */ var _FeedPanelAdvanced__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./FeedPanelAdvanced */ "./assets/src/js/partials/block-controls/feed-controls/FeedPanelAdvanced.js");










/***/ }),

/***/ "./assets/src/js/partials/block-controls/font-icon-picker-control/FontIconPickerControl.js":
/*!*************************************************************************************************!*\
  !*** ./assets/src/js/partials/block-controls/font-icon-picker-control/FontIconPickerControl.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


var _wp$components = wp.components,
  BaseControl = _wp$components.BaseControl,
  Panel = _wp$components.Panel,
  PanelBody = _wp$components.PanelBody,
  PanelRow = _wp$components.PanelRow,
  TextControl = _wp$components.TextControl,
  SelectControl = _wp$components.SelectControl;
var FontIconPickerControl = function FontIconPickerControl(props) {
  var icons = ["alarm", "alert-notification", "arrow-down-carrot", "arrow-down", "arrow-left-carrot", "arrow-left", "arrow-right-carrot", "arrow-right", "arrow-up-carrot", "arrow-up", "attachment", "basket", "bookmark", "calendar", "cart", "check", "collapse", "comment", "contrast", "credit-card", "cut", "discussion", "document", "download", "edit", "email", "expand", "favorite", "feedback", "filter", "flag", "gallery", "graph", "home", "info", "key", "light-bulb", "link", "location", "map-location", "map", "menu", "minus-circle", "minus", "mobile", "monitor", "more-vertical", "more", "next", "pause", "phone", "photos", "play-circle", "play", "plus", "pluse-circle", "previous", "print", "profile-circle", "profile", "rate", "refresh", "save", "search", "secure", "send", "settings", "share", "social-facebook", "social-instagram", "social-linkedin", "social-twitter", "social-youtube", "stop-circle", "stop", "tag", "tent", "time", "trash", "upload", "video-slideshow", "warning-caution", "warning-stop", "x-close", "zoom-in", "zoom-out"];
  var _useState = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isVisible = _useState2[0],
    setIsVisible = _useState2[1];
  var toggleVisible = function toggleVisible() {
    setIsVisible(function (state) {
      return !state;
    });
  };
  function selectIcon(icon) {
    toggleVisible();
    props.onChange(icon);
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "wsu-gutenberg-font-icon-picker"
  }, /*#__PURE__*/React.createElement(BaseControl, {
    className: "wsu-settings__base-control",
    help: props.help
  }, props.label && /*#__PURE__*/React.createElement(BaseControl.VisualLabel, {
    className: "wsu-settings__label"
  }, props.label), props.value ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
    className: "wsu-gutenberg-font-icon-picker__selected-icon",
    onClick: toggleVisible
  }, /*#__PURE__*/React.createElement("i", {
    className: "wsu-icon wsu-i-".concat(props.value)
  })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
    onClick: function onClick() {
      return props.onChange("");
    }
  }, "Remove")) : /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
    className: "wsu-gutenberg-font-icon-picker__select-icon-button",
    onClick: toggleVisible
  }, "Select Icon"), isVisible && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Popover, null, /*#__PURE__*/React.createElement("div", {
    className: "wsu-gutenberg-font-icon-picker__icon-list"
  }, icons.map(function (i) {
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      title: i,
      className: "wsu-gutenberg-font-icon-picker__icon-button",
      onClick: function onClick() {
        return selectIcon(i);
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "wsu-icon wsu-i-".concat(i)
    }));
  })))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FontIconPickerControl);

/***/ }),

/***/ "./assets/src/js/partials/block-controls/heading-tag-control.js/HeadingTagControl.js":
/*!*******************************************************************************************!*\
  !*** ./assets/src/js/partials/block-controls/heading-tag-control.js/HeadingTagControl.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);

var HeadingTagControl = function HeadingTagControl(props) {
  var defaultTags = ['h2', 'h3', 'h4', 'h5', 'h6'];
  var attributes = props.attributes,
    setAttributes = props.setAttributes,
    _props$allowedTags = props.allowedTags,
    allowedTags = _props$allowedTags === void 0 ? defaultTags : _props$allowedTags;
  var isActive = function isActive(value) {
    return value === attributes.headingTag ? true : false;
  };
  var setTag = function setTag(value) {
    setAttributes({
      headingTag: value
    });
  };
  return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.BaseControl, {
    className: "wsu-heading-tag-block-control",
    id: "heading-tag",
    label: "Heading Level",
    help: ""
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.ButtonGroup, null, allowedTags.includes('h1') && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
    onClick: function onClick() {
      return setTag('h1');
    },
    isPressed: isActive('h1'),
    className: "wsu-heading-tag-block-control__button",
    variant: "primary",
    "aria-label": "h1"
  }, /*#__PURE__*/React.createElement("svg", {
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M13.81,6.75v10.5h-2v-4.5H6.43v4.5H4.49V6.75H6.43v4.34h5.43V6.75Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M19.51,6.75v10.5h-2V8.39H15.34V6.75Z"
  }))), allowedTags.includes('h2') && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
    onClick: function onClick() {
      return setTag('h2');
    },
    isPressed: isActive('h2'),
    className: "wsu-heading-tag-block-control__button",
    variant: "primary",
    "aria-label": "h2"
  }, /*#__PURE__*/React.createElement("svg", {
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M11.83,6.83V17.32H9.88v-4.5H4.45v4.5H2.5V6.83h2v4.33H9.88V6.83Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M21.5,15.68v1.64H13.76V16l4.17-4c1-1,1.2-1.59,1.2-2.17,0-1-.66-1.52-1.95-1.52a3,3,0,0,0-2.46,1.1L13.36,8.42a4.83,4.83,0,0,1,4-1.74c2.28,0,3.75,1.15,3.75,3,0,1-.29,2-1.74,3.32l-2.81,2.67Z"
  }))), allowedTags.includes('h3') && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
    onClick: function onClick() {
      return setTag('h3');
    },
    isPressed: isActive('h3'),
    className: "wsu-heading-tag-block-control__button",
    variant: "primary",
    "aria-label": "h3"
  }, /*#__PURE__*/React.createElement("svg", {
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M11.9,6.68V17.17H10v-4.5H4.52v4.5H2.57V6.68H4.52V11H10V6.68Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M21.43,14c0,1.77-1.34,3.3-4.16,3.3a6.61,6.61,0,0,1-3.94-1.21l.84-1.52a4.84,4.84,0,0,0,3.07,1c1.4,0,2.22-.61,2.22-1.59s-.69-1.56-2.28-1.56h-1V11.15l2.39-2.84H13.84V6.68H21V8l-2.55,3C20.42,11.27,21.43,12.45,21.43,14Z"
  }))), allowedTags.includes('h4') && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
    onClick: function onClick() {
      return setTag('h4');
    },
    isPressed: isActive('h4'),
    className: "wsu-heading-tag-block-control__button",
    variant: "primary",
    "aria-label": "h4"
  }, /*#__PURE__*/React.createElement("svg", {
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M11,6.75v10.5H9v-4.5H3.57v4.5H1.62V6.75H3.57v4.34H9V6.75Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M22.38,14.86H20.52v2.39H18.63V14.86H12.87V13.51L18,6.75h2.09l-4.88,6.47h3.44V11.1h1.83v2.12h1.86Z"
  }))), allowedTags.includes('h5') && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
    onClick: function onClick() {
      return setTag('h5');
    },
    isPressed: isActive('h5'),
    className: "wsu-heading-tag-block-control__button",
    variant: "primary",
    "aria-label": "h5"
  }, /*#__PURE__*/React.createElement("svg", {
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M11.81,6.68V17.17h-2v-4.5H4.43v4.5H2.48V6.68H4.43V11H9.86V6.68Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M21.52,14c0,1.84-1.34,3.37-4.16,3.37a6.59,6.59,0,0,1-3.94-1.21l.82-1.52a4.94,4.94,0,0,0,3.09,1c1.4,0,2.22-.61,2.22-1.6s-.64-1.64-2.82-1.64H14.2l.54-5.71H20.9V8.31H16.39l-.23,2.43h1C20.27,10.74,21.52,12.09,21.52,14Z"
  }))), allowedTags.includes('h6') && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
    onClick: function onClick() {
      return setTag('h6');
    },
    isPressed: isActive('h6'),
    className: "wsu-heading-tag-block-control__button",
    variant: "primary",
    "aria-label": "h6"
  }, /*#__PURE__*/React.createElement("svg", {
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M11.44,6.75v10.5H9.49v-4.5H4.06v4.5H2.11V6.75H4.06v4.34H9.49V6.75Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M21.89,14c0,2.08-1.69,3.4-3.84,3.4-2.86,0-4.54-1.85-4.54-5.22,0-3.6,2.1-5.58,5.14-5.58a5.25,5.25,0,0,1,2.76.68l-.72,1.47a3.52,3.52,0,0,0-2-.51c-2,0-3.23,1.23-3.23,3.61v0a3.58,3.58,0,0,1,2.81-1.1C20.35,10.77,21.89,12,21.89,14ZM20,14.08c0-1.09-.82-1.78-2.1-1.78a1.91,1.91,0,0,0-2.13,1.8c0,1,.78,1.77,2.18,1.77A1.82,1.82,0,0,0,20,14.08Z"
  }))), allowedTags.includes('div') && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
    onClick: function onClick() {
      return setTag('div');
    },
    isPressed: isActive('div'),
    className: "wsu-heading-tag-block-control__button",
    variant: "primary",
    "aria-label": "div"
  }, /*#__PURE__*/React.createElement("svg", {
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M11.44,6.75v10.5H9.49v-4.5H4.06v4.5H2.11V6.75H4.06v4.34H9.49V6.75Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M21.89,14c0,2.08-1.69,3.4-3.84,3.4-2.86,0-4.54-1.85-4.54-5.22,0-3.6,2.1-5.58,5.14-5.58a5.25,5.25,0,0,1,2.76.68l-.72,1.47a3.52,3.52,0,0,0-2-.51c-2,0-3.23,1.23-3.23,3.61v0a3.58,3.58,0,0,1,2.81-1.1C20.35,10.77,21.89,12,21.89,14ZM20,14.08c0-1.09-.82-1.78-2.1-1.78a1.91,1.91,0,0,0-2.13,1.8c0,1,.78,1.77,2.18,1.77A1.82,1.82,0,0,0,20,14.08Z"
  })))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeadingTagControl);

/***/ }),

/***/ "./assets/src/js/partials/block-controls/image-frame-control/ImageFrameControl.js":
/*!****************************************************************************************!*\
  !*** ./assets/src/js/partials/block-controls/image-frame-control/ImageFrameControl.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _wp$editor = wp.editor,
  MediaPlaceholder = _wp$editor.MediaPlaceholder,
  MediaUpload = _wp$editor.MediaUpload;
var ImageFrameControl = function ImageFrameControl(props) {
  var attributes = props.attributes,
    setAttributes = props.setAttributes,
    _props$controlTitle = props.controlTitle,
    controlTitle = _props$controlTitle === void 0 ? 'Add an Image...' : _props$controlTitle,
    _props$imageIdKey = props.imageIdKey,
    imageIdKey = _props$imageIdKey === void 0 ? 'imageId' : _props$imageIdKey,
    _props$imageSrcKey = props.imageSrcKey,
    imageSrcKey = _props$imageSrcKey === void 0 ? 'imageSrc' : _props$imageSrcKey,
    _props$imageAltKey = props.imageAltKey,
    imageAltKey = _props$imageAltKey === void 0 ? 'imageAlt' : _props$imageAltKey,
    _props$imageRatioKey = props.imageRatioKey,
    imageRatioKey = _props$imageRatioKey === void 0 ? 'imageRatio' : _props$imageRatioKey;
  var setImage = function setImage(media) {
    if (_typeof(media) === 'object' && 'id' in media) {
      var _setAttributes;
      var _media$alt = media.alt,
        alt = _media$alt === void 0 ? '' : _media$alt,
        id = media.id,
        url = media.url;
      console.log(url);
      setAttributes((_setAttributes = {}, _defineProperty(_setAttributes, imageSrcKey, url), _defineProperty(_setAttributes, imageIdKey, id), _defineProperty(_setAttributes, imageAltKey, alt), _setAttributes));
    }
  };
  var blockClasses = 'wsu-image-frame wsu-image-frame-control';
  blockClasses += attributes.hasOwnProperty(imageRatioKey) && attributes[imageRatioKey] ? ' wsu-image--ratio-' + attributes[imageRatioKey] : '';
  if (attributes.imageSrc) {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: blockClasses
    }, /*#__PURE__*/React.createElement("img", {
      src: attributes.imageSrc
    }), /*#__PURE__*/React.createElement("button", {
      className: "wsu-image-frame-control__button",
      onClick: function onClick() {
        var _setAttributes2;
        return setAttributes((_setAttributes2 = {}, _defineProperty(_setAttributes2, imageSrcKey, ''), _defineProperty(_setAttributes2, imageIdKey, ''), _defineProperty(_setAttributes2, imageAltKey, ''), _setAttributes2));
      }
    }, "Remove Image")));
  } else {
    return /*#__PURE__*/React.createElement("div", {
      className: "wsu-image-frame wsu-image-frame-control"
    }, /*#__PURE__*/React.createElement(MediaPlaceholder, {
      icon: "format-image",
      labels: {
        title: controlTitle
      },
      className: "block-image",
      onSelect: function onSelect(value) {
        setImage(value);
      },
      accept: "image/*",
      allowedTypes: ['image']
    }));
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ImageFrameControl);

/***/ }),

/***/ "./assets/src/js/partials/block-controls/multiple-image-picker/MultipleImagePicker.js":
/*!********************************************************************************************!*\
  !*** ./assets/src/js/partials/block-controls/multiple-image-picker/MultipleImagePicker.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var MultipleImagePicker = function MultipleImagePicker(props) {
  var _props$label = props.label,
    label = _props$label === void 0 ? "Select Media" : _props$label,
    _props$help = props.help,
    help = _props$help === void 0 ? "" : _props$help,
    onChange = props.onChange,
    _props$value = props.value,
    value = _props$value === void 0 ? [] : _props$value;
  var _useState = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    editingImage = _useState2[0],
    setEditingImage = _useState2[1];
  var _useState3 = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    editingElement = _useState4[0],
    setEditingElement = _useState4[1];
  var _useState5 = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    skipNextPopover = _useState6[0],
    setSkipNextPopover = _useState6[1];
  function updateSelectedMedia(media) {
    var images = mapToImageObjects(media);
    setEditingImage(null);
    onChange(images);
  }
  function mapToImageObjects(media) {
    return media.map(function (item) {
      var currentImage = value.find(function (image) {
        return image.id === item.id;
      });
      return {
        id: item.id,
        url: item.url,
        thumbnail: item.sizes.thumbnail.url,
        focalPoint: (currentImage === null || currentImage === void 0 ? void 0 : currentImage.focalPoint) || {
          x: 0.5,
          y: 0.25
        }
      };
    });
  }
  function updateFocalPoint(image, focalPoint) {
    var images = value.map(function (item) {
      if (item.id === image.id) {
        return _objectSpread(_objectSpread({}, item), {}, {
          focalPoint: focalPoint
        });
      }
      return item;
    });
    setEditingImage(images.find(function (item) {
      return item.id === image.id;
    }));
    onChange(images);
  }
  function openEditPopover(e, item) {
    if (!skipNextPopover) {
      setEditingElement(e.currentTarget);
      setEditingImage(item);
    }
    setSkipNextPopover(false);
  }
  function closeEditPopover(e) {
    if (e) {
      setSkipNextPopover(e.relatedTarget === editingElement);
    }
    setEditingElement(null);
    setEditingImage(null);
  }
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.BaseControl, {
    label: label,
    help: help,
    className: "wsu-gutenberg-mip"
  }, editingImage && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Popover, {
    headerTitle: "Edit Focal Point",
    focusOnMount: "container",
    position: "middle left",
    onFocusOutside: closeEditPopover,
    onClose: closeEditPopover,
    getAnchorRect: function getAnchorRect() {
      return (editingElement === null || editingElement === void 0 ? void 0 : editingElement.getBoundingClientRect()) || null;
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wsu-gutenberg-mip__focal-point-picker-container"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.FocalPointPicker, {
    url: editingImage.url,
    value: editingImage.focalPoint,
    onChange: function onChange(focalPoint) {
      return updateFocalPoint(editingImage, focalPoint);
    }
  }))), /*#__PURE__*/React.createElement("div", {
    className: "wsu-gutenberg-mip__images"
  }, value.map(function (item) {
    return /*#__PURE__*/React.createElement("div", {
      key: item.id,
      className: "wsu-gutenberg-mip__thumbnail-container"
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
      className: "wsu-gutenberg-mip__select-button".concat((editingImage === null || editingImage === void 0 ? void 0 : editingImage.id) === item.id ? " is-selected" : ""),
      onClick: function onClick(e) {
        return openEditPopover(e, item);
      }
    }, /*#__PURE__*/React.createElement("img", {
      className: "wsu-gutenberg-mip__thumbnail",
      src: item.thumbnail
    })));
  })), /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUploadCheck, null, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
    onSelect: function onSelect(media) {
      return updateSelectedMedia(media);
    },
    allowedTypes: ["image"],
    multiple: true,
    gallery: true,
    value: value.map(function (item) {
      return item.id;
    }),
    render: function render(_ref) {
      var open = _ref.open;
      return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.BaseControl, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
        isPrimary: true,
        onClick: open,
        className: "wsu-gutenberg-mip__open-button"
      }, "Select Images"));
    }
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MultipleImagePicker);

/***/ }),

/***/ "./assets/src/js/partials/block-controls/post-picker/PostPicker.js":
/*!*************************************************************************!*\
  !*** ./assets/src/js/partials/block-controls/post-picker/PostPicker.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/html-entities */ "@wordpress/html-entities");
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _text_control__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./text-control */ "./assets/src/js/partials/block-controls/post-picker/text-control.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var CSSNAMESPACE = 'wsu-gutenberg-post-picker';
var PostPicker = function PostPicker(props) {
  var attributes = props.attributes,
    onChange = props.onChange,
    _props$label = props.label,
    label = _props$label === void 0 ? '' : _props$label,
    _props$postTypes = props.postTypes,
    postTypes = _props$postTypes === void 0 ? ['post', 'page'] : _props$postTypes,
    _props$placeholder = props.placeholder,
    placeholder = _props$placeholder === void 0 ? 'Search Content...' : _props$placeholder;
  var searchInputRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);
  var isMounted = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useRef)(false);
  var _useState = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(''),
    _useState2 = _slicedToArray(_useState, 2),
    searchString = _useState2[0],
    setSearchString = _useState2[1];
  var _useState3 = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    searchResults = _useState4[0],
    setSearchResults = _useState4[1];
  var _useState5 = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    isLoading = _useState6[0],
    setIsLoading = _useState6[1];
  var _useState7 = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)([]),
    _useState8 = _slicedToArray(_useState7, 2),
    selectedItems = _useState8[0],
    setSelectedItems = _useState8[1];
  var _useState9 = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)([]),
    _useState10 = _slicedToArray(_useState9, 2),
    latestPosts = _useState10[0],
    setLatestPosts = _useState10[1];
  var _useState11 = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)({}),
    _useState12 = _slicedToArray(_useState11, 2),
    postTypeData = _useState12[0],
    setPostTypeData = _useState12[1];
  var debouncedSetSearchString = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__.useDebounce)(function (value) {
    return setSearchString(value);
  }, 250);
  var handleItemSelection = function handleItemSelection(post) {
    if (attributes.postIn.split(',').includes(post.id.toString())) {
      return;
    }
    setSelectedItems([].concat(_toConsumableArray(selectedItems), [post]));
    onChange([].concat(_toConsumableArray(attributes.postIn.split(',')), [post.id.toString()]).join(','));
    setSearchResults([]);
    setSearchString('');
    searchInputRef.current.value = '';
  };
  var handleItemRemove = function handleItemRemove(post) {
    setSelectedItems(selectedItems.filter(function (item) {
      return item.id !== post.id;
    }));
    onChange(attributes.postIn.split(',').filter(function (id) {
      return id !== post.id.toString();
    }).join(','));
  };
  var resetSearch = function resetSearch() {
    setSearchResults([]);
    setIsLoading(false);
  };
  var getSelectedItems = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var params, response;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (!(attributes.postIn.split(',').length === 0)) {
              _context.next = 2;
              break;
            }
            return _context.abrupt("return");
          case 2:
            params = "ids=".concat(attributes.postIn);
            _context.next = 5;
            return _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_4___default()({
              path: '/cahnrswsu-gutenberg/v1/get-posts-by-id?' + params,
              method: 'GET'
            });
          case 5:
            response = _context.sent;
            setSelectedItems(JSON.parse(response));
          case 7:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function getSelectedItems() {
      return _ref.apply(this, arguments);
    };
  }();
  var getLatestPosts = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var params, response;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            setIsLoading(true);
            params = "count=8&post_types=".concat(postTypes);
            _context2.next = 4;
            return _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_4___default()({
              path: '/cahnrswsu-gutenberg/v1/get-latest-posts?' + params,
              method: 'GET'
            });
          case 4:
            response = _context2.sent;
            setLatestPosts(JSON.parse(response));
            setIsLoading(false);
          case 7:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function getLatestPosts() {
      return _ref2.apply(this, arguments);
    };
  }();
  var getPostTypeData = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      var response;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_4___default()({
              path: '/wp/v2/types',
              method: 'GET'
            });
          case 2:
            response = _context3.sent;
            setPostTypeData(response);
          case 4:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }));
    return function getPostTypeData() {
      return _ref3.apply(this, arguments);
    };
  }();
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    if (isMounted.current) {
      (function () {
        var _handleSearch = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
          var params, response;
          return _regeneratorRuntime().wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
              case 0:
                if (!lodash.isEmpty(searchString)) {
                  _context4.next = 3;
                  break;
                }
                resetSearch();
                return _context4.abrupt("return");
              case 3:
                setIsLoading(true);
                params = "search_term=".concat(searchString, "&post_types=").concat(postTypes);
                _context4.next = 7;
                return _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_4___default()({
                  path: '/cahnrswsu-gutenberg/v1/search-posts?' + params,
                  method: 'GET'
                });
              case 7:
                response = _context4.sent;
                setSearchResults(JSON.parse(response));
                setIsLoading(false);
              case 10:
              case "end":
                return _context4.stop();
            }
          }, _callee4);
        }));
        function handleSearch() {
          return _handleSearch.apply(this, arguments);
        }
        return handleSearch;
      })()();
    }
  }, [searchString]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    getPostTypeData();
    getSelectedItems();
    getLatestPosts();
    isMounted.current = true;
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: CSSNAMESPACE
  }, selectedItems.length > 0 ? /*#__PURE__*/React.createElement("ul", null, selectedItems.map(function (post) {
    return /*#__PURE__*/React.createElement("li", {
      key: post.id
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
      className: "".concat(CSSNAMESPACE, "__remove-btn"),
      icon: "no-alt",
      onClick: function onClick() {
        return handleItemRemove(post);
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "".concat(CSSNAMESPACE, "__remove-btn-text")
    }, post.title)));
  })) : null, /*#__PURE__*/React.createElement(_text_control__WEBPACK_IMPORTED_MODULE_6__["default"], {
    ref: searchInputRef,
    placeholder: placeholder,
    label: label,
    onChange: function onChange(value) {
      return debouncedSetSearchString(value);
    }
  }), isLoading && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Spinner, null), searchString.length ? !isLoading && !searchResults.length ? /*#__PURE__*/React.createElement("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('No Items found')) : !isLoading && /*#__PURE__*/React.createElement(SuggestionList, {
    attributes: attributes,
    title: "Search Results",
    postTypeData: postTypeData,
    suggestions: searchResults,
    searchTerm: searchString,
    onItemSelect: handleItemSelection
  }) : latestPosts.length && /*#__PURE__*/React.createElement(SuggestionList, {
    attributes: attributes,
    title: "Recent Content",
    postTypeData: postTypeData,
    suggestions: latestPosts,
    searchTerm: searchString,
    onItemSelect: handleItemSelection
  }) || '');
};
function SuggestionList(props) {
  var attributes = props.attributes,
    title = props.title,
    postTypeData = props.postTypeData,
    suggestions = props.suggestions,
    onItemSelect = props.onItemSelect,
    _props$searchTerm = props.searchTerm,
    searchTerm = _props$searchTerm === void 0 ? '' : _props$searchTerm;
  return /*#__PURE__*/React.createElement("div", {
    className: "".concat(CSSNAMESPACE, "__suggestion-list-container")
  }, /*#__PURE__*/React.createElement("h3", {
    className: "".concat(CSSNAMESPACE, "__suggestion-list-title")
  }, title), /*#__PURE__*/React.createElement("ul", {
    className: "".concat(CSSNAMESPACE, "__suggestion-list")
  }, suggestions.map(function (post, index) {
    var _postTypeData$post$ty;
    return /*#__PURE__*/React.createElement("li", {
      key: post.id,
      className: "".concat(CSSNAMESPACE, "__suggestion-list-item")
    }, /*#__PURE__*/React.createElement(Suggestion, {
      onClick: function onClick() {
        return onItemSelect(post);
      },
      searchTerm: searchTerm,
      suggestion: post,
      postTypeLabel: (_postTypeData$post$ty = postTypeData[post.type]) === null || _postTypeData$post$ty === void 0 ? void 0 : _postTypeData$post$ty.name,
      isSelected: attributes.postIn.split(',').includes(post.id.toString())
    }));
  })));
}
function Suggestion(props) {
  var suggestion = props.suggestion,
    onClick = props.onClick,
    _props$searchTerm2 = props.searchTerm,
    searchTerm = _props$searchTerm2 === void 0 ? '' : _props$searchTerm2,
    _props$isSelected = props.isSelected,
    isSelected = _props$isSelected === void 0 ? false : _props$isSelected,
    _props$id = props.id,
    id = _props$id === void 0 ? '' : _props$id,
    _props$postTypeLabel = props.postTypeLabel,
    postTypeLabel = _props$postTypeLabel === void 0 ? '' : _props$postTypeLabel;
  return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    id: id,
    onClick: onClick,
    className: "".concat(CSSNAMESPACE, "__suggestion ").concat(isSelected && 'is-selected'),
    title: (0,_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_5__.decodeEntities)(suggestion.title),
    disabled: isSelected
  }, /*#__PURE__*/React.createElement("span", {
    className: "".concat(CSSNAMESPACE, "__suggestion-title")
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextHighlight, {
    text: (0,_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_5__.decodeEntities)(suggestion.title),
    highlight: searchTerm
  })), /*#__PURE__*/React.createElement("span", {
    className: "".concat(CSSNAMESPACE, "__suggestion-meta-container")
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": true,
    className: "".concat(CSSNAMESPACE, "__suggestion-meta")
  }, suggestion.date), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": true,
    className: "".concat(CSSNAMESPACE, "__suggestion-meta")
  }, postTypeLabel || suggestion.type)));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PostPicker);

/***/ }),

/***/ "./assets/src/js/partials/block-controls/post-picker/text-control.js":
/*!***************************************************************************!*\
  !*** ./assets/src/js/partials/block-controls/post-picker/text-control.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
var _excluded = ["label", "hideLabelFromVision", "value", "help", "className", "onChange", "type"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */


/**
 * @typedef OwnProps
 * @property {string}                  label                 Label for the control.
 * @property {boolean}                 [hideLabelFromVision] Whether to accessibly hide the label.
 * @property {string}                  value                 Value of the input.
 * @property {string}                  [help]                Optional help text for the control.
 * @property {string}                  [className]           Classname passed to BaseControl wrapper
 * @property {(value: string) => void} onChange              Handle changes.
 * @property {string}                  [type='text']         Type of the input.
 */

/** @typedef {OwnProps & import('react').ComponentProps<'input'>} Props */

/**
 *
 * @param {Props}                                 props Props
 * @param {import('react').Ref<HTMLInputElement>} [ref]
 */
function TextControl(_ref, ref) {
  var label = _ref.label,
    hideLabelFromVision = _ref.hideLabelFromVision,
    value = _ref.value,
    help = _ref.help,
    className = _ref.className,
    onChange = _ref.onChange,
    _ref$type = _ref.type,
    type = _ref$type === void 0 ? 'text' : _ref$type,
    props = _objectWithoutProperties(_ref, _excluded);
  var instanceId = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_0__.useInstanceId)(TextControl);
  var id = "inspector-text-control-".concat(instanceId);
  var onChangeValue = function onChangeValue( /** @type {import('react').ChangeEvent<HTMLInputElement>} */
  event) {
    return onChange(event.target.value);
  };
  return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl, {
    label: label,
    hideLabelFromVision: hideLabelFromVision,
    id: id,
    help: help,
    className: className
  }, /*#__PURE__*/React.createElement("input", _extends({
    className: "components-text-control__input",
    type: type,
    id: id,
    value: value,
    onChange: onChangeValue,
    "aria-describedby": !!help ? id + '__help' : undefined,
    ref: ref
  }, props)));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(TextControl));

/***/ }),

/***/ "./assets/src/js/partials/block-controls/required-alert-control/RequiredAlertControl.js":
/*!**********************************************************************************************!*\
  !*** ./assets/src/js/partials/block-controls/required-alert-control/RequiredAlertControl.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var RequiredAlertControl = function RequiredAlertControl(props) {
  var attributes = props.attributes,
    onChange = props.onChange;
  return /*#__PURE__*/React.createElement("div", {
    "class": "wsu-gutenberg-alert-control"
  }, props.children);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RequiredAlertControl);

/***/ }),

/***/ "./assets/src/js/partials/block-controls/reset-control/ResetControl.js":
/*!*****************************************************************************!*\
  !*** ./assets/src/js/partials/block-controls/reset-control/ResetControl.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../block-utilities/blockUtilities */ "./assets/src/js/partials/block-utilities/blockUtilities.js");


var ResetControl = function ResetControl(props) {
  var attributes = props.attributes,
    setAttributes = props.setAttributes,
    prefix = props.prefix,
    _props$label = props.label,
    label = _props$label === void 0 ? 'Reset' : _props$label;
  return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
    className: "wsu-block-control-reset",
    onClick: function onClick() {
      return (0,_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_1__.setBlockClassName)(attributes, setAttributes, prefix, '');
    }
  }, label);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ResetControl);

/***/ }),

/***/ "./assets/src/js/partials/block-controls/slide-selector/slideSelector.js":
/*!*******************************************************************************!*\
  !*** ./assets/src/js/partials/block-controls/slide-selector/slideSelector.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../block-utilities/blockUtilities */ "./assets/src/js/partials/block-utilities/blockUtilities.js");
var RangeControl = wp.components.RangeControl;

var SlideSelector = function SlideSelector(props) {
  var defaultSizes = ['none', 'sxxsmall', 'xxsmall', 'xsmall', 'small', 'medium', 'xmedium', 'xxmedium', 'large', 'xlarge', 'xxlarge', 'sxxlarge', 'hero', 'xhero', 'xxhero'];
  var attributes = props.attributes,
    setAttributes = props.setAttributes,
    label = props.label,
    _props$sizes = props.sizes,
    sizes = _props$sizes === void 0 ? [] : _props$sizes,
    classPrefix = props.classPrefix,
    _props$help = props.help,
    help = _props$help === void 0 ? '' : _props$help,
    _props$defaultSize = props.defaultSize,
    defaultSize = _props$defaultSize === void 0 ? '' : _props$defaultSize;
  var setSlideSelectorValue = function setSlideSelectorValue(value) {
    var slideValue = defaultSize === slideSizes[value] ? '' : slideSizes[value];
    (0,_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_0__.setBlockClassName)(attributes, setAttributes, classPrefix, slideValue);
  };
  var getSlideSelectorValue = function getSlideSelectorValue(value) {
    var slideValue = (0,_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_0__.getBlockClassNameValue)(attributes, classPrefix, '');
    return slideValue ? slideSizes.indexOf(slideValue) : slideSizes.indexOf(defaultSize);
  };
  var getSelectedLabel = function getSelectedLabel(slideValue) {
    return slideSizes[slideValue];
  };
  var slideSizes = sizes.length ? sizes : defaultSizes;
  var selectedSlideValue = getSlideSelectorValue();
  var selectedSlideLabel = getSelectedLabel(selectedSlideValue);
  return /*#__PURE__*/React.createElement(RangeControl, {
    label: label + ': ' + selectedSlideLabel,
    help: help,
    value: selectedSlideValue,
    onChange: function onChange(slideValue) {
      return setSlideSelectorValue(slideValue);
    },
    withInputField: false,
    renderTooltipContent: function renderTooltipContent(value) {
      return selectedSlideLabel;
    },
    min: 0,
    max: slideSizes.length - 1
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SlideSelector);

/***/ }),

/***/ "./assets/src/js/partials/block-controls/spacing-class-name-selector/spacing-class-name-selector.js":
/*!**********************************************************************************************************!*\
  !*** ./assets/src/js/partials/block-controls/spacing-class-name-selector/spacing-class-name-selector.js ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);


// TODO: 
// - Use desired names for spacing options

/*
 @example 
<SpacingClassNameSelector
    title="Spacing"
    spaceSettings={[
        {
            label: 'Outside Spacing (Margin)',
            properties: [
                {
                    label: 'Top',
                    prefix: 'wsu-spacing-before--',
                    ignoreOptions: ['none', 'xmedium', 'xxmedium'],									
                    default: 'small',
                },
                {
                    label: 'Bottom',
                    prefix: 'wsu-spacing-after--',
                    default: 'none',
                }
            ]
        },
        {
            label: 'Inside Spacing (Padding)',
            properties: [
                {
                    label: 'Top',
                    prefix: 'wsu-spacing-top--',
                    default: 'medium',
                },
                {
                    label: 'Bottom',
                    prefix: 'wsu-spacing-bottom--',
                    default: 'large',
                }
            ]
        }
    ]}
    {...props}>					
</SpacingClassNameSelector>
*/

var CSSNAMESPACE = 'wsu-gutenberg-spacing';
var ALLOPTIONS = [{
  key: 'default',
  name: 'default'
}, {
  key: 'none',
  name: 'none'
}, {
  key: 'sxxsmall',
  name: 'sxxsmall'
}, {
  key: 'xxsmall',
  name: 'xxsmall'
}, {
  key: 'xsmall',
  name: 'xsmall'
}, {
  key: 'small',
  name: 'small'
}, {
  key: 'medium',
  name: 'medium'
}, {
  key: 'xmedium',
  name: 'xmedium'
}, {
  key: 'xxmedium',
  name: 'xxmedium'
}, {
  key: 'large',
  name: 'large'
}, {
  key: 'xlarge',
  name: 'xlarge'
}, {
  key: 'xxlarge',
  name: 'xxlarge'
}, {
  key: 'hero',
  name: 'hero'
}, {
  key: 'xhero',
  name: 'xhero'
}, {
  key: 'xxhero',
  name: 'xxhero'
}];
var SpacingClassNameSelector = function SpacingClassNameSelector(props) {
  var _props$title = props.title,
    title = _props$title === void 0 ? 'Space Settings' : _props$title,
    attributes = props.attributes,
    setAttributes = props.setAttributes,
    spaceSettings = props.spaceSettings;
  function getOptionByKey(key) {
    return lodash.find(ALLOPTIONS, function (o) {
      return o.key === key;
    });
  }
  function getOptionObjectByClassName(prefix, className) {
    if (!className) {
      return;
    }
    var optionKey = className.replace(prefix, '');
    return getOptionByKey(optionKey);
  }
  var getSelectedValueByPrefix = function getSelectedValueByPrefix(prefix) {
    if (!attributes.className) {
      return;
    }
    var appliedClasses = attributes.className.split(' ');
    var selectedOptionClassName = lodash.find(appliedClasses, function (c) {
      return c.startsWith(prefix);
    });
    return getOptionObjectByClassName(prefix, selectedOptionClassName);
  };
  var getValueForProperty = function getValueForProperty(property) {
    return getSelectedValueByPrefix(property.prefix) || getOptionByKey(property["default"]) || '';
  };
  var updateSelectedOptions = function updateSelectedOptions(property, control) {
    var _attributes$className, _attributes$className2;
    var optionClass = '';

    // only apply className if it is not equal to the current default state
    if (control && !(control.selectedItem.key === property["default"])) {
      optionClass = property.prefix + control.selectedItem.key;
    }
    var appliedClasses = (_attributes$className = (_attributes$className2 = attributes.className) === null || _attributes$className2 === void 0 ? void 0 : _attributes$className2.split(' ')) !== null && _attributes$className !== void 0 ? _attributes$className : [];
    var newClasses = lodash.filter(appliedClasses, function (c) {
      return !c.startsWith(property.prefix);
    }).concat(optionClass);
    var newClassName = newClasses.map(function (c) {
      return c.trim();
    }).filter(function (c) {
      return c;
    }).join(' ');
    setAttributes({
      className: newClassName
    });
  };
  var resetToDefault = function resetToDefault(property) {
    updateSelectedOptions(property, null);
  };
  return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.PanelBody, {
    title: title,
    initialOpen: false,
    className: "".concat(CSSNAMESPACE)
  }, spaceSettings.map(function (spaceSetting) {
    return /*#__PURE__*/React.createElement("div", {
      key: spaceSetting.label,
      className: "".concat(CSSNAMESPACE, "__setting")
    }, /*#__PURE__*/React.createElement("label", {
      className: "".concat(CSSNAMESPACE, "__setting-label")
    }, spaceSetting.label), /*#__PURE__*/React.createElement("div", {
      className: "".concat(CSSNAMESPACE, "__setting-properties")
    }, spaceSetting.properties.map(function (property) {
      var options = ALLOPTIONS.filter(function (o) {
        var _property$ignoreOptio;
        return !((_property$ignoreOptio = property.ignoreOptions) !== null && _property$ignoreOptio !== void 0 && _property$ignoreOptio.includes(o.key));
      });
      return /*#__PURE__*/React.createElement("div", {
        key: property.label
      }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.CustomSelectControl, {
        label: property.label,
        options: options,
        onChange: function onChange(control) {
          updateSelectedOptions(property, control);
        },
        value: getValueForProperty(property)
      }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
        className: "".concat(CSSNAMESPACE, "__reset-btn"),
        isSmall: true,
        onClick: function onClick() {
          return resetToDefault(property);
        }
      }, "Reset to Default"));
    })));
  }), props.children);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SpacingClassNameSelector);

/***/ }),

/***/ "./assets/src/js/partials/block-controls/svg-button-group-control/SvgButtonGroupControl.js":
/*!*************************************************************************************************!*\
  !*** ./assets/src/js/partials/block-controls/svg-button-group-control/SvgButtonGroupControl.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgButtonOption = function SvgButtonOption(props) {
  return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
    onClick: function onClick() {
      return props.onClick(props.value);
    },
    isPressed: props.isActive(props.value),
    className: "",
    variant: "primary",
    "aria-label": props.value
  }, props.svg);
};
var SvgButtonGroupControl = function SvgButtonGroupControl(props) {
  var attributes = props.attributes,
    setAttributes = props.setAttributes,
    buttonOptions = props.buttonOptions,
    currentValue = props.currentValue,
    label = props.label;
  return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.BaseControl, {
    className: "wsu-gutenberg-svg-button-group-control",
    id: "svg-button-group-control",
    label: label,
    help: ""
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.ButtonGroup, null, buttonOptions.map(function (buttonOption) {
    return /*#__PURE__*/React.createElement(SvgButtonOption, _extends({}, props, buttonOption));
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SvgButtonGroupControl);

/***/ }),

/***/ "./assets/src/js/partials/block-controls/term-selector-control/TermSelectorControl.js":
/*!********************************************************************************************!*\
  !*** ./assets/src/js/partials/block-controls/term-selector-control/TermSelectorControl.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


var _wp$components = wp.components,
  ComboboxControl = _wp$components.ComboboxControl,
  Spinner = _wp$components.Spinner;
var abortController = null;
var TermSelectorControl = function TermSelectorControl(props) {
  var _useState = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isLoading = _useState2[0],
    setIsLoading = _useState2[1];
  var _useState3 = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(props.value),
    _useState4 = _slicedToArray(_useState3, 2),
    availableTerms = _useState4[0],
    setAvailableTerms = _useState4[1]; // keep track of all terms for mapping later
  var _useState5 = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState6 = _slicedToArray(_useState5, 2),
    termSuggestions = _useState6[0],
    setTermSuggestions = _useState6[1];
  var _useState7 = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(props.value),
    _useState8 = _slicedToArray(_useState7, 2),
    selectedTerms = _useState8[0],
    setSelectedTerms = _useState8[1];
  var handleInputChange = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__.useDebounce)(updateSuggestions, 250);
  function updateSuggestions(_x2) {
    return _updateSuggestions.apply(this, arguments);
  }
  function _updateSuggestions() {
    _updateSuggestions = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(input) {
      var _abortController, _abortController2;
      var response, results, suggestions;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (!(input.length < 2)) {
              _context.next = 2;
              break;
            }
            return _context.abrupt("return");
          case 2:
            setIsLoading(true);

            // cancel existing requests and set up new abort controller
            (_abortController = abortController) === null || _abortController === void 0 ? void 0 : _abortController.abort();
            abortController = typeof AbortController === "undefined" ? undefined : new AbortController();

            // make request to terms api
            _context.next = 7;
            return fetch(props.host + "/wp-json/wp/v2/search?type=term&subtype=".concat(props.taxonomy, "&search=").concat(input), {
              method: "GET",
              signal: (_abortController2 = abortController) === null || _abortController2 === void 0 ? void 0 : _abortController2.signal
            });
          case 7:
            response = _context.sent;
            if (!response.ok) {
              _context.next = 14;
              break;
            }
            _context.next = 11;
            return response.json();
          case 11:
            results = _context.sent;
            // process results
            suggestions = lodash.differenceBy(results, selectedTerms, "id");
            if (suggestions.length > 0) {
              setTermSuggestions(suggestions.map(function (v) {
                return {
                  label: v.title,
                  value: v.id
                };
              }));
              setAvailableTerms([].concat(_toConsumableArray(availableTerms), _toConsumableArray(lodash.differenceBy(results, availableTerms, "id"))));
            } else {
              setTermSuggestions([]);
            }
          case 14:
            setIsLoading(false);
          case 15:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return _updateSuggestions.apply(this, arguments);
  }
  function selectTerm(termId) {
    var term = availableTerms.find(function (t) {
      return t.id === termId;
    });
    var updatedSelectedTerms = [].concat(_toConsumableArray(selectedTerms), [term]);
    updateSelectedTerms(updatedSelectedTerms);
    setTermSuggestions([]);
  }
  function removeTerm(term) {
    var updatedSelectedTerms = selectedTerms.filter(function (t) {
      return t.id !== term.id;
    });
    updateSelectedTerms(updatedSelectedTerms);
  }
  function updateSelectedTerms(termsArray) {
    var termsString = "";
    var queryTerms = [];
    if (Array.isArray(termsArray) && termsArray.length > 0) {
      termsString = termsArray.map(function (term) {
        return term.id.toString();
      }).join(",");
      queryTerms = termsArray.map(function (term) {
        return {
          termID: term.id,
          taxonomy: term.type
        };
      });
    }
    setSelectedTerms(termsArray);
    props.onChange({
      termsList: termsString,
      termsSelected: termsArray,
      queryTerms: queryTerms
    });
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "wsu-gutenberg-term-selector"
  }, isLoading && /*#__PURE__*/React.createElement(Spinner, null), /*#__PURE__*/React.createElement(ComboboxControl, {
    label: props.label,
    help: props.help,
    value: "",
    onChange: selectTerm,
    options: termSuggestions,
    onFilterValueChange: handleInputChange,
    allowReset: false
  }), selectedTerms.length > 0 && /*#__PURE__*/React.createElement("ul", {
    className: "wsu-gutenberg-term-selector__selected_terms"
  }, selectedTerms.map(function (term, index) {
    return /*#__PURE__*/React.createElement("li", {
      key: term.id,
      className: "wsu-gutenberg-term-selector__selected_term"
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      "class": "components-button wsu-gutenberg-term-selector__remove-btn has-text has-icon",
      onClick: function onClick() {
        return removeTerm(term);
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "wsu-gutenberg-term-selector__remove-btn-text"
    }, term.title, /*#__PURE__*/React.createElement("span", {
      className: "wsu-gutenberg-term-selector__remove-btn-taxonomy-text"
    }, term.type.replace("post_", ""))), /*#__PURE__*/React.createElement("span", {
      className: "dashicon dashicons dashicons-no-alt wsu-gutenberg-term-selector__remove-btn-icon"
    })));
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TermSelectorControl);

/***/ }),

/***/ "./assets/src/js/partials/block-panels/PanelAdvancedFeedOptions.js":
/*!*************************************************************************!*\
  !*** ./assets/src/js/partials/block-panels/PanelAdvancedFeedOptions.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);

var PanelAdvancedFeedOptions = function PanelAdvancedFeedOptions(props) {
  return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.PanelBody, {
    title: "Advanced Feed Options",
    initialOpen: false
  }, props.children);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PanelAdvancedFeedOptions);

/***/ }),

/***/ "./assets/src/js/partials/block-panels/PanelAnimate.js":
/*!*************************************************************!*\
  !*** ./assets/src/js/partials/block-panels/PanelAnimate.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../block-utilities/blockUtilities */ "./assets/src/js/partials/block-utilities/blockUtilities.js");



var animateStyles = [{
  label: 'None',
  value: ''
}, {
  label: 'Fade',
  value: 'fade'
}, {
  label: 'In From Left',
  value: 'fade-left'
}, {
  label: 'In From Right',
  value: 'fade-right'
}, {
  label: 'In From Bottom',
  value: 'fade-bottom'
}, {
  label: 'In From Botom left',
  value: 'fade-bottom-right'
}, {
  label: 'In From Botom Right',
  value: 'fade-bottom-right'
}];
var animateTiming = [{
  label: '5% in view',
  value: 'early'
}, {
  label: '15% in view',
  value: ''
}, {
  label: '25% in view',
  value: 'late'
}];
var PanelAnimate = function PanelAnimate(props) {
  var _props$isOpen = props.isOpen,
    isOpen = _props$isOpen === void 0 ? false : _props$isOpen,
    attributes = props.attributes,
    setAttributes = props.setAttributes;
  var isAnimatable = (0,_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_1__.hasBlockClassName)(attributes, 'wsu-animate');
  return /*#__PURE__*/React.createElement(React.Fragment, null, isAnimatable && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.PanelBody, {
    title: "Animate Options",
    initialOpen: isOpen
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.SelectControl, {
    label: "Animation Type",
    value: (0,_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_1__.getBlockClassNameValue)(attributes, 'wsu-animate--action-'),
    options: animateStyles,
    onChange: function onChange(animationStyle) {
      return (0,_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_1__.setBlockClassName)(attributes, setAttributes, 'wsu-animate--action-', animationStyle);
    }
  }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.SelectControl, {
    label: "Trigger Animation at:",
    value: (0,_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_1__.getBlockClassNameValue)(attributes, 'wsu-animate--timing-'),
    options: animateTiming,
    onChange: function onChange(animateAt) {
      return (0,_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_1__.setBlockClassName)(attributes, setAttributes, 'wsu-animate--timing-', animateAt);
    }
  }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.RangeControl, {
    label: "Animation Delay",
    value: parseInt((0,_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_1__.getBlockClassNameValue)(attributes, 'wsu-animate--delay-', 0)),
    onChange: function onChange(delay) {
      return (0,_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_1__.setBlockClassName)(attributes, setAttributes, 'wsu-animate--delay-', delay);
    },
    help: "Increments of 200ms",
    min: 0,
    max: 6
  }), props.children));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PanelAnimate);

/***/ }),

/***/ "./assets/src/js/partials/block-panels/PanelColorOptions.js":
/*!******************************************************************!*\
  !*** ./assets/src/js/partials/block-panels/PanelColorOptions.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);

var PanelColorOptions = function PanelColorOptions(props) {
  var _props$isOpen = props.isOpen,
    isOpen = _props$isOpen === void 0 ? false : _props$isOpen;
  return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.PanelBody, {
    title: "Color Options",
    initialOpen: isOpen
  }, props.children);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PanelColorOptions);

/***/ }),

/***/ "./assets/src/js/partials/block-panels/PanelDeveloperTools.js":
/*!********************************************************************!*\
  !*** ./assets/src/js/partials/block-panels/PanelDeveloperTools.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _block_utilities_blockClassName__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../block-utilities/blockClassName */ "./assets/src/js/partials/block-utilities/blockClassName.js");
/* harmony import */ var _block_controls_blockControls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../block-controls/blockControls */ "./assets/src/js/partials/block-controls/blockControls.js");

var _wp$components = wp.components,
  ToggleControl = _wp$components.ToggleControl,
  SelectControl = _wp$components.SelectControl,
  RangeControl = _wp$components.RangeControl;


var PanelDeveloperTools = function PanelDeveloperTools(props) {
  var _props$isOpen = props.isOpen,
    isOpen = _props$isOpen === void 0 ? false : _props$isOpen,
    _props$positionElemen = props.positionElement,
    positionElement = _props$positionElemen === void 0 ? false : _props$positionElemen,
    _props$alignItem = props.alignItem,
    alignItem = _props$alignItem === void 0 ? false : _props$alignItem,
    _props$maxWidth = props.maxWidth,
    maxWidth = _props$maxWidth === void 0 ? false : _props$maxWidth,
    _props$zindex = props.zindex,
    zindex = _props$zindex === void 0 ? true : _props$zindex,
    _props$overflow = props.overflow,
    overflow = _props$overflow === void 0 ? true : _props$overflow,
    _props$hide = props.hide,
    hide = _props$hide === void 0 ? true : _props$hide,
    _props$animate = props.animate,
    animate = _props$animate === void 0 ? false : _props$animate,
    attributes = props.attributes,
    setAttributes = props.setAttributes;
  return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.PanelBody, {
    title: "Developer Tools",
    initialOpen: isOpen
  }, maxWidth && /*#__PURE__*/React.createElement(_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_2__.MaxWidthControl, props), positionElement && /*#__PURE__*/React.createElement(ToggleControl, {
    label: "Position Element",
    checked: (0,_block_utilities_blockClassName__WEBPACK_IMPORTED_MODULE_1__.hasBlockClassName)(attributes, 'wsu-position--relative'),
    onChange: function onChange(position) {
      (0,_block_utilities_blockClassName__WEBPACK_IMPORTED_MODULE_1__.setBlockClassNameBool)(attributes, setAttributes, 'wsu-position--relative', position);
    },
    help: "Sets element position to relative."
  }), alignItem && /*#__PURE__*/React.createElement(_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_2__.AlignItemControl, props), zindex && /*#__PURE__*/React.createElement(RangeControl, {
    label: "Element z-index",
    value: parseInt((0,_block_utilities_blockClassName__WEBPACK_IMPORTED_MODULE_1__.getBlockClassNameValue)(attributes, 'wsu-zindex--level-')),
    onChange: function onChange(zindex) {
      return setBlockClassName(attributes, setAttributes, 'wsu-zindex--level-', zindex);
    },
    help: "Position element must be on if the element isn't already positioned in CSS.",
    min: 0,
    max: 7
  }), overflow && /*#__PURE__*/React.createElement(ToggleControl, {
    label: "Overflow Hidden",
    checked: (0,_block_utilities_blockClassName__WEBPACK_IMPORTED_MODULE_1__.hasBlockClassName)(attributes, 'wsu-overflow--hidden'),
    onChange: function onChange(overflow) {
      (0,_block_utilities_blockClassName__WEBPACK_IMPORTED_MODULE_1__.setBlockClassNameBool)(attributes, setAttributes, 'wsu-overflow--hidden', overflow);
    }
  }), hide && /*#__PURE__*/React.createElement(SelectControl, {
    label: "Hide at Breakpoint",
    value: (0,_block_utilities_blockClassName__WEBPACK_IMPORTED_MODULE_1__.getBlockClassNameValue)(attributes, 'wsu-hide--'),
    options: [{
      label: 'none',
      value: ''
    }, {
      label: 'xxultrawide',
      value: 'xxultrawide'
    }, {
      label: 'xultrawide',
      value: 'xultrawide'
    }, {
      label: 'ultrawide',
      value: 'ultrawide'
    }, {
      label: 'desktop',
      value: 'desktop'
    }, {
      label: 'tablet-large',
      value: 'tablet-large'
    }, {
      label: 'tablet-medium',
      value: 'tablet-medium'
    }, {
      label: 'tablet',
      value: 'tablet'
    }, {
      label: 'phone',
      value: 'phone'
    }, {
      label: 'phone-small',
      value: 'phone-small'
    }],
    onChange: function onChange(animationStyle) {
      return setBlockClassName(attributes, setAttributes, 'wsu-hide--', animationStyle);
    }
  }), animate && /*#__PURE__*/React.createElement(ToggleControl, {
    label: "Animate",
    checked: (0,_block_utilities_blockClassName__WEBPACK_IMPORTED_MODULE_1__.hasBlockClassName)(attributes, 'wsu-animate'),
    onChange: function onChange(overflow) {
      (0,_block_utilities_blockClassName__WEBPACK_IMPORTED_MODULE_1__.setBlockClassNameBool)(attributes, setAttributes, 'wsu-animate', overflow);
    }
  }), props.children);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PanelDeveloperTools);

/***/ }),

/***/ "./assets/src/js/partials/block-panels/PanelDisplayOptions.js":
/*!********************************************************************!*\
  !*** ./assets/src/js/partials/block-panels/PanelDisplayOptions.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);

var PanelDisplayOptions = function PanelDisplayOptions(props) {
  var _props$isOpen = props.isOpen,
    isOpen = _props$isOpen === void 0 ? false : _props$isOpen;
  return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.PanelBody, {
    title: "Display Options",
    initialOpen: isOpen
  }, props.children);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PanelDisplayOptions);

/***/ }),

/***/ "./assets/src/js/partials/block-panels/PanelFeedOptions.js":
/*!*****************************************************************!*\
  !*** ./assets/src/js/partials/block-panels/PanelFeedOptions.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);

var PanelFeedOptions = function PanelFeedOptions(props) {
  return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.PanelBody, {
    title: "Feed Options",
    initialOpen: false
  }, props.children);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PanelFeedOptions);

/***/ }),

/***/ "./assets/src/js/partials/block-panels/PanelFeedPosts.js":
/*!***************************************************************!*\
  !*** ./assets/src/js/partials/block-panels/PanelFeedPosts.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _block_controls_blockControls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../block-controls/blockControls */ "./assets/src/js/partials/block-controls/blockControls.js");


var PanelFeedPosts = function PanelFeedPosts(props) {
  return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.PanelBody, {
    title: "Feed Posts",
    initialOpen: false
  }, /*#__PURE__*/React.createElement(_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_1__.FeedPostsControl, props), props.children);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PanelFeedPosts);

/***/ }),

/***/ "./assets/src/js/partials/block-panels/PanelGeneralOptions.js":
/*!********************************************************************!*\
  !*** ./assets/src/js/partials/block-panels/PanelGeneralOptions.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);

var PanelGeneralOptions = function PanelGeneralOptions(props) {
  return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.PanelBody, {
    title: "General Options",
    initialOpen: true
  }, props.children);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PanelGeneralOptions);

/***/ }),

/***/ "./assets/src/js/partials/block-panels/PanelInsertPost.js":
/*!****************************************************************!*\
  !*** ./assets/src/js/partials/block-panels/PanelInsertPost.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _block_controls_blockControls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../block-controls/blockControls */ "./assets/src/js/partials/block-controls/blockControls.js");


var PanelInsertPost = function PanelInsertPost(props) {
  return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.PanelBody, {
    title: "Select Post/Page",
    initialOpen: false
  }, /*#__PURE__*/React.createElement(_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_1__.PostPicker, props));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PanelInsertPost);

/***/ }),

/***/ "./assets/src/js/partials/block-panels/blockPanels.js":
/*!************************************************************!*\
  !*** ./assets/src/js/partials/block-panels/blockPanels.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NestedAdvancedPanel": () => (/* reexport safe */ _nested_advanced_panel_NestedAdvancedPanel__WEBPACK_IMPORTED_MODULE_9__["default"]),
/* harmony export */   "PanelAdvancedFeedOptions": () => (/* reexport safe */ _PanelAdvancedFeedOptions__WEBPACK_IMPORTED_MODULE_5__["default"]),
/* harmony export */   "PanelAnimate": () => (/* reexport safe */ _PanelAnimate__WEBPACK_IMPORTED_MODULE_8__["default"]),
/* harmony export */   "PanelColorOptions": () => (/* reexport safe */ _PanelColorOptions__WEBPACK_IMPORTED_MODULE_6__["default"]),
/* harmony export */   "PanelDeveloperTools": () => (/* reexport safe */ _PanelDeveloperTools__WEBPACK_IMPORTED_MODULE_10__["default"]),
/* harmony export */   "PanelDisplayOptions": () => (/* reexport safe */ _PanelDisplayOptions__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   "PanelFeedOptions": () => (/* reexport safe */ _PanelFeedOptions__WEBPACK_IMPORTED_MODULE_4__["default"]),
/* harmony export */   "PanelFeedPosts": () => (/* reexport safe */ _PanelFeedPosts__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   "PanelGeneralOptions": () => (/* reexport safe */ _PanelGeneralOptions__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   "PanelInsertPost": () => (/* reexport safe */ _PanelInsertPost__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "PanelStyleOptions": () => (/* reexport safe */ _panel_style_options_PanelStyleOptions__WEBPACK_IMPORTED_MODULE_7__["default"])
/* harmony export */ });
/* harmony import */ var _PanelInsertPost__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PanelInsertPost */ "./assets/src/js/partials/block-panels/PanelInsertPost.js");
/* harmony import */ var _PanelDisplayOptions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PanelDisplayOptions */ "./assets/src/js/partials/block-panels/PanelDisplayOptions.js");
/* harmony import */ var _PanelFeedPosts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PanelFeedPosts */ "./assets/src/js/partials/block-panels/PanelFeedPosts.js");
/* harmony import */ var _PanelGeneralOptions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PanelGeneralOptions */ "./assets/src/js/partials/block-panels/PanelGeneralOptions.js");
/* harmony import */ var _PanelFeedOptions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PanelFeedOptions */ "./assets/src/js/partials/block-panels/PanelFeedOptions.js");
/* harmony import */ var _PanelAdvancedFeedOptions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PanelAdvancedFeedOptions */ "./assets/src/js/partials/block-panels/PanelAdvancedFeedOptions.js");
/* harmony import */ var _PanelColorOptions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./PanelColorOptions */ "./assets/src/js/partials/block-panels/PanelColorOptions.js");
/* harmony import */ var _panel_style_options_PanelStyleOptions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./panel-style-options/PanelStyleOptions */ "./assets/src/js/partials/block-panels/panel-style-options/PanelStyleOptions.js");
/* harmony import */ var _PanelAnimate__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./PanelAnimate */ "./assets/src/js/partials/block-panels/PanelAnimate.js");
/* harmony import */ var _nested_advanced_panel_NestedAdvancedPanel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./nested-advanced-panel/NestedAdvancedPanel */ "./assets/src/js/partials/block-panels/nested-advanced-panel/NestedAdvancedPanel.js");
/* harmony import */ var _PanelDeveloperTools__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./PanelDeveloperTools */ "./assets/src/js/partials/block-panels/PanelDeveloperTools.js");












/***/ }),

/***/ "./assets/src/js/partials/block-panels/nested-advanced-panel/NestedAdvancedPanel.js":
/*!******************************************************************************************!*\
  !*** ./assets/src/js/partials/block-panels/nested-advanced-panel/NestedAdvancedPanel.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);

var NestedAdvancedPanel = function NestedAdvancedPanel(props) {
  return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.PanelBody, {
    title: "Additional Advanced Settings",
    initialOpen: false,
    className: "wsu-gutenberg-panel-nested-advanced"
  }, props.children);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NestedAdvancedPanel);

/***/ }),

/***/ "./assets/src/js/partials/block-panels/panel-style-options/PanelStyleOptions.js":
/*!**************************************************************************************!*\
  !*** ./assets/src/js/partials/block-panels/panel-style-options/PanelStyleOptions.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../block-utilities/blockUtilities */ "./assets/src/js/partials/block-utilities/blockUtilities.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


var PanelStyleOptions = function PanelStyleOptions(props) {
  var _attributes$setKey;
  var _props$isOpen = props.isOpen,
    isOpen = _props$isOpen === void 0 ? false : _props$isOpen,
    _props$styles = props.styles,
    styles = _props$styles === void 0 ? [] : _props$styles,
    prefix = props.prefix,
    attributes = props.attributes,
    setAttributes = props.setAttributes,
    _props$setKey = props.setKey,
    setKey = _props$setKey === void 0 ? 'className' : _props$setKey;
  var classString = (_attributes$setKey = attributes[setKey]) !== null && _attributes$setKey !== void 0 ? _attributes$setKey : '';
  var currentValue = (0,_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_1__.getBlockClassNameValue)(classString, prefix);
  var setStyleClassNames = function setStyleClassNames(value) {
    var updatedClasses = (0,_block_utilities_blockUtilities__WEBPACK_IMPORTED_MODULE_1__.addBlockClassName)(classString, prefix, value);
    setAttributes(_defineProperty({}, setKey, updatedClasses));
  };
  var styleItem = function styleItem(styleObj) {
    return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
      variant: "primary",
      isPressed: currentValue == styleObj.value,
      onClick: function onClick() {
        return setStyleClassNames(styleObj.value);
      }
    }, styleObj.icon, /*#__PURE__*/React.createElement("span", null, styleObj.label));
  };
  return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.PanelBody, {
    title: "Style Options",
    initialOpen: isOpen
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.BaseControl, {
    id: "wsu-block-style",
    className: "wsu-block-style"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.ButtonGroup, null, styles.map(function (styleObj) {
    return styleItem(styleObj);
  }))), props.children);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PanelStyleOptions);

/***/ }),

/***/ "./assets/src/js/partials/block-utilities/blockClassName.js":
/*!******************************************************************!*\
  !*** ./assets/src/js/partials/block-utilities/blockClassName.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addBlockClassName": () => (/* binding */ addBlockClassName),
/* harmony export */   "getBlockClassName": () => (/* binding */ getBlockClassName),
/* harmony export */   "getBlockClassNameValue": () => (/* binding */ getBlockClassNameValue),
/* harmony export */   "hasBlockClassName": () => (/* binding */ hasBlockClassName),
/* harmony export */   "removeBlockClassName": () => (/* binding */ removeBlockClassName),
/* harmony export */   "setBlockClassName": () => (/* binding */ setBlockClassName),
/* harmony export */   "setBlockClassNameBool": () => (/* binding */ setBlockClassNameBool),
/* harmony export */   "setChildBlockClassName": () => (/* binding */ setChildBlockClassName),
/* harmony export */   "setClassName": () => (/* binding */ setClassName)
/* harmony export */ });
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
/**
 * Add a class prefix/value to a given string of classnames.
 * 
 * @param { string } classString String of class names
 * @param {string } prefix Previx of class to add or remove
 * @param { string } value Value to append to prefix
 * @param { boolean } remove Remove class names with matching prefixes
 * @returns String of classnames
 */

var addClassName = function addClassName(classString, prefix, value) {
  var remove = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
  var classNames = classString !== null && classString !== void 0 ? classString : '';
  var classArray = classNames.split(' ');
  var newClasses = [];
  if (Array.isArray(classArray)) {
    classArray.forEach(function (itemClass, index) {
      if (!itemClass.includes(prefix)) {
        newClasses.push(itemClass);
      }
    });
    if ('' !== value) {
      newClasses.push(prefix + value);
    }
  }
  return newClasses.join(' ');
};

/**
 * Add class names from block attributes
 * 
 * @param { object } attributes | Block attributes
 * @param { string } prefix | Class prefix to attach value to
 * @param { string } value | Value to append to class prefix 
 * @param { boolean } remove | Remove matching class prefixes 
 * @returns { string } String of class values
 */

var addBlockClassName = function addBlockClassName(attributes, prefix, value) {
  var remove = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
  var classNames;
  if (_typeof(attributes) === 'object') {
    var _attributes$className;
    classNames = (_attributes$className = attributes.className) !== null && _attributes$className !== void 0 ? _attributes$className : '';
  } else {
    classNames = attributes !== null && attributes !== void 0 ? attributes : '';
  }
  return addClassName(classNames, prefix, value, remove);
};
var hasBlockClassName = function hasBlockClassName(attributes, value) {
  var classNames;
  if (_typeof(attributes) === 'object') {
    var _attributes$className2;
    classNames = (_attributes$className2 = attributes.className) !== null && _attributes$className2 !== void 0 ? _attributes$className2 : '';
  } else {
    classNames = attributes !== null && attributes !== void 0 ? attributes : '';
  }
  return classNames.includes(value) ? true : false;
};
var getBlockClassName = function getBlockClassName(className, prefix) {
  var classArray = className.split(' ');
  var value = '';
  if (Array.isArray(classArray)) {
    classArray.forEach(function (itemClass, index) {
      if (itemClass.includes(prefix)) {
        value = itemClass.replace(prefix, '');
      }
    });
  }
  return value;
};
var getClassNameValue = function getClassNameValue(classesString, prefix) {
  var defaultValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var className = classesString !== null && classesString !== void 0 ? classesString : '';
  var classArray = className.split(' ');
  var value = defaultValue;
  if (Array.isArray(classArray)) {
    classArray.forEach(function (itemClass, index) {
      if (itemClass.includes(prefix)) {
        value = itemClass.replace(prefix, '');
      }
    });
  }
  return value;
};
var getBlockClassNameValue = function getBlockClassNameValue(attributes, prefix) {
  var defaultValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var setKey = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'className';
  var className;
  if (_typeof(attributes) === 'object') {
    var _attributes$setKey;
    className = (_attributes$setKey = attributes[setKey]) !== null && _attributes$setKey !== void 0 ? _attributes$setKey : '';
  } else {
    className = attributes !== null && attributes !== void 0 ? attributes : '';
  }
  return getClassNameValue(className, prefix, defaultValue);
};
var removeBlockClassName = function removeBlockClassName(className, prefix) {
  var classNames = className !== null && className !== void 0 ? className : '';
  var classArray = classNames.split(' ');
  var newClasses = [];
  if (Array.isArray(classArray)) {
    classArray.forEach(function (itemClass, index) {
      if (!itemClass.includes(prefix)) {
        newClasses.push(itemClass);
      }
    });
  }
  return newClasses.join(' ');
};

/**
 * @param { string } classesString | String of class names 
 * @param { string } prefix | Class Prefix to add 
 * @param { string } value | Value to append to class prefix 
 * @param { function } setAttributes | Block setAttributes method
 * @param { string } setKey | Attribute key to set 
 */
var setClassName = function setClassName(classesString, prefix, value, setAttributes) {
  var _classesString;
  var setKey = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'className';
  classesString = (_classesString = classesString) !== null && _classesString !== void 0 ? _classesString : '';
  var classes = addClassName(classesString, prefix, value);
  setAttributes(_defineProperty({}, setKey, classes));
};

/**
 * @param { object } attributes | String of class names
 * @param { function } setAttributes | Block setAttributes method
 * @param { string } prefix | Class Prefix to add 
 * @param { string } value | Value to append to class prefix 
 */
var setBlockClassName = function setBlockClassName(attributes, setAttributes, prefix, value) {
  var setKey = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'className';
  var classNames;
  if (_typeof(attributes) === 'object') {
    var _attributes$setKey2;
    classNames = (_attributes$setKey2 = attributes[setKey]) !== null && _attributes$setKey2 !== void 0 ? _attributes$setKey2 : '';
  } else {
    classNames = attributes !== null && attributes !== void 0 ? attributes : '';
  }
  setClassName(classNames, prefix, value, setAttributes, setKey);
};
var setBlockClassNameBool = function setBlockClassNameBool(attributes, setAttributes, blockClass, value) {
  var _attributes$className3;
  var classNames = (_attributes$className3 = attributes.className) !== null && _attributes$className3 !== void 0 ? _attributes$className3 : '';
  var classArray = classNames.split(' ');
  var newClasses = [];
  if (Array.isArray(classArray)) {
    classArray.forEach(function (itemClass, index) {
      if (itemClass != blockClass) {
        newClasses.push(itemClass);
      }
    });
    if (value) {
      newClasses.push(blockClass);
    }
  }
  setAttributes({
    className: newClasses.join(' ')
  });
};
var setChildBlockClassName = function setChildBlockClassName(clientId, prefix, value) {
  var setKey = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'className';
  var children = wp.data.select('core/editor').getBlocksByClientId(clientId)[0].innerBlocks;
  children.forEach(function (child, index) {
    var attributes = wp.data.select('core/editor').getBlockAttributes(child.clientId);
    var classNames = addBlockClassName(attributes, prefix, value);
    wp.data.dispatch('core/editor').updateBlockAttributes(child.clientId, {
      className: classNames
    });
  });
};


/***/ }),

/***/ "./assets/src/js/partials/block-utilities/blockUtilities.js":
/*!******************************************************************!*\
  !*** ./assets/src/js/partials/block-utilities/blockUtilities.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addBlockClassName": () => (/* reexport safe */ _blockClassName__WEBPACK_IMPORTED_MODULE_1__.addBlockClassName),
/* harmony export */   "getBlockClassName": () => (/* reexport safe */ _blockClassName__WEBPACK_IMPORTED_MODULE_1__.getBlockClassName),
/* harmony export */   "getBlockClassNameOption": () => (/* reexport safe */ _getBlockClassNameOption__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "getBlockClassNameValue": () => (/* reexport safe */ _blockClassName__WEBPACK_IMPORTED_MODULE_1__.getBlockClassNameValue),
/* harmony export */   "hasBlockClassName": () => (/* reexport safe */ _blockClassName__WEBPACK_IMPORTED_MODULE_1__.hasBlockClassName),
/* harmony export */   "removeBlockClassName": () => (/* reexport safe */ _blockClassName__WEBPACK_IMPORTED_MODULE_1__.removeBlockClassName),
/* harmony export */   "setBlockClassName": () => (/* reexport safe */ _blockClassName__WEBPACK_IMPORTED_MODULE_1__.setBlockClassName),
/* harmony export */   "setBlockClassNameBool": () => (/* reexport safe */ _blockClassName__WEBPACK_IMPORTED_MODULE_1__.setBlockClassNameBool),
/* harmony export */   "setChildBlockClassName": () => (/* reexport safe */ _blockClassName__WEBPACK_IMPORTED_MODULE_1__.setChildBlockClassName),
/* harmony export */   "setClassName": () => (/* reexport safe */ _blockClassName__WEBPACK_IMPORTED_MODULE_1__.setClassName)
/* harmony export */ });
/* harmony import */ var _getBlockClassNameOption__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getBlockClassNameOption */ "./assets/src/js/partials/block-utilities/getBlockClassNameOption.js");
/* harmony import */ var _blockClassName__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blockClassName */ "./assets/src/js/partials/block-utilities/blockClassName.js");











/***/ }),

/***/ "./assets/src/js/partials/block-utilities/getBlockClassNameOption.js":
/*!***************************************************************************!*\
  !*** ./assets/src/js/partials/block-utilities/getBlockClassNameOption.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var getBlockClassNameOption = function getBlockClassNameOption(className, prefix) {
  var classArray = className.split(' ');
  var value = '';
  if (Array.isArray(classArray)) {
    classArray.forEach(function (itemClass, index) {
      if (itemClass.includes(prefix)) {
        value = itemClass.replace(prefix, '');
      }
    });
  }
  return value;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getBlockClassNameOption);

/***/ }),

/***/ "./blocks/cahnrs-events-list/editor/block.js":
/*!***************************************************!*\
  !*** ./blocks/cahnrs-events-list/editor/block.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./blocks/cahnrs-events-list/editor/edit.js");
/**
 *  BLOCK: CAHNRS Events List
 *  ---
 *  Pulls in events from local website or remote website.
 */

var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;

registerBlockType("cahnrs/events-list", {
  title: "CAHNRS Event List",
  apiVersion: 2,
  category: "feeds",
  icon: /*#__PURE__*/React.createElement("svg", {
    role: "img",
    "enable-background": "new 0 0 70.2 69.6",
    version: "1.1",
    viewBox: "0 0 70.2 69.6",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    "class": "st0",
    fill: "#a60f2d",
    d: "m42.8 69.6s3.6-1.5 5.5-7.4c1 2.3 1.5 4.8 1.3 7.3-2.3 0.1-4.5 0.2-6.8 0.1zm14.9-11.8c-10.4 1.4-12.2-20.3-12.2-20.3s3.5 11.1 10.9 10.7c7.7-0.4 5.5-12.2 5.5-12.2s7.5 20.2-4.2 21.8zm-47.7-5c-3.3 1-6.6 1.8-10 2.4 0 0 5.9-4.5 10.3-18.3l4.3 3.9-0.8 2.6c1.1 1.5 1.9 3.1 2.5 4.9 1.6-3.6 1.5-7.7-0.3-11.2l-0.5 1.6-1.7-1.5-2.8-2.7c1.2-3.6 3-7 5.3-10.1l0.4 0.4 3.3 3.8-1 1.7c1.5 1.7 2.9 3.4 4.2 5.3 0.6-3.4 0.4-6.8-0.4-10.1l-1.5 1.4-3.6-4.2c4.5-4.7 10-8.2 16.2-10.3-0.4 0.4-0.7 0.8-1 1.3-2 2.9-4.1 8.1-2.4 16.4 0.3 1.3 0.7 3.2 1.1 5.1 0.9 3.8 1.9 8.2 2.2 10.9 0.7 5.7 0.1 9.4-1.8 11.4-1.3 1.4-3.5 2-6.4 1.9v-1.4c0-2.4-0.3-4.8-0.8-7.2l-0.8-2.7-1.2 2.6c-1.9 4.1-8.6 14.1-17.2 16.1 2.6-4.2 4.1-9 4.4-14zm25.4 16.4h-0.5-0.1-0.3c-0.5 0-0.8-0.1-1.2-0.1-0.7-0.1-1.6-0.2-2.6-0.4-6.4-1.1-12.9-1.7-19.4-2 6.2-3.6 10.4-9.9 12-12.5 0.2 1.3 0.3 2.5 0.3 3.8 0 0.8 0 1.6-0.1 2.2l-0.1 1.1 1.1 0.1c0.7 0.1 1.3 0.1 1.9 0.1 3.3 0 5.7-0.8 7.3-2.5 2.4-2.5 3.1-6.7 2.3-13.1-0.4-2.9-1.4-7.4-2.3-11.1-0.5-2-0.9-3.8-1.1-5-1.5-7.6 0.3-12.3 2.1-14.8 1.3-1.9 3.2-3.4 5.5-4.2h0.1l3.3-10.8h1.1l-2.3 10.3c0.7-0.1 1.2-0.2 1.7-0.3l3-9.5h1.1l-2 9.2c2.9-0.4 6.1-0.7 10.3-1 0.8 0.4 1.4 1.1 1.8 1.9l9.8-3 0.4 1.1-9.5 3.7c0.1 0.2 0.2 0.4 0.2 0.6l10.3-1.3 0.2 1.1-10 2c0 0.2 0.1 0.4 0.1 0.6l10.4 0.3v1.1l-10.2 0.4c0 1.2-0.2 2.4-0.5 3.6 0.6 2.1 0.7 4.3 0.3 6.5-1.7-3.9-3-5.1-3-5.1-1.4-0.7-2.9-1-4.5-1-2.5 0-4.8 1.1-6.4 2.9-2.3 2.6-3.5 6-3.3 9.5 0.2 2.4 0.7 5.1 1.4 8.6 0.7 3.6 1.6 8.1 2.3 13.5 0.6 4.1-0.1 7.3-1.8 9.7-1.6 2.1-4 3.4-6.5 3.8h-0.1-0.2-0.1-2.2zm10.4-51.5c-2.1-0.1-4.2 0.4-6 1.3-1.5 1-2.5 2.7-2.6 4.5-0.1 0.6-0.1 1.2 0 1.8 0.8-1.5 2-2.8 3.3-3.9 2.4-1.5 5.1-2.3 7.9-2.4h0.9 0.3c0.4 0 0.7-0.1 0.8-0.2 0-0.1-0.1-0.3-0.4-0.4-1.3-0.5-2.7-0.8-4.2-0.7z"
  })),
  attributes: {
    hideDate: {
      type: 'boolean',
      "default": false
    },
    hideCaption: {
      type: 'boolean',
      "default": false
    },
    headingTag: {
      type: 'string',
      "default": 'h3'
    },
    postType: {
      type: 'string',
      "default": 'tribe_events'
    },
    taxonomy: {
      type: 'string',
      "default": 'category'
    },
    termsSelected: {
      type: 'array',
      "default": []
    },
    terms: {
      type: 'string',
      "default": ''
    },
    queryTerms: {
      type: 'array',
      "default": []
    },
    count: {
      type: 'string',
      "default": '3'
    },
    offset: {
      type: 'string',
      "default": '0'
    },
    host: {
      type: 'string',
      "default": ''
    },
    postIn: {
      type: 'string',
      "default": ''
    },
    useAndLogic: {
      type: 'boolean',
      "default": false
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"]
});

/***/ }),

/***/ "./blocks/cahnrs-events-list/editor/edit.js":
/*!**************************************************!*\
  !*** ./blocks/cahnrs-events-list/editor/edit.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_src_js_partials_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets/src/js/partials/block-controls/blockControls */ "./assets/src/js/partials/block-controls/blockControls.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_src_js_partials_block_panels_blockPanels__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../assets/src/js/partials/block-panels/blockPanels */ "./assets/src/js/partials/block-panels/blockPanels.js");
/* harmony import */ var _assets_src_js_partials_block_components_blockComponents__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../assets/src/js/partials/block-components/blockComponents */ "./assets/src/js/partials/block-components/blockComponents.js");
/* harmony import */ var _assets_src_js_partials_block_controls_feed_controls_feed_controls__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../assets/src/js/partials/block-controls/feed-controls/feed-controls */ "./assets/src/js/partials/block-controls/feed-controls/feed-controls.js");
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var __ = wp.i18n.__;
var InnerBlocks = wp.blockEditor.InnerBlocks;
var _wp$blockEditor = wp.blockEditor,
  InspectorControls = _wp$blockEditor.InspectorControls,
  useBlockProps = _wp$blockEditor.useBlockProps;
var _wp$components = wp.components,
  PanelBody = _wp$components.PanelBody,
  TextControl = _wp$components.TextControl,
  SelectControl = _wp$components.SelectControl,
  Button = _wp$components.Button,
  FocalPointPicker = _wp$components.FocalPointPicker,
  BaseControl = _wp$components.BaseControl,
  IconButton = _wp$components.IconButton,
  ToggleControl = _wp$components.ToggleControl;








var Edit = function Edit(props) {
  var className = props.className,
    attributes = props.attributes,
    setAttributes = props.setAttributes;
  var blockProps = useBlockProps({
    className: "wsu-news-list",
    style: {}
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(InspectorControls, {
    key: "setting"
  }, /*#__PURE__*/React.createElement(_assets_src_js_partials_block_panels_blockPanels__WEBPACK_IMPORTED_MODULE_4__.PanelDisplayOptions, null, /*#__PURE__*/React.createElement(_assets_src_js_partials_block_controls_blockControls__WEBPACK_IMPORTED_MODULE_2__.HeadingTagControl, _extends({}, props, {
    allowedTags: ['h2', 'h3', 'h4', 'h5', 'h6', 'div']
  }))), /*#__PURE__*/React.createElement(_assets_src_js_partials_block_controls_feed_controls_feed_controls__WEBPACK_IMPORTED_MODULE_6__.FeedPanel, null, /*#__PURE__*/React.createElement(_assets_src_js_partials_block_controls_feed_controls_feed_controls__WEBPACK_IMPORTED_MODULE_6__.FeedTaxonomyControl, {
    label: "Taxonomy",
    help: "Select taxonomy to filter posts by",
    host: attributes.host || window.wsu.ROOT_URL,
    postType: attributes.postType,
    value: attributes.taxonomy,
    onChange: function onChange(taxonomy) {
      return setAttributes({
        taxonomy: taxonomy
      });
    }
  }), attributes.taxonomy && /*#__PURE__*/React.createElement(_assets_src_js_partials_block_controls_feed_controls_feed_controls__WEBPACK_IMPORTED_MODULE_6__.FeedTermControl, {
    label: "Terms",
    help: "Filter posts by searching and selecting terms in the selected taxonomy",
    host: attributes.host || window.wsu.ROOT_URL,
    taxonomy: attributes.taxonomy,
    value: attributes.termsSelected,
    onChange: function onChange(terms) {
      return setAttributes({
        terms: terms.termsList,
        termsSelected: terms.termsSelected,
        queryTerms: terms.queryTerms
      });
    }
  }), /*#__PURE__*/React.createElement(_assets_src_js_partials_block_controls_feed_controls_feed_controls__WEBPACK_IMPORTED_MODULE_6__.FeedCountControl, props)), /*#__PURE__*/React.createElement(_assets_src_js_partials_block_controls_feed_controls_feed_controls__WEBPACK_IMPORTED_MODULE_6__.FeedPanelAdvanced, null, /*#__PURE__*/React.createElement(_assets_src_js_partials_block_controls_feed_controls_feed_controls__WEBPACK_IMPORTED_MODULE_6__.FeedUseAndLogicControl, props), /*#__PURE__*/React.createElement(_assets_src_js_partials_block_controls_feed_controls_feed_controls__WEBPACK_IMPORTED_MODULE_6__.FeedOffsetControl, props), /*#__PURE__*/React.createElement(_assets_src_js_partials_block_controls_feed_controls_feed_controls__WEBPACK_IMPORTED_MODULE_6__.FeedHostControl, props))), /*#__PURE__*/React.createElement("div", blockProps, /*#__PURE__*/React.createElement(_assets_src_js_partials_block_components_blockComponents__WEBPACK_IMPORTED_MODULE_5__.ApiRenderBlock, {
    attributes: attributes,
    blockName: "cahnrs/events-list"
  }, "No Events Found")));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Edit);

/***/ }),

/***/ "@wordpress/api-fetch":
/*!**********************************!*\
  !*** external ["wp","apiFetch"] ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["wp"]["apiFetch"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/compose":
/*!*********************************!*\
  !*** external ["wp","compose"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["compose"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/html-entities":
/*!**************************************!*\
  !*** external ["wp","htmlEntities"] ***!
  \**************************************/
/***/ ((module) => {

module.exports = window["wp"]["htmlEntities"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./blocks/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blocks_cahnrs_events_list_editor_block__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../blocks/cahnrs-events-list/editor/block */ "./blocks/cahnrs-events-list/editor/block.js");

})();

/******/ })()
;
//# sourceMappingURL=cahnrs-gutenberg-blocks.js.map