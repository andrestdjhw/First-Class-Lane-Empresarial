/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@emailjs/browser/es/api/sendPost.js"
/*!**********************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/api/sendPost.js ***!
  \**********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   sendPost: () => (/* binding */ sendPost)
/* harmony export */ });
/* harmony import */ var _models_EmailJSResponseStatus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/EmailJSResponseStatus */ "./node_modules/@emailjs/browser/es/models/EmailJSResponseStatus.js");
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/store */ "./node_modules/@emailjs/browser/es/store/store.js");


const sendPost = async (url, data, headers = {}) => {
    const response = await fetch(_store_store__WEBPACK_IMPORTED_MODULE_1__.store.origin + url, {
        method: 'POST',
        headers,
        body: data,
    });
    const message = await response.text();
    const responseStatus = new _models_EmailJSResponseStatus__WEBPACK_IMPORTED_MODULE_0__.EmailJSResponseStatus(response.status, message);
    if (response.ok) {
        return responseStatus;
    }
    throw responseStatus;
};


/***/ },

/***/ "./node_modules/@emailjs/browser/es/errors/blockedEmailError/blockedEmailError.js"
/*!****************************************************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/errors/blockedEmailError/blockedEmailError.js ***!
  \****************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   blockedEmailError: () => (/* binding */ blockedEmailError)
/* harmony export */ });
/* harmony import */ var _models_EmailJSResponseStatus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/EmailJSResponseStatus */ "./node_modules/@emailjs/browser/es/models/EmailJSResponseStatus.js");

const blockedEmailError = () => {
    return new _models_EmailJSResponseStatus__WEBPACK_IMPORTED_MODULE_0__.EmailJSResponseStatus(403, 'Forbidden');
};


/***/ },

/***/ "./node_modules/@emailjs/browser/es/errors/headlessError/headlessError.js"
/*!********************************************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/errors/headlessError/headlessError.js ***!
  \********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   headlessError: () => (/* binding */ headlessError)
/* harmony export */ });
/* harmony import */ var _models_EmailJSResponseStatus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/EmailJSResponseStatus */ "./node_modules/@emailjs/browser/es/models/EmailJSResponseStatus.js");

const headlessError = () => {
    return new _models_EmailJSResponseStatus__WEBPACK_IMPORTED_MODULE_0__.EmailJSResponseStatus(451, 'Unavailable For Headless Browser');
};


/***/ },

/***/ "./node_modules/@emailjs/browser/es/errors/limitRateError/limitRateError.js"
/*!**********************************************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/errors/limitRateError/limitRateError.js ***!
  \**********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   limitRateError: () => (/* binding */ limitRateError)
/* harmony export */ });
/* harmony import */ var _models_EmailJSResponseStatus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/EmailJSResponseStatus */ "./node_modules/@emailjs/browser/es/models/EmailJSResponseStatus.js");

const limitRateError = () => {
    return new _models_EmailJSResponseStatus__WEBPACK_IMPORTED_MODULE_0__.EmailJSResponseStatus(429, 'Too Many Requests');
};


/***/ },

/***/ "./node_modules/@emailjs/browser/es/index.js"
/*!***************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/index.js ***!
  \***************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmailJSResponseStatus: () => (/* reexport safe */ _models_EmailJSResponseStatus__WEBPACK_IMPORTED_MODULE_0__.EmailJSResponseStatus),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   init: () => (/* reexport safe */ _methods_init_init__WEBPACK_IMPORTED_MODULE_1__.init),
/* harmony export */   send: () => (/* reexport safe */ _methods_send_send__WEBPACK_IMPORTED_MODULE_2__.send),
/* harmony export */   sendForm: () => (/* reexport safe */ _methods_sendForm_sendForm__WEBPACK_IMPORTED_MODULE_3__.sendForm)
/* harmony export */ });
/* harmony import */ var _models_EmailJSResponseStatus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models/EmailJSResponseStatus */ "./node_modules/@emailjs/browser/es/models/EmailJSResponseStatus.js");
/* harmony import */ var _methods_init_init__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./methods/init/init */ "./node_modules/@emailjs/browser/es/methods/init/init.js");
/* harmony import */ var _methods_send_send__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./methods/send/send */ "./node_modules/@emailjs/browser/es/methods/send/send.js");
/* harmony import */ var _methods_sendForm_sendForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./methods/sendForm/sendForm */ "./node_modules/@emailjs/browser/es/methods/sendForm/sendForm.js");





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    init: _methods_init_init__WEBPACK_IMPORTED_MODULE_1__.init,
    send: _methods_send_send__WEBPACK_IMPORTED_MODULE_2__.send,
    sendForm: _methods_sendForm_sendForm__WEBPACK_IMPORTED_MODULE_3__.sendForm,
    EmailJSResponseStatus: _models_EmailJSResponseStatus__WEBPACK_IMPORTED_MODULE_0__.EmailJSResponseStatus,
});


/***/ },

/***/ "./node_modules/@emailjs/browser/es/methods/init/init.js"
/*!***************************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/methods/init/init.js ***!
  \***************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   init: () => (/* binding */ init)
/* harmony export */ });
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../store/store */ "./node_modules/@emailjs/browser/es/store/store.js");
/* harmony import */ var _utils_buildOptions_buildOptions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/buildOptions/buildOptions */ "./node_modules/@emailjs/browser/es/utils/buildOptions/buildOptions.js");


/**
 * EmailJS global SDK config
 * @param {object} options - the EmailJS global SDK config options
 * @param {string} origin - the non-default EmailJS origin
 */
const init = (options, origin = 'https://api.emailjs.com') => {
    if (!options)
        return;
    const opts = (0,_utils_buildOptions_buildOptions__WEBPACK_IMPORTED_MODULE_1__.buildOptions)(options);
    _store_store__WEBPACK_IMPORTED_MODULE_0__.store.publicKey = opts.publicKey;
    _store_store__WEBPACK_IMPORTED_MODULE_0__.store.blockHeadless = opts.blockHeadless;
    _store_store__WEBPACK_IMPORTED_MODULE_0__.store.storageProvider = opts.storageProvider;
    _store_store__WEBPACK_IMPORTED_MODULE_0__.store.blockList = opts.blockList;
    _store_store__WEBPACK_IMPORTED_MODULE_0__.store.limitRate = opts.limitRate;
    _store_store__WEBPACK_IMPORTED_MODULE_0__.store.origin = opts.origin || origin;
};


/***/ },

/***/ "./node_modules/@emailjs/browser/es/methods/send/send.js"
/*!***************************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/methods/send/send.js ***!
  \***************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   send: () => (/* binding */ send)
/* harmony export */ });
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../store/store */ "./node_modules/@emailjs/browser/es/store/store.js");
/* harmony import */ var _api_sendPost__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api/sendPost */ "./node_modules/@emailjs/browser/es/api/sendPost.js");
/* harmony import */ var _utils_buildOptions_buildOptions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/buildOptions/buildOptions */ "./node_modules/@emailjs/browser/es/utils/buildOptions/buildOptions.js");
/* harmony import */ var _utils_validateParams_validateParams__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/validateParams/validateParams */ "./node_modules/@emailjs/browser/es/utils/validateParams/validateParams.js");
/* harmony import */ var _utils_validateTemplateParams_validateTemplateParams__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/validateTemplateParams/validateTemplateParams */ "./node_modules/@emailjs/browser/es/utils/validateTemplateParams/validateTemplateParams.js");
/* harmony import */ var _utils_isHeadless_isHeadless__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/isHeadless/isHeadless */ "./node_modules/@emailjs/browser/es/utils/isHeadless/isHeadless.js");
/* harmony import */ var _errors_headlessError_headlessError__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../errors/headlessError/headlessError */ "./node_modules/@emailjs/browser/es/errors/headlessError/headlessError.js");
/* harmony import */ var _utils_isBlockedValueInParams_isBlockedValueInParams__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/isBlockedValueInParams/isBlockedValueInParams */ "./node_modules/@emailjs/browser/es/utils/isBlockedValueInParams/isBlockedValueInParams.js");
/* harmony import */ var _errors_blockedEmailError_blockedEmailError__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../errors/blockedEmailError/blockedEmailError */ "./node_modules/@emailjs/browser/es/errors/blockedEmailError/blockedEmailError.js");
/* harmony import */ var _utils_isLimitRateHit_isLimitRateHit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils/isLimitRateHit/isLimitRateHit */ "./node_modules/@emailjs/browser/es/utils/isLimitRateHit/isLimitRateHit.js");
/* harmony import */ var _errors_limitRateError_limitRateError__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../errors/limitRateError/limitRateError */ "./node_modules/@emailjs/browser/es/errors/limitRateError/limitRateError.js");











