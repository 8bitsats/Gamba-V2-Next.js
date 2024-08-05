/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/constants.ts":
/*!**************************!*\
  !*** ./src/constants.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DEFAULT_CREATOR_FEE: () => (/* binding */ DEFAULT_CREATOR_FEE),\n/* harmony export */   DEFAULT_JACKPOT_FEE: () => (/* binding */ DEFAULT_JACKPOT_FEE),\n/* harmony export */   DEFAULT_PRIORITY_FEE: () => (/* binding */ DEFAULT_PRIORITY_FEE),\n/* harmony export */   PLATFORM_CREATOR_ADDRESS: () => (/* binding */ PLATFORM_CREATOR_ADDRESS),\n/* harmony export */   TOKENLIST: () => (/* binding */ TOKENLIST)\n/* harmony export */ });\n/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @solana/web3.js */ \"@solana/web3.js\");\n/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_solana_web3_js__WEBPACK_IMPORTED_MODULE_0__);\n\n// Creator to receive fees\nconst PLATFORM_CREATOR_ADDRESS = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_0__.PublicKey(\"AJ6FxTtjbWSnDKcRyyGcVJxaabS1kZP7uEetYuATeZNA\");\n// Fees config\nconst DEFAULT_CREATOR_FEE = 0.05;\nconst DEFAULT_JACKPOT_FEE = 0.01;\nconst DEFAULT_PRIORITY_FEE = 400201;\n// Token list\nconst TOKENLIST = [\n    {\n        mint: new _solana_web3_js__WEBPACK_IMPORTED_MODULE_0__.PublicKey(\"So11111111111111111111111111111111111111112\"),\n        name: \"Solana\",\n        symbol: \"SOL\",\n        image: \"https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/So11111111111111111111111111111111111111112/logo.png\",\n        decimals: 9,\n        baseWager: 0.01e9\n    },\n    {\n        mint: new _solana_web3_js__WEBPACK_IMPORTED_MODULE_0__.PublicKey(\"EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v\"),\n        name: \"USD Coin\",\n        symbol: \"USDC\",\n        image: \"https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v/logo.png\",\n        decimals: 9,\n        baseWager: 0.01e9\n    }\n];\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29uc3RhbnRzLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBNEM7QUFFNUMsMEJBQTBCO0FBQ25CLE1BQU1DLDJCQUEyQixJQUFJRCxzREFBU0EsQ0FDbkQsZ0RBQ0E7QUFFRixjQUFjO0FBQ1AsTUFBTUUsc0JBQXNCLEtBQUs7QUFDakMsTUFBTUMsc0JBQXNCLEtBQUs7QUFDakMsTUFBTUMsdUJBQXVCLE9BQVE7QUFFNUMsYUFBYTtBQUNOLE1BQU1DLFlBQVk7SUFDdkI7UUFDRUMsTUFBTSxJQUFJTixzREFBU0EsQ0FBQztRQUNwQk8sTUFBTTtRQUNOQyxRQUFRO1FBQ1JDLE9BQ0U7UUFDRkMsVUFBVTtRQUNWQyxXQUFXO0lBQ2I7SUFDQTtRQUNFTCxNQUFNLElBQUlOLHNEQUFTQSxDQUFDO1FBQ3BCTyxNQUFNO1FBQ05DLFFBQVE7UUFDUkMsT0FDRTtRQUNGQyxVQUFVO1FBQ1ZDLFdBQVc7SUFDYjtDQUNELENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nYW1iYS1wbGF0Zm9ybS10ZW1wbGF0ZS8uL3NyYy9jb25zdGFudHMudHM/MzdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQdWJsaWNLZXkgfSBmcm9tIFwiQHNvbGFuYS93ZWIzLmpzXCI7XG4gXG4vLyBDcmVhdG9yIHRvIHJlY2VpdmUgZmVlc1xuZXhwb3J0IGNvbnN0IFBMQVRGT1JNX0NSRUFUT1JfQUREUkVTUyA9IG5ldyBQdWJsaWNLZXkoXG4gIFwiQUo2RnhUdGpiV1NuREtjUnl5R2NWSnhhYWJTMWtaUDd1RWV0WXVBVGVaTkFcIixcbik7XG5cbi8vIEZlZXMgY29uZmlnXG5leHBvcnQgY29uc3QgREVGQVVMVF9DUkVBVE9SX0ZFRSA9IDAuMDU7XG5leHBvcnQgY29uc3QgREVGQVVMVF9KQUNLUE9UX0ZFRSA9IDAuMDE7XG5leHBvcnQgY29uc3QgREVGQVVMVF9QUklPUklUWV9GRUUgPSA0MDBfMjAxO1xuXG4vLyBUb2tlbiBsaXN0XG5leHBvcnQgY29uc3QgVE9LRU5MSVNUID0gW1xuICB7XG4gICAgbWludDogbmV3IFB1YmxpY0tleShcIlNvMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTJcIiksXG4gICAgbmFtZTogXCJTb2xhbmFcIixcbiAgICBzeW1ib2w6IFwiU09MXCIsXG4gICAgaW1hZ2U6XG4gICAgICBcImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9zb2xhbmEtbGFicy90b2tlbi1saXN0L21haW4vYXNzZXRzL21haW5uZXQvU28xMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMi9sb2dvLnBuZ1wiLFxuICAgIGRlY2ltYWxzOiA5LFxuICAgIGJhc2VXYWdlcjogMC4wMWU5LFxuICB9LFxuICB7XG4gICAgbWludDogbmV3IFB1YmxpY0tleShcIkVQakZXZGQ1QXVmcVNTcWVNMnFOMXh6eWJhcEM4RzR3RUdHa1p3eVREdDF2XCIpLFxuICAgIG5hbWU6IFwiVVNEIENvaW5cIixcbiAgICBzeW1ib2w6IFwiVVNEQ1wiLFxuICAgIGltYWdlOlxuICAgICAgXCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vc29sYW5hLWxhYnMvdG9rZW4tbGlzdC9tYWluL2Fzc2V0cy9tYWlubmV0L0VQakZXZGQ1QXVmcVNTcWVNMnFOMXh6eWJhcEM4RzR3RUdHa1p3eVREdDF2L2xvZ28ucG5nXCIsXG4gICAgZGVjaW1hbHM6IDksXG4gICAgYmFzZVdhZ2VyOiAwLjAxZTksXG4gIH0sXG5dOyJdLCJuYW1lcyI6WyJQdWJsaWNLZXkiLCJQTEFURk9STV9DUkVBVE9SX0FERFJFU1MiLCJERUZBVUxUX0NSRUFUT1JfRkVFIiwiREVGQVVMVF9KQUNLUE9UX0ZFRSIsIkRFRkFVTFRfUFJJT1JJVFlfRkVFIiwiVE9LRU5MSVNUIiwibWludCIsIm5hbWUiLCJzeW1ib2wiLCJpbWFnZSIsImRlY2ltYWxzIiwiYmFzZVdhZ2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/constants.ts\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _solana_wallet_adapter_react_ui_styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @solana/wallet-adapter-react-ui/styles.css */ \"./node_modules/@solana/wallet-adapter-react-ui/styles.css\");\n/* harmony import */ var _solana_wallet_adapter_react_ui_styles_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_solana_wallet_adapter_react_ui_styles_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @solana/wallet-adapter-react */ \"@solana/wallet-adapter-react\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants */ \"./src/constants.ts\");\n/* harmony import */ var gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! gamba-react-ui-v2 */ \"gamba-react-ui-v2\");\n/* harmony import */ var gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var gamba_react_v2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! gamba-react-v2 */ \"gamba-react-v2\");\n/* harmony import */ var gamba_react_v2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(gamba_react_v2__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @solana/wallet-adapter-react-ui */ \"@solana/wallet-adapter-react-ui\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_3__, _solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_8__]);\n([_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_3__, _solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\n\n\n\nfunction MyApp({ Component, pageProps }) {\n    const RPC_ENDPOINT = \"NEXT_PUBLIC_RPC_ENDPOINT=https://mainnet.helius-rpc.com/?api-key=6b52d42b-5d24-4841-a093-02b0d2cc9fc0\" ?? 0;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_3__.ConnectionProvider, {\n        endpoint: RPC_ENDPOINT,\n        config: {\n            commitment: \"processed\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_3__.WalletProvider, {\n            autoConnect: true,\n            wallets: [],\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_8__.WalletModalProvider, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_5__.TokenMetaProvider, {\n                    tokens: _constants__WEBPACK_IMPORTED_MODULE_4__.TOKENLIST,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(gamba_react_v2__WEBPACK_IMPORTED_MODULE_6__.SendTransactionProvider, {\n                        priorityFee: _constants__WEBPACK_IMPORTED_MODULE_4__.DEFAULT_PRIORITY_FEE,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(gamba_react_v2__WEBPACK_IMPORTED_MODULE_6__.GambaProvider, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_5__.GambaPlatformProvider, {\n                                creator: _constants__WEBPACK_IMPORTED_MODULE_4__.PLATFORM_CREATOR_ADDRESS,\n                                defaultCreatorFee: _constants__WEBPACK_IMPORTED_MODULE_4__.DEFAULT_CREATOR_FEE,\n                                defaultJackpotFee: _constants__WEBPACK_IMPORTED_MODULE_4__.DEFAULT_JACKPOT_FEE,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                                    ...pageProps\n                                }, void 0, false, {\n                                    fileName: \"/Users/8bit/Desktop/poker/Gamba-V2-Next.js/src/pages/_app.tsx\",\n                                    lineNumber: 42,\n                                    columnNumber: 19\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/8bit/Desktop/poker/Gamba-V2-Next.js/src/pages/_app.tsx\",\n                                lineNumber: 37,\n                                columnNumber: 17\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/8bit/Desktop/poker/Gamba-V2-Next.js/src/pages/_app.tsx\",\n                            lineNumber: 36,\n                            columnNumber: 15\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/8bit/Desktop/poker/Gamba-V2-Next.js/src/pages/_app.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/8bit/Desktop/poker/Gamba-V2-Next.js/src/pages/_app.tsx\",\n                    lineNumber: 34,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/8bit/Desktop/poker/Gamba-V2-Next.js/src/pages/_app.tsx\",\n                lineNumber: 33,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/8bit/Desktop/poker/Gamba-V2-Next.js/src/pages/_app.tsx\",\n            lineNumber: 32,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/8bit/Desktop/poker/Gamba-V2-Next.js/src/pages/_app.tsx\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBOEI7QUFDc0I7QUFLZDtBQU9oQjtBQUN1RDtBQUNMO0FBRzlDO0FBQzRDO0FBRXRFLFNBQVNhLE1BQU0sRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQVk7SUFDL0MsTUFBTUMsZUFDSkMsdUdBQW9DLElBQ3BDLENBQXFDO0lBRXZDLHFCQUNFLDhEQUFDakIsNEVBQWtCQTtRQUNqQm9CLFVBQVVKO1FBQ1ZLLFFBQVE7WUFBRUMsWUFBWTtRQUFZO2tCQUVsQyw0RUFBQ3JCLHdFQUFjQTtZQUFDc0IsV0FBVztZQUFDQyxTQUFTLEVBQUU7c0JBQ3JDLDRFQUFDWixnRkFBbUJBOzBCQUNsQiw0RUFBQ0osZ0VBQWlCQTtvQkFBQ2lCLFFBQVFuQixpREFBU0E7OEJBQ2xDLDRFQUFDSSxtRUFBdUJBO3dCQUFDZ0IsYUFBYXRCLDREQUFvQkE7a0NBQ3hELDRFQUFDSyx5REFBYUE7c0NBQ1osNEVBQUNGLG9FQUFxQkE7Z0NBQ3BCb0IsU0FBU3RCLGdFQUF3QkE7Z0NBQ2pDdUIsbUJBQW1CMUIsMkRBQW1CQTtnQ0FDdEMyQixtQkFBbUIxQiwyREFBbUJBOzBDQUV0Qyw0RUFBQ1c7b0NBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTMUM7QUFFQSxpRUFBZUYsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2dhbWJhLXBsYXRmb3JtLXRlbXBsYXRlLy4vc3JjL3BhZ2VzL19hcHAudHN4P2Y5ZDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiQC9zdHlsZXMvZ2xvYmFscy5jc3NcIjtcbmltcG9ydCBcIkBzb2xhbmEvd2FsbGV0LWFkYXB0ZXItcmVhY3QtdWkvc3R5bGVzLmNzc1wiO1xuXG5pbXBvcnQge1xuICBDb25uZWN0aW9uUHJvdmlkZXIsXG4gIFdhbGxldFByb3ZpZGVyLFxufSBmcm9tIFwiQHNvbGFuYS93YWxsZXQtYWRhcHRlci1yZWFjdFwiO1xuaW1wb3J0IHtcbiAgREVGQVVMVF9DUkVBVE9SX0ZFRSxcbiAgREVGQVVMVF9KQUNLUE9UX0ZFRSxcbiAgREVGQVVMVF9QUklPUklUWV9GRUUsXG4gIFBMQVRGT1JNX0NSRUFUT1JfQUREUkVTUyxcbiAgVE9LRU5MSVNULFxufSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBHYW1iYVBsYXRmb3JtUHJvdmlkZXIsIFRva2VuTWV0YVByb3ZpZGVyIH0gZnJvbSBcImdhbWJhLXJlYWN0LXVpLXYyXCI7XG5pbXBvcnQgeyBHYW1iYVByb3ZpZGVyLCBTZW5kVHJhbnNhY3Rpb25Qcm92aWRlciB9IGZyb20gXCJnYW1iYS1yZWFjdC12MlwiO1xuXG5pbXBvcnQgeyBBcHBQcm9wcyB9IGZyb20gXCJuZXh0L2FwcFwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgV2FsbGV0TW9kYWxQcm92aWRlciB9IGZyb20gXCJAc29sYW5hL3dhbGxldC1hZGFwdGVyLXJlYWN0LXVpXCI7XG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcbiAgY29uc3QgUlBDX0VORFBPSU5UID1cbiAgICBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19SUENfRU5EUE9JTlQgPz9cbiAgICBcImh0dHBzOi8vYXBpLm1haW5uZXQtYmV0YS5zb2xhbmEuY29tXCI7XG5cbiAgcmV0dXJuIChcbiAgICA8Q29ubmVjdGlvblByb3ZpZGVyXG4gICAgICBlbmRwb2ludD17UlBDX0VORFBPSU5UfVxuICAgICAgY29uZmlnPXt7IGNvbW1pdG1lbnQ6IFwicHJvY2Vzc2VkXCIgfX1cbiAgICA+XG4gICAgICA8V2FsbGV0UHJvdmlkZXIgYXV0b0Nvbm5lY3Qgd2FsbGV0cz17W119PlxuICAgICAgICA8V2FsbGV0TW9kYWxQcm92aWRlcj5cbiAgICAgICAgICA8VG9rZW5NZXRhUHJvdmlkZXIgdG9rZW5zPXtUT0tFTkxJU1R9PlxuICAgICAgICAgICAgPFNlbmRUcmFuc2FjdGlvblByb3ZpZGVyIHByaW9yaXR5RmVlPXtERUZBVUxUX1BSSU9SSVRZX0ZFRX0+XG4gICAgICAgICAgICAgIDxHYW1iYVByb3ZpZGVyPlxuICAgICAgICAgICAgICAgIDxHYW1iYVBsYXRmb3JtUHJvdmlkZXJcbiAgICAgICAgICAgICAgICAgIGNyZWF0b3I9e1BMQVRGT1JNX0NSRUFUT1JfQUREUkVTU31cbiAgICAgICAgICAgICAgICAgIGRlZmF1bHRDcmVhdG9yRmVlPXtERUZBVUxUX0NSRUFUT1JfRkVFfVxuICAgICAgICAgICAgICAgICAgZGVmYXVsdEphY2twb3RGZWU9e0RFRkFVTFRfSkFDS1BPVF9GRUV9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgICAgICAgICAgIDwvR2FtYmFQbGF0Zm9ybVByb3ZpZGVyPlxuICAgICAgICAgICAgICA8L0dhbWJhUHJvdmlkZXI+XG4gICAgICAgICAgICA8L1NlbmRUcmFuc2FjdGlvblByb3ZpZGVyPlxuICAgICAgICAgIDwvVG9rZW5NZXRhUHJvdmlkZXI+XG4gICAgICAgIDwvV2FsbGV0TW9kYWxQcm92aWRlcj5cbiAgICAgIDwvV2FsbGV0UHJvdmlkZXI+XG4gICAgPC9Db25uZWN0aW9uUHJvdmlkZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwOyJdLCJuYW1lcyI6WyJDb25uZWN0aW9uUHJvdmlkZXIiLCJXYWxsZXRQcm92aWRlciIsIkRFRkFVTFRfQ1JFQVRPUl9GRUUiLCJERUZBVUxUX0pBQ0tQT1RfRkVFIiwiREVGQVVMVF9QUklPUklUWV9GRUUiLCJQTEFURk9STV9DUkVBVE9SX0FERFJFU1MiLCJUT0tFTkxJU1QiLCJHYW1iYVBsYXRmb3JtUHJvdmlkZXIiLCJUb2tlbk1ldGFQcm92aWRlciIsIkdhbWJhUHJvdmlkZXIiLCJTZW5kVHJhbnNhY3Rpb25Qcm92aWRlciIsIlJlYWN0IiwiV2FsbGV0TW9kYWxQcm92aWRlciIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiUlBDX0VORFBPSU5UIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX1JQQ19FTkRQT0lOVCIsImVuZHBvaW50IiwiY29uZmlnIiwiY29tbWl0bWVudCIsImF1dG9Db25uZWN0Iiwid2FsbGV0cyIsInRva2VucyIsInByaW9yaXR5RmVlIiwiY3JlYXRvciIsImRlZmF1bHRDcmVhdG9yRmVlIiwiZGVmYXVsdEphY2twb3RGZWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "@solana/web3.js":
/*!**********************************!*\
  !*** external "@solana/web3.js" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@solana/web3.js");

/***/ }),

/***/ "gamba-react-ui-v2":
/*!************************************!*\
  !*** external "gamba-react-ui-v2" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("gamba-react-ui-v2");

/***/ }),

/***/ "gamba-react-v2":
/*!*********************************!*\
  !*** external "gamba-react-v2" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("gamba-react-v2");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "@solana/wallet-adapter-react":
/*!***********************************************!*\
  !*** external "@solana/wallet-adapter-react" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@solana/wallet-adapter-react");;

/***/ }),

/***/ "@solana/wallet-adapter-react-ui":
/*!**************************************************!*\
  !*** external "@solana/wallet-adapter-react-ui" ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@solana/wallet-adapter-react-ui");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/@solana"], () => (__webpack_exec__("./src/pages/_app.tsx")));
module.exports = __webpack_exports__;

})();