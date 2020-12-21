(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[21,23],{

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/@mdx-js/react/dist/esm.js
var esm = __webpack_require__(180);

// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useDocusaurusContext.js
var useDocusaurusContext = __webpack_require__(22);

// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/renderRoutes.js
var renderRoutes = __webpack_require__(26);

// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Layout/index.js + 18 modules
var Layout = __webpack_require__(257);

// EXTERNAL MODULE: ./node_modules/@docusaurus/core/node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/@docusaurus/core/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(7);

// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(192);

// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/index.js
var lib = __webpack_require__(186);

// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/hooks/useUserPreferencesContext.js
var useUserPreferencesContext = __webpack_require__(330);

// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/hooks/useLockBodyScroll.js
var useLockBodyScroll = __webpack_require__(335);

// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/hooks/useWindowSize.js
var useWindowSize = __webpack_require__(336);

// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/hooks/useScrollPosition.js
var useScrollPosition = __webpack_require__(334);

// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js + 1 modules
var Link = __webpack_require__(219);

// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/isInternalUrl.js
var isInternalUrl = __webpack_require__(229);

// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Logo/index.js + 1 modules
var Logo = __webpack_require__(371);

// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocSidebar/styles.module.css
var styles_module = __webpack_require__(67);
var styles_module_default = /*#__PURE__*/__webpack_require__.n(styles_module);

// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocSidebar/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var MOBILE_TOGGLE_SIZE=24;function usePrevious(value){var ref=Object(react["useRef"])(value);Object(react["useEffect"])(function(){ref.current=value;},[value]);return ref.current;}var DocSidebar_isActiveSidebarItem=function isActiveSidebarItem(item,activePath){if(item.type==='link'){return Object(lib["isSamePath"])(item.href,activePath);}if(item.type==='category'){return item.items.some(function(subItem){return isActiveSidebarItem(subItem,activePath);});}return false;};function DocSidebarItemCategory(_ref){var _clsx;var item=_ref.item,onItemClick=_ref.onItemClick,collapsible=_ref.collapsible,activePath=_ref.activePath,props=Object(objectWithoutPropertiesLoose["a" /* default */])(_ref,["item","onItemClick","collapsible","activePath"]);var items=item.items,label=item.label;var isActive=DocSidebar_isActiveSidebarItem(item,activePath);var wasActive=usePrevious(isActive);// active categories are always initialized as expanded
// the default (item.collapsed) is only used for non-active categories
var _useState=Object(react["useState"])(function(){if(!collapsible){return false;}return isActive?false:item.collapsed;}),collapsed=_useState[0],setCollapsed=_useState[1];var menuListRef=Object(react["useRef"])(null);var _useState2=Object(react["useState"])(undefined),menuListHeight=_useState2[0],setMenuListHeight=_useState2[1];var handleMenuListHeight=function handleMenuListHeight(calc){var _menuListRef$current;if(calc===void 0){calc=true;}setMenuListHeight(calc?((_menuListRef$current=menuListRef.current)===null||_menuListRef$current===void 0?void 0:_menuListRef$current.scrollHeight)+"px":undefined);};// If we navigate to a category, it should automatically expand itself
Object(react["useEffect"])(function(){var justBecameActive=isActive&&!wasActive;if(justBecameActive&&collapsed){setCollapsed(false);}},[isActive,wasActive,collapsed]);var handleItemClick=Object(react["useCallback"])(function(e){e.preventDefault();if(!menuListHeight){handleMenuListHeight();}setTimeout(function(){return setCollapsed(function(state){return!state;});},100);},[menuListHeight]);if(items.length===0){return null;}return/*#__PURE__*/react_default.a.createElement("li",{className:Object(clsx_m["a" /* default */])('menu__list-item',{'menu__list-item--collapsed':collapsed}),key:label},/*#__PURE__*/react_default.a.createElement("a",Object(esm_extends["a" /* default */])({className:Object(clsx_m["a" /* default */])('menu__link',(_clsx={'menu__link--sublist':collapsible,'menu__link--active':collapsible&&isActive},_clsx[styles_module_default.a.menuLinkText]=!collapsible,_clsx)),onClick:collapsible?handleItemClick:undefined,href:collapsible?'#!':undefined},props),label),/*#__PURE__*/react_default.a.createElement("ul",{className:"menu__list",ref:menuListRef,style:{height:menuListHeight},onTransitionEnd:function onTransitionEnd(){if(!collapsed){handleMenuListHeight(false);}}},items.map(function(childItem){return/*#__PURE__*/react_default.a.createElement(DocSidebarItem,{tabIndex:collapsed?'-1':'0',key:childItem.label,item:childItem,onItemClick:onItemClick,collapsible:collapsible,activePath:activePath});})));}function DocSidebarItemLink(_ref2){var item=_ref2.item,onItemClick=_ref2.onItemClick,activePath=_ref2.activePath,_collapsible=_ref2.collapsible,props=Object(objectWithoutPropertiesLoose["a" /* default */])(_ref2,["item","onItemClick","activePath","collapsible"]);var href=item.href,label=item.label;var isActive=DocSidebar_isActiveSidebarItem(item,activePath);return/*#__PURE__*/react_default.a.createElement("li",{className:"menu__list-item",key:label},/*#__PURE__*/react_default.a.createElement(Link["a" /* default */],Object(esm_extends["a" /* default */])({className:Object(clsx_m["a" /* default */])('menu__link',{'menu__link--active':isActive}),to:href},Object(isInternalUrl["a" /* default */])(href)?{isNavLink:true,exact:true,onClick:onItemClick}:{target:'_blank',rel:'noreferrer noopener'},props),label));}function DocSidebarItem(props){switch(props.item.type){case'category':return/*#__PURE__*/react_default.a.createElement(DocSidebarItemCategory,props);case'link':default:return/*#__PURE__*/react_default.a.createElement(DocSidebarItemLink,props);}}function DocSidebar(_ref3){var _clsx2,_clsx3;var path=_ref3.path,sidebar=_ref3.sidebar,_ref3$sidebarCollapsi=_ref3.sidebarCollapsible,sidebarCollapsible=_ref3$sidebarCollapsi===void 0?true:_ref3$sidebarCollapsi,onCollapse=_ref3.onCollapse,isHidden=_ref3.isHidden;var _useState3=Object(react["useState"])(false),showResponsiveSidebar=_useState3[0],setShowResponsiveSidebar=_useState3[1];var _useThemeConfig=Object(lib["useThemeConfig"])(),hideOnScroll=_useThemeConfig.navbar.hideOnScroll,hideableSidebar=_useThemeConfig.hideableSidebar;var _useUserPreferencesCo=Object(useUserPreferencesContext["a" /* default */])(),isAnnouncementBarClosed=_useUserPreferencesCo.isAnnouncementBarClosed;var _useScrollPosition=Object(useScrollPosition["a" /* default */])(),scrollY=_useScrollPosition.scrollY;Object(useLockBodyScroll["a" /* default */])(showResponsiveSidebar);var windowSize=Object(useWindowSize["a" /* default */])();Object(react["useEffect"])(function(){if(windowSize===useWindowSize["b" /* windowSizes */].desktop){setShowResponsiveSidebar(false);}},[windowSize]);return/*#__PURE__*/react_default.a.createElement("div",{className:Object(clsx_m["a" /* default */])(styles_module_default.a.sidebar,(_clsx2={},_clsx2[styles_module_default.a.sidebarWithHideableNavbar]=hideOnScroll,_clsx2[styles_module_default.a.sidebarHidden]=isHidden,_clsx2))},hideOnScroll&&/*#__PURE__*/react_default.a.createElement(Logo["a" /* default */],{tabIndex:-1,className:styles_module_default.a.sidebarLogo}),/*#__PURE__*/react_default.a.createElement("div",{className:Object(clsx_m["a" /* default */])('menu','menu--responsive','thin-scrollbar',styles_module_default.a.menu,(_clsx3={'menu--show':showResponsiveSidebar},_clsx3[styles_module_default.a.menuWithAnnouncementBar]=!isAnnouncementBarClosed&&scrollY===0,_clsx3))},/*#__PURE__*/react_default.a.createElement("button",{"aria-label":showResponsiveSidebar?'Close Menu':'Open Menu',"aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:function onClick(){setShowResponsiveSidebar(!showResponsiveSidebar);}},showResponsiveSidebar?/*#__PURE__*/react_default.a.createElement("span",{className:Object(clsx_m["a" /* default */])(styles_module_default.a.sidebarMenuIcon,styles_module_default.a.sidebarMenuCloseIcon)},"\xD7"):/*#__PURE__*/react_default.a.createElement("svg",{"aria-label":"Menu",className:styles_module_default.a.sidebarMenuIcon,xmlns:"http://www.w3.org/2000/svg",height:MOBILE_TOGGLE_SIZE,width:MOBILE_TOGGLE_SIZE,viewBox:"0 0 32 32",role:"img",focusable:"false"},/*#__PURE__*/react_default.a.createElement("title",null,"Menu"),/*#__PURE__*/react_default.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),/*#__PURE__*/react_default.a.createElement("ul",{className:"menu__list"},sidebar.map(function(item){return/*#__PURE__*/react_default.a.createElement(DocSidebarItem,{key:item.label,item:item,onItemClick:function onItemClick(e){e.target.blur();setShowResponsiveSidebar(false);},collapsible:sidebarCollapsible,activePath:path});}))),hideableSidebar&&/*#__PURE__*/react_default.a.createElement("button",{type:"button",title:"Collapse sidebar","aria-label":"Collapse sidebar",className:Object(clsx_m["a" /* default */])('button button--secondary button--outline',styles_module_default.a.collapseSidebarButton),onClick:onCollapse}));}/* harmony default export */ var theme_DocSidebar = (DocSidebar);
// EXTERNAL MODULE: ./node_modules/prism-react-renderer/prism/index.js
var prism_react_renderer_prism = __webpack_require__(25);

// CONCATENATED MODULE: ./node_modules/prism-react-renderer/themes/duotoneDark/index.js
// Duotone Dark
// Author: Simurai, adapted from DuoTone themes for Atom (http://simurai.com/projects/2016/01/01/duotone-themes)
// Conversion: Bram de Haan (http://atelierbram.github.io/Base2Tone-prism/output/prism/prism-base2tone-evening-dark.css)
// Generated with Base16 Builder (https://github.com/base16-builder/base16-builder)
var theme = {
  plain: {
    backgroundColor: "#2a2734",
    color: "#9a86fd"
  },
  styles: [{
    types: ["comment", "prolog", "doctype", "cdata", "punctuation"],
    style: {
      color: "#6c6783"
    }
  }, {
    types: ["namespace"],
    style: {
      opacity: 0.7
    }
  }, {
    types: ["tag", "operator", "number"],
    style: {
      color: "#e09142"
    }
  }, {
    types: ["property", "function"],
    style: {
      color: "#9a86fd"
    }
  }, {
    types: ["tag-id", "selector", "atrule-id"],
    style: {
      color: "#eeebff"
    }
  }, {
    types: ["attr-name"],
    style: {
      color: "#c4b9fe"
    }
  }, {
    types: ["boolean", "string", "entity", "url", "attr-value", "keyword", "control", "directive", "unit", "statement", "regex", "at-rule", "placeholder", "variable"],
    style: {
      color: "#ffcc99"
    }
  }, {
    types: ["deleted"],
    style: {
      textDecorationLine: "line-through"
    }
  }, {
    types: ["inserted"],
    style: {
      textDecorationLine: "underline"
    }
  }, {
    types: ["italic"],
    style: {
      fontStyle: "italic"
    }
  }, {
    types: ["important", "bold"],
    style: {
      fontWeight: "bold"
    }
  }, {
    types: ["important"],
    style: {
      color: "#c4b9fe"
    }
  }]
};

/* harmony default export */ var duotoneDark = (theme);

// CONCATENATED MODULE: ./node_modules/prism-react-renderer/dist/index.js





var defaultProps = {
  // $FlowFixMe
  Prism: prism_react_renderer_prism["a" /* default */],
  theme: duotoneDark
};

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

var newlineRe = /\r\n|\r|\n/; // Empty lines need to contain a single empty token, denoted with { empty: true }

var normalizeEmptyLines = function (line) {
  if (line.length === 0) {
    line.push({
      types: ["plain"],
      content: "",
      empty: true
    });
  } else if (line.length === 1 && line[0].content === "") {
    line[0].empty = true;
  }
};

var appendTypes = function (types, add) {
  var typesSize = types.length;

  if (typesSize > 0 && types[typesSize - 1] === add) {
    return types;
  }

  return types.concat(add);
}; // Takes an array of Prism's tokens and groups them by line, turning plain
// strings into tokens as well. Tokens can become recursive in some cases,
// which means that their types are concatenated. Plain-string tokens however
// are always of type "plain".
// This is not recursive to avoid exceeding the call-stack limit, since it's unclear
// how nested Prism's tokens can become


var normalizeTokens = function (tokens) {
  var typeArrStack = [[]];
  var tokenArrStack = [tokens];
  var tokenArrIndexStack = [0];
  var tokenArrSizeStack = [tokens.length];
  var i = 0;
  var stackIndex = 0;
  var currentLine = [];
  var acc = [currentLine];

  while (stackIndex > -1) {
    while ((i = tokenArrIndexStack[stackIndex]++) < tokenArrSizeStack[stackIndex]) {
      var content = void 0;
      var types = typeArrStack[stackIndex];
      var tokenArr = tokenArrStack[stackIndex];
      var token = tokenArr[i]; // Determine content and append type to types if necessary

      if (typeof token === "string") {
        types = stackIndex > 0 ? types : ["plain"];
        content = token;
      } else {
        types = appendTypes(types, token.type);

        if (token.alias) {
          types = appendTypes(types, token.alias);
        }

        content = token.content;
      } // If token.content is an array, increase the stack depth and repeat this while-loop


      if (typeof content !== "string") {
        stackIndex++;
        typeArrStack.push(types);
        tokenArrStack.push(content);
        tokenArrIndexStack.push(0);
        tokenArrSizeStack.push(content.length);
        continue;
      } // Split by newlines


      var splitByNewlines = content.split(newlineRe);
      var newlineCount = splitByNewlines.length;
      currentLine.push({
        types: types,
        content: splitByNewlines[0]
      }); // Create a new line for each string on a new line

      for (var i$1 = 1; i$1 < newlineCount; i$1++) {
        normalizeEmptyLines(currentLine);
        acc.push(currentLine = []);
        currentLine.push({
          types: types,
          content: splitByNewlines[i$1]
        });
      }
    } // Decreate the stack depth


    stackIndex--;
    typeArrStack.pop();
    tokenArrStack.pop();
    tokenArrIndexStack.pop();
    tokenArrSizeStack.pop();
  }

  normalizeEmptyLines(currentLine);
  return acc;
};

var themeToDict = function (theme, language) {
  var plain = theme.plain; // $FlowFixMe

  var base = Object.create(null);
  var themeDict = theme.styles.reduce(function (acc, themeEntry) {
    var languages = themeEntry.languages;
    var style = themeEntry.style;

    if (languages && !languages.includes(language)) {
      return acc;
    }

    themeEntry.types.forEach(function (type) {
      // $FlowFixMe
      var accStyle = _extends({}, acc[type], style);

      acc[type] = accStyle;
    });
    return acc;
  }, base); // $FlowFixMe

  themeDict.root = plain; // $FlowFixMe

  themeDict.plain = _extends({}, plain, {
    backgroundColor: null
  });
  return themeDict;
};

function objectWithoutProperties(obj, exclude) {
  var target = {};

  for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k];

  return target;
}

var Highlight =
/*@__PURE__*/
function (Component) {
  function Highlight() {
    var this$1 = this;
    var args = [],
        len = arguments.length;

    while (len--) args[len] = arguments[len];

    Component.apply(this, args);

    _defineProperty(this, "getThemeDict", function (props) {
      if (this$1.themeDict !== undefined && props.theme === this$1.prevTheme && props.language === this$1.prevLanguage) {
        return this$1.themeDict;
      }

      this$1.prevTheme = props.theme;
      this$1.prevLanguage = props.language;
      var themeDict = props.theme ? themeToDict(props.theme, props.language) : undefined;
      return this$1.themeDict = themeDict;
    });

    _defineProperty(this, "getLineProps", function (ref) {
      var key = ref.key;
      var className = ref.className;
      var style = ref.style;
      var rest$1 = objectWithoutProperties(ref, ["key", "className", "style", "line"]);
      var rest = rest$1;

      var output = _extends({}, rest, {
        className: "token-line",
        style: undefined,
        key: undefined
      });

      var themeDict = this$1.getThemeDict(this$1.props);

      if (themeDict !== undefined) {
        output.style = themeDict.plain;
      }

      if (style !== undefined) {
        output.style = output.style !== undefined ? _extends({}, output.style, style) : style;
      }

      if (key !== undefined) {
        output.key = key;
      }

      if (className) {
        output.className += " " + className;
      }

      return output;
    });

    _defineProperty(this, "getStyleForToken", function (ref) {
      var types = ref.types;
      var empty = ref.empty;
      var typesSize = types.length;
      var themeDict = this$1.getThemeDict(this$1.props);

      if (themeDict === undefined) {
        return undefined;
      } else if (typesSize === 1 && types[0] === "plain") {
        return empty ? {
          display: "inline-block"
        } : undefined;
      } else if (typesSize === 1 && !empty) {
        return themeDict[types[0]];
      }

      var baseStyle = empty ? {
        display: "inline-block"
      } : {}; // $FlowFixMe

      var typeStyles = types.map(function (type) {
        return themeDict[type];
      });
      return Object.assign.apply(Object, [baseStyle].concat(typeStyles));
    });

    _defineProperty(this, "getTokenProps", function (ref) {
      var key = ref.key;
      var className = ref.className;
      var style = ref.style;
      var token = ref.token;
      var rest$1 = objectWithoutProperties(ref, ["key", "className", "style", "token"]);
      var rest = rest$1;

      var output = _extends({}, rest, {
        className: "token " + token.types.join(" "),
        children: token.content,
        style: this$1.getStyleForToken(token),
        key: undefined
      });

      if (style !== undefined) {
        output.style = output.style !== undefined ? _extends({}, output.style, style) : style;
      }

      if (key !== undefined) {
        output.key = key;
      }

      if (className) {
        output.className += " " + className;
      }

      return output;
    });
  }

  if (Component) Highlight.__proto__ = Component;
  Highlight.prototype = Object.create(Component && Component.prototype);
  Highlight.prototype.constructor = Highlight;

  Highlight.prototype.render = function render() {
    var ref = this.props;
    var Prism = ref.Prism;
    var language = ref.language;
    var code = ref.code;
    var children = ref.children;
    var themeDict = this.getThemeDict(this.props);
    var grammar = Prism.languages[language];
    var mixedTokens = grammar !== undefined ? Prism.tokenize(code, grammar, language) : [code];
    var tokens = normalizeTokens(mixedTokens);
    return children({
      tokens: tokens,
      className: "prism-code language-" + language,
      style: themeDict !== undefined ? themeDict.root : {},
      getLineProps: this.getLineProps,
      getTokenProps: this.getTokenProps
    });
  };

  return Highlight;
}(react["Component"]);

/* harmony default export */ var dist = (Highlight);


// EXTERNAL MODULE: ./node_modules/copy-text-to-clipboard/index.js
var copy_text_to_clipboard = __webpack_require__(380);
var copy_text_to_clipboard_default = /*#__PURE__*/__webpack_require__.n(copy_text_to_clipboard);

// EXTERNAL MODULE: ./node_modules/parse-numeric-range/index.js
var parse_numeric_range = __webpack_require__(381);
var parse_numeric_range_default = /*#__PURE__*/__webpack_require__.n(parse_numeric_range);

// CONCATENATED MODULE: ./node_modules/prism-react-renderer/themes/palenight/index.js
// Converted automatically using ./tools/themeFromVsCode
var palenight_theme = {
  plain: {
    color: "#bfc7d5",
    backgroundColor: "#292d3e"
  },
  styles: [{
    types: ["comment"],
    style: {
      color: "rgb(105, 112, 152)",
      fontStyle: "italic"
    }
  }, {
    types: ["string", "inserted"],
    style: {
      color: "rgb(195, 232, 141)"
    }
  }, {
    types: ["number"],
    style: {
      color: "rgb(247, 140, 108)"
    }
  }, {
    types: ["builtin", "char", "constant", "function"],
    style: {
      color: "rgb(130, 170, 255)"
    }
  }, {
    types: ["punctuation", "selector"],
    style: {
      color: "rgb(199, 146, 234)"
    }
  }, {
    types: ["variable"],
    style: {
      color: "rgb(191, 199, 213)"
    }
  }, {
    types: ["class-name", "attr-name"],
    style: {
      color: "rgb(255, 203, 107)"
    }
  }, {
    types: ["tag", "deleted"],
    style: {
      color: "rgb(255, 85, 114)"
    }
  }, {
    types: ["operator"],
    style: {
      color: "rgb(137, 221, 255)"
    }
  }, {
    types: ["boolean"],
    style: {
      color: "rgb(255, 88, 116)"
    }
  }, {
    types: ["keyword"],
    style: {
      fontStyle: "italic"
    }
  }, {
    types: ["doctype"],
    style: {
      color: "rgb(199, 146, 234)",
      fontStyle: "italic"
    }
  }, {
    types: ["namespace"],
    style: {
      color: "rgb(178, 204, 214)"
    }
  }, {
    types: ["url"],
    style: {
      color: "rgb(221, 221, 221)"
    }
  }]
};

/* harmony default export */ var palenight = (palenight_theme);

// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/hooks/useThemeContext.js
var useThemeContext = __webpack_require__(258);

// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/hooks/usePrismTheme.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var usePrismTheme_usePrismTheme=function usePrismTheme(){var _useThemeConfig=Object(lib["useThemeConfig"])(),prism=_useThemeConfig.prism;var _useThemeContext=Object(useThemeContext["a" /* default */])(),isDarkTheme=_useThemeContext.isDarkTheme;var lightModeTheme=prism.theme||palenight;var darkModeTheme=prism.darkTheme||lightModeTheme;var prismTheme=isDarkTheme?darkModeTheme:lightModeTheme;return prismTheme;};/* harmony default export */ var hooks_usePrismTheme = (usePrismTheme_usePrismTheme);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/styles.module.css
var CodeBlock_styles_module = __webpack_require__(68);
var CodeBlock_styles_module_default = /*#__PURE__*/__webpack_require__.n(CodeBlock_styles_module);

// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var highlightLinesRangeRegex=/{([\d,-]+)}/;var getHighlightDirectiveRegex=function getHighlightDirectiveRegex(languages){if(languages===void 0){languages=['js','jsBlock','jsx','python','html'];}// supported types of comments
var comments={js:{start:'\\/\\/',end:''},jsBlock:{start:'\\/\\*',end:'\\*\\/'},jsx:{start:'\\{\\s*\\/\\*',end:'\\*\\/\\s*\\}'},python:{start:'#',end:''},html:{start:'<!--',end:'-->'}};// supported directives
var directives=['highlight-next-line','highlight-start','highlight-end'].join('|');// to be more reliable, the opening and closing comment must match
var commentPattern=languages.map(function(lang){return"(?:"+comments[lang].start+"\\s*("+directives+")\\s*"+comments[lang].end+")";}).join('|');// white space is allowed, but otherwise it should be on it's own line
return new RegExp("^\\s*(?:"+commentPattern+")\\s*$");};// select comment styles based on language
var highlightDirectiveRegex=function highlightDirectiveRegex(lang){switch(lang){case'js':case'javascript':case'ts':case'typescript':return getHighlightDirectiveRegex(['js','jsBlock']);case'jsx':case'tsx':return getHighlightDirectiveRegex(['js','jsBlock','jsx']);case'html':return getHighlightDirectiveRegex(['js','jsBlock','html']);case'python':case'py':return getHighlightDirectiveRegex(['python']);default:// all comment types
return getHighlightDirectiveRegex();}};var codeBlockTitleRegex=/(?:title=")(.*)(?:")/;/* harmony default export */ var CodeBlock = (function(_ref){var children=_ref.children,languageClassName=_ref.className,metastring=_ref.metastring;var _useThemeConfig=Object(lib["useThemeConfig"])(),prism=_useThemeConfig.prism;var _useState=Object(react["useState"])(false),showCopied=_useState[0],setShowCopied=_useState[1];var _useState2=Object(react["useState"])(false),mounted=_useState2[0],setMounted=_useState2[1];// The Prism theme on SSR is always the default theme but the site theme
// can be in a different mode. React hydration doesn't update DOM styles
// that come from SSR. Hence force a re-render after mounting to apply the
// current relevant styles. There will be a flash seen of the original
// styles seen using this current approach but that's probably ok. Fixing
// the flash will require changing the theming approach and is not worth it
// at this point.
Object(react["useEffect"])(function(){setMounted(true);},[]);var button=Object(react["useRef"])(null);var highlightLines=[];var codeBlockTitle='';var prismTheme=hooks_usePrismTheme();// In case interleaved Markdown (e.g. when using CodeBlock as standalone component).
if(Array.isArray(children)){children=children.join('');}if(metastring&&highlightLinesRangeRegex.test(metastring)){// Tested above
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
var highlightLinesRange=metastring.match(highlightLinesRangeRegex)[1];highlightLines=parse_numeric_range_default()(highlightLinesRange).filter(function(n){return n>0;});}if(metastring&&codeBlockTitleRegex.test(metastring)){// Tested above
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
codeBlockTitle=metastring.match(codeBlockTitleRegex)[1];}var language=languageClassName&&languageClassName.replace(/language-/,'');// Force Prism's language union type to `any` because it does not contain all available languages
if(!language&&prism.defaultLanguage){language=prism.defaultLanguage;}// only declaration OR directive highlight can be used for a block
var code=children.replace(/\n$/,'');if(highlightLines.length===0&&language!==undefined){var range='';var directiveRegex=highlightDirectiveRegex(language);// go through line by line
var lines=children.replace(/\n$/,'').split('\n');var blockStart;// loop through lines
for(var index=0;index<lines.length;){var line=lines[index];// adjust for 0-index
var lineNumber=index+1;var match=line.match(directiveRegex);if(match!==null){var directive=match.slice(1).reduce(function(final,item){return final||item;},undefined);switch(directive){case'highlight-next-line':range+=lineNumber+",";break;case'highlight-start':blockStart=lineNumber;break;case'highlight-end':range+=blockStart+"-"+(lineNumber-1)+",";break;default:break;}lines.splice(index,1);}else{// lines without directives are unchanged
index+=1;}}highlightLines=parse_numeric_range_default()(range);code=lines.join('\n');}var handleCopyCode=function handleCopyCode(){copy_text_to_clipboard_default()(code);setShowCopied(true);setTimeout(function(){return setShowCopied(false);},2000);};return/*#__PURE__*/react_default.a.createElement(dist,Object(esm_extends["a" /* default */])({},defaultProps,{key:String(mounted),theme:prismTheme,code:code,language:language}),function(_ref2){var _clsx;var className=_ref2.className,style=_ref2.style,tokens=_ref2.tokens,getLineProps=_ref2.getLineProps,getTokenProps=_ref2.getTokenProps;return/*#__PURE__*/react_default.a.createElement(react_default.a.Fragment,null,codeBlockTitle&&/*#__PURE__*/react_default.a.createElement("div",{style:style,className:CodeBlock_styles_module_default.a.codeBlockTitle},codeBlockTitle),/*#__PURE__*/react_default.a.createElement("div",{className:CodeBlock_styles_module_default.a.codeBlockContent},/*#__PURE__*/react_default.a.createElement("div",{/* eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex */tabIndex:0,className:Object(clsx_m["a" /* default */])(className,CodeBlock_styles_module_default.a.codeBlock,'thin-scrollbar',(_clsx={},_clsx[CodeBlock_styles_module_default.a.codeBlockWithTitle]=codeBlockTitle,_clsx))},/*#__PURE__*/react_default.a.createElement("div",{className:CodeBlock_styles_module_default.a.codeBlockLines,style:style},tokens.map(function(line,i){if(line.length===1&&line[0].content===''){line[0].content='\n';// eslint-disable-line no-param-reassign
}var lineProps=getLineProps({line:line,key:i});if(highlightLines.includes(i+1)){lineProps.className=lineProps.className+" docusaurus-highlight-code-line";}return/*#__PURE__*/react_default.a.createElement("div",Object(esm_extends["a" /* default */])({key:i},lineProps),line.map(function(token,key){return/*#__PURE__*/react_default.a.createElement("span",Object(esm_extends["a" /* default */])({key:key},getTokenProps({token:token,key:key})));}));}))),/*#__PURE__*/react_default.a.createElement("button",{ref:button,type:"button","aria-label":"Copy code to clipboard",className:Object(clsx_m["a" /* default */])(CodeBlock_styles_module_default.a.copyButton),onClick:handleCopyCode},showCopied?'Copied':'Copy')));});});
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Heading/styles.css
var styles = __webpack_require__(69);

// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Heading/styles.module.css
var Heading_styles_module = __webpack_require__(70);
var Heading_styles_module_default = /*#__PURE__*/__webpack_require__.n(Heading_styles_module);

// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Heading/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ /* eslint-disable jsx-a11y/anchor-has-content, jsx-a11y/anchor-is-valid */var Heading_Heading=function Heading(Tag){return function TargetComponent(_ref){var _clsx;var id=_ref.id,props=Object(objectWithoutPropertiesLoose["a" /* default */])(_ref,["id"]);var _useThemeConfig=Object(lib["useThemeConfig"])(),hideOnScroll=_useThemeConfig.navbar.hideOnScroll;if(!id){return/*#__PURE__*/react_default.a.createElement(Tag,props);}return/*#__PURE__*/react_default.a.createElement(Tag,props,/*#__PURE__*/react_default.a.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:Object(clsx_m["a" /* default */])('anchor',(_clsx={},_clsx[Heading_styles_module_default.a.enhancedAnchor]=!hideOnScroll,_clsx)),id:id}),props.children,/*#__PURE__*/react_default.a.createElement("a",{className:"hash-link",href:"#"+id,title:"Direct link to heading"},"#"));};};/* harmony default export */ var theme_Heading = (Heading_Heading);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/MDXComponents/styles.module.css
var MDXComponents_styles_module = __webpack_require__(71);
var MDXComponents_styles_module_default = /*#__PURE__*/__webpack_require__.n(MDXComponents_styles_module);

// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/MDXComponents/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var MDXComponents={code:function code(props){var children=props.children;if(typeof children==='string'){if(!children.includes('\n')){return/*#__PURE__*/react_default.a.createElement("code",props);}return/*#__PURE__*/react_default.a.createElement(CodeBlock,props);}return children;},a:function a(props){return/*#__PURE__*/react_default.a.createElement(Link["a" /* default */],props);},pre:function pre(props){return/*#__PURE__*/react_default.a.createElement("div",Object(esm_extends["a" /* default */])({className:MDXComponents_styles_module_default.a.mdxCodeBlock},props));},h1:theme_Heading('h1'),h2:theme_Heading('h2'),h3:theme_Heading('h3'),h4:theme_Heading('h4'),h5:theme_Heading('h5'),h6:theme_Heading('h6')};/* harmony default export */ var theme_MDXComponents = (MDXComponents);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/NotFound.js
var NotFound = __webpack_require__(329);

// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/router.js
var router = __webpack_require__(220);

// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocPage/styles.module.css
var DocPage_styles_module = __webpack_require__(72);
var DocPage_styles_module_default = /*#__PURE__*/__webpack_require__.n(DocPage_styles_module);

// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocPage/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function DocPageContent(_ref){var _clsx,_siteConfig$themeConf,_siteConfig$themeConf2,_clsx2;var currentDocRoute=_ref.currentDocRoute,versionMetadata=_ref.versionMetadata,children=_ref.children;var _useDocusaurusContext=Object(useDocusaurusContext["default"])(),siteConfig=_useDocusaurusContext.siteConfig,isClient=_useDocusaurusContext.isClient;var pluginId=versionMetadata.pluginId,permalinkToSidebar=versionMetadata.permalinkToSidebar,docsSidebars=versionMetadata.docsSidebars,version=versionMetadata.version;var sidebarName=permalinkToSidebar[currentDocRoute.path];var sidebar=docsSidebars[sidebarName];var _useState=Object(react["useState"])(false),hiddenSidebarContainer=_useState[0],setHiddenSidebarContainer=_useState[1];var _useState2=Object(react["useState"])(false),hiddenSidebar=_useState2[0],setHiddenSidebar=_useState2[1];var toggleSidebar=Object(react["useCallback"])(function(){if(hiddenSidebar){setHiddenSidebar(false);}setHiddenSidebarContainer(!hiddenSidebarContainer);},[hiddenSidebar]);return/*#__PURE__*/react_default.a.createElement(Layout["a" /* default */],{key:isClient,searchMetadatas:{version:version,tag:Object(lib["docVersionSearchTag"])(pluginId,version)}},/*#__PURE__*/react_default.a.createElement("div",{className:DocPage_styles_module_default.a.docPage},sidebar&&/*#__PURE__*/react_default.a.createElement("div",{className:Object(clsx_m["a" /* default */])(DocPage_styles_module_default.a.docSidebarContainer,(_clsx={},_clsx[DocPage_styles_module_default.a.docSidebarContainerHidden]=hiddenSidebarContainer,_clsx)),onTransitionEnd:function onTransitionEnd(e){if(!e.currentTarget.classList.contains(DocPage_styles_module_default.a.docSidebarContainer)){return;}if(hiddenSidebarContainer){setHiddenSidebar(true);}},role:"complementary"},/*#__PURE__*/react_default.a.createElement(theme_DocSidebar,{key:// Reset sidebar state on sidebar changes
// See https://github.com/facebook/docusaurus/issues/3414
sidebarName,sidebar:sidebar,path:currentDocRoute.path,sidebarCollapsible:(_siteConfig$themeConf=(_siteConfig$themeConf2=siteConfig.themeConfig)===null||_siteConfig$themeConf2===void 0?void 0:_siteConfig$themeConf2.sidebarCollapsible)!==null&&_siteConfig$themeConf!==void 0?_siteConfig$themeConf:true,onCollapse:toggleSidebar,isHidden:hiddenSidebar}),hiddenSidebar&&/*#__PURE__*/react_default.a.createElement("div",{className:DocPage_styles_module_default.a.collapsedDocSidebar,title:"Expand sidebar","aria-label":"Expand sidebar",tabIndex:0,role:"button",onKeyDown:toggleSidebar,onClick:toggleSidebar})),/*#__PURE__*/react_default.a.createElement("main",{className:DocPage_styles_module_default.a.docMainContainer},/*#__PURE__*/react_default.a.createElement("div",{className:Object(clsx_m["a" /* default */])('container padding-vert--lg',DocPage_styles_module_default.a.docItemWrapper,(_clsx2={},_clsx2[DocPage_styles_module_default.a.docItemWrapperEnhanced]=hiddenSidebarContainer,_clsx2))},/*#__PURE__*/react_default.a.createElement(esm["a" /* MDXProvider */],{components:theme_MDXComponents},children)))));}function DocPage(props){var docRoutes=props.route.routes,versionMetadata=props.versionMetadata,location=props.location;var currentDocRoute=docRoutes.find(function(docRoute){return Object(router["matchPath"])(location.pathname,docRoute);});if(!currentDocRoute){return/*#__PURE__*/react_default.a.createElement(NotFound["default"],props);}return/*#__PURE__*/react_default.a.createElement(DocPageContent,{currentDocRoute:currentDocRoute,versionMetadata:versionMetadata},Object(renderRoutes["a" /* default */])(docRoutes));}/* harmony default export */ var theme_DocPage = __webpack_exports__["default"] = (DocPage);