/**
 * Send a template to the specific EmailJS service
 * @param {string} serviceID - the EmailJS service ID
 * @param {string} templateID - the EmailJS template ID
 * @param {object} templateParams - the template params, what will be set to the EmailJS template
 * @param {object} options - the EmailJS SDK config options
 * @returns {Promise<EmailJSResponseStatus>}
 */
const send = async (serviceID, templateID, templateParams, options) => {
    const opts = (0,_utils_buildOptions_buildOptions__WEBPACK_IMPORTED_MODULE_2__.buildOptions)(options);
    const publicKey = opts.publicKey || _store_store__WEBPACK_IMPORTED_MODULE_0__.store.publicKey;
    const blockHeadless = opts.blockHeadless || _store_store__WEBPACK_IMPORTED_MODULE_0__.store.blockHeadless;
    const storageProvider = opts.storageProvider || _store_store__WEBPACK_IMPORTED_MODULE_0__.store.storageProvider;
    const blockList = { ..._store_store__WEBPACK_IMPORTED_MODULE_0__.store.blockList, ...opts.blockList };
    const limitRate = { ..._store_store__WEBPACK_IMPORTED_MODULE_0__.store.limitRate, ...opts.limitRate };
    if (blockHeadless && (0,_utils_isHeadless_isHeadless__WEBPACK_IMPORTED_MODULE_5__.isHeadless)(navigator)) {
        return Promise.reject((0,_errors_headlessError_headlessError__WEBPACK_IMPORTED_MODULE_6__.headlessError)());
    }
    (0,_utils_validateParams_validateParams__WEBPACK_IMPORTED_MODULE_3__.validateParams)(publicKey, serviceID, templateID);
    (0,_utils_validateTemplateParams_validateTemplateParams__WEBPACK_IMPORTED_MODULE_4__.validateTemplateParams)(templateParams);
    if (templateParams && (0,_utils_isBlockedValueInParams_isBlockedValueInParams__WEBPACK_IMPORTED_MODULE_7__.isBlockedValueInParams)(blockList, templateParams)) {
        return Promise.reject((0,_errors_blockedEmailError_blockedEmailError__WEBPACK_IMPORTED_MODULE_8__.blockedEmailError)());
    }
    if (await (0,_utils_isLimitRateHit_isLimitRateHit__WEBPACK_IMPORTED_MODULE_9__.isLimitRateHit)(location.pathname, limitRate, storageProvider)) {
        return Promise.reject((0,_errors_limitRateError_limitRateError__WEBPACK_IMPORTED_MODULE_10__.limitRateError)());
    }
    const params = {
        lib_version: '4.4.1',
        user_id: publicKey,
        service_id: serviceID,
        template_id: templateID,
        template_params: templateParams,
    };
    return (0,_api_sendPost__WEBPACK_IMPORTED_MODULE_1__.sendPost)('/api/v1.0/email/send', JSON.stringify(params), {
        'Content-type': 'application/json',
    });
};


/***/ },

/***/ "./node_modules/@emailjs/browser/es/methods/sendForm/sendForm.js"
/*!***********************************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/methods/sendForm/sendForm.js ***!
  \***********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   sendForm: () => (/* binding */ sendForm)
/* harmony export */ });
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../store/store */ "./node_modules/@emailjs/browser/es/store/store.js");
/* harmony import */ var _api_sendPost__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api/sendPost */ "./node_modules/@emailjs/browser/es/api/sendPost.js");
/* harmony import */ var _utils_buildOptions_buildOptions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/buildOptions/buildOptions */ "./node_modules/@emailjs/browser/es/utils/buildOptions/buildOptions.js");
/* harmony import */ var _utils_validateForm_validateForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/validateForm/validateForm */ "./node_modules/@emailjs/browser/es/utils/validateForm/validateForm.js");
/* harmony import */ var _utils_validateParams_validateParams__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/validateParams/validateParams */ "./node_modules/@emailjs/browser/es/utils/validateParams/validateParams.js");
/* harmony import */ var _utils_isHeadless_isHeadless__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/isHeadless/isHeadless */ "./node_modules/@emailjs/browser/es/utils/isHeadless/isHeadless.js");
/* harmony import */ var _errors_headlessError_headlessError__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../errors/headlessError/headlessError */ "./node_modules/@emailjs/browser/es/errors/headlessError/headlessError.js");
/* harmony import */ var _utils_isBlockedValueInParams_isBlockedValueInParams__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/isBlockedValueInParams/isBlockedValueInParams */ "./node_modules/@emailjs/browser/es/utils/isBlockedValueInParams/isBlockedValueInParams.js");
/* harmony import */ var _errors_blockedEmailError_blockedEmailError__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../errors/blockedEmailError/blockedEmailError */ "./node_modules/@emailjs/browser/es/errors/blockedEmailError/blockedEmailError.js");
/* harmony import */ var _utils_isLimitRateHit_isLimitRateHit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils/isLimitRateHit/isLimitRateHit */ "./node_modules/@emailjs/browser/es/utils/isLimitRateHit/isLimitRateHit.js");
/* harmony import */ var _errors_limitRateError_limitRateError__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../errors/limitRateError/limitRateError */ "./node_modules/@emailjs/browser/es/errors/limitRateError/limitRateError.js");











const findHTMLForm = (form) => {
    return typeof form === 'string' ? document.querySelector(form) : form;
};
/**
 * Send a form the specific EmailJS service
 * @param {string} serviceID - the EmailJS service ID
 * @param {string} templateID - the EmailJS template ID
 * @param {string | HTMLFormElement} form - the form element or selector
 * @param {object} options - the EmailJS SDK config options
 * @returns {Promise<EmailJSResponseStatus>}
 */
const sendForm = async (serviceID, templateID, form, options) => {
    const opts = (0,_utils_buildOptions_buildOptions__WEBPACK_IMPORTED_MODULE_2__.buildOptions)(options);
    const publicKey = opts.publicKey || _store_store__WEBPACK_IMPORTED_MODULE_0__.store.publicKey;
    const blockHeadless = opts.blockHeadless || _store_store__WEBPACK_IMPORTED_MODULE_0__.store.blockHeadless;
    const storageProvider = _store_store__WEBPACK_IMPORTED_MODULE_0__.store.storageProvider || opts.storageProvider;
    const blockList = { ..._store_store__WEBPACK_IMPORTED_MODULE_0__.store.blockList, ...opts.blockList };
    const limitRate = { ..._store_store__WEBPACK_IMPORTED_MODULE_0__.store.limitRate, ...opts.limitRate };
    if (blockHeadless && (0,_utils_isHeadless_isHeadless__WEBPACK_IMPORTED_MODULE_5__.isHeadless)(navigator)) {
        return Promise.reject((0,_errors_headlessError_headlessError__WEBPACK_IMPORTED_MODULE_6__.headlessError)());
    }
    const currentForm = findHTMLForm(form);
    (0,_utils_validateParams_validateParams__WEBPACK_IMPORTED_MODULE_4__.validateParams)(publicKey, serviceID, templateID);
    (0,_utils_validateForm_validateForm__WEBPACK_IMPORTED_MODULE_3__.validateForm)(currentForm);
    const formData = new FormData(currentForm);
    if ((0,_utils_isBlockedValueInParams_isBlockedValueInParams__WEBPACK_IMPORTED_MODULE_7__.isBlockedValueInParams)(blockList, formData)) {
        return Promise.reject((0,_errors_blockedEmailError_blockedEmailError__WEBPACK_IMPORTED_MODULE_8__.blockedEmailError)());
    }
    if (await (0,_utils_isLimitRateHit_isLimitRateHit__WEBPACK_IMPORTED_MODULE_9__.isLimitRateHit)(location.pathname, limitRate, storageProvider)) {
        return Promise.reject((0,_errors_limitRateError_limitRateError__WEBPACK_IMPORTED_MODULE_10__.limitRateError)());
    }
    formData.append('lib_version', '4.4.1');
    formData.append('service_id', serviceID);
    formData.append('template_id', templateID);
    formData.append('user_id', publicKey);
    return (0,_api_sendPost__WEBPACK_IMPORTED_MODULE_1__.sendPost)('/api/v1.0/email/send-form', formData);
};


/***/ },

/***/ "./node_modules/@emailjs/browser/es/models/EmailJSResponseStatus.js"
/*!**************************************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/models/EmailJSResponseStatus.js ***!
  \**************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmailJSResponseStatus: () => (/* binding */ EmailJSResponseStatus)
/* harmony export */ });
class EmailJSResponseStatus {
    constructor(_status = 0, _text = 'Network Error') {
        this.status = _status;
        this.text = _text;
    }
}


/***/ },

/***/ "./node_modules/@emailjs/browser/es/store/store.js"
/*!*********************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/store/store.js ***!
  \*********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   store: () => (/* binding */ store)
/* harmony export */ });
/* harmony import */ var _utils_createWebStorage_createWebStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/createWebStorage/createWebStorage */ "./node_modules/@emailjs/browser/es/utils/createWebStorage/createWebStorage.js");

const store = {
    origin: 'https://api.emailjs.com',
    blockHeadless: false,
    storageProvider: (0,_utils_createWebStorage_createWebStorage__WEBPACK_IMPORTED_MODULE_0__.createWebStorage)(),
};


/***/ },

/***/ "./node_modules/@emailjs/browser/es/utils/buildOptions/buildOptions.js"
/*!*****************************************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/utils/buildOptions/buildOptions.js ***!
  \*****************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildOptions: () => (/* binding */ buildOptions)
/* harmony export */ });
const buildOptions = (options) => {
    if (!options)
        return {};
    // support compatibility with SDK v3
    if (typeof options === 'string') {
        return {
            publicKey: options,
        };
    }
    // eslint-disable-next-line @typescript-eslint/no-base-to-string
    if (options.toString() === '[object Object]') {
        return options;
    }
    return {};
};


/***/ },

/***/ "./node_modules/@emailjs/browser/es/utils/createWebStorage/createWebStorage.js"
/*!*************************************************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/utils/createWebStorage/createWebStorage.js ***!
  \*************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createWebStorage: () => (/* binding */ createWebStorage)
/* harmony export */ });
const createWebStorage = () => {
    if (typeof localStorage === 'undefined')
        return;
    return {
        get: (key) => Promise.resolve(localStorage.getItem(key)),
        set: (key, value) => Promise.resolve(localStorage.setItem(key, value)),
        remove: (key) => Promise.resolve(localStorage.removeItem(key)),
    };
};


/***/ },

/***/ "./node_modules/@emailjs/browser/es/utils/isBlockedValueInParams/isBlockedValueInParams.js"
/*!*************************************************************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/utils/isBlockedValueInParams/isBlockedValueInParams.js ***!
  \*************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isBlockedValueInParams: () => (/* binding */ isBlockedValueInParams)
/* harmony export */ });
/* harmony import */ var _validateBlockListParams_validateBlockListParams__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../validateBlockListParams/validateBlockListParams */ "./node_modules/@emailjs/browser/es/utils/validateBlockListParams/validateBlockListParams.js");

const isBlockListDisabled = (options) => {
    return !options.list?.length || !options.watchVariable;
};
const getValue = (data, name) => {
    return data instanceof FormData ? data.get(name) : data[name];
};
const isBlockedValueInParams = (options, params) => {
    if (isBlockListDisabled(options))
        return false;
    (0,_validateBlockListParams_validateBlockListParams__WEBPACK_IMPORTED_MODULE_0__.validateBlockListParams)(options.list, options.watchVariable);
    const value = getValue(params, options.watchVariable);
    if (typeof value !== 'string')
        return false;
    return options.list.includes(value);
};


/***/ },

/***/ "./node_modules/@emailjs/browser/es/utils/isHeadless/isHeadless.js"
/*!*************************************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/utils/isHeadless/isHeadless.js ***!
  \*************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isHeadless: () => (/* binding */ isHeadless)
/* harmony export */ });
const isHeadless = (navigator) => {
    return navigator.webdriver || !navigator.languages || navigator.languages.length === 0;
};


/***/ },

/***/ "./node_modules/@emailjs/browser/es/utils/isLimitRateHit/isLimitRateHit.js"
/*!*********************************************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/utils/isLimitRateHit/isLimitRateHit.js ***!
  \*********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isLimitRateHit: () => (/* binding */ isLimitRateHit)
/* harmony export */ });
/* harmony import */ var _validateLimitRateParams_validateLimitRateParams__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../validateLimitRateParams/validateLimitRateParams */ "./node_modules/@emailjs/browser/es/utils/validateLimitRateParams/validateLimitRateParams.js");

const getLeftTime = async (id, throttle, storage) => {
    const lastTime = Number((await storage.get(id)) || 0);
    return throttle - Date.now() + lastTime;
};
const isLimitRateHit = async (defaultID, options, storage) => {
    if (!options.throttle || !storage) {
        return false;
    }
    (0,_validateLimitRateParams_validateLimitRateParams__WEBPACK_IMPORTED_MODULE_0__.validateLimitRateParams)(options.throttle, options.id);
    const id = options.id || defaultID;
    const leftTime = await getLeftTime(id, options.throttle, storage);
    if (leftTime > 0) {
        return true;
    }
    await storage.set(id, Date.now().toString());
    return false;
};


/***/ },

/***/ "./node_modules/@emailjs/browser/es/utils/validateBlockListParams/validateBlockListParams.js"
/*!***************************************************************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/utils/validateBlockListParams/validateBlockListParams.js ***!
  \***************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   validateBlockListParams: () => (/* binding */ validateBlockListParams)
/* harmony export */ });
const validateBlockListParams = (list, watchVariable) => {
    if (!Array.isArray(list)) {
        throw 'The BlockList list has to be an array';
    }
    if (typeof watchVariable !== 'string') {
        throw 'The BlockList watchVariable has to be a string';
    }
};


/***/ },

/***/ "./node_modules/@emailjs/browser/es/utils/validateForm/validateForm.js"
/*!*****************************************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/utils/validateForm/validateForm.js ***!
  \*****************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   validateForm: () => (/* binding */ validateForm)
/* harmony export */ });
const validateForm = (form) => {
    if (!form || form.nodeName !== 'FORM') {
        throw 'The 3rd parameter is expected to be the HTML form element or the style selector of the form';
    }
};


/***/ },

/***/ "./node_modules/@emailjs/browser/es/utils/validateLimitRateParams/validateLimitRateParams.js"
/*!***************************************************************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/utils/validateLimitRateParams/validateLimitRateParams.js ***!
  \***************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   validateLimitRateParams: () => (/* binding */ validateLimitRateParams)
/* harmony export */ });
const validateLimitRateParams = (throttle, id) => {
    if (typeof throttle !== 'number' || throttle < 0) {
        throw 'The LimitRate throttle has to be a positive number';
    }
    if (id && typeof id !== 'string') {
        throw 'The LimitRate ID has to be a non-empty string';
    }
};


/***/ },

/***/ "./node_modules/@emailjs/browser/es/utils/validateParams/validateParams.js"
/*!*********************************************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/utils/validateParams/validateParams.js ***!
  \*********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   validateParams: () => (/* binding */ validateParams)
/* harmony export */ });
const validateParams = (publicKey, serviceID, templateID) => {
    if (!publicKey || typeof publicKey !== 'string') {
        throw 'The public key is required. Visit https://dashboard.emailjs.com/admin/account';
    }
    if (!serviceID || typeof serviceID !== 'string') {
        throw 'The service ID is required. Visit https://dashboard.emailjs.com/admin';
    }
    if (!templateID || typeof templateID !== 'string') {
        throw 'The template ID is required. Visit https://dashboard.emailjs.com/admin/templates';
    }
};


/***/ },

