"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "src_mocks_server_ts";
exports.ids = ["src_mocks_server_ts"];
exports.modules = {

/***/ "./src/api/endpoints.ts":
/*!******************************!*\
  !*** ./src/api/endpoints.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst endpoints = {\n    home: `${\"https://api.npoint.io\"}/9536e23745bd0ebbfec3`\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (endpoints);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBpL2VuZHBvaW50cy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsTUFBTUEsWUFBWTtJQUNoQkMsTUFBTSxDQUFDLEVBQUVDLHVCQUFnQyxDQUFDLHFCQUFxQixDQUFDO0FBQ2xFO0FBRUEsaUVBQWVGLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lbnMtZ29kcy8uL3NyYy9hcGkvZW5kcG9pbnRzLnRzP2Y5MGYiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZW5kcG9pbnRzID0ge1xuICBob21lOiBgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19CQVNFX1VSTH0vOTUzNmUyMzc0NWJkMGViYmZlYzNgLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZW5kcG9pbnRzO1xuIl0sIm5hbWVzIjpbImVuZHBvaW50cyIsImhvbWUiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfQkFTRV9VUkwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/api/endpoints.ts\n");

/***/ }),

/***/ "./src/mocks/handlers.ts":
/*!*******************************!*\
  !*** ./src/mocks/handlers.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"handlers\": () => (/* binding */ handlers)\n/* harmony export */ });\n/* harmony import */ var _api_endpoints__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/api/endpoints */ \"./src/api/endpoints.ts\");\n/* harmony import */ var msw__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! msw */ \"msw\");\n/* harmony import */ var msw__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(msw__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst handlers = [\n    msw__WEBPACK_IMPORTED_MODULE_1__.rest.get(_api_endpoints__WEBPACK_IMPORTED_MODULE_0__[\"default\"].home, (_req, res, ctx)=>{\n        return res(ctx.json({\n            latest_news: [\n                {\n                    news: \"Shopify launches suite of blockchain commerce tools for merchants\",\n                    link: \"https://cointelegraph.com/news/shopify-launches-suite-of-blockchain-commerce-tools-for-merchants\"\n                },\n                {\n                    news: \"State of play: Decentralized domain services reflect on industry progress\",\n                    link: \"https://cointelegraph.com/news/state-of-play-decentralized-domain-services-reflect-on-industry-progress\"\n                },\n                {\n                    news: \"Vitalik Buterin divulges the ‘largest remaining challenge’ for Ethereum\",\n                    link: \"https://cointelegraph.com/news/vitalik-buterin-divulges-the-largest-remaining-challenge-in-ethereum\"\n                },\n                {\n                    news: \"Coinbase to hand out ENS usernames to simplify wallet transactions\",\n                    link: \"https://cointelegraph.com/news/coinbase-to-hand-out-ens-usernames-to-simplify-wallet-transactions\"\n                }\n            ],\n            featured_articles: [\n                {\n                    news: \"Ethereum Name Service founder reflects as 2 million registration mark nears\",\n                    link: \"https://cointelegraph.com/news/ethereum-name-service-founder-reflects-as-2-million-registration-mark-nears\"\n                },\n                {\n                    news: \"Amazon.eth ENS domain owner disregards 1M USDC buyout offer on OpenSea\",\n                    link: \"https://cointelegraph.com/news/amazon-eth-ens-domain-owner-disregards-1m-usdc-buyout-offer-on-opensea\"\n                },\n                {\n                    news: \"Ethereum Name Service registrations surge by 200% amid lower gas fees\",\n                    link: \"https://cointelegraph.com/news/ethereum-name-service-registrations-surge-by-200-amid-lower-gas-fees\"\n                }\n            ],\n            top_tweets: [\n                \"1616801293112315906\",\n                \"1627541095428116483\",\n                \"1625759839745114113\"\n            ],\n            featured_domain: {\n                name: \"\\uD83E\\uDDB8\\uD83C\\uDFFF‍♂️.eth\",\n                link: \"https://www.ens.vision/name/%F0%9F%A6%B8%F0%9F%8F%BF%E2%80%8D%E2%99%82.eth\"\n            },\n            podcasts: [\n                {\n                    title: \"TRAVALA.ETH LOST | THE DAILY ENS REPORT | EPISODE 64\",\n                    link: \"https://www.youtube.com/watch?v=kT-I6vRubyQ\",\n                    date: \"15th Mar 2023\"\n                },\n                {\n                    title: \"EARLY INVESTOR ENS.VISION - ENS MATTERS PODCAST with ZeroZeroCoins.eth ZZC\",\n                    link: \"https://www.youtube.com/watch?v=8-kbauR1mwE\",\n                    date: \"5th Mar 2022\"\n                }\n            ]\n        }));\n    })\n];\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9ja3MvaGFuZGxlcnMudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUF3QztBQUNiO0FBRXBCLE1BQU1FLFdBQVc7SUFDdEJELHlDQUFRLENBQUNELDJEQUFjLEVBQUUsQ0FBQ0ssTUFBTUMsS0FBS0MsTUFBUTtRQUMzQyxPQUFPRCxJQUNMQyxJQUFJQyxJQUFJLENBQUM7WUFDUEMsYUFBYTtnQkFDWDtvQkFDRUMsTUFBTTtvQkFDTkMsTUFBTTtnQkFDUjtnQkFDQTtvQkFDRUQsTUFBTTtvQkFDTkMsTUFBTTtnQkFDUjtnQkFDQTtvQkFDRUQsTUFBTTtvQkFDTkMsTUFBTTtnQkFDUjtnQkFDQTtvQkFDRUQsTUFBTTtvQkFDTkMsTUFBTTtnQkFDUjthQUNEO1lBQ0RDLG1CQUFtQjtnQkFDakI7b0JBQ0VGLE1BQU07b0JBQ05DLE1BQU07Z0JBQ1I7Z0JBQ0E7b0JBQ0VELE1BQU07b0JBQ05DLE1BQU07Z0JBQ1I7Z0JBQ0E7b0JBQ0VELE1BQU07b0JBQ05DLE1BQU07Z0JBQ1I7YUFDRDtZQUNERSxZQUFZO2dCQUNWO2dCQUNBO2dCQUNBO2FBQ0Q7WUFDREMsaUJBQWlCO2dCQUNmQyxNQUFNO2dCQUNOSixNQUFNO1lBQ1I7WUFDQUssVUFBVTtnQkFDUjtvQkFDRUMsT0FBTztvQkFDUE4sTUFBTTtvQkFDTk8sTUFBTTtnQkFDUjtnQkFDQTtvQkFDRUQsT0FDRTtvQkFDRk4sTUFBTTtvQkFDTk8sTUFBTTtnQkFDUjthQUNEO1FBQ0g7SUFFSjtDQUNELENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lbnMtZ29kcy8uL3NyYy9tb2Nrcy9oYW5kbGVycy50cz8xNWYxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBlbmRwb2ludHMgZnJvbSAnQC9hcGkvZW5kcG9pbnRzJztcbmltcG9ydCB7IHJlc3QgfSBmcm9tICdtc3cnO1xuXG5leHBvcnQgY29uc3QgaGFuZGxlcnMgPSBbXG4gIHJlc3QuZ2V0KGVuZHBvaW50cy5ob21lLCAoX3JlcSwgcmVzLCBjdHgpID0+IHtcbiAgICByZXR1cm4gcmVzKFxuICAgICAgY3R4Lmpzb24oe1xuICAgICAgICBsYXRlc3RfbmV3czogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5ld3M6ICdTaG9waWZ5IGxhdW5jaGVzIHN1aXRlIG9mIGJsb2NrY2hhaW4gY29tbWVyY2UgdG9vbHMgZm9yIG1lcmNoYW50cycsXG4gICAgICAgICAgICBsaW5rOiAnaHR0cHM6Ly9jb2ludGVsZWdyYXBoLmNvbS9uZXdzL3Nob3BpZnktbGF1bmNoZXMtc3VpdGUtb2YtYmxvY2tjaGFpbi1jb21tZXJjZS10b29scy1mb3ItbWVyY2hhbnRzJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5ld3M6ICdTdGF0ZSBvZiBwbGF5OiBEZWNlbnRyYWxpemVkIGRvbWFpbiBzZXJ2aWNlcyByZWZsZWN0IG9uIGluZHVzdHJ5IHByb2dyZXNzJyxcbiAgICAgICAgICAgIGxpbms6ICdodHRwczovL2NvaW50ZWxlZ3JhcGguY29tL25ld3Mvc3RhdGUtb2YtcGxheS1kZWNlbnRyYWxpemVkLWRvbWFpbi1zZXJ2aWNlcy1yZWZsZWN0LW9uLWluZHVzdHJ5LXByb2dyZXNzJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5ld3M6ICdWaXRhbGlrIEJ1dGVyaW4gZGl2dWxnZXMgdGhlIOKAmGxhcmdlc3QgcmVtYWluaW5nIGNoYWxsZW5nZeKAmSBmb3IgRXRoZXJldW0nLFxuICAgICAgICAgICAgbGluazogJ2h0dHBzOi8vY29pbnRlbGVncmFwaC5jb20vbmV3cy92aXRhbGlrLWJ1dGVyaW4tZGl2dWxnZXMtdGhlLWxhcmdlc3QtcmVtYWluaW5nLWNoYWxsZW5nZS1pbi1ldGhlcmV1bScsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuZXdzOiAnQ29pbmJhc2UgdG8gaGFuZCBvdXQgRU5TIHVzZXJuYW1lcyB0byBzaW1wbGlmeSB3YWxsZXQgdHJhbnNhY3Rpb25zJyxcbiAgICAgICAgICAgIGxpbms6ICdodHRwczovL2NvaW50ZWxlZ3JhcGguY29tL25ld3MvY29pbmJhc2UtdG8taGFuZC1vdXQtZW5zLXVzZXJuYW1lcy10by1zaW1wbGlmeS13YWxsZXQtdHJhbnNhY3Rpb25zJyxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgICBmZWF0dXJlZF9hcnRpY2xlczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5ld3M6ICdFdGhlcmV1bSBOYW1lIFNlcnZpY2UgZm91bmRlciByZWZsZWN0cyBhcyAyIG1pbGxpb24gcmVnaXN0cmF0aW9uIG1hcmsgbmVhcnMnLFxuICAgICAgICAgICAgbGluazogJ2h0dHBzOi8vY29pbnRlbGVncmFwaC5jb20vbmV3cy9ldGhlcmV1bS1uYW1lLXNlcnZpY2UtZm91bmRlci1yZWZsZWN0cy1hcy0yLW1pbGxpb24tcmVnaXN0cmF0aW9uLW1hcmstbmVhcnMnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmV3czogJ0FtYXpvbi5ldGggRU5TIGRvbWFpbiBvd25lciBkaXNyZWdhcmRzIDFNIFVTREMgYnV5b3V0IG9mZmVyIG9uIE9wZW5TZWEnLFxuICAgICAgICAgICAgbGluazogJ2h0dHBzOi8vY29pbnRlbGVncmFwaC5jb20vbmV3cy9hbWF6b24tZXRoLWVucy1kb21haW4tb3duZXItZGlzcmVnYXJkcy0xbS11c2RjLWJ1eW91dC1vZmZlci1vbi1vcGVuc2VhJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5ld3M6ICdFdGhlcmV1bSBOYW1lIFNlcnZpY2UgcmVnaXN0cmF0aW9ucyBzdXJnZSBieSAyMDAlIGFtaWQgbG93ZXIgZ2FzIGZlZXMnLFxuICAgICAgICAgICAgbGluazogJ2h0dHBzOi8vY29pbnRlbGVncmFwaC5jb20vbmV3cy9ldGhlcmV1bS1uYW1lLXNlcnZpY2UtcmVnaXN0cmF0aW9ucy1zdXJnZS1ieS0yMDAtYW1pZC1sb3dlci1nYXMtZmVlcycsXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgICAgdG9wX3R3ZWV0czogW1xuICAgICAgICAgICcxNjE2ODAxMjkzMTEyMzE1OTA2JyxcbiAgICAgICAgICAnMTYyNzU0MTA5NTQyODExNjQ4MycsXG4gICAgICAgICAgJzE2MjU3NTk4Mzk3NDUxMTQxMTMnLFxuICAgICAgICBdLFxuICAgICAgICBmZWF0dXJlZF9kb21haW46IHtcbiAgICAgICAgICBuYW1lOiAn8J+muPCfj7/igI3imYLvuI8uZXRoJyxcbiAgICAgICAgICBsaW5rOiAnaHR0cHM6Ly93d3cuZW5zLnZpc2lvbi9uYW1lLyVGMCU5RiVBNiVCOCVGMCU5RiU4RiVCRiVFMiU4MCU4RCVFMiU5OSU4Mi5ldGgnLFxuICAgICAgICB9LFxuICAgICAgICBwb2RjYXN0czogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiAnVFJBVkFMQS5FVEggTE9TVCB8IFRIRSBEQUlMWSBFTlMgUkVQT1JUIHwgRVBJU09ERSA2NCcsXG4gICAgICAgICAgICBsaW5rOiAnaHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1rVC1JNnZSdWJ5UScsXG4gICAgICAgICAgICBkYXRlOiAnMTV0aCBNYXIgMjAyMycsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTpcbiAgICAgICAgICAgICAgJ0VBUkxZIElOVkVTVE9SIEVOUy5WSVNJT04gLSBFTlMgTUFUVEVSUyBQT0RDQVNUIHdpdGggWmVyb1plcm9Db2lucy5ldGggWlpDJyxcbiAgICAgICAgICAgIGxpbms6ICdodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PTgta2JhdVIxbXdFJyxcbiAgICAgICAgICAgIGRhdGU6ICc1dGggTWFyIDIwMjInLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9KVxuICAgICk7XG4gIH0pLFxuXTtcbiJdLCJuYW1lcyI6WyJlbmRwb2ludHMiLCJyZXN0IiwiaGFuZGxlcnMiLCJnZXQiLCJob21lIiwiX3JlcSIsInJlcyIsImN0eCIsImpzb24iLCJsYXRlc3RfbmV3cyIsIm5ld3MiLCJsaW5rIiwiZmVhdHVyZWRfYXJ0aWNsZXMiLCJ0b3BfdHdlZXRzIiwiZmVhdHVyZWRfZG9tYWluIiwibmFtZSIsInBvZGNhc3RzIiwidGl0bGUiLCJkYXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/mocks/handlers.ts\n");

