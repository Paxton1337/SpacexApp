(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout/layout.component */ "./src/app/layout/layout.component.ts");
/* harmony import */ var _modules_page404_page404_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/page404/page404.component */ "./src/app/modules/page404/page404.component.ts");






const routes = [
    {
        path: '',
        component: _layout_layout_component__WEBPACK_IMPORTED_MODULE_2__["LayoutComponent"],
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: '/launches'
            },
            {
                path: 'launches',
                loadChildren: () => Promise.all(/*! import() | modules-launches-launches-module */[__webpack_require__.e("common"), __webpack_require__.e("modules-launches-launches-module")]).then(__webpack_require__.bind(null, /*! ./modules/launches/launches.module */ "./src/app/modules/launches/launches.module.ts")).then(m => m.LaunchesModule)
            },
            {
                path: 'launch/:id',
                loadChildren: () => Promise.all(/*! import() | modules-launch-launch-module */[__webpack_require__.e("common"), __webpack_require__.e("modules-launch-launch-module")]).then(__webpack_require__.bind(null, /*! ./modules/launch/launch.module */ "./src/app/modules/launch/launch.module.ts")).then(m => m.LaunchModule)
            }
        ]
    },
    {
        path: '**',
        component: _modules_page404_page404_component__WEBPACK_IMPORTED_MODULE_3__["Page404Component"]
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_progressbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-progressbar */ "./node_modules/ngx-progressbar/__ivy_ngcc__/fesm2015/ngx-progressbar.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, consts: [["id", "myProgress"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ng-progress", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
    } }, directives: [ngx_progressbar__WEBPACK_IMPORTED_MODULE_1__["NgProgressComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./interceptors/error.interceptor */ "./src/app/interceptors/error.interceptor.ts");
/* harmony import */ var ngx_progressbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-progressbar */ "./node_modules/ngx-progressbar/__ivy_ngcc__/fesm2015/ngx-progressbar.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");
/* harmony import */ var ngx_scrollbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-scrollbar */ "./node_modules/ngx-scrollbar/__ivy_ngcc__/fesm2015/ngx-scrollbar.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./layout/layout.component */ "./src/app/layout/layout.component.ts");
/* harmony import */ var _modules_page404_page404_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/page404/page404.component */ "./src/app/modules/page404/page404.component.ts");














class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
            useClass: _interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_5__["ErrorInterceptor"],
            multi: true
        }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_7__["MatSliderModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            ngx_progressbar__WEBPACK_IMPORTED_MODULE_6__["NgProgressModule"].withConfig({
                spinner: false
            }),
            ngx_scrollbar__WEBPACK_IMPORTED_MODULE_8__["NgScrollbarModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
        _layout_layout_component__WEBPACK_IMPORTED_MODULE_10__["LayoutComponent"],
        _modules_page404_page404_component__WEBPACK_IMPORTED_MODULE_11__["Page404Component"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_7__["MatSliderModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], ngx_progressbar__WEBPACK_IMPORTED_MODULE_6__["NgProgressModule"], ngx_scrollbar__WEBPACK_IMPORTED_MODULE_8__["NgScrollbarModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                    _layout_layout_component__WEBPACK_IMPORTED_MODULE_10__["LayoutComponent"],
                    _modules_page404_page404_component__WEBPACK_IMPORTED_MODULE_11__["Page404Component"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                    _angular_material_slider__WEBPACK_IMPORTED_MODULE_7__["MatSliderModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    ngx_progressbar__WEBPACK_IMPORTED_MODULE_6__["NgProgressModule"].withConfig({
                        spinner: false
                    }),
                    ngx_scrollbar__WEBPACK_IMPORTED_MODULE_8__["NgScrollbarModule"],
                ],
                providers: [
                    {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
                        useClass: _interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_5__["ErrorInterceptor"],
                        multi: true
                    }
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/interceptors/error.interceptor.ts":
/*!***************************************************!*\
  !*** ./src/app/interceptors/error.interceptor.ts ***!
  \***************************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





class ErrorInterceptor {
    constructor(router) {
        this.router = router;
    }
    intercept(request, next) {
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((error) => {
            this.router.navigateByUrl('/404', { replaceUrl: true });
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
        }));
    }
}
ErrorInterceptor.ɵfac = function ErrorInterceptor_Factory(t) { return new (t || ErrorInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
ErrorInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ErrorInterceptor, factory: ErrorInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/layout/layout.component.ts":
/*!********************************************!*\
  !*** ./src/app/layout/layout.component.ts ***!
  \********************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_scrollbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-scrollbar */ "./node_modules/ngx-scrollbar/__ivy_ngcc__/fesm2015/ngx-scrollbar.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const _c0 = function () { return [""]; };
class LayoutComponent {
    constructor() { }
    ngOnInit() {
    }
}
LayoutComponent.ɵfac = function LayoutComponent_Factory(t) { return new (t || LayoutComponent)(); };
LayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LayoutComponent, selectors: [["app-layout"]], decls: 30, vars: 2, consts: [["id", "navbarHeader", 1, "bg-dark", "collapse"], [1, "container"], [1, "row"], [1, "col-sm-8", "col-md-7", "py-4"], [1, "text-white"], [1, "text-muted"], [1, "col-sm-4", "offset-md-1", "py-4"], [1, "list-unstyled"], ["href", "https://www.linkedin.com/in/gleb-rutskiy-990ab21a8/", 1, "text-white"], ["href", "https://github.com/Paxton1337", 1, "text-white"], ["href", "https://djinni.co/q/3e3107b4bf/", 1, "text-white"], [1, "navbar", "navbar-dark", "bg-dark", "shadow-sm"], [1, "container", "d-flex", "justify-content-between"], [1, "navbar-brand", "d-flex", "align-items-center", 3, "routerLink"], ["src", "assets/img/SpaceX-Logo.png", "alt", "logo", "height", "30"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarHeader", "aria-controls", "navbarHeader", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler", "collapsed"], [1, "navbar-toggler-icon"]], template: function LayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ng-scrollbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "About this project");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " This project shows all of SpaceX's rocket launches. The project is built on Angular 10, shows working with a router, restAPI, my first attempt to stick to MVC in my projects, working with structural directives and pipes, of course I will not forget the mention of using the RXJS library ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "My links");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Linkedin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "GitHub");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Telegram");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [ngx_scrollbar__WEBPACK_IMPORTED_MODULE_1__["NgScrollbar"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: [".my-scrollbar[_ngcontent-%COMP%] {\r\n    --scrollbar-thumb-color: rgba(0, 106, 215, 0.4);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2xheW91dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksK0NBQStDO0FBQ25EIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L2xheW91dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm15LXNjcm9sbGJhciB7XHJcbiAgICAtLXNjcm9sbGJhci10aHVtYi1jb2xvcjogcmdiYSgwLCAxMDYsIDIxNSwgMC40KTtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-layout',
                templateUrl: './layout.component.html',
                styleUrls: ['./layout.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/modules/page404/page404.component.ts":
/*!******************************************************!*\
  !*** ./src/app/modules/page404/page404.component.ts ***!
  \******************************************************/
/*! exports provided: Page404Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page404Component", function() { return Page404Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



const _c0 = function () { return [""]; };
class Page404Component {
    constructor() { }
    ngOnInit() {
    }
}
Page404Component.ɵfac = function Page404Component_Factory(t) { return new (t || Page404Component)(); };
Page404Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Page404Component, selectors: [["app-page404"]], decls: 9, vars: 2, consts: [["id", "notfound"], [1, "notfound"], [1, "notfound-404"], [3, "routerLink"]], template: function Page404Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "404");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Page not found");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Homepage");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["*[_ngcontent-%COMP%] {\r\n  box-sizing        : border-box;\r\n}\r\n\r\nbody[_ngcontent-%COMP%] {\r\n  padding: 0;\r\n  margin : 0;\r\n}\r\n\r\n#notfound[_ngcontent-%COMP%] {\r\n  position  : relative;\r\n  height    : 100vh;\r\n  background: #030005;\r\n}\r\n\r\n#notfound[_ngcontent-%COMP%]   .notfound[_ngcontent-%COMP%] {\r\n  position         : absolute;\r\n  left             : 50%;\r\n  top              : 50%;\r\n  transform        : translate(-50%, -50%);\r\n}\r\n\r\n.notfound[_ngcontent-%COMP%] {\r\n  max-width  : 767px;\r\n  width      : 100%;\r\n  line-height: 1.4;\r\n  text-align : center;\r\n}\r\n\r\n.notfound[_ngcontent-%COMP%]   .notfound-404[_ngcontent-%COMP%] {\r\n  position     : relative;\r\n  height       : 180px;\r\n  margin-bottom: 20px;\r\n  z-index      : -1;\r\n}\r\n\r\n.notfound[_ngcontent-%COMP%]   .notfound-404[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n  font-family      : 'Montserrat', sans-serif;\r\n  position         : absolute;\r\n  left             : 50%;\r\n  top              : 50%;\r\n  transform        : translate(-50%, -50%);\r\n  font-size        : 224px;\r\n  font-weight      : 900;\r\n  margin-top       : 0px;\r\n  margin-bottom    : 0px;\r\n  margin-left      : -12px;\r\n  color            : #030005;\r\n  text-transform   : uppercase;\r\n  text-shadow      : -1px -1px 0px #8400ff, 1px 1px 0px #ff005a;\r\n  letter-spacing   : -20px;\r\n}\r\n\r\n.notfound[_ngcontent-%COMP%]   .notfound-404[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n  font-family   : 'Montserrat', sans-serif;\r\n  position      : absolute;\r\n  left          : 0;\r\n  right         : 0;\r\n  top           : 110px;\r\n  font-size     : 42px;\r\n  font-weight   : 700;\r\n  color         : #fff;\r\n  text-transform: uppercase;\r\n  text-shadow   : 0px 2px 0px #8400ff;\r\n  letter-spacing: 13px;\r\n  margin        : 0;\r\n}\r\n\r\n.notfound[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  font-family       : 'Montserrat', sans-serif;\r\n  display           : inline-block;\r\n  text-transform    : uppercase;\r\n  color             : #ff005a;\r\n  text-decoration   : none;\r\n  border            : 2px solid;\r\n  background        : transparent;\r\n  padding           : 10px 40px;\r\n  font-size         : 14px;\r\n  font-weight       : 700;\r\n  transition        : 0.2s all;\r\n}\r\n\r\n.notfound[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n  color: #8400ff;\r\n}\r\n\r\n@media only screen and (max-width: 767px) {\r\n  .notfound[_ngcontent-%COMP%]   .notfound-404[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    font-size: 24px;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 480px) {\r\n  .notfound[_ngcontent-%COMP%]   .notfound-404[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n    font-size: 182px;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wYWdlNDA0L3BhZ2U0MDQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVFLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLFVBQVU7RUFDVixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQixzQkFBc0I7RUFDdEIsc0JBQXNCO0VBR3RCLHdDQUF3QztBQUMxQzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLDJDQUEyQztFQUMzQywyQkFBMkI7RUFDM0Isc0JBQXNCO0VBQ3RCLHNCQUFzQjtFQUd0Qix3Q0FBd0M7RUFDeEMsd0JBQXdCO0VBQ3hCLHNCQUFzQjtFQUN0QixzQkFBc0I7RUFDdEIsc0JBQXNCO0VBQ3RCLHdCQUF3QjtFQUN4QiwwQkFBMEI7RUFDMUIsNEJBQTRCO0VBQzVCLDZEQUE2RDtFQUM3RCx3QkFBd0I7QUFDMUI7O0FBR0E7RUFDRSx3Q0FBd0M7RUFDeEMsd0JBQXdCO0VBQ3hCLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsb0JBQW9CO0VBQ3BCLHlCQUF5QjtFQUN6QixtQ0FBbUM7RUFDbkMsb0JBQW9CO0VBQ3BCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLDRDQUE0QztFQUM1QyxnQ0FBZ0M7RUFDaEMsNkJBQTZCO0VBQzdCLDJCQUEyQjtFQUMzQix3QkFBd0I7RUFDeEIsNkJBQTZCO0VBQzdCLCtCQUErQjtFQUMvQiw2QkFBNkI7RUFDN0Isd0JBQXdCO0VBQ3hCLHVCQUF1QjtFQUV2Qiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0U7SUFDRSxlQUFlO0VBQ2pCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGdCQUFnQjtFQUNsQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9wYWdlNDA0L3BhZ2U0MDQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBib3gtc2l6aW5nICAgICAgICA6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luIDogMDtcclxufVxyXG5cclxuI25vdGZvdW5kIHtcclxuICBwb3NpdGlvbiAgOiByZWxhdGl2ZTtcclxuICBoZWlnaHQgICAgOiAxMDB2aDtcclxuICBiYWNrZ3JvdW5kOiAjMDMwMDA1O1xyXG59XHJcblxyXG4jbm90Zm91bmQgLm5vdGZvdW5kIHtcclxuICBwb3NpdGlvbiAgICAgICAgIDogYWJzb2x1dGU7XHJcbiAgbGVmdCAgICAgICAgICAgICA6IDUwJTtcclxuICB0b3AgICAgICAgICAgICAgIDogNTAlO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgLW1zLXRyYW5zZm9ybSAgICA6IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICB0cmFuc2Zvcm0gICAgICAgIDogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG59XHJcblxyXG4ubm90Zm91bmQge1xyXG4gIG1heC13aWR0aCAgOiA3NjdweDtcclxuICB3aWR0aCAgICAgIDogMTAwJTtcclxuICBsaW5lLWhlaWdodDogMS40O1xyXG4gIHRleHQtYWxpZ24gOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5ub3Rmb3VuZCAubm90Zm91bmQtNDA0IHtcclxuICBwb3NpdGlvbiAgICAgOiByZWxhdGl2ZTtcclxuICBoZWlnaHQgICAgICAgOiAxODBweDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIHotaW5kZXggICAgICA6IC0xO1xyXG59XHJcblxyXG4ubm90Zm91bmQgLm5vdGZvdW5kLTQwNCBoMSB7XHJcbiAgZm9udC1mYW1pbHkgICAgICA6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxuICBwb3NpdGlvbiAgICAgICAgIDogYWJzb2x1dGU7XHJcbiAgbGVmdCAgICAgICAgICAgICA6IDUwJTtcclxuICB0b3AgICAgICAgICAgICAgIDogNTAlO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgLW1zLXRyYW5zZm9ybSAgICA6IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICB0cmFuc2Zvcm0gICAgICAgIDogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIGZvbnQtc2l6ZSAgICAgICAgOiAyMjRweDtcclxuICBmb250LXdlaWdodCAgICAgIDogOTAwO1xyXG4gIG1hcmdpbi10b3AgICAgICAgOiAwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbSAgICA6IDBweDtcclxuICBtYXJnaW4tbGVmdCAgICAgIDogLTEycHg7XHJcbiAgY29sb3IgICAgICAgICAgICA6ICMwMzAwMDU7XHJcbiAgdGV4dC10cmFuc2Zvcm0gICA6IHVwcGVyY2FzZTtcclxuICB0ZXh0LXNoYWRvdyAgICAgIDogLTFweCAtMXB4IDBweCAjODQwMGZmLCAxcHggMXB4IDBweCAjZmYwMDVhO1xyXG4gIGxldHRlci1zcGFjaW5nICAgOiAtMjBweDtcclxufVxyXG5cclxuXHJcbi5ub3Rmb3VuZCAubm90Zm91bmQtNDA0IGgyIHtcclxuICBmb250LWZhbWlseSAgIDogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG4gIHBvc2l0aW9uICAgICAgOiBhYnNvbHV0ZTtcclxuICBsZWZ0ICAgICAgICAgIDogMDtcclxuICByaWdodCAgICAgICAgIDogMDtcclxuICB0b3AgICAgICAgICAgIDogMTEwcHg7XHJcbiAgZm9udC1zaXplICAgICA6IDQycHg7XHJcbiAgZm9udC13ZWlnaHQgICA6IDcwMDtcclxuICBjb2xvciAgICAgICAgIDogI2ZmZjtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIHRleHQtc2hhZG93ICAgOiAwcHggMnB4IDBweCAjODQwMGZmO1xyXG4gIGxldHRlci1zcGFjaW5nOiAxM3B4O1xyXG4gIG1hcmdpbiAgICAgICAgOiAwO1xyXG59XHJcblxyXG4ubm90Zm91bmQgYSB7XHJcbiAgZm9udC1mYW1pbHkgICAgICAgOiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XHJcbiAgZGlzcGxheSAgICAgICAgICAgOiBpbmxpbmUtYmxvY2s7XHJcbiAgdGV4dC10cmFuc2Zvcm0gICAgOiB1cHBlcmNhc2U7XHJcbiAgY29sb3IgICAgICAgICAgICAgOiAjZmYwMDVhO1xyXG4gIHRleHQtZGVjb3JhdGlvbiAgIDogbm9uZTtcclxuICBib3JkZXIgICAgICAgICAgICA6IDJweCBzb2xpZDtcclxuICBiYWNrZ3JvdW5kICAgICAgICA6IHRyYW5zcGFyZW50O1xyXG4gIHBhZGRpbmcgICAgICAgICAgIDogMTBweCA0MHB4O1xyXG4gIGZvbnQtc2l6ZSAgICAgICAgIDogMTRweDtcclxuICBmb250LXdlaWdodCAgICAgICA6IDcwMDtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IDAuMnMgYWxsO1xyXG4gIHRyYW5zaXRpb24gICAgICAgIDogMC4ycyBhbGw7XHJcbn1cclxuXHJcbi5ub3Rmb3VuZCBhOmhvdmVyIHtcclxuICBjb2xvcjogIzg0MDBmZjtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gIC5ub3Rmb3VuZCAubm90Zm91bmQtNDA0IGgyIHtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAubm90Zm91bmQgLm5vdGZvdW5kLTQwNCBoMSB7XHJcbiAgICBmb250LXNpemU6IDE4MnB4O1xyXG4gIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Page404Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-page404',
                templateUrl: './page404.component.html',
                styleUrls: ['./page404.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\User\spacex-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map