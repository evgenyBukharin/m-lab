/******/ (() => {
	// webpackBootstrap
	/******/ var __webpack_modules__ = {
		/***/ 279: /***/ () => {
			window.addEventListener("DOMContentLoaded", function () {
				[].forEach.call(document.querySelectorAll(".phone-mask-input"), function (input) {
					var keyCode;
					function mask(event) {
						event.keyCode && (keyCode = event.keyCode);
						var pos = this.selectionStart;
						if (pos < 3) event.preventDefault();
						var matrix = "+7 (___)-___-__-__",
							i = 0,
							def = matrix.replace(/\D/g, ""),
							val = this.value.replace(/\D/g, ""),
							new_value = matrix.replace(/[_\d]/g, function (a) {
								return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
							});
						i = new_value.indexOf("_");
						if (i != -1) {
							i < 5 && (i = 3);
							new_value = new_value.slice(0, i);
						}
						var reg = matrix
							.substr(0, this.value.length)
							.replace(/_+/g, function (a) {
								return "\\d{1," + a.length + "}";
							})
							.replace(/[+()]/g, "\\$&");
						reg = new RegExp("^" + reg + "$");
						if (!reg.test(this.value) || this.value.length < 5 || (keyCode > 47 && keyCode < 58))
							this.value = new_value;
						if (event.type == "blur" && this.value.length < 5) this.value = "";
					}
					input.addEventListener("input", mask, false);
					input.addEventListener("focus", mask, false);
					input.addEventListener("blur", mask, false);
					input.addEventListener("keydown", mask, false);
				});
			});

			/***/
		},

		/******/
	};
	/************************************************************************/
	/******/ // The module cache
	/******/ var __webpack_module_cache__ = {};
	/******/
	/******/ // The require function
	/******/ function __webpack_require__(moduleId) {
		/******/ // Check if module is in cache
		/******/ var cachedModule = __webpack_module_cache__[moduleId];
		/******/ if (cachedModule !== undefined) {
			/******/ return cachedModule.exports;
			/******/
		}
		/******/ // Create a new module (and put it into the cache)
		/******/ var module = (__webpack_module_cache__[moduleId] = {
			/******/ // no module.id needed
			/******/ // no module.loaded needed
			/******/ exports: {},
			/******/
		});
		/******/
		/******/ // Execute the module function
		/******/ __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
		/******/
		/******/ // Return the exports of the module
		/******/ return module.exports;
		/******/
	}
	/******/
	/************************************************************************/
	var __webpack_exports__ = {};
	// This entry need to be wrapped in an IIFE because it need to be in strict mode.
	(() => {
		"use strict"; // CONCATENATED MODULE: ./src/js/_vars.js

		/* harmony default export */ const _vars = {
			windowEl: window,
			documentEl: document,
			htmlEl: document.documentElement,
			bodyEl: document.body,
		};
		// EXTERNAL MODULE: ./src/js/components/phone-input.js
		var phone_input = __webpack_require__(279); // CONCATENATED MODULE: ./src/js/_components.js // CONCATENATED MODULE: ./src/js/main.js
	})();

	/******/
})();