/***/ }),

/***/ "./src/mocks/server.ts":
/*!*****************************!*\
  !*** ./src/mocks/server.ts ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"server\": () => (/* binding */ server)\n/* harmony export */ });\n/* harmony import */ var msw_node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! msw/node */ \"msw/node\");\n/* harmony import */ var _handlers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handlers */ \"./src/mocks/handlers.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([msw_node__WEBPACK_IMPORTED_MODULE_0__]);\nmsw_node__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nconst server = (0,msw_node__WEBPACK_IMPORTED_MODULE_0__.setupServer)(..._handlers__WEBPACK_IMPORTED_MODULE_1__.handlers);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9ja3Mvc2VydmVyLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUF1QztBQUNEO0FBRS9CLE1BQU1FLFNBQVNGLHFEQUFXQSxJQUFJQywrQ0FBUUEsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL2Vucy1nb2RzLy4vc3JjL21vY2tzL3NlcnZlci50cz85NzY2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHNldHVwU2VydmVyIH0gZnJvbSAnbXN3L25vZGUnO1xuaW1wb3J0IHsgaGFuZGxlcnMgfSBmcm9tICcuL2hhbmRsZXJzJztcblxuZXhwb3J0IGNvbnN0IHNlcnZlciA9IHNldHVwU2VydmVyKC4uLmhhbmRsZXJzKTtcbiJdLCJuYW1lcyI6WyJzZXR1cFNlcnZlciIsImhhbmRsZXJzIiwic2VydmVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/mocks/server.ts\n");

/***/ })

};
;