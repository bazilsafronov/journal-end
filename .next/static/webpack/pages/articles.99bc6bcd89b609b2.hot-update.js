"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/articles",{

/***/ "./src/pages/articles/index.tsx":
/*!**************************************!*\
  !*** ./src/pages/articles/index.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Articles_module_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/Articles.module.sass */ \"./src/styles/Articles.module.sass\");\n/* harmony import */ var _styles_Articles_module_sass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Articles_module_sass__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_slugify_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/slugify.ts */ \"./src/utils/slugify.ts\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Articles = ()=>{\n    _s();\n    const [articles, setArticles] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]); // Инициализируем пустой массив\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchArticles = async ()=>{\n            try {\n                const response = await fetch(\"/api/articles\");\n                const data = await response.json();\n                if (Array.isArray(data)) {\n                    setArticles(data); // Убедимся, что данные — это массив\n                } else {\n                    setArticles([]); // Если данные не массив, инициализируем как пустой массив\n                }\n                setLoading(false);\n            } catch (error) {\n                console.error(\"Ошибка при загрузке статей:\", error);\n                setLoading(false);\n            }\n        };\n        fetchArticles();\n    }, []);\n    if (loading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"Загрузка...\"\n    }, void 0, false, {\n        fileName: \"/home/casper/Projects/journal-end/src/pages/articles/index.tsx\",\n        lineNumber: 31,\n        columnNumber: 25\n    }, undefined);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: articles.length === 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Статьи не найдены\"\n        }, void 0, false, {\n            fileName: \"/home/casper/Projects/journal-end/src/pages/articles/index.tsx\",\n            lineNumber: 36,\n            columnNumber: 17\n        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_Articles_module_sass__WEBPACK_IMPORTED_MODULE_2___default().articles_container),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"Articles\"\n                }, void 0, false, {\n                    fileName: \"/home/casper/Projects/journal-end/src/pages/articles/index.tsx\",\n                    lineNumber: 39,\n                    columnNumber: 21\n                }, undefined),\n                articles.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                        href: \"/articles/\".concat((0,_utils_slugify_ts__WEBPACK_IMPORTED_MODULE_3__.slugify)(item.title)),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_Articles_module_sass__WEBPACK_IMPORTED_MODULE_2___default().article_card),\n                            children: [\n                                item.imageUrl ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: item.imageUrl,\n                                    alt: \"Article Image\"\n                                }, void 0, false, {\n                                    fileName: \"/home/casper/Projects/journal-end/src/pages/articles/index.tsx\",\n                                    lineNumber: 44,\n                                    columnNumber: 37\n                                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: \"No image\"\n                                }, void 0, false, {\n                                    fileName: \"/home/casper/Projects/journal-end/src/pages/articles/index.tsx\",\n                                    lineNumber: 46,\n                                    columnNumber: 37\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    children: item.title\n                                }, void 0, false, {\n                                    fileName: \"/home/casper/Projects/journal-end/src/pages/articles/index.tsx\",\n                                    lineNumber: 48,\n                                    columnNumber: 33\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: [\n                                        item.content.slice(0, 100),\n                                        \"...\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/casper/Projects/journal-end/src/pages/articles/index.tsx\",\n                                    lineNumber: 49,\n                                    columnNumber: 33\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/casper/Projects/journal-end/src/pages/articles/index.tsx\",\n                            lineNumber: 42,\n                            columnNumber: 29\n                        }, undefined)\n                    }, item._id, false, {\n                        fileName: \"/home/casper/Projects/journal-end/src/pages/articles/index.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 25\n                    }, undefined))\n            ]\n        }, void 0, true, {\n            fileName: \"/home/casper/Projects/journal-end/src/pages/articles/index.tsx\",\n            lineNumber: 38,\n            columnNumber: 17\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/casper/Projects/journal-end/src/pages/articles/index.tsx\",\n        lineNumber: 34,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Articles, \"ByfW2W02M1Fj4gKraM3ZQ6w4KbM=\");\n_c = Articles;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Articles);\nvar _c;\n$RefreshReg$(_c, \"Articles\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYXJ0aWNsZXMvaW5kZXgudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUEwQztBQUVhO0FBQ1I7QUFDbEI7QUFFN0IsTUFBTUssV0FBcUI7O0lBQ3ZCLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHTiwrQ0FBUUEsQ0FBWSxFQUFFLEdBQUksK0JBQStCO0lBQ3pGLE1BQU0sQ0FBQ08sU0FBU0MsV0FBVyxHQUFHUiwrQ0FBUUEsQ0FBQztJQUV2Q0QsZ0RBQVNBLENBQUM7UUFDTixNQUFNVSxnQkFBZ0I7WUFDbEIsSUFBSTtnQkFDQSxNQUFNQyxXQUFXLE1BQU1DLE1BQU07Z0JBQzdCLE1BQU1DLE9BQU8sTUFBTUYsU0FBU0csSUFBSTtnQkFDaEMsSUFBSUMsTUFBTUMsT0FBTyxDQUFDSCxPQUFPO29CQUNyQk4sWUFBWU0sT0FBUSxvQ0FBb0M7Z0JBQzVELE9BQU87b0JBQ0hOLFlBQVksRUFBRSxHQUFJLDBEQUEwRDtnQkFDaEY7Z0JBQ0FFLFdBQVc7WUFDZixFQUFFLE9BQU9RLE9BQU87Z0JBQ1pDLFFBQVFELEtBQUssQ0FBQywrQkFBK0JBO2dCQUM3Q1IsV0FBVztZQUNmO1FBQ0o7UUFFQUM7SUFDSixHQUFHLEVBQUU7SUFFTCxJQUFJRixTQUFTLHFCQUFPLDhEQUFDVztrQkFBSTs7Ozs7O0lBRXpCLHFCQUNJLDhEQUFDQTtrQkFDSWIsU0FBU2MsTUFBTSxLQUFLLGtCQUNqQiw4REFBQ0Q7c0JBQUk7Ozs7O3NDQUVMLDhEQUFDQTtZQUFJRSxXQUFXbkIsd0ZBQXlCOzs4QkFDckMsOERBQUNxQjs4QkFBRzs7Ozs7O2dCQUNIakIsU0FBU2tCLEdBQUcsQ0FBQyxDQUFDQyxxQkFDWCw4REFBQ3JCLGtEQUFJQTt3QkFBZ0JzQixNQUFNLGFBQWlDLE9BQXBCdkIsMERBQU9BLENBQUNzQixLQUFLRSxLQUFLO2tDQUN0RCw0RUFBQ1I7NEJBQUlFLFdBQVduQixrRkFBbUI7O2dDQUM5QnVCLEtBQUtJLFFBQVEsaUJBQ1YsOERBQUNDO29DQUFJQyxLQUFLTixLQUFLSSxRQUFRO29DQUFFRyxLQUFJOzs7Ozs4REFFN0IsOERBQUNiOzhDQUFJOzs7Ozs7OENBRVQsOERBQUNjOzhDQUFJUixLQUFLRSxLQUFLOzs7Ozs7OENBQ2YsOERBQUNPOzt3Q0FBR1QsS0FBS1UsT0FBTyxDQUFDQyxLQUFLLENBQUMsR0FBRzt3Q0FBSzs7Ozs7Ozs7Ozs7Ozt1QkFSNUJYLEtBQUtZLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQjNDO0dBbERNaEM7S0FBQUE7QUFvRE4sK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2FydGljbGVzL2luZGV4LnRzeD9jYzdmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge0FydGljbGV9IGZyb20gXCIuLi8uLi90eXBlcy9hcnRpY2xlLnRzXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi9zdHlsZXMvQXJ0aWNsZXMubW9kdWxlLnNhc3NcIjtcbmltcG9ydCB7c2x1Z2lmeX0gZnJvbSBcIi4uLy4uL3V0aWxzL3NsdWdpZnkudHNcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuY29uc3QgQXJ0aWNsZXM6IFJlYWN0LkZDID0gKCkgPT4ge1xuICAgIGNvbnN0IFthcnRpY2xlcywgc2V0QXJ0aWNsZXNdID0gdXNlU3RhdGU8QXJ0aWNsZVtdPihbXSk7ICAvLyDQmNC90LjRhtC40LDQu9C40LfQuNGA0YPQtdC8INC/0YPRgdGC0L7QuSDQvNCw0YHRgdC40LJcbiAgICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGZldGNoQXJ0aWNsZXMgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hcGkvYXJ0aWNsZXMnKTtcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGRhdGEpKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldEFydGljbGVzKGRhdGEpOyAgLy8g0KPQsdC10LTQuNC80YHRjywg0YfRgtC+INC00LDQvdC90YvQtSDigJQg0Y3RgtC+INC80LDRgdGB0LjQslxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNldEFydGljbGVzKFtdKTsgIC8vINCV0YHQu9C4INC00LDQvdC90YvQtSDQvdC1INC80LDRgdGB0LjQsiwg0LjQvdC40YbQuNCw0LvQuNC30LjRgNGD0LXQvCDQutCw0Log0L/Rg9GB0YLQvtC5INC80LDRgdGB0LjQslxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcign0J7RiNC40LHQutCwINC/0YDQuCDQt9Cw0LPRgNGD0LfQutC1INGB0YLQsNGC0LXQuTonLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgZmV0Y2hBcnRpY2xlcygpO1xuICAgIH0sIFtdKTtcblxuICAgIGlmIChsb2FkaW5nKSByZXR1cm4gPGRpdj7Ql9Cw0LPRgNGD0LfQutCwLi4uPC9kaXY+O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHthcnRpY2xlcy5sZW5ndGggPT09IDAgPyAoXG4gICAgICAgICAgICAgICAgPGRpdj7QodGC0LDRgtGM0Lgg0L3QtSDQvdCw0LnQtNC10L3RizwvZGl2PlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFydGljbGVzX2NvbnRhaW5lcn0+XG4gICAgICAgICAgICAgICAgICAgIDxoMT5BcnRpY2xlczwvaDE+XG4gICAgICAgICAgICAgICAgICAgIHthcnRpY2xlcy5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGtleT17aXRlbS5faWR9IGhyZWY9e2AvYXJ0aWNsZXMvJHtzbHVnaWZ5KGl0ZW0udGl0bGUpfWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXJ0aWNsZV9jYXJkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0uaW1hZ2VVcmwgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aXRlbS5pbWFnZVVybH0gYWx0PVwiQXJ0aWNsZSBJbWFnZVwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+Tm8gaW1hZ2U8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPntpdGVtLnRpdGxlfTwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntpdGVtLmNvbnRlbnQuc2xpY2UoMCwgMTAwKX0uLi48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFydGljbGVzOyJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInN0eWxlcyIsInNsdWdpZnkiLCJMaW5rIiwiQXJ0aWNsZXMiLCJhcnRpY2xlcyIsInNldEFydGljbGVzIiwibG9hZGluZyIsInNldExvYWRpbmciLCJmZXRjaEFydGljbGVzIiwicmVzcG9uc2UiLCJmZXRjaCIsImRhdGEiLCJqc29uIiwiQXJyYXkiLCJpc0FycmF5IiwiZXJyb3IiLCJjb25zb2xlIiwiZGl2IiwibGVuZ3RoIiwiY2xhc3NOYW1lIiwiYXJ0aWNsZXNfY29udGFpbmVyIiwiaDEiLCJtYXAiLCJpdGVtIiwiaHJlZiIsInRpdGxlIiwiYXJ0aWNsZV9jYXJkIiwiaW1hZ2VVcmwiLCJpbWciLCJzcmMiLCJhbHQiLCJoMiIsInAiLCJjb250ZW50Iiwic2xpY2UiLCJfaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/articles/index.tsx\n"));

/***/ })

});