/***/ }),

/***/ 180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MDXContext */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDXProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return createElement; });
/* unused harmony export useMDXComponents */
/* unused harmony export withMDXComponents */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

var isFunction = function isFunction(obj) {
  return typeof obj === 'function';
};

var MDXContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext({});
var withMDXComponents = function withMDXComponents(Component) {
  return function (props) {
    var allComponents = useMDXComponents(props.components);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, _extends({}, props, {
      components: allComponents
    }));
  };
};
var useMDXComponents = function useMDXComponents(components) {
  var contextComponents = react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(MDXContext);
  var allComponents = contextComponents;

  if (components) {
    allComponents = isFunction(components) ? components(contextComponents) : _objectSpread2(_objectSpread2({}, contextComponents), components);
  }

  return allComponents;
};
var MDXProvider = function MDXProvider(props) {
  var allComponents = useMDXComponents(props.components);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MDXContext.Provider, {
    value: allComponents
  }, props.children);
};

var TYPE_PROP_NAME = 'mdxType';
var DEFAULTS = {
  inlineCode: 'code',
  wrapper: function wrapper(_ref) {
    var children = _ref.children;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {}, children);
  }
};
var MDXCreateElement = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.forwardRef(function (props, ref) {
  var propComponents = props.components,
      mdxType = props.mdxType,
      originalType = props.originalType,
      parentName = props.parentName,
      etc = _objectWithoutProperties(props, ["components", "mdxType", "originalType", "parentName"]);

  var components = useMDXComponents(propComponents);
  var type = mdxType;
  var Component = components["".concat(parentName, ".").concat(type)] || components[type] || DEFAULTS[type] || originalType;

  if (propComponents) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, _objectSpread2(_objectSpread2({
      ref: ref
    }, etc), {}, {
      components: propComponents
    }));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, _objectSpread2({
    ref: ref
  }, etc));
});
MDXCreateElement.displayName = 'MDXCreateElement';
function createElement (type, props) {
  var args = arguments;
  var mdxType = props && props.mdxType;

  if (typeof type === 'string' || mdxType) {
    var argsLength = args.length;
    var createElementArgArray = new Array(argsLength);
    createElementArgArray[0] = MDXCreateElement;
    var newProps = {};

    for (var key in props) {
      if (hasOwnProperty.call(props, key)) {
        newProps[key] = props[key];
      }
    }

    newProps.originalType = type;
    newProps[TYPE_PROP_NAME] = typeof type === 'string' ? type : mdxType;
    createElementArgArray[1] = newProps;

    for (var i = 2; i < argsLength; i++) {
      createElementArgArray[i] = args[i];
    }

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement.apply(null, createElementArgArray);
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement.apply(null, args);
}




/***/ }),

