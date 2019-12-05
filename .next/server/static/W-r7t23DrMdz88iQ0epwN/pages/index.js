module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "0bYB":
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RNiq");


/***/ }),

/***/ "9Jkg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("fozc");

/***/ }),

/***/ "RNiq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js
var stringify = __webpack_require__("9Jkg");
var stringify_default = /*#__PURE__*/__webpack_require__.n(stringify);

// EXTERNAL MODULE: external "isomorphic-unfetch"
var external_isomorphic_unfetch_ = __webpack_require__("0bYB");
var external_isomorphic_unfetch_default = /*#__PURE__*/__webpack_require__.n(external_isomorphic_unfetch_);

// CONCATENATED MODULE: ./api/fetch.js


/* harmony default export */ var fetch = (async (query = '', variables = {}) => {
  const res = await external_isomorphic_unfetch_default()('http://localhost:3001/admin/api/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: stringify_default()({
      query: query,
      variables: variables
    })
  });

  if (res.status === 200) {
    const json = await res.json();
    return json.data;
  }

  return {
    status: res.status,
    statusText: res.statusText,
    body: res.body
  };
});
// CONCATENATED MODULE: ./api/requests.js

/* harmony default export */ var requests = ({
  getPages: () => fetch(`
		query { 
			allPages {
			 id 
			} 
		}
	`),
  getPage: id => fetch(`
		query($id: ID!) {
			Page (where: {id: $id}) {
				id, 
				routePath
			}
		}
	`, {
    "id": id
  }),
  getPageByRoutePath: routePath => fetch(`
		query($routePath: String!) {
			allPages (where: {routePath_i: $routePath}) {
				id,
				routePath,
				pageTitle,
				description
			}
		}
	`, {
    "routePath": routePath
  })
});
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// CONCATENATED MODULE: ./components/head.js

var __jsx = external_react_default.a.createElement;

/* harmony default export */ var head = (() => __jsx(head_default.a, null, __jsx("title", null, "Home"), __jsx("meta", {
  charSet: "utf-8"
}), __jsx("meta", {
  name: "viewport",
  content: "width=device-width, initial-scale=1, maximum-scale=1"
}), __jsx("link", {
  href: "http://fonts.googleapis.com/css?family=Lato:300,400,400italic,600,700|Raleway:300,400,500,600,700|Crete+Round:400italic",
  rel: "stylesheet",
  type: "text/css"
}), __jsx("link", {
  rel: "stylesheet",
  href: "static/css/bootstrap.css",
  type: "text/css"
}), __jsx("link", {
  rel: "stylesheet",
  href: "static/css/bootstrap-rtl.css",
  type: "text/css"
}), __jsx("link", {
  rel: "stylesheet",
  href: "static/css/style.css",
  type: "text/css"
}), __jsx("link", {
  rel: "stylesheet",
  href: "static/css/dark.css",
  type: "text/css"
}), __jsx("link", {
  rel: "stylesheet",
  href: "static/css/dark-rtl.css",
  type: "text/css"
}), __jsx("link", {
  rel: "stylesheet",
  href: "static/css/font-icons.css",
  type: "text/css"
}), __jsx("link", {
  rel: "stylesheet",
  href: "static/css/font-icons-rtl.css",
  type: "text/css"
}), __jsx("link", {
  rel: "stylesheet",
  href: "static/css/animate.css",
  type: "text/css"
}), __jsx("link", {
  rel: "stylesheet",
  href: "static/css/magnific-popup.css",
  type: "text/css"
}), __jsx("link", {
  rel: "stylesheet",
  href: "static/css/responsive.css",
  type: "text/css"
}), __jsx("meta", {
  name: "viewport",
  content: "width=device-width, initial-scale=1"
})));
// CONCATENATED MODULE: ./components/footer.js

var footer_jsx = external_react_default.a.createElement;
/* harmony default export */ var footer = (() => {
  return footer_jsx("div", null, footer_jsx("script", {
    src: "/static/jquery.js"
  }), footer_jsx("script", {
    src: "/static/plugins.js"
  }), footer_jsx("script", {
    src: "/static/functions.js"
  }));
});
// CONCATENATED MODULE: ./components/home/nav.js

var nav_jsx = external_react_default.a.createElement;
/* harmony default export */ var nav = (content => {
  return nav_jsx("div", null, nav_jsx("header", {
    id: "header",
    className: "clearfix static-sticky border-bottom-0"
  }, nav_jsx("div", {
    id: "header-wrap"
  }, nav_jsx("div", {
    className: "container clearfix"
  }, nav_jsx("div", {
    id: "primary-menu-trigger"
  }, nav_jsx("i", {
    className: "icon-reorder"
  })), nav_jsx("div", {
    id: "logo"
  }, nav_jsx("a", {
    href: "index.html",
    className: "standard-logo",
    "data-sticky-logo": "demos/coworking/images/logo-sticky.png"
  }, nav_jsx("img", {
    src: "demos/coworking/images/logo.png",
    alt: "Canvas Logo"
  })), nav_jsx("a", {
    href: "index.html",
    className: "retina-logo",
    "data-sticky-logo": "demos/coworking/images/logo-sticky@2x.png"
  }, nav_jsx("img", {
    src: "demos/coworking/images/logo@2x.png",
    alt: "Canvas Logo"
  }))), nav_jsx("nav", {
    id: "primary-menu"
  }, nav_jsx("ul", null, nav_jsx("li", {
    className: "current"
  }, nav_jsx("a", {
    href: "#"
  }, nav_jsx("div", null, "Home"))), nav_jsx("li", null, nav_jsx("a", {
    href: "#"
  }, nav_jsx("div", null, "About Us"))), nav_jsx("li", null, nav_jsx("a", {
    href: "#"
  }, nav_jsx("div", null, "Rates"))), nav_jsx("li", null, nav_jsx("a", {
    href: "#"
  }, nav_jsx("div", null, "Contact Us")))), nav_jsx("div", {
    id: "top-account"
  }, nav_jsx("a", {
    href: "tel:+618-234-532-45"
  }, nav_jsx("i", {
    className: "icon-call"
  }), " ", nav_jsx("span", null, "+(61)8-234-532-45"))))))));
});
// CONCATENATED MODULE: ./pages/index.js

