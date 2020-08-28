(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/services/get-launches-service/getlaunches.service.ts":
/*!**********************************************************************!*\
  !*** ./src/app/services/get-launches-service/getlaunches.service.ts ***!
  \**********************************************************************/
/*! exports provided: GetlaunchesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetlaunchesService", function() { return GetlaunchesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _progressbar_service_progress_bar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../progressbar-service/progress-bar.service */ "./src/app/services/progressbar-service/progress-bar.service.ts");






class GetlaunchesService {
    constructor(http, progress) {
        this.http = http;
        this.progress = progress;
    }
    getAllLaunches() {
        this.progress.start();
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.http.get('https://api.spacexdata.com/v3/launches')).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(res => res), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(() => this.progress.complete()));
    }
    getCurrentLaunch(idLaunch) {
        this.progress.start();
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.http.get(`https://api.spacexdata.com/v3/launches/${idLaunch}`)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(res => res), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(() => this.progress.complete()));
    }
}
GetlaunchesService.ɵfac = function GetlaunchesService_Factory(t) { return new (t || GetlaunchesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_progressbar_service_progress_bar_service__WEBPACK_IMPORTED_MODULE_4__["ProgressBarService"])); };
GetlaunchesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GetlaunchesService, factory: GetlaunchesService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GetlaunchesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }, { type: _progressbar_service_progress_bar_service__WEBPACK_IMPORTED_MODULE_4__["ProgressBarService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/navigate-center-service/navigate-center.service.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/services/navigate-center-service/navigate-center.service.ts ***!
  \*****************************************************************************/
/*! exports provided: NavigateCenterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigateCenterService", function() { return NavigateCenterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class NavigateCenterService {
    constructor(router) {
        this.router = router;
    }
    navigateBetweenLaunch(selectedLaunch, id) {
        return selectedLaunch === 1 ? this.router.navigate(['/launches/launch/', --id]) : this.router.navigate(['/launches/launch/', ++id]);
    }
    navigateRandomLaunch(launches) {
        return this.router.navigate(['/launches/launch/', Math.round(Math.random() * launches.length)]);
    }
}
NavigateCenterService.ɵfac = function NavigateCenterService_Factory(t) { return new (t || NavigateCenterService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
NavigateCenterService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NavigateCenterService, factory: NavigateCenterService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavigateCenterService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/progressbar-service/progress-bar.service.ts":
/*!**********************************************************************!*\
  !*** ./src/app/services/progressbar-service/progress-bar.service.ts ***!
  \**********************************************************************/
/*! exports provided: ProgressBarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressBarService", function() { return ProgressBarService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_progressbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-progressbar */ "./node_modules/ngx-progressbar/__ivy_ngcc__/fesm2015/ngx-progressbar.js");



class ProgressBarService {
    constructor(progress) {
        this.progress = progress;
        this.progressRef = this.progress.ref('myProgress');
    }
    start() {
        this.progressRef.start();
    }
    complete() {
        this.progressRef.complete();
    }
}
ProgressBarService.ɵfac = function ProgressBarService_Factory(t) { return new (t || ProgressBarService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_progressbar__WEBPACK_IMPORTED_MODULE_1__["NgProgress"])); };
ProgressBarService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ProgressBarService, factory: ProgressBarService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProgressBarService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: ngx_progressbar__WEBPACK_IMPORTED_MODULE_1__["NgProgress"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=common.js.map