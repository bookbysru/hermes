(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Head.js
var Head = __webpack_require__(24);

// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Layout/index.js + 18 modules
var Layout = __webpack_require__(257);

// EXTERNAL MODULE: ./node_modules/worker-loader/dist/cjs.js!./src/workers/hermes.js
var hermes = __webpack_require__(382);
var hermes_default = /*#__PURE__*/__webpack_require__.n(hermes);

// EXTERNAL MODULE: ./node_modules/@docusaurus/core/node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/hooks/useThemeContext.js
var useThemeContext = __webpack_require__(258);

// EXTERNAL MODULE: ./src/components/Spinner/styles.module.css
var styles_module = __webpack_require__(74);
var styles_module_default = /*#__PURE__*/__webpack_require__.n(styles_module);

// CONCATENATED MODULE: ./src/components/Spinner/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */function Spinner(){return/*#__PURE__*/react_default.a.createElement("i",{"aria-label":"icon: load"},/*#__PURE__*/react_default.a.createElement("svg",{viewBox:"0 0 1024 1024","data-icon":"loading",width:"1.5em",height:"1.5em",fill:"currentColor","aria-hidden":"true",className:styles_module_default.a.spinner},/*#__PURE__*/react_default.a.createElement("path",{d:"M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 0 0-94.3-139.9 437.71 437.71 0 0 0-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z"})));}/* harmony default export */ var components_Spinner = (Spinner);
// EXTERNAL MODULE: ./src/components/Code/styles.module.css
var Code_styles_module = __webpack_require__(75);
var Code_styles_module_default = /*#__PURE__*/__webpack_require__.n(Code_styles_module);

// CONCATENATED MODULE: ./src/components/Code/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */var MonacoEditor=/*#__PURE__*/Object(react["lazy"])(function(){return Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(19)]).then(__webpack_require__.t.bind(null, 426, 7));});var defaultOptions={minimap:{enabled:false},fontSize:'13px',wordWrap:'off',scrollBeyondLastLine:false,smoothScrolling:true,fontFamily:"Menlo, Monaco, Consolas, 'Courier New', monospace"};var registerTheme=function registerTheme(monaco){var theme={base:'vs-dark',inherit:true,rules:[{background:'18191a'}],colors:{'editor.background':'#18191a'}};monaco.editor.defineTheme('hermes-vs-dark',theme);};var Code_Placeholder=function Placeholder(){return/*#__PURE__*/react_default.a.createElement("div",{className:Code_styles_module_default.a.placeholder},/*#__PURE__*/react_default.a.createElement(components_Spinner,null));};function Code(props){var _useThemeContext=Object(useThemeContext["a" /* default */])(),isDarkTheme=_useThemeContext.isDarkTheme;var editorRef=Object(react["useRef"])(null);Object(react["useEffect"])(function(){var handler=function handler(){if(editorRef.current)editorRef.current.layout();};window.addEventListener('resize',handler);return function(){return window.removeEventListener('resize',handler);};},[]);var onEditorDidMount=Object(react["useCallback"])(function(e){editorRef.current=e;if(props.editorDidMount)props.editorDidMount();});return/*#__PURE__*/react_default.a.createElement(react["Suspense"],{fallback:/*#__PURE__*/react_default.a.createElement(Code_Placeholder,null)},/*#__PURE__*/react_default.a.createElement(MonacoEditor,Object(esm_extends["a" /* default */])({},props,{options:Object.assign({},defaultOptions,props.options),editorWillMount:registerTheme,editorDidMount:onEditorDidMount,theme:isDarkTheme?'hermes-vs-dark':'vs-light'})));}/* harmony default export */ var components_Code = (Code);
// EXTERNAL MODULE: ./src/pages/playground/styles.module.css
var playground_styles_module = __webpack_require__(76);
var playground_styles_module_default = /*#__PURE__*/__webpack_require__.n(playground_styles_module);

// CONCATENATED MODULE: ./src/pages/playground/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */var worker;if(typeof window!=='undefined'){worker=new hermes_default.a();}var initialState={runRequested:false,output:'',lastTime:undefined,elapsed:0};function reducer(state,action){switch(action.tag){case'RUN':if(state.runRequested)return state;var args=action.args.split(/\s+/).filter(function(x){return x;});worker.postMessage(['run',args,action.source]);return Object.assign({},state,{runRequested:true,lastTime:new Date()});case'RUN_COMPLETE':return Object.assign({},state,{runRequested:false,output:action.result,elapsed:new Date()-state.lastTime});}}function Playground(){if(typeof window==='undefined')return null;var _useState=Object(react["useState"])('const a = 1; \nprint(a);'),source=_useState[0],setSource=_useState[1];var _useState2=Object(react["useState"])('-O -dump-bytecode'),args=_useState2[0],setArgs=_useState2[1];var _useReducer=Object(react["useReducer"])(reducer,initialState),state=_useReducer[0],dispatch=_useReducer[1];var runRequested=state.runRequested,elapsed=state.elapsed,output=state.output;var run=function run(args){return dispatch({tag:'RUN',args:args,source:source});};Object(react["useEffect"])(function(){worker.onmessage=function(e){var _e$data=e.data,tag=_e$data[0],payload=_e$data[1];switch(tag){case'runResult':dispatch({tag:'RUN_COMPLETE',result:payload});break;default:throw new Error('unknown message type from Hermes worker.');}};},[]);// A hack to completely disasble scrolling behaviors on mobile
// e.g. bounce effect on iOS, pull-to-refresh on Android.
//
// The reason to do it via effects on `html` is that docusaurus drawer
// will mutate `body`'s `overflow` and we have no way to override it.
Object(react["useEffect"])(function(){document.querySelector('html').style.overflow='hidden';return function(){document.querySelector('html').style.overflow='visible';};});var handleSubmit=function handleSubmit(e){e.preventDefault();run(args);};return/*#__PURE__*/react_default.a.createElement(Layout["a" /* default */],{title:"Hermes",description:"Hermes Playground",noFooter:true},/*#__PURE__*/react_default.a.createElement(Head["a" /* default */],null,/*#__PURE__*/react_default.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"}),/*#__PURE__*/react_default.a.createElement("link",{rel:"manifest",href:"/manifest.webmanifest"})),/*#__PURE__*/react_default.a.createElement("form",{className:playground_styles_module_default.a.driver,onSubmit:handleSubmit},/*#__PURE__*/react_default.a.createElement("input",{className:playground_styles_module_default.a.argsInput,name:"args",placeholder:"args",type:"text",value:args,onChange:function onChange(e){return setArgs(e.target.value);}}),/*#__PURE__*/react_default.a.createElement("button",{className:playground_styles_module_default.a.runBtn},/*#__PURE__*/react_default.a.createElement(RunIcon,{isLoading:runRequested})),/*#__PURE__*/react_default.a.createElement("div",{className:playground_styles_module_default.a.helpBtn,onClick:function onClick(_){return run('-help');}},"?"),/*#__PURE__*/react_default.a.createElement("span",{className:playground_styles_module_default.a.elapsed},elapsed," ms")),/*#__PURE__*/react_default.a.createElement("div",{className:playground_styles_module_default.a.codeContainer},/*#__PURE__*/react_default.a.createElement("div",{className:playground_styles_module_default.a.sourceCode},/*#__PURE__*/react_default.a.createElement(components_Code,{language:"javascript",value:source,onChange:setSource})),/*#__PURE__*/react_default.a.createElement("div",{className:playground_styles_module_default.a.outputCode},/*#__PURE__*/react_default.a.createElement(components_Code,{language:"json",value:output,editorDidMount:Object(react["useCallback"])(function(_){return run(args);}),options:{readOnly:true}}))));}function RunIcon(_ref){var isLoading=_ref.isLoading;if(isLoading)return/*#__PURE__*/react_default.a.createElement(components_Spinner,null);return/*#__PURE__*/react_default.a.createElement("i",{"aria-label":"icon: run"},/*#__PURE__*/react_default.a.createElement("svg",{viewBox:"0 0 1200 1200","data-icon":"run",width:"1.5em",height:"1.5em",fill:"currentColor","aria-hidden":"true"},/*#__PURE__*/react_default.a.createElement("path",{d:"M 600,1200 C 268.65,1200 0,931.35 0,600 0,268.65 268.65,0 600,0 c 331.35,0 600,268.65 600,600 0,331.35 -268.65,600 -600,600 z M 450,300.45 450,899.55 900,600 450,300.45 z"})));}/* harmony default export */ var playground = __webpack_exports__["default"] = (Playground);

/***/ }),

/***/ 382:
/***/ (function(module, exports, __webpack_require__) {

module.exports = function() {
  return new Worker(__webpack_require__.p + "e1858138a6767c73bf30.worker.js");
};

/***/ })

}]);