var pages_jsx = external_react_default.a.createElement;






class pages_Home extends external_react_["Component"] {
  static async getInitialProps() {
    const data = await requests.getPageByRoutePath("/");
    return data.allPages && data.allPages.length ? {
      content: data.allPages[0]
    } : null;
  }

  componentDidMount() {
    $.fn.clientSide();
  }

  render() {
    const {
      content
    } = this.props;

    if (!content) {
      return '404';
    }

    return pages_jsx("div", null, pages_jsx(head, {
      content: content
    }), pages_jsx("p", {
      className: "example"
    }, "Welcome to Next.js! sss"), pages_jsx("div", {
      id: "wrapper",
      className: "clearfix"
    }, pages_jsx(nav, null)), pages_jsx("div", null, pages_jsx("br", null), pages_jsx("br", null), pages_jsx("br", null), pages_jsx("br", null), pages_jsx("br", null), pages_jsx("br", null), pages_jsx("br", null), pages_jsx("br", null), pages_jsx("br", null), pages_jsx("br", null), pages_jsx("br", null), pages_jsx("br", null), pages_jsx("br", null), pages_jsx("br", null), pages_jsx("br", null), pages_jsx("br", null), pages_jsx("br", null), pages_jsx("br", null), pages_jsx("br", null), pages_jsx("br", null), pages_jsx("br", null), pages_jsx("br", null), pages_jsx("br", null), pages_jsx("br", null), pages_jsx("br", null), pages_jsx("br", null), pages_jsx("br", null), pages_jsx("br", null), pages_jsx("br", null), pages_jsx("br", null), pages_jsx("br", null), pages_jsx("br", null), pages_jsx("br", null), pages_jsx("br", null), pages_jsx("br", null), pages_jsx("br", null), pages_jsx("br", null), pages_jsx("br", null), pages_jsx("br", null), pages_jsx("br", null), pages_jsx("br", null), pages_jsx("br", null), pages_jsx("br", null), pages_jsx("br", null), pages_jsx("br", null), pages_jsx("br", null), pages_jsx("br", null), pages_jsx("br", null), pages_jsx("br", null), pages_jsx("br", null), pages_jsx("br", null), pages_jsx("br", null), pages_jsx("br", null), pages_jsx("br", null), pages_jsx("br", null), pages_jsx("br", null), pages_jsx("br", null), pages_jsx("br", null), pages_jsx("br", null), pages_jsx("br", null), pages_jsx("br", null), pages_jsx("br", null), pages_jsx("br", null), pages_jsx("br", null), pages_jsx("br", null), pages_jsx("br", null), pages_jsx("br", null), pages_jsx("br", null), pages_jsx("br", null), pages_jsx("br", null), pages_jsx("br", null), pages_jsx("br", null), pages_jsx("br", null), pages_jsx("br", null), pages_jsx("br", null), pages_jsx("br", null), pages_jsx("br", null), pages_jsx("br", null), pages_jsx("br", null), pages_jsx("br", null), pages_jsx("br", null), pages_jsx("br", null), pages_jsx("br", null), pages_jsx("br", null), pages_jsx("br", null), pages_jsx("br", null), pages_jsx("br", null), pages_jsx("br", null), pages_jsx("br", null), pages_jsx("br", null), pages_jsx("br", null), pages_jsx("br", null), pages_jsx("br", null), pages_jsx("br", null), pages_jsx("br", null), pages_jsx("br", null), pages_jsx("br", null), pages_jsx("br", null), pages_jsx("br", null), pages_jsx("br", null), pages_jsx("br", null), pages_jsx("br", null), pages_jsx("br", null), pages_jsx("br", null), pages_jsx("br", null), pages_jsx("br", null), pages_jsx("br", null), pages_jsx("br", null), pages_jsx("br", null), pages_jsx("br", null), pages_jsx("br", null), pages_jsx("br", null), pages_jsx("br", null), pages_jsx("br", null), pages_jsx("br", null), pages_jsx("br", null), pages_jsx("br", null), pages_jsx("br", null), pages_jsx("br", null), pages_jsx("br", null), pages_jsx("br", null), pages_jsx("br", null), pages_jsx("br", null), pages_jsx("br", null), pages_jsx("br", null), pages_jsx("br", null), pages_jsx("br", null), pages_jsx("br", null), pages_jsx("br", null), pages_jsx("br", null), pages_jsx("br", null), pages_jsx("br", null), pages_jsx("br", null), pages_jsx("br", null), pages_jsx("br", null), pages_jsx("br", null), pages_jsx("br", null), pages_jsx("br", null), pages_jsx("br", null), pages_jsx("br", null), pages_jsx("br", null), pages_jsx("br", null), pages_jsx("br", null), pages_jsx("br", null), pages_jsx("br", null), pages_jsx("br", null), pages_jsx("br", null), pages_jsx("br", null), pages_jsx("br", null), pages_jsx("br", null)), pages_jsx("div", {
      id: "gotoTop",
      className: "icon-angle-up"
    }, "top"), pages_jsx(footer, null));
  }

}

/* harmony default export */ var pages = __webpack_exports__["default"] = (pages_Home);

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "fozc":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });