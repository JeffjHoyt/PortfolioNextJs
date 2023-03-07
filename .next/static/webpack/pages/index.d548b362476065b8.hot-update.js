"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Projects.js":
/*!********************************!*\
  !*** ./components/Projects.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/script */ \"./node_modules/next/script.js\");\n/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_script__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _ProjectList_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ProjectList.json */ \"./components/ProjectList.json\");\n\n\n\n\n\n\n\nconst Projects = ()=>{\n    const projectData = _ProjectList_json__WEBPACK_IMPORTED_MODULE_5__.projects;\n    const projectsList = Object.keys(projectData).map((project)=>{\n        const projectValue = projectData[project];\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Card, {\n            as: \"a\",\n            className: \"hoverEffect\",\n            onClick: ()=>window.open(projectValue.src, \"_blank\"),\n            style: {\n                paddingTop: \"0\",\n                minWidth: \"330px\",\n                overflowX: \"hidden\",\n                overflowY: \"hidden\",\n                backgroundColor: \"white\",\n                maxWidth: \"400px\",\n                cursor: \"pointer\",\n                borderRadius: \"10px\",\n                boxShadow: \"rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset\"\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Card.Img, {\n                    variant: \"top\",\n                    src: projectValue.image,\n                    alt: projectValue.alt,\n                    style: {\n                        marginTop: \"0\",\n                        overflow: \"hidden\",\n                        paddingLeft: \"0 !important\",\n                        paddingRight: \"0 !important\",\n                        paddingTop: \"0px\"\n                    }\n                }, void 0, false, {\n                    fileName: \"/Users/jeffhoyt/Documents/PortfolioNextJs/components/Projects.js\",\n                    lineNumber: 32,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Card.Body, {\n                    style: {\n                        backgroundColor: \"white\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Card.Title, {\n                            style: {\n                                backgroundColor: \"white\",\n                                color: \"black\"\n                            },\n                            children: projectValue.name\n                        }, void 0, false, {\n                            fileName: \"/Users/jeffhoyt/Documents/PortfolioNextJs/components/Projects.js\",\n                            lineNumber: 45,\n                            columnNumber: 11\n                        }, undefined),\n                        console.log(projectValue.description),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Card.Text, {\n                            style: {\n                                backgroundColor: \"white\",\n                                color: \"black\"\n                            },\n                            children: [\n                                projectValue.description,\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/jeffhoyt/Documents/PortfolioNextJs/components/Projects.js\",\n                                    lineNumber: 51,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/jeffhoyt/Documents/PortfolioNextJs/components/Projects.js\",\n                                    lineNumber: 52,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    style: {\n                                        fontWeight: \"bold\"\n                                    },\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            children: \"Tools: \"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/jeffhoyt/Documents/PortfolioNextJs/components/Projects.js\",\n                                            lineNumber: 54,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        projectValue.tools\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/jeffhoyt/Documents/PortfolioNextJs/components/Projects.js\",\n                                    lineNumber: 53,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/jeffhoyt/Documents/PortfolioNextJs/components/Projects.js\",\n                            lineNumber: 49,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Card.Link, {\n                            style: {\n                                backgroundColor: \"white\"\n                            },\n                            href: projectValue.src,\n                            children: \"View Project\"\n                        }, void 0, false, {\n                            fileName: \"/Users/jeffhoyt/Documents/PortfolioNextJs/components/Projects.js\",\n                            lineNumber: 58,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/jeffhoyt/Documents/PortfolioNextJs/components/Projects.js\",\n                    lineNumber: 44,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, projectValue.id, true, {\n            fileName: \"/Users/jeffhoyt/Documents/PortfolioNextJs/components/Projects.js\",\n            lineNumber: 14,\n            columnNumber: 7\n        }, undefined);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Projects\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jeffhoyt/Documents/PortfolioNextJs/components/Projects.js\",\n                        lineNumber: 71,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jeffhoyt/Documents/PortfolioNextJs/components/Projects.js\",\n                        lineNumber: 72,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jeffhoyt/Documents/PortfolioNextJs/components/Projects.js\",\n                        lineNumber: 73,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jeffhoyt/Documents/PortfolioNextJs/components/Projects.js\",\n                        lineNumber: 74,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        href: \"https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css\",\n                        rel: \"stylesheet\",\n                        integrity: \"sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD\",\n                        crossOrigin: \"anonymous\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jeffhoyt/Documents/PortfolioNextJs/components/Projects.js\",\n                        lineNumber: 75,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jeffhoyt/Documents/PortfolioNextJs/components/Projects.js\",\n                lineNumber: 70,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_script__WEBPACK_IMPORTED_MODULE_4___default()), {\n                src: \"https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js\",\n                integrity: \"sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN\",\n                crossOrigin: \"anonymous\"\n            }, void 0, false, {\n                fileName: \"/Users/jeffhoyt/Documents/PortfolioNextJs/components/Projects.js\",\n                lineNumber: 82,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Container, {\n                fluid: true,\n                styleName: \"projects\",\n                id: \"projects\",\n                style: {\n                    backgroundColor: \"#e0fbfc\",\n                    paddingTop: \"10vh\",\n                    paddingBottom: \"10vh\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Row, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Col, {\n                            className: \"text-center\",\n                            style: {\n                                color: \"black\",\n                                paddingBottom: \"5vh\"\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    children: \"Projects\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/jeffhoyt/Documents/PortfolioNextJs/components/Projects.js\",\n                                    lineNumber: 103,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/jeffhoyt/Documents/PortfolioNextJs/components/Projects.js\",\n                                lineNumber: 102,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/jeffhoyt/Documents/PortfolioNextJs/components/Projects.js\",\n                            lineNumber: 98,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/jeffhoyt/Documents/PortfolioNextJs/components/Projects.js\",\n                        lineNumber: 97,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Row, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Col, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Row, {\n                                style: {\n                                    gap: \"50px\",\n                                    marginTop: \"20px\",\n                                    marginBottom: \"20px\"\n                                },\n                                className: \"justify-content-center\",\n                                children: projectsList\n                            }, void 0, false, {\n                                fileName: \"/Users/jeffhoyt/Documents/PortfolioNextJs/components/Projects.js\",\n                                lineNumber: 109,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/jeffhoyt/Documents/PortfolioNextJs/components/Projects.js\",\n                            lineNumber: 108,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/jeffhoyt/Documents/PortfolioNextJs/components/Projects.js\",\n                        lineNumber: 107,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jeffhoyt/Documents/PortfolioNextJs/components/Projects.js\",\n                lineNumber: 87,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_c = Projects;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Projects);\nvar _c;\n$RefreshReg$(_c, \"Projects\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUdBO2tDQUNGLDRFQUFDQyxnREFBR0E7c0NBQ0YsNEVBQUNELGdEQUFHQTtnQ0FDRndCLE9BQU87b0NBQUU2QyxLQUFLO29DQUFRL0IsV0FBVztvQ0FBUWdDLGNBQWM7Z0NBQU87Z0NBQzlEbkQsV0FBVTswQ0FFVFA7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9mO0tBaEhNSDtBQWtITiwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1Byb2plY3RzLmpzP2MzMTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQ29udGFpbmVyLCBSb3csIENvbCwgTmF2LCBOYXZiYXIsIENhcmQgfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgU2NyaXB0IGZyb20gXCJuZXh0L3NjcmlwdFwiO1xuaW1wb3J0IGRhdGEgZnJvbSBcIi4vUHJvamVjdExpc3QuanNvblwiO1xuXG5jb25zdCBQcm9qZWN0cyA9ICgpID0+IHtcbiAgY29uc3QgcHJvamVjdERhdGEgPSBkYXRhLnByb2plY3RzO1xuICBjb25zdCBwcm9qZWN0c0xpc3QgPSBPYmplY3Qua2V5cyhwcm9qZWN0RGF0YSkubWFwKChwcm9qZWN0KSA9PiB7XG4gICAgY29uc3QgcHJvamVjdFZhbHVlID0gcHJvamVjdERhdGFbcHJvamVjdF07XG5cbiAgICByZXR1cm4gKFxuICAgICAgPENhcmRcbiAgICAgICAgYXM9XCJhXCJcbiAgICAgICAgY2xhc3NOYW1lPVwiaG92ZXJFZmZlY3RcIlxuICAgICAgICBrZXk9e3Byb2plY3RWYWx1ZS5pZH1cbiAgICAgICAgb25DbGljaz17KCkgPT4gd2luZG93Lm9wZW4ocHJvamVjdFZhbHVlLnNyYywgXCJfYmxhbmtcIil9XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgcGFkZGluZ1RvcDogXCIwXCIsXG4gICAgICAgICAgbWluV2lkdGg6IFwiMzMwcHhcIixcbiAgICAgICAgICBvdmVyZmxvd1g6IFwiaGlkZGVuXCIsXG4gICAgICAgICAgb3ZlcmZsb3dZOiBcImhpZGRlblwiLFxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICAgIG1heFdpZHRoOiBcIjQwMHB4XCIsXG4gICAgICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIixcbiAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiMTBweFwiLFxuICAgICAgICAgIGJveFNoYWRvdzpcbiAgICAgICAgICAgIFwicmdiYSg1MCwgNTAsIDkzLCAwLjI1KSAwcHggNTBweCAxMDBweCAtMjBweCwgcmdiYSgwLCAwLCAwLCAwLjMpIDBweCAzMHB4IDYwcHggLTMwcHgsIHJnYmEoMTAsIDM3LCA2NCwgMC4zNSkgMHB4IC0ycHggNnB4IDBweCBpbnNldFwiLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8Q2FyZC5JbWdcbiAgICAgICAgICB2YXJpYW50PVwidG9wXCJcbiAgICAgICAgICBzcmM9e3Byb2plY3RWYWx1ZS5pbWFnZX1cbiAgICAgICAgICBhbHQ9e3Byb2plY3RWYWx1ZS5hbHR9XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIG1hcmdpblRvcDogXCIwXCIsXG4gICAgICAgICAgICBvdmVyZmxvdzogXCJoaWRkZW5cIixcbiAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiBcIjAgIWltcG9ydGFudFwiLFxuICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiBcIjAgIWltcG9ydGFudFwiLFxuICAgICAgICAgICAgcGFkZGluZ1RvcDogXCIwcHhcIixcbiAgICAgICAgICB9fVxuICAgICAgICA+PC9DYXJkLkltZz5cbiAgICAgICAgPENhcmQuQm9keSBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IFwid2hpdGVcIiB9fT5cbiAgICAgICAgICA8Q2FyZC5UaXRsZSBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IFwid2hpdGVcIiwgY29sb3I6IFwiYmxhY2tcIiB9fT5cbiAgICAgICAgICAgIHtwcm9qZWN0VmFsdWUubmFtZX1cbiAgICAgICAgICA8L0NhcmQuVGl0bGU+XG4gICAgICAgICAge2NvbnNvbGUubG9nKHByb2plY3RWYWx1ZS5kZXNjcmlwdGlvbil9XG4gICAgICAgICAgPENhcmQuVGV4dCBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IFwid2hpdGVcIiwgY29sb3I6IFwiYmxhY2tcIiB9fT5cbiAgICAgICAgICAgIHtwcm9qZWN0VmFsdWUuZGVzY3JpcHRpb259XG4gICAgICAgICAgICA8YnI+PC9icj5cbiAgICAgICAgICAgIDxicj48L2JyPlxuICAgICAgICAgICAgPHAgc3R5bGU9e3sgZm9udFdlaWdodDogXCJib2xkXCIgfX0+XG4gICAgICAgICAgICAgIDxzcGFuPlRvb2xzOiA8L3NwYW4+XG4gICAgICAgICAgICAgIHtwcm9qZWN0VmFsdWUudG9vbHN9XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9DYXJkLlRleHQ+XG4gICAgICAgICAgPENhcmQuTGlua1xuICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBcIndoaXRlXCIgfX1cbiAgICAgICAgICAgIGhyZWY9e3Byb2plY3RWYWx1ZS5zcmN9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgVmlldyBQcm9qZWN0XG4gICAgICAgICAgPC9DYXJkLkxpbms+XG4gICAgICAgIDwvQ2FyZC5Cb2R5PlxuICAgICAgPC9DYXJkPlxuICAgICk7XG4gIH0pO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPlByb2plY3RzPC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkdlbmVyYXRlZCBieSBjcmVhdGUgbmV4dCBhcHBcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICAgIDxsaW5rXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vYm9vdHN0cmFwQDUuMy4wLWFscGhhMS9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzc1wiXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgICAgaW50ZWdyaXR5PVwic2hhMzg0LUdMaGxUUThpUkFCZFpMbDZPM29WTVdTa3RRT3A2YjdJbjFabDMvSnI1OWI2RUdHb0kxYUZrdzdjbURBNmo2Z0RcIlxuICAgICAgICAgIGNyb3NzT3JpZ2luPVwiYW5vbnltb3VzXCJcbiAgICAgICAgPjwvbGluaz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxTY3JpcHRcbiAgICAgICAgc3JjPVwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9ib290c3RyYXBANS4zLjAtYWxwaGExL2Rpc3QvanMvYm9vdHN0cmFwLmJ1bmRsZS5taW4uanNcIlxuICAgICAgICBpbnRlZ3JpdHk9XCJzaGEzODQtdzc2QXFQZkRrTUJEWG8zMGpTMVNnZXo2cHIzeDVNbFExWkFHQytudVpCK0VZZGdSWmdpd3hoVEJUa0Y3Q1h2TlwiXG4gICAgICAgIGNyb3NzT3JpZ2luPVwiYW5vbnltb3VzXCJcbiAgICAgIC8+XG4gICAgICA8Q29udGFpbmVyXG4gICAgICAgIGZsdWlkXG4gICAgICAgIHN0eWxlTmFtZT1cInByb2plY3RzXCJcbiAgICAgICAgaWQ9XCJwcm9qZWN0c1wiXG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNlMGZiZmNcIixcbiAgICAgICAgICBwYWRkaW5nVG9wOiBcIjEwdmhcIixcbiAgICAgICAgICBwYWRkaW5nQm90dG9tOiBcIjEwdmhcIixcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPFJvdz5cbiAgICAgICAgICA8Q29sXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiXG4gICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogXCJibGFja1wiLCBwYWRkaW5nQm90dG9tOiBcIjV2aFwiIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGgxPlByb2plY3RzPC9oMT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvQ29sPlxuICAgICAgICA8L1Jvdz5cbiAgICAgICAgPFJvdz5cbiAgICAgICAgICA8Q29sPlxuICAgICAgICAgICAgPFJvd1xuICAgICAgICAgICAgICBzdHlsZT17eyBnYXA6IFwiNTBweFwiLCBtYXJnaW5Ub3A6IFwiMjBweFwiLCBtYXJnaW5Cb3R0b206IFwiMjBweFwiIH19XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImp1c3RpZnktY29udGVudC1jZW50ZXJcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7cHJvamVjdHNMaXN0fVxuICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgPC9Db2w+XG4gICAgICAgIDwvUm93PlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0cztcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbnRhaW5lciIsIlJvdyIsIkNvbCIsIk5hdiIsIk5hdmJhciIsIkNhcmQiLCJMaW5rIiwiSGVhZCIsIlNjcmlwdCIsImRhdGEiLCJQcm9qZWN0cyIsInByb2plY3REYXRhIiwicHJvamVjdHMiLCJwcm9qZWN0c0xpc3QiLCJPYmplY3QiLCJrZXlzIiwibWFwIiwicHJvamVjdCIsInByb2plY3RWYWx1ZSIsImFzIiwiY2xhc3NOYW1lIiwib25DbGljayIsIndpbmRvdyIsIm9wZW4iLCJzcmMiLCJzdHlsZSIsInBhZGRpbmdUb3AiLCJtaW5XaWR0aCIsIm92ZXJmbG93WCIsIm92ZXJmbG93WSIsImJhY2tncm91bmRDb2xvciIsIm1heFdpZHRoIiwiY3Vyc29yIiwiYm9yZGVyUmFkaXVzIiwiYm94U2hhZG93IiwiSW1nIiwidmFyaWFudCIsImltYWdlIiwiYWx0IiwibWFyZ2luVG9wIiwib3ZlcmZsb3ciLCJwYWRkaW5nTGVmdCIsInBhZGRpbmdSaWdodCIsIkJvZHkiLCJUaXRsZSIsImNvbG9yIiwibmFtZSIsImNvbnNvbGUiLCJsb2ciLCJkZXNjcmlwdGlvbiIsIlRleHQiLCJiciIsInAiLCJmb250V2VpZ2h0Iiwic3BhbiIsInRvb2xzIiwiaHJlZiIsImlkIiwidGl0bGUiLCJtZXRhIiwiY29udGVudCIsImxpbmsiLCJyZWwiLCJpbnRlZ3JpdHkiLCJjcm9zc09yaWdpbiIsImZsdWlkIiwic3R5bGVOYW1lIiwicGFkZGluZ0JvdHRvbSIsImRpdiIsImgxIiwiZ2FwIiwibWFyZ2luQm90dG9tIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Projects.js\n"));

/***/ })

});