/***/ "./node_modules/@emailjs/browser/es/utils/validateTemplateParams/validateTemplateParams.js"
/*!*************************************************************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/utils/validateTemplateParams/validateTemplateParams.js ***!
  \*************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   validateTemplateParams: () => (/* binding */ validateTemplateParams)
/* harmony export */ });
const validateTemplateParams = (templateParams) => {
    // eslint-disable-next-line @typescript-eslint/no-base-to-string
    if (templateParams && templateParams.toString() !== '[object Object]') {
        throw 'The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/';
    }
};


/***/ },

/***/ "./src/scripts/ContactModal.js"
/*!*************************************!*\
  !*** ./src/scripts/ContactModal.js ***!
  \*************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ContactModal)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emailjs_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emailjs/browser */ "./node_modules/@emailjs/browser/es/index.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./i18n */ "./src/scripts/i18n.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config */ "./src/scripts/config.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





const EMAILJS_READY = !(0,_config__WEBPACK_IMPORTED_MODULE_3__.isPlaceholder)(_config__WEBPACK_IMPORTED_MODULE_3__.EMAILJS_SERVICE_ID) && !(0,_config__WEBPACK_IMPORTED_MODULE_3__.isPlaceholder)(_config__WEBPACK_IMPORTED_MODULE_3__.EMAILJS_TEMPLATE_ID) && !(0,_config__WEBPACK_IMPORTED_MODULE_3__.isPlaceholder)(_config__WEBPACK_IMPORTED_MODULE_3__.EMAILJS_PUBLIC_KEY);
const RECAPTCHA_READY = !(0,_config__WEBPACK_IMPORTED_MODULE_3__.isPlaceholder)(_config__WEBPACK_IMPORTED_MODULE_3__.RECAPTCHA_SITE_KEY);
const STR = {
  es: {
    title: "Agenda tu diagnóstico gratuito",
    sub: "Déjanos tus datos y te contactamos para coordinar tu diagnóstico de cultura de 20 minutos.",
    name: "Nombre",
    company: "Empresa",
    role: "Cargo",
    size: "Número de empleados",
    sizePlaceholder: "Selecciona…",
    phone: "Teléfono",
    email: "Correo",
    message: "¿Cuál es tu principal reto con el equipo?",
    optional: "(opcional)",
    submit: "Enviar solicitud",
    sending: "Enviando…",
    successTitle: "¡Gracias!",
    successBody: "Recibimos tus datos. Te contactaremos muy pronto para agendar tu diagnóstico.",
    error: "Ocurrió un problema al enviar. Inténtalo de nuevo o escríbenos a info@fclempresarial.com.",
    required: "Este campo es obligatorio.",
    invalidEmail: "Ingresa un correo válido.",
    close: "Cerrar",
    rc_pre: "Protegido por reCAPTCHA. Aplican la ",
    rc_privacy: "Política de privacidad",
    rc_and: " y los ",
    rc_terms: "Términos",
    rc_post: " de Google."
  },
  en: {
    title: "Book your free diagnostic",
    sub: "Leave your details and we'll reach out to schedule your 20-minute culture diagnostic.",
    name: "Name",
    company: "Company",
    role: "Role",
    size: "Number of employees",
    sizePlaceholder: "Select…",
    phone: "Phone",
    email: "Email",
    message: "What's your main challenge with your team?",
    optional: "(optional)",
    submit: "Send request",
    sending: "Sending…",
    successTitle: "Thank you!",
    successBody: "We've received your details. We'll be in touch shortly to schedule your diagnostic.",
    error: "Something went wrong. Please try again or email us at info@fclempresarial.com.",
    required: "This field is required.",
    invalidEmail: "Please enter a valid email.",
    close: "Close",
    rc_pre: "Protected by reCAPTCHA. The Google ",
    rc_privacy: "Privacy Policy",
    rc_and: " and ",
    rc_terms: "Terms of Service",
    rc_post: " apply."
  }
};
const SIZE_OPTIONS = ["1–10", "10–30", "30–75", "75+"];
const EMPTY = {
  name: "",
  company: "",
  role: "",
  size: "",
  phone: "",
  email: "",
  message: ""
};

// ── reCAPTCHA v3 helpers ──────────────────────────────────────
function loadRecaptcha() {
  return new Promise(resolve => {
    if (window.grecaptcha && window.grecaptcha.execute) return resolve(true);
    if (document.getElementById("fcl-recaptcha")) {
      const check = setInterval(() => {
        if (window.grecaptcha && window.grecaptcha.execute) {
          clearInterval(check);
          resolve(true);
        }
      }, 200);
      setTimeout(() => {
        clearInterval(check);
        resolve(false);
      }, 6000);
      return;
    }
    const s = document.createElement("script");
    s.id = "fcl-recaptcha";
    s.src = "https://www.google.com/recaptcha/api.js?render=" + _config__WEBPACK_IMPORTED_MODULE_3__.RECAPTCHA_SITE_KEY;
    s.async = true;
    s.defer = true;
    s.onload = () => resolve(true);
    s.onerror = () => resolve(false);
    document.head.appendChild(s);
  });
}
async function getRecaptchaToken() {
  if (!RECAPTCHA_READY) return "recaptcha-disabled";
  const ok = await loadRecaptcha();
  if (!ok || !window.grecaptcha) return "";
  await new Promise(r => window.grecaptcha.ready(r));
  return window.grecaptcha.execute(_config__WEBPACK_IMPORTED_MODULE_3__.RECAPTCHA_SITE_KEY, {
    action: "book_diagnostic"
  });
}
function ContactModal() {
  const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [lang, setLang] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((0,_i18n__WEBPACK_IMPORTED_MODULE_2__.getInitialLang)());
  const [form, setForm] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(EMPTY);
  const [errors, setErrors] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});
  const [status, setStatus] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("idle"); // idle | sending | success | error
  const firstFieldRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const t = STR[lang] || STR.es;

  // Open on any "Book Diagnostic" CTA + keep language in sync with the toggle
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const onOpen = () => setOpen(true);
    const onLang = e => setLang(e.detail || (0,_i18n__WEBPACK_IMPORTED_MODULE_2__.getInitialLang)());
    window.addEventListener("fcl:open-contact", onOpen);
    window.addEventListener("fcl:langchange", onLang);
    return () => {
      window.removeEventListener("fcl:open-contact", onOpen);
      window.removeEventListener("fcl:langchange", onLang);
    };
  }, []);
  const close = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    setOpen(false);
    // reset after the close animation
    setTimeout(() => {
      setStatus("idle");
      setForm(EMPTY);
      setErrors({});
    }, 250);
  }, []);

  // Body scroll lock + focus + Esc
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = e => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    const id = setTimeout(() => firstFieldRef.current && firstFieldRef.current.focus(), 60);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
      clearTimeout(id);
    };
  }, [open, close]);
  function update(field, value) {
    setForm(f => ({
      ...f,
      [field]: value
    }));
    if (errors[field]) setErrors(e => ({
      ...e,
      [field]: null
    }));
  }
  function validate() {
    const e = {};
    if (!form.name.trim()) e.name = t.required;
    if (!form.company.trim()) e.company = t.required;
    if (!form.email.trim()) e.email = t.required;else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = t.invalidEmail;
    setErrors(e);
    return Object.keys(e).length === 0;
  }
  async function submit(ev) {
    ev.preventDefault();
    if (status === "sending") return;
    if (!validate()) return;
    setStatus("sending");
    try {
      const recaptchaToken = await getRecaptchaToken();
      const params = {
        from_name: form.name,
        company: form.company,
        role: form.role,
        company_size: form.size,
        phone: form.phone,
        reply_to: form.email,
        email: form.email,
        message: form.message,
        lang: lang,
        "g-recaptcha-response": recaptchaToken
      };
      if (EMAILJS_READY) {
        await _emailjs_browser__WEBPACK_IMPORTED_MODULE_1__["default"].send(_config__WEBPACK_IMPORTED_MODULE_3__.EMAILJS_SERVICE_ID, _config__WEBPACK_IMPORTED_MODULE_3__.EMAILJS_TEMPLATE_ID, params, {
          publicKey: _config__WEBPACK_IMPORTED_MODULE_3__.EMAILJS_PUBLIC_KEY
        });
      } else {
        // Demo mode: keys not configured yet. Log the payload and simulate success
        // so the flow can be previewed. Real sends start once config.js is filled in.
        // eslint-disable-next-line no-console
        console.warn("[FCL] EmailJS no configurado — modo demo. Payload:", params);
        await new Promise(r => setTimeout(r, 800));
      }
      setStatus("success");
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error("[FCL] Error al enviar el formulario:", err);
      setStatus("error");
    }
  }
  if (!open) return null;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
    className: "fcl-modal-overlay",
    onMouseDown: e => {
      if (e.target === e.currentTarget) close();
    },
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: "fcl-modal",
      role: "dialog",
      "aria-modal": "true",
      "aria-label": t.title,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
        className: "fcl-close",
        type: "button",
        "aria-label": t.close,
        onClick: close,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("svg", {
          width: "18",
          height: "18",
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "2",
          strokeLinecap: "round",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
            d: "M6 6l12 12M18 6L6 18"
          })
        })
      }), status === "success" ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "fcl-success",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
          className: "ok",
          "aria-hidden": "true",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("svg", {
            width: "26",
            height: "26",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2.2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
              d: "M5 12.5l4.5 4.5L19 7"
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h2", {
          children: t.successTitle
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
          children: t.successBody
        })]
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h2", {
          children: t.title
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
          className: "sub",
          children: t.sub
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("form", {
          className: "fcl-form",
          onSubmit: submit,
          noValidate: true,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: "fcl-field",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("label", {
              htmlFor: "fcl-name",
              children: t.name
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("input", {
              id: "fcl-name",
              ref: firstFieldRef,
              type: "text",
              value: form.name,
              className: errors.name ? "invalid" : "",
              onChange: e => update("name", e.target.value)
            }), errors.name && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
              className: "err",
              children: errors.name
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: "fcl-field",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("label", {
              htmlFor: "fcl-company",
              children: t.company
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("input", {
              id: "fcl-company",
              type: "text",
              value: form.company,
              className: errors.company ? "invalid" : "",
              onChange: e => update("company", e.target.value)
            }), errors.company && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
              className: "err",
              children: errors.company
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: "fcl-row",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              className: "fcl-field",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("label", {
                htmlFor: "fcl-role",
                children: [t.role, " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
                  className: "opt",
                  children: t.optional
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("input", {
                id: "fcl-role",
                type: "text",
                value: form.role,
                onChange: e => update("role", e.target.value)
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              className: "fcl-field",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("label", {
                htmlFor: "fcl-size",
                children: t.size
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("select", {
                id: "fcl-size",
                value: form.size,
                onChange: e => update("size", e.target.value),
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("option", {
                  value: "",
                  children: t.sizePlaceholder
                }), SIZE_OPTIONS.map(o => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("option", {
                  value: o,
                  children: o
                }, o))]
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: "fcl-row",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              className: "fcl-field",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("label", {
                htmlFor: "fcl-email",
                children: t.email
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("input", {
                id: "fcl-email",
                type: "email",
                value: form.email,
                className: errors.email ? "invalid" : "",
                onChange: e => update("email", e.target.value)
              }), errors.email && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
                className: "err",
                children: errors.email
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              className: "fcl-field",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("label", {
                htmlFor: "fcl-phone",
                children: [t.phone, " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
                  className: "opt",
                  children: t.optional
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("input", {
                id: "fcl-phone",
                type: "tel",
                value: form.phone,
                onChange: e => update("phone", e.target.value)
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: "fcl-field",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("label", {
              htmlFor: "fcl-message",
              children: [t.message, " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
                className: "opt",
                children: t.optional
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("textarea", {
              id: "fcl-message",
              value: form.message,
              onChange: e => update("message", e.target.value)
            })]
          }), status === "error" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
            className: "fcl-alert error",
            children: t.error
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
            className: "btn btn--olive fcl-submit",
            type: "submit",
            disabled: status === "sending",
            children: status === "sending" ? t.sending : t.submit
          }), RECAPTCHA_READY && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("p", {
            className: "fcl-note",
            children: [t.rc_pre, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("a", {
              href: "https://policies.google.com/privacy",
              target: "_blank",
              rel: "noopener noreferrer",
              children: t.rc_privacy
            }), t.rc_and, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("a", {
              href: "https://policies.google.com/terms",
              target: "_blank",
              rel: "noopener noreferrer",
              children: t.rc_terms
            }), t.rc_post]
          })]
        })]
      })]
    })
  });
}

/***/ },

/***/ "./src/scripts/LanguageToggle.js"
/*!***************************************!*\
  !*** ./src/scripts/LanguageToggle.js ***!
  \***************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LanguageToggle)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./i18n */ "./src/scripts/i18n.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



// Simplified, original SVG drawings of national flags (public symbols),
// clipped into a circle. No detailed emblems are reproduced.

function FlagMX() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("svg", {
    viewBox: "0 0 24 24",
    width: "20",
    height: "20",
    "aria-hidden": "true",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("defs", {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("clipPath", {
        id: "fcl-mx",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("circle", {
          cx: "12",
          cy: "12",
          r: "11"
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("g", {
      clipPath: "url(#fcl-mx)",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("rect", {
        x: "1",
        y: "1",
        width: "7.33",
        height: "22",
        fill: "#006847"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("rect", {
        x: "8.33",
        y: "1",
        width: "7.33",
        height: "22",
        fill: "#ffffff"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("rect", {
        x: "15.66",
        y: "1",
        width: "7.34",
        height: "22",
        fill: "#ce1126"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("circle", {
        cx: "12",
        cy: "12",
        r: "2.1",
        fill: "none",
        stroke: "#8a6d3b",
        strokeWidth: "1"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("circle", {
      cx: "12",
      cy: "12",
      r: "11",
      fill: "none",
      stroke: "rgba(0,0,0,.14)"
    })]
  });
}
function FlagUS() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("svg", {
    viewBox: "0 0 24 24",
    width: "20",
    height: "20",
    "aria-hidden": "true",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("defs", {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("clipPath", {
        id: "fcl-us",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("circle", {
          cx: "12",
          cy: "12",
          r: "11"
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("g", {
      clipPath: "url(#fcl-us)",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("rect", {
        x: "1",
        y: "1",
        width: "22",
        height: "22",
        fill: "#ffffff"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("g", {
        fill: "#b22234",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("rect", {
          x: "1",
          y: "1",
          width: "22",
          height: "1.7"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("rect", {
          x: "1",
          y: "4.4",
          width: "22",
          height: "1.7"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("rect", {
          x: "1",
          y: "7.8",
          width: "22",
          height: "1.7"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("rect", {
          x: "1",
          y: "11.15",
          width: "22",
          height: "1.7"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("rect", {
          x: "1",
          y: "14.5",
          width: "22",
          height: "1.7"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("rect", {
          x: "1",
          y: "17.9",
          width: "22",
          height: "1.7"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("rect", {
          x: "1",
          y: "21.3",
          width: "22",
          height: "1.7"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("rect", {
        x: "1",
        y: "1",
        width: "10",
        height: "11.9",
        fill: "#3c3b6e"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("g", {
        fill: "#ffffff",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("circle", {
          cx: "3.2",
          cy: "3.2",
          r: ".65"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("circle", {
          cx: "6",
          cy: "3.2",
          r: ".65"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("circle", {
          cx: "8.8",
          cy: "3.2",
          r: ".65"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("circle", {
          cx: "4.6",
          cy: "5.6",
          r: ".65"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("circle", {
          cx: "7.4",
          cy: "5.6",
          r: ".65"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("circle", {
          cx: "3.2",
          cy: "8",
          r: ".65"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("circle", {
          cx: "6",
          cy: "8",
          r: ".65"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("circle", {
          cx: "8.8",
          cy: "8",
          r: ".65"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("circle", {
          cx: "4.6",
          cy: "10.3",
          r: ".65"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("circle", {
          cx: "7.4",
          cy: "10.3",
          r: ".65"
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("circle", {
      cx: "12",
      cy: "12",
      r: "11",
      fill: "none",
      stroke: "rgba(0,0,0,.14)"
    })]
  });
}
const OPTIONS = [{
  code: "es",
  label: "ES",
  name: "Español",
  Flag: FlagMX
}, {
  code: "en",
  label: "EN",
  name: "English",
  Flag: FlagUS
}];
function LanguageToggle() {
  const [lang, setLang] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((0,_i18n__WEBPACK_IMPORTED_MODULE_1__.getInitialLang)());

  // Ensure the document matches the stored language on first paint.
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    (0,_i18n__WEBPACK_IMPORTED_MODULE_1__.applyLang)(lang);
  }, []);
  function choose(next) {
    if (next === lang) return;
    setLang(next);
    (0,_i18n__WEBPACK_IMPORTED_MODULE_1__.applyLang)(next);
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    className: "lang-fab",
    role: "group",
    "aria-label": "Idioma / Language",
    children: OPTIONS.map(function (o) {
      const active = lang === o.code;
      const Flag = o.Flag;
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("button", {
        type: "button",
        className: "lang-fab-btn" + (active ? " is-active" : ""),
        "aria-pressed": active,
        "aria-label": o.name,
        title: o.name,
        onClick: () => choose(o.code),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
          className: "flag",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Flag, {})
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
          className: "code",
          children: o.label
        })]
      }, o.code);
    })
  });
}

/***/ },

/***/ "./src/scripts/config.js"
/*!*******************************!*\
  !*** ./src/scripts/config.js ***!
  \*******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EMAILJS_PUBLIC_KEY: () => (/* binding */ EMAILJS_PUBLIC_KEY),
/* harmony export */   EMAILJS_SERVICE_ID: () => (/* binding */ EMAILJS_SERVICE_ID),
/* harmony export */   EMAILJS_TEMPLATE_ID: () => (/* binding */ EMAILJS_TEMPLATE_ID),
/* harmony export */   RECAPTCHA_SITE_KEY: () => (/* binding */ RECAPTCHA_SITE_KEY),
/* harmony export */   isPlaceholder: () => (/* binding */ isPlaceholder)
/* harmony export */ });
// ─────────────────────────────────────────────────────────────
// FCL Empresarial — integration keys
// Reemplaza estos placeholders cuando tengas el setup listo.
// Nada más se toca: el ContactModal los lee de aquí.
//
//   EmailJS  → https://dashboard.emailjs.com  (Account → API Keys / Email Services / Templates)
//   reCAPTCHA v3 → https://www.google.com/recaptcha/admin  (crea una key v3 para tu dominio)
// ─────────────────────────────────────────────────────────────

const EMAILJS_SERVICE_ID = "service_cl14q1k";
const EMAILJS_TEMPLATE_ID = "template_6rgvhi7";
const EMAILJS_PUBLIC_KEY = "ADYifT9OY2NpqGwcF";

// reCAPTCHA v3 site key (la "clave del sitio", NO la secreta)
const RECAPTCHA_SITE_KEY = "6Ld8CU0tAAAAALW7FZFZITZvP0YYl2qtgVddyxTM";

// Helper: detecta si algo sigue siendo placeholder
const isPlaceholder = v => !v || String(v).indexOf("YOUR_") === 0;

/***/ },

/***/ "./src/scripts/i18n.js"
/*!*****************************!*\
  !*** ./src/scripts/i18n.js ***!
  \*****************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DEFAULT_LANG: () => (/* binding */ DEFAULT_LANG),
/* harmony export */   STORAGE_KEY: () => (/* binding */ STORAGE_KEY),
/* harmony export */   applyLang: () => (/* binding */ applyLang),
/* harmony export */   getInitialLang: () => (/* binding */ getInitialLang),
/* harmony export */   translations: () => (/* binding */ translations)
/* harmony export */ });
// FCL Empresarial — bilingual dictionary (ES default, EN toggle)
// Each key matches a data-i18n="KEY" attribute in the PHP templates.
// Values are set via innerHTML, so inline tags (<em>, <strong>) are allowed.

const DEFAULT_LANG = "es";
const STORAGE_KEY = "fcl-lang";
const translations = {
  es: {
    // Header
    "nav.cost": "El Costo",
    "nav.method": "Metodología",
    "nav.packages": "Paquetes",
    "header.cta": "Agendar diagnóstico",
    // Hero
    "hero.eyebrow": "Consultoría de Personas y Cultura · Bay Area",
    "hero.title": "Tu mejor talento se está marchando. ¿Sabes por qué?",
    "hero.lead": "Muchas empresas invierten mucho en contratar, pero casi nada en mantener a su gente comprometida, reconocida y con sentido de pertenencia. FCL Empresarial construye los sistemas de cultura que hacen que tu equipo quiera quedarse.",
    "hero.cta1": "Agenda tu diagnóstico de cultura gratuito",
    "hero.cta2": "Cómo funciona",
    "hero.trust": "Llamada de 20 minutos · Sin compromiso · Sin venta",
    // Cost of doing nothing
    "cost.eyebrow": "El costo de no hacer nada",
    "cost.title": "La rotación no es solo un problema de personas. Es un problema de rentabilidad.",
    "cost.p1": "Reemplazar a un solo colaborador cuesta entre el <strong>50 % y el 200 % de su salario anual</strong>. Para una empresa de 50 personas con 30 % de rotación, son cientos de miles perdidos cada año: en reclutamiento, capacitación, productividad y conocimiento que se va por la puerta.",
    "cost.p2": "Pero el costo real no es financiero. Es el equipo que deja de confiar en el liderazgo. La cultura que se erosiona en silencio. Los mejores que empiezan a actualizar su currículum porque ven que todos se van.",
    "stat.src": "Promedio de la industria",
    "stat1.num": "50 a 200<em>%</em>",
    "stat1.label": "Costo de reemplazar a un colaborador, respecto a su salario anual.",
    "stat2.label": "Rotación anual promedio en empresas sin programas de cultura.",
    "stat3.label": "Colaboradores que dicen que el reconocimiento los haría quedarse más tiempo.",
    // Who we are
    "about.eyebrow": "Quiénes somos",
    "about.title": "Construimos empresas donde las personas quieren quedarse.",
    "about.p1": "FCL Empresarial es una consultoría de personas y cultura que ayuda a las organizaciones a fortalecer su cultura de trabajo, mejorar la experiencia del colaborador y construir entornos donde la gente se siente valorada, comprometida y orgullosa de pertenecer.",
    "about.p2": "No organizamos fiestas de cumpleaños. Diseñamos sistemas intencionales y estructurados de reconocimiento, integración, comunicación y desarrollo, para que tus líderes no tengan que hacerlo. Somos tu aliado externo de cultura: diseñamos, ejecutamos y medimos. Tú te enfocas en tu negocio.",
    // Methodology
    "method.eyebrow": "La metodología",
    "method.title": "Nuestro enfoque de 5 pilares para construir una cultura que retiene.",
    "p1.title": "Reconocer",
    "p1.principle": "Las personas necesitan sentirse vistas",
    "p1.desc": "Cumpleaños, aniversarios laborales, empleado destacado y reconocimiento entre compañeros.",
    "p2.title": "Escuchar",
    "p2.principle": "Las personas necesitan sentirse escuchadas",
    "p2.desc": "Encuestas de clima, encuestas de satisfacción y entrevistas de permanencia.",
    "p3.title": "Conectar",
    "p3.principle": "Las personas necesitan pertenecer",
    "p3.desc": "Eventos, actividades de integración y comunicación interna.",
    "p4.title": "Desarrollar",
    "p4.principle": "Las personas necesitan crecer",
    "p4.desc": "Planes de desarrollo, reconocimiento de logros y programas de mentoría.",
    "p5.title": "Inspirar",
    "p5.principle": "Las personas necesitan propósito",
    "p5.desc": "Valores, cultura, historias de éxito y comunicación de liderazgo.",
    // Packages
    "packages.eyebrow": "Paquetes",
    "packages.title": "Un plan para cada etapa de crecimiento.",
    "pkg.cta": "Agenda tu diagnóstico",
    "pkg.starter.size": "10 a 30 empleados",
    "pkg.starter.f1": "Calendario anual de reconocimiento",
    "pkg.starter.f2": "Reconocimiento de cumpleaños y aniversarios",
    "pkg.starter.f3": "Reconocimiento mensual destacado",
    "pkg.starter.f4": "Comunicación interna básica",
    "pkg.starter.goal": "Objetivo: Que los colaboradores se sientan vistos.",
    "pkg.growth.badge": "Más popular",
    "pkg.growth.size": "30 a 75 empleados",
    "pkg.growth.f1": "Todo lo de Starter",
    "pkg.growth.f2": "Encuestas trimestrales de compromiso",
    "pkg.growth.f3": "Programas estructurados de reconocimiento",
    "pkg.growth.f4": "Eventos trimestrales de equipo",
    "pkg.growth.f5": "Reportes para gerencia",
    "pkg.growth.goal": "Objetivo: Aumentar compromiso y pertenencia.",
    "pkg.exc.size": "75+ empleados",
    "pkg.exc.f1": "Todo lo de Growth",
    "pkg.exc.f2": "Diagnóstico cultural completo y estrategia anual",
    "pkg.exc.f3": "Diseño de programa de onboarding",
    "pkg.exc.f4": "Programas de bienestar",
    "pkg.exc.f5": "Métricas de clima y reportes ejecutivos",
    "pkg.exc.goal": "Objetivo: Construir una cultura de alto desempeño.",
    // How it works
    "how.eyebrow": "Cómo funciona",
    "how.title": "Empezar toma 20 minutos.",
    "how.s1.title": "Agenda tu diagnóstico gratuito",
    "how.s1.desc": "Agenda una llamada de 20 minutos. Exploramos aspectos clave de la experiencia de tus colaboradores para identificar fortalezas, oportunidades y áreas de mejora.",
    "how.s2.title": "Recibe tu reporte de cultura",
    "how.s2.desc": "Te entregamos una evaluación clara de dónde está tu cultura, con recomendaciones prácticas que puedes aplicar de inmediato.",
    "how.s3.title": "Elige tu plan",
    "how.s3.desc": "Selecciona el paquete que se ajuste al tamaño y etapa de tu empresa. Nosotros nos encargamos de todo: del diseño a la ejecución y la medición.",
    "how.s4.title": "Nosotros ejecutamos. Tú te enfocas en tu negocio",
    "how.s4.desc": "Nuestro equipo diseña, organiza y da seguimiento a cada programa. Tú no planeas, coordinas ni gestionas nada. Menos carga administrativa. Más compromiso. Mayor retención de talento.",
    // Quote
    "quote.text": "La cultura existe en todas las empresas. La diferencia es que algunas la gestionan intencionalmente, y otras la dejan al azar.",
    "quote.sub": "Si logras retener a <em>una</em> persona clave un año más, el programa prácticamente se paga solo.",
    // Final CTA
    "close.title": "Tu equipo es tu ventaja competitiva. Asegurémonos de que lo sepan.",
    "close.p": "Agenda tu diagnóstico de cultura gratuito de 20 minutos. Sin compromiso. Sin presentación de venta. Solo una conversación sobre tu equipo y cómo construir un lugar del que no quieran irse.",
    "close.cta": "Agenda tu diagnóstico gratuito",
    "close.callus": "Llámanos:",
    "close.note": "El calendario de reservas (Calendly) se integra aquí.",
    // Footer
    "footer.tagline": "Valoramos personas. Fortalecemos empresas.",
    "footer.division": "División de Personas y Cultura"
  },
  en: {
    // Header
    "nav.cost": "The Cost",
    "nav.method": "Methodology",
    "nav.packages": "Packages",
    "header.cta": "Book Diagnostic",
    // Hero
    "hero.eyebrow": "People & Culture Consulting · Bay Area",
    "hero.title": "Your best employees are leaving. Do you know why?",
    "hero.lead": "Most companies invest heavily in hiring but almost nothing in keeping people engaged, recognized, and committed. FCL Empresarial builds the culture systems that make your team want to stay.",
    "hero.cta1": "Book Your Free Culture Diagnostic",
    "hero.cta2": "See how it works",
    "hero.trust": "20-minute call · No commitment · No pitch",
    // Cost of doing nothing
    "cost.eyebrow": "The cost of doing nothing",
    "cost.title": "Turnover isn't just a people problem. It's a profit problem.",
    "cost.p1": "Replacing a single employee costs <strong>50 to 200% of their annual salary</strong>. For a company of 50 people with 30% turnover, that's hundreds of thousands lost every year: in recruiting, training, lost productivity, and institutional knowledge that walks out the door.",
    "cost.p2": "But the real cost isn't financial. It's the team that stops trusting leadership. The culture that erodes quietly. The best people who start updating their resumes because they see everyone else leaving.",
    "stat.src": "Industry average",
    "stat1.num": "50 to 200<em>%</em>",
    "stat1.label": "Cost to replace one employee, relative to annual salary.",
    "stat2.label": "Average annual turnover for companies without culture programs.",
    "stat3.label": "Employees who say recognition would make them stay longer.",
    // Who we are
    "about.eyebrow": "Who we are",
    "about.title": "We build companies where people want to stay.",
    "about.p1": "FCL Empresarial is a people & culture consultancy that helps organizations strengthen their workplace culture, improve the employee experience, and build environments where people feel valued, engaged, and proud to belong.",
    "about.p2": "We don't plan birthday parties. We design intentional, structured systems for recognition, onboarding, communication, and employee development, so your leaders don't have to. We act as your external culture partner: we design, execute, and measure. You focus on running your business.",
    // Methodology
    "method.eyebrow": "The methodology",
    "method.title": "Our 5-pillar approach to building culture that retains.",
    "p1.title": "Recognize",
    "p1.principle": "People need to feel seen",
    "p1.desc": "Birthday programs, work anniversaries, employee of the month, and peer-to-peer recognition.",
    "p2.title": "Listen",
    "p2.principle": "People need to feel heard",
    "p2.desc": "Climate surveys, satisfaction surveys, and stay interviews.",
    "p3.title": "Connect",
    "p3.principle": "People need to belong",
    "p3.desc": "Team events, integration activities, and internal communication.",
    "p4.title": "Develop",
    "p4.principle": "People need to grow",
    "p4.desc": "Development plans, achievement recognition, and mentorship programs.",
    "p5.title": "Inspire",
    "p5.principle": "People need purpose",
    "p5.desc": "Values, culture, success stories, and leadership communication.",
    // Packages
    "packages.eyebrow": "Packages",
    "packages.title": "A plan for every stage of growth.",
    "pkg.cta": "Book Your Diagnostic",
    "pkg.starter.size": "10 to 30 employees",
    "pkg.starter.f1": "Annual recognition calendar",
    "pkg.starter.f2": "Birthday & anniversary recognition",
    "pkg.starter.f3": "Monthly employee spotlight",
    "pkg.starter.f4": "Basic internal communication",
    "pkg.starter.goal": "Goal: Make employees feel seen.",
    "pkg.growth.badge": "Most Popular",
    "pkg.growth.size": "30 to 75 employees",
    "pkg.growth.f1": "Everything in Starter",
    "pkg.growth.f2": "Quarterly engagement surveys",
    "pkg.growth.f3": "Structured recognition programs",
    "pkg.growth.f4": "Quarterly team events",
    "pkg.growth.f5": "Management reports",
    "pkg.growth.goal": "Goal: Increase engagement & belonging.",
    "pkg.exc.size": "75+ employees",
    "pkg.exc.f1": "Everything in Growth",
    "pkg.exc.f2": "Full cultural diagnostic & annual strategy",
    "pkg.exc.f3": "Onboarding program design",
    "pkg.exc.f4": "Wellness programs",
    "pkg.exc.f5": "Climate metrics & executive reporting",
    "pkg.exc.goal": "Goal: Build a high-performance culture.",
    // How it works
    "how.eyebrow": "How it works",
    "how.title": "Getting started takes 20 minutes.",
    "how.s1.title": "Book your free diagnostic",
    "how.s1.desc": "Schedule a 20-minute call. We'll explore key aspects of your employee experience to identify strengths, opportunities, and areas to improve.",
    "how.s2.title": "Receive your culture report",
    "how.s2.desc": "We deliver a clear assessment of where your culture stands, with practical recommendations you can act on immediately.",
    "how.s3.title": "Choose your plan",
    "how.s3.desc": "Select the package that fits your company's size and stage. We handle everything from design to execution to measurement.",
    "how.s4.title": "We execute. You focus on your business",
    "how.s4.desc": "Our team designs, organizes, and tracks every program. You don't plan, coordinate, or manage anything. Less admin. More commitment. Greater talent retention.",
    // Quote
    "quote.text": "Culture exists in every company. The difference is that some manage it intentionally, and others leave it to chance.",
    "quote.sub": "If you could retain just <em>one</em> key employee for one more year, this program pays for itself.",
    // Final CTA
    "close.title": "Your team is your competitive advantage. Let's make sure they know it.",
    "close.p": "Book your free 20-minute culture diagnostic. No commitment. No pitch. Just a conversation about your team and how to build a workplace they don't want to leave.",
    "close.cta": "Book Your Free Diagnostic",
    "close.callus": "Call us:",
    "close.note": "Booking calendar (Calendly) embeds right here.",
    // Footer
    "footer.tagline": "We value people. We strengthen companies.",
    "footer.division": "People & Culture Division"
  }
};
function applyLang(lang) {
  const dict = translations[lang] || translations[DEFAULT_LANG];
  document.querySelectorAll("[data-i18n]").forEach(function (el) {
    const key = el.getAttribute("data-i18n");
    if (dict[key] != null) el.innerHTML = dict[key];
  });
  document.documentElement.lang = lang;
  try {
    window.dispatchEvent(new CustomEvent("fcl:langchange", {
      detail: lang
    }));
  } catch (e) {}
  try {
    localStorage.setItem(STORAGE_KEY, lang);
  } catch (e) {}
}
function getInitialLang() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && translations[saved]) return saved;
  } catch (e) {}
  return DEFAULT_LANG;
}

/***/ },

/***/ "react"
/*!************************!*\
  !*** external "React" ***!
  \************************/
(module) {

module.exports = window["React"];

/***/ },

/***/ "react-dom/client"
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
(module) {

module.exports = window["ReactDOM"];

/***/ },

/***/ "react/jsx-runtime"
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
(module) {

module.exports = window["ReactJSXRuntime"];

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
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
/******/ 			const getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter/value functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			if(Array.isArray(definition)) {
/******/ 				var i = 0;
/******/ 				while(i < definition.length) {
/******/ 					var key = definition[i++];
/******/ 					var binding = definition[i++];
/******/ 					if(!__webpack_require__.o(exports, key)) {
/******/ 						if(binding === 0) {
/******/ 							Object.defineProperty(exports, key, { enumerable: true, value: definition[i++] });
/******/ 						} else {
/******/ 							Object.defineProperty(exports, key, { enumerable: true, get: binding });
/******/ 						}
/******/ 					} else if(binding === 0) { i++; }
/******/ 				}
/******/ 			} else {
/******/ 				for(var key in definition) {
/******/ 					if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 						Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.hasOwn(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
let __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "react-dom/client");
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _scripts_LanguageToggle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/LanguageToggle */ "./src/scripts/LanguageToggle.js");
/* harmony import */ var _scripts_ContactModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/ContactModal */ "./src/scripts/ContactModal.js");
/* harmony import */ var _scripts_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scripts/i18n */ "./src/scripts/i18n.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);






// ── Language toggle ──────────────────────────────────────────────

(0,_scripts_i18n__WEBPACK_IMPORTED_MODULE_4__.applyLang)((0,_scripts_i18n__WEBPACK_IMPORTED_MODULE_4__.getInitialLang)());
let fabRoot = document.querySelector("#lang-fab-root");
if (!fabRoot) {
  fabRoot = document.createElement("div");
  fabRoot.id = "lang-fab-root";
  document.body.appendChild(fabRoot);
}
react_dom_client__WEBPACK_IMPORTED_MODULE_1___default().createRoot(fabRoot).render(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_scripts_LanguageToggle__WEBPACK_IMPORTED_MODULE_2__["default"], {}));

// ── Contact modal (opens from any "Book Diagnostic" / #book CTA) ──
let modalRoot = document.querySelector("#fcl-contact-root");
if (!modalRoot) {
  modalRoot = document.createElement("div");
  modalRoot.id = "fcl-contact-root";
  document.body.appendChild(modalRoot);
}
react_dom_client__WEBPACK_IMPORTED_MODULE_1___default().createRoot(modalRoot).render(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_scripts_ContactModal__WEBPACK_IMPORTED_MODULE_3__["default"], {}));
document.querySelectorAll('a[href="#book"]').forEach(function (a) {
  a.addEventListener("click", function (e) {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent("fcl:open-contact"));
  });
})

// ── Smart header: hide on scroll-down, reveal on scroll-up ────────
;
(function () {
  const header = document.querySelector(".site-header");
  if (!header) return;
  const THRESHOLD = 120;
  const DELTA = 6;
  let last = window.scrollY;
  let ticking = false;
  function update() {
    const y = window.scrollY;
    if (Math.abs(y - last) > DELTA) {
      if (y > last && y > THRESHOLD) header.classList.add("is-hidden");else header.classList.remove("is-hidden");
      last = y;
    }
    ticking = false;
  }
  window.addEventListener("scroll", function () {
    if (!ticking) {
      window.requestAnimationFrame(update);
      ticking = true;
    }
  }, {
    passive: true
  });
})()

// ── Reveal-on-scroll para las cards de metodología (entrada en escalera) ──
;
(function () {
  const groups = document.querySelectorAll(".pillars");
  if (!groups.length) return;
  function revealAll(container) {
    container.querySelectorAll(".pillar").forEach(function (c, i) {
      setTimeout(function () {
        c.classList.add("is-in");
      }, i * 90);
    });
  }
  if (!("IntersectionObserver" in window)) {
    groups.forEach(revealAll);
    return;
  }
  const io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        revealAll(e.target);
        io.unobserve(e.target);
      }
    });
  }, {
    threshold: 0.15
  });
  groups.forEach(function (g) {
    io.observe(g);
  });

  // Failsafe: revela cualquier card que no haya entrado a los 2.5s
  setTimeout(function () {
    groups.forEach(function (g) {
      g.querySelectorAll(".pillar:not(.is-in)").forEach(function (c) {
        c.classList.add("is-in");
      });
    });
  }, 2500);
})();

// ── Flechas del carrusel de metodología ──
document.querySelectorAll(".pnav").forEach(function (btn) {
  btn.addEventListener("click", function () {
    const band = btn.closest(".method-band");
    if (!band) return;
    const track = band.querySelector(".pillars");
    const card = track.querySelector(".pillar");
    const step = (card ? card.getBoundingClientRect().width : 280) + 16;
    track.scrollBy({
      left: step * parseInt(btn.getAttribute("data-dir"), 10),
      behavior: "smooth"
    });
  });
})

// ── Marquee continuo de la sección de metodología ──
;
(function () {
  const tracks = document.querySelectorAll(".pillars");
  if (!tracks.length) return;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  tracks.forEach(function (track) {
    const viewport = track.closest(".pillars-viewport");
    if (!viewport || reduce) return;
    const originals = Array.from(track.children);
    if (!originals.length) return;

    // Duplicar el set para un loop sin costura
    originals.forEach(function (node) {
      const clone = node.cloneNode(true);
      clone.setAttribute("aria-hidden", "true");
      clone.classList.add("is-clone");
      track.appendChild(clone);
    });
    function measure() {
      const style = getComputedStyle(track);
      const gap = parseFloat(style.columnGap || style.gap || "16") || 16;
      let shift = 0;
      originals.forEach(function (n) {
        shift += n.getBoundingClientRect().width + gap;
      });
      track.style.setProperty("--marquee-shift", "-" + shift + "px");
      const speed = 55; // px por segundo
      track.style.setProperty("--marquee-dur", (shift / speed).toFixed(1) + "s");
    }
    measure();
    let rt;
    window.addEventListener("resize", function () {
      clearTimeout(rt);
      rt = setTimeout(measure, 200);
    }, {
      passive: true
    });
  });
})();
})();

/******/ })()
;
//# sourceMappingURL=index.js.map