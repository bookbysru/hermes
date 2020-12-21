(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

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

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "frontMatter", function() { return frontMatter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "metadata", function() { return metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rightToc", function() { return rightToc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MDXContent; });
/* harmony import */ var _home_konkmak_docusarus_hermes_hermes_website_node_modules_docusaurus_core_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _home_konkmak_docusarus_hermes_hermes_website_node_modules_docusaurus_core_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(180);
var frontMatter={id:'design',title:'Design Overview'};var metadata={"unversionedId":"design","id":"design","isDocsHomePage":false,"title":"Design Overview","description":"This is the design document for the Hermes Engine.","source":"@site/../doc/Design.md","slug":"/design","permalink":"/hermes/docs/design","editUrl":"https://github.com/facebook/hermes/blob/master/website/../doc/Design.md","version":"current","sidebar":"docs","previous":{"title":"Building with Emscripten","permalink":"/hermes/docs/emscripten"},"next":{"title":"Design of the IR","permalink":"/hermes/docs/ir"}};/* @jsxRuntime classic */ /* @jsx mdx */var rightToc=[{value:'JSON estree parser',id:'json-estree-parser',children:[]},{value:'JavaScript parser',id:'javascript-parser',children:[]},{value:'IRGen',id:'irgen',children:[]},{value:'Hermes Bytecode Generator',id:'hermes-bytecode-generator',children:[{value:'Hermes Bytecode Instructions',id:'hermes-bytecode-instructions',children:[]},{value:'Bytecode File Format',id:'bytecode-file-format',children:[]},{value:'Serialization / Deserialization',id:'serialization--deserialization',children:[]},{value:'Interaction with the VM',id:'interaction-with-the-vm',children:[]}]},{value:'Interpreter',id:'interpreter',children:[]},{value:'Garbage Collector',id:'garbage-collector',children:[]}];var layoutProps={rightToc:rightToc};var MDXLayout="wrapper";function MDXContent(_ref){var components=_ref.components,props=Object(_home_konkmak_docusarus_hermes_hermes_website_node_modules_docusaurus_core_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_ref,["components"]);return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])(MDXLayout,Object(_home_konkmak_docusarus_hermes_hermes_website_node_modules_docusaurus_core_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"This is the design document for the Hermes Engine."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("h2",{"id":"json-estree-parser"},"JSON estree parser"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("h2",{"id":"javascript-parser"},"JavaScript parser"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("h2",{"id":"irgen"},"IRGen"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("h2",{"id":"hermes-bytecode-generator"},"Hermes Bytecode Generator"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"The Hermes bytecode generator is responsible for translating the\nHermes high-level IR into Hermes bytecode. This section only describes the\ngeneration of the opcode stream, not the whole bundle file format that is\ndescribed in a separate document."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"The bytecode is a register-based bytecode. The number of registers is\ninfinite, but there are some restrictions on the registers. For example,\nregisters that are allocated to call instructions must be consecutive, and most\ninstructions only accept an 8-bit register index."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"The first phase of bytecode generation is lowering of some instructions to\ntarget-specific instructions. Next, the register allocator allocates\nregisters for each instruction in the lowered IR. Notice that the Hermes IR\nhas a single return value per instruction. We model multiple return values or\nin-out variables using alloc-stack instructions."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"One interesting design decision here is that register allocation happens on the\nIR prior to instruction selection. Performing register allocation prior to\nlowering is often done in JIT compilers where the lowering phase is trivial and\nclose to a 1:1 translation between high-level IR and the low-level target IR.\nThe lowered Hermes IR is very close to the bytecode format with a few\nexceptions: the handling of variables, the representation of constants and the\nrepresentation of stack-allocated variables. Stack allocated registers are\nimplemented as values that are pinned into a specific registers (at least during\nthe lifetime of the stack allocation). Load/Store instructions from the stack\nallocation values are lowered into MOV instructions."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"The current register allocation implementation is a very simple linear scan. The\nallocation has four main steps. First, we number the instructions in the\nfunctions, and traverse the basic blocks in the function in reverse-post-order\nscan.  Second, we calculate the liveness graph of the result of each\ninstruction in the function. We propagate this information across the function\nwith a simple data-flow scan.  Third, we calculate the liveness interval of each\ninstruction. Finally, we scan the instructions in the function one by one and\nassign registers. We maintain a list of currently live intervals that correspond\nto the register file. We represent the register file with a simple bit vector\nand prefer to allocate registers from the beginning of the file.  When we run out\nof registers we simply allocate new registers. When we reach instructions that\nrequire target-specific handling we call the backend to fill in the details. For\nexample, the Hermes backend handles call instructions in a special way.  At the\nmoment we do not coalesce values and our PHI nodes generate two MOVs."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"After register allocation we lower the Hermes IR into pseudo opcodes using a\none-to-one or one-to-many translation. There are a few interesting optimizations\nduring this translation.  The first interesting optimization is the optimization\nthat eliminates redundant constant jumps. It is possible to eliminate many\nbranches by scheduling basic blocks in a way that maximizes the number of\nfall-through opportunities. The current algorithm uses a greedy approach where\nwe emit basic blocks in some order (that starts with the entry block), and\nattempt to place the fall-through destination right after terminators that\nbranch (conditional and unconditional branches) if the block has not been\ngenerated already. In the future we may need to investigate if this greedy\nalgorithm is optimal."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"When we generate the opcode stream we need to encode jump targets. However, when\nwe emit opcodes that refer to jump destinations that we have not yet emitted\nthen we do not know the address of the destination. We solve this problem by\nemitting a dummy value and keeping a side-table that saves the location that we\nneed to patch. When we finish emitting all of the opcodes we scan the side table\nand patch all of the locations that refer to previously unresolved addresses."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("h3",{"id":"hermes-bytecode-instructions"},"Hermes Bytecode Instructions"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"Hermes bytecode adopts variable-length instructions. Each operand to a bytecode\ninstruction has a fixed-type and width, defined by the opcode. For instance,\nJmp takes a 1-byte offset as the jump target, while JmpLong takes a 4-byte\noffset as the jump target.  Fixed-type/width instructions allow us to decode\nthem efficiently in the interpreter.\nHowever we are trading off with an increasing number of\nopcodes to handle different operand widths (e.g. two Jmp opcodes instead of\none). We believe that we are able to avoid opcode explosion by generating the\ncode smartly. A full list of Hermes bytecode opcodes can be found in\nBytecodeList.def. There are a few interesting design decisions worth mentioning\nhere:"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("ul",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},"Registers: We discovered that in all of the Facebook mobile JS code as well as\nmajority of external benchmarks, no function ever uses more than 256 registers.\nHence we always use 1-byte to represent register index, which will be most\nefficient for the normal cases. Spilling is implemented via MovLong which\nsupports 32 bit register indices."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},"Constants: we achieve constant loading fully through instructions.\nFor fixed-value constants such as undefined, null, true and false, we introduce\na corresponding load opcode for each of them into a register (e.g.\nLoadConstUndefined ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"li"},"dstReg"),"); For 32-bit integers, we introduce LoadConstInt\nopcode, which takes a 4-bytes immediate value and load it into a register; for\ndoubles, we introduce LoadConstDouble, which takes a 8-bytes immediate value\nand load it into a register; finally for strings, we introduce LoadConstString,\nwhich takes an index to the string table from which to load into a register.\nDoing so can significantly reduce the size of the bytecode, however it does\nintroduce a few more opcodes which could slow down the interpreter."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},"Non-local Variable Access: Local variables are translated to registers.\nNon-local variables are variables from different scopes/environments. Without a\ncompiler, accessing non-local variables in JavaScript usually means a scope\nlookup (i.e. locating the closest scope in the scope chain that defines the\nvariable), followed by a symbol lookup in that scope.\nHowever with a compiler, it is possible to statically determine the scope of\nevery variable, and hence there is no need for a real scope lookup. In Hermes\nbackend, for each non-local variable access, we simply calculate the delta\nbetween the defining scope and the current scope, and locate such scope using\nthe delta (i.e. number of times the VM needs to follow the scope chain)\ndirectly. Furthermore, since we know exactly what and how many variables are\ndefined in each scope (except the global scope), we skip the symbol lookup in\nthe scope but instead using a direct index access to retrieve such variable in\nthe located scope. We believe that skipping both scope lookups and symbol\nlookups can significantly improve the runtime performance.")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("h3",{"id":"bytecode-file-format"},"Bytecode File Format"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"The bytecode file contains the bytecode as well as necessary metadata and\nauxiliary data sections for the VM to execute properly. The file format is\ndefined in BytecodeFileFormat.h, and structures as following:"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("ul",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},"FILE HEADER: The file header contains the MAGIC, the current format version,\nand a list of global metadata, including the file size, offset of the function\nheader table, offset of the string table, index of the global code and number\nof functions."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},"FUNCTION HEADER TABLE: This is a list of function headers. Each function header\ncontains metadata of a function, such as the offset of the function bytecode in\nthe file, number of parameters, size of the frame/environment, size of the\nbytecode and etc. This list also naturally assigns an index to each function in\nthe file, which makes access to each function convenient in the VM."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},"STRING TABLE&STORAGE: All the strings used in all functions are uniqued and\nstored in the section to avoid redundant string storage. This section contains\ntwo parts: The string storage, which is a long sequence of raw characters; the\nstring table, which is a list of pairs, each pair represents a string through\nthe offset to the string storage and the length of the string. The string table\nalso naturally assigns an index to each unique string, which makes it\nconvenient to refer to the strings in the bytecode."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},"FUNCTION BYTECODES: This section is the core section of the bytecode file,\ncontaining a list of compiled function body. The function body contains its\nexecutable bytecode, along with a few tables that are used by the bytecode,\nincluding the exception handler table (tells where to jump to when exception\nhappens), the array buffer (used to initialize constant arrays). Likely there\nwill be a few more tables coming to support RegExp and debug information.")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("h3",{"id":"serialization--deserialization"},"Serialization / Deserialization"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"Because the Hermes backend is in the same codebase as the VM, there are\nopportunities for us to share code between them. In particular, we want the\nserialization in the backend to be able to share the same target data structure\nas the deserialization in the VM. This introduces some interesting questions:"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("ul",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},"How can we share data/code without having to link too much code on each side?"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},"How to avoid data copies during both serialization and deserialization?")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"We introduce two design pieces to achieve code sharing efficiently:"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("ul",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},"Generator: During serialization, we often need many auxiliary data and\nfunctionality to aid the process, though many of that will not be needed in the\nend. To ensure the separation of the complexity and allow the deserialization\nto share data/code most efficiently, we use a BytecodeModuleGenerator and a\nlist of BytecodeFunctionGenerator for the purpose of generating bytecode and\nserialization. After all the processing, they will eventually generate a\nBytecodeModule and a list of BytecodeFunction that contains minimum amount of\ndata/functionality required to generate the bytecode file. Hence we can share\nthis minimum data structure between the backend and the VM."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},"StreamVector: During serialization, we need to move/copy the part of the\nauxiliary data  from the generator to the shared minimum data structure; during\ndeserialization, we need to move/copy the content of the file into the shared\nminimum data structure. Both can be expensive if not managed properly. To\nminimize the copying overhead, we abstracted the complexity using a class named\nStreamVector. During serialization, StreamVector allows us to move the data out\nof the generator without copying (through std::vector::swap); during\ndeserialization, StreamVector allows us to take in a raw data pointer to the\nmemory buffer from the file directly, without having to copy them too.")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("h3",{"id":"interaction-with-the-vm"},"Interaction with the VM"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"At runtime, the VM will deserialize the bytecode from the file and interpret\nit. A few components are involved:\nBytecodeModule: This is the in-memory representation of the whole bytecode\nfile, containing all the bytecode functions. During both serialization and\ndeserialization, this data structure is generated, as a static representation\nof the whole file."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("ul",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},"BytecodeFunction: This is the in-memory representation of a function\u2019s\nbytecode."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},"RuntimeModule: This is the dynamic version of the bytecode module, containing\nnecessary runtime information for interpretation."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},"CodeBlock: This is the dynamic version of the bytecode function, containing\nnecessary runtime information to execute a function."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},"Domain: A GC-managed proxy which references a set of RuntimeModules, acting as\na bridge between the GC heap and the C++ heap."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},"JSFunction: This is the Function object in JavaScript.")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"It is important (and tricky) to efficiently manage the memory and ownership of\nthese objects properly at runtime. The following figure demonstrates it. Own\nmeans one manages the memory of the other through unique_ptr; Pointer means one\nhas a raw pointer to the other, without any ownership. Indirectly Own is a\nspecial kind of ownership, which will be explained below. To summarize the\nownership:"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("ul",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},"JSFunction is a JavaScript object, and hence managed by the heap/garbage\ncollector directly."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},"JSFunction owns a GC-visible reference to a Domain, and a pointer to the\ncorresponding CodeBlock to execute."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},"CodeBlock contains a pointer to both the RuntimeModule to access runtime\ninformation, as well as a pointer to the corresponding BytecodeFunction which\ncontains the static function bytecode to execute."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},"BytecodeModule owns a list of BytecodeFunction."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},"RuntimeModule owns a list of CodeBlock, as well as the corresponding\nBytecodeModule."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},"Domain owns one or more RuntimeModule. This is the mechanism by which an extant\nJSFunction keeps the backing bytecode alive.")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("h2",{"id":"interpreter"},"Interpreter"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("h2",{"id":"garbage-collector"},"Garbage Collector"));};MDXContent.isMDXComponent=true;

/***/ })

}]);