/***/ 329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _theme_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(257);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function NotFound(){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_theme_Layout__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],{title:"Page Not Found"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main",{className:"container margin-vert--xl"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"row"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"col col--6 col--offset-3"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1",{className:"hero__title"},"Page Not Found"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"We could not find what you were looking for."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))));}/* harmony default export */ __webpack_exports__["default"] = (NotFound);

/***/ }),

/***/ 380:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const copyTextToClipboard = (input, {target = document.body} = {}) => {
	const element = document.createElement('textarea');
	const previouslyFocusedElement = document.activeElement;

	element.value = input;

	// Prevent keyboard from showing on mobile
	element.setAttribute('readonly', '');

	element.style.contain = 'strict';
	element.style.position = 'absolute';
	element.style.left = '-9999px';
	element.style.fontSize = '12pt'; // Prevent zooming on iOS

	const selection = document.getSelection();
	let originalRange = false;
	if (selection.rangeCount > 0) {
		originalRange = selection.getRangeAt(0);
	}

	target.append(element);
	element.select();

	// Explicit selection workaround for iOS
	element.selectionStart = 0;
	element.selectionEnd = input.length;

	let isSuccess = false;
	try {
		isSuccess = document.execCommand('copy');
	} catch (_) {}

	element.remove();

	if (originalRange) {
		selection.removeAllRanges();
		selection.addRange(originalRange);
	}

	// Get the focus back on the previously focused element, if any
	if (previouslyFocusedElement) {
		previouslyFocusedElement.focus();
	}

	return isSuccess;
};

module.exports = copyTextToClipboard;
// TODO: Remove this for the next major release
module.exports.default = copyTextToClipboard;


/***/ }),

/***/ 381:
/***/ (function(module, exports) {

/**
 * @param {string} string    The string to parse
 * @returns {Array<number>}  Returns an energetic array.
 */
function parsePart(string) {
  let res = [];
  let m;

  for (let str of string.split(",").map((str) => str.trim())) {
    // just a number
    if (/^-?\d+$/.test(str)) {
      res.push(parseInt(str, 10));
    } else if (
      (m = str.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/))
    ) {
      // 1-5 or 1..5 (equivalent) or 1...5 (doesn't include 5)
      let [_, lhs, sep, rhs] = m;

      if (lhs && rhs) {
        lhs = parseInt(lhs);
        rhs = parseInt(rhs);
        const incr = lhs < rhs ? 1 : -1;

        // Make it inclusive by moving the right 'stop-point' away by one.
        if (sep === "-" || sep === ".." || sep === "\u2025") rhs += incr;

        for (let i = lhs; i !== rhs; i += incr) res.push(i);
      }
    }
  }

  return res;
}

exports.default = parsePart;
module.exports = parsePart;


/***/ })

}]);