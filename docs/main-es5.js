function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _pages_blog_blog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./pages/blog/blog.component */
    "./src/app/pages/blog/blog.component.ts");
    /* harmony import */


    var _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./pages/contact/contact.component */
    "./src/app/pages/contact/contact.component.ts");
    /* harmony import */


    var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./pages/home/home.component */
    "./src/app/pages/home/home.component.ts");
    /* harmony import */


    var _pages_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./pages/page-not-found/page-not-found.component */
    "./src/app/pages/page-not-found/page-not-found.component.ts");

    var routes = [{
      path: '',
      component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]
    }, {
      path: 'blog',
      component: _pages_blog_blog_component__WEBPACK_IMPORTED_MODULE_2__["BlogComponent"]
    }, {
      path: 'contact',
      component: _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_3__["ContactComponent"]
    }, {
      path: '**',
      component: _pages_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__["PageNotFoundComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _layout_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./layout/header/header.component */
    "./src/app/layout/header/header.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./layout/footer/footer.component */
    "./src/app/layout/footer/footer.component.ts");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'psd-ng-the-journal';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 3,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-footer");
        }
      },
      directives: [_layout_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _layout_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./layout/header/header.component */
    "./src/app/layout/header/header.component.ts");
    /* harmony import */


    var _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./layout/footer/footer.component */
    "./src/app/layout/footer/footer.component.ts");
    /* harmony import */


    var _components_banner_destinations_banner_destinations_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/banner-destinations/banner-destinations.component */
    "./src/app/components/banner-destinations/banner-destinations.component.ts");
    /* harmony import */


    var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./pages/home/home.component */
    "./src/app/pages/home/home.component.ts");
    /* harmony import */


    var _pages_blog_blog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./pages/blog/blog.component */
    "./src/app/pages/blog/blog.component.ts");
    /* harmony import */


    var _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./pages/contact/contact.component */
    "./src/app/pages/contact/contact.component.ts");
    /* harmony import */


    var _pages_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./pages/page-not-found/page-not-found.component */
    "./src/app/pages/page-not-found/page-not-found.component.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _components_hero_hero_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/hero/hero.component */
    "./src/app/components/hero/hero.component.ts");
    /* harmony import */


    var _components_logo_logo_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/logo/logo.component */
    "./src/app/components/logo/logo.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _layout_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"], _components_banner_destinations_banner_destinations_component__WEBPACK_IMPORTED_MODULE_6__["BannerDestinationsComponent"], _pages_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"], _pages_blog_blog_component__WEBPACK_IMPORTED_MODULE_8__["BlogComponent"], _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_9__["ContactComponent"], _pages_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_10__["PageNotFoundComponent"], _components_hero_hero_component__WEBPACK_IMPORTED_MODULE_12__["HeroComponent"], _components_logo_logo_component__WEBPACK_IMPORTED_MODULE_13__["LogoComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _layout_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"], _components_banner_destinations_banner_destinations_component__WEBPACK_IMPORTED_MODULE_6__["BannerDestinationsComponent"], _pages_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"], _pages_blog_blog_component__WEBPACK_IMPORTED_MODULE_8__["BlogComponent"], _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_9__["ContactComponent"], _pages_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_10__["PageNotFoundComponent"], _components_hero_hero_component__WEBPACK_IMPORTED_MODULE_12__["HeroComponent"], _components_logo_logo_component__WEBPACK_IMPORTED_MODULE_13__["LogoComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/banner-destinations/banner-destinations.component.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/components/banner-destinations/banner-destinations.component.ts ***!
    \*********************************************************************************/

  /*! exports provided: BannerDestinationsComponent */

  /***/
  function srcAppComponentsBannerDestinationsBannerDestinationsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BannerDestinationsComponent", function () {
      return BannerDestinationsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var BannerDestinationsComponent = /*#__PURE__*/function () {
      function BannerDestinationsComponent() {
        _classCallCheck(this, BannerDestinationsComponent);
      }

      _createClass(BannerDestinationsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BannerDestinationsComponent;
    }();

    BannerDestinationsComponent.ɵfac = function BannerDestinationsComponent_Factory(t) {
      return new (t || BannerDestinationsComponent)();
    };

    BannerDestinationsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BannerDestinationsComponent,
      selectors: [["app-banner-destinations"]],
      decls: 5,
      vars: 0,
      consts: [[1, "banner-destinations"]],
      template: function BannerDestinationsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "36 / 127");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "destinations reached");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Roboto&family=Vidaloka&display=swap\");\n\n\n.banner-destinations[_ngcontent-%COMP%] {\n  background-image: url('image2-sep-banner.jpg');\n  height: 400px;\n  background-size: cover;\n  background-position: right;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\nh3[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 7rem;\n  color: #ebeff1;\n  font-family: \"Vidaloka\", serif;\n  text-align: center;\n}\nh3[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-top: 24px;\n  font-family: \"Roboto\", sans-serif;\n  text-transform: uppercase;\n  display: block;\n  font-size: 1.8rem;\n  letter-spacing: 1px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pcmVuZXRydW9uZy9EZXNrdG9wL2NvZGluZy9wc2QtbmctdGhlLWpvdXJuYWwvc3JjL2Fzc2V0cy9zdHlsZXMvcGFydGlhbHMvX3ZhcmlhYmxlcy5zY3NzIiwiL1VzZXJzL2lyZW5ldHJ1b25nL0Rlc2t0b3AvY29kaW5nL3BzZC1uZy10aGUtam91cm5hbC9zcmMvYXBwL2NvbXBvbmVudHMvYmFubmVyLWRlc3RpbmF0aW9ucy9iYW5uZXItZGVzdGluYXRpb25zLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2Jhbm5lci1kZXN0aW5hdGlvbnMvYmFubmVyLWRlc3RpbmF0aW9ucy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBVVEsMkZBQUE7QUFWUixnQkFBQTtBQVNBLG9CQUFBO0FDUEE7RUFDRSw4Q0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDBCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNFRjtBRENBO0VESUUsZ0JBQUE7RUFDQSxlQ0ppQjtFREtqQixjQWZNO0VBZ0JOLDhCQU5LO0VDU0wsa0JBQUE7QUNIRjtBRExFO0VBQ0UsZ0JBQUE7RUFDQSxpQ0RKRztFQ0tILHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUNPSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYmFubmVyLWRlc3RpbmF0aW9ucy9iYW5uZXItZGVzdGluYXRpb25zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiBDT0xPVVJTICoqKi9cbiRhY2NlbnQ6ICNkNDUxMjE7XG5cbiRsaWdodDogI2ViZWZmMTtcblxuJGdyYXk6ICNiNWMxYzY7IC8vIzhkOWJhMDtcblxuJGRhcms6ICMwYzFkMjQ7XG5cbi8qKiogRk9OVCBTVFlMRVMgKioqL1xuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90byZmYW1pbHk9VmlkYWxva2EmZGlzcGxheT1zd2FwXCIpO1xuXG4kcm9ibzogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiR2aWRhOiBcIlZpZGFsb2thXCIsIHNlcmlmO1xuXG5AbWl4aW4gaGVhZGluZygkZnMsICRjb2wpIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAkZnM7XG4gIGNvbG9yOiAkY29sO1xuICBmb250LWZhbWlseTogJHZpZGE7XG59XG5cbkBtaXhpbiBidXR0b24oJHBhZGRpbmcpIHtcbiAgZm9udC1zaXplOiAxLjhyZW07XG4gIGNvbG9yOiAkbGlnaHQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogJGFjY2VudDtcbiAgcGFkZGluZzogJHBhZGRpbmc7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1mYW1pbHk6ICR2aWRhO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB0cmFuc2l0aW9uOiAwLjNzIGVhc2UgYWxsO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICY6aG92ZXIsXG4gICY6Zm9jdXMge1xuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIH1cbn1cbiIsIkBpbXBvcnQgXCIuLi8uLi8uLi9hc3NldHMvc3R5bGVzL3BhcnRpYWxzL3ZhcmlhYmxlc1wiO1xuXG4uYmFubmVyLWRlc3RpbmF0aW9ucyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvaW1hZ2UyLXNlcC1iYW5uZXIuanBnXCIpO1xuICBoZWlnaHQ6IDQwMHB4O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbmgzIHtcbiAgQGluY2x1ZGUgaGVhZGluZyg3cmVtLCAkbGlnaHQpO1xuICBzcGFuIHtcbiAgICBtYXJnaW4tdG9wOiAyNHB4O1xuICAgIGZvbnQtZmFtaWx5OiAkcm9ibztcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIH1cbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuIiwiLyoqKiBDT0xPVVJTICoqKi9cbi8qKiogRk9OVCBTVFlMRVMgKioqL1xuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90byZmYW1pbHk9VmlkYWxva2EmZGlzcGxheT1zd2FwXCIpO1xuLmJhbm5lci1kZXN0aW5hdGlvbnMge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2ltYWdlMi1zZXAtYmFubmVyLmpwZ1wiKTtcbiAgaGVpZ2h0OiA0MDBweDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5oMyB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogN3JlbTtcbiAgY29sb3I6ICNlYmVmZjE7XG4gIGZvbnQtZmFtaWx5OiBcIlZpZGFsb2thXCIsIHNlcmlmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5oMyBzcGFuIHtcbiAgbWFyZ2luLXRvcDogMjRweDtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDEuOHJlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BannerDestinationsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-banner-destinations',
          templateUrl: './banner-destinations.component.html',
          styleUrls: ['./banner-destinations.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/hero/hero.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/hero/hero.component.ts ***!
    \***************************************************/

  /*! exports provided: HeroComponent */

  /***/
  function srcAppComponentsHeroHeroComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeroComponent", function () {
      return HeroComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var HeroComponent = /*#__PURE__*/function () {
      function HeroComponent() {
        _classCallCheck(this, HeroComponent);

        this.title = 'The Journal';
      }

      _createClass(HeroComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HeroComponent;
    }();

    HeroComponent.ɵfac = function HeroComponent_Factory(t) {
      return new (t || HeroComponent)();
    };

    HeroComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeroComponent,
      selectors: [["app-hero"]],
      decls: 3,
      vars: 1,
      consts: [[1, "hero"]],
      template: function HeroComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        }
      },
      styles: [".hero[_ngcontent-%COMP%] {\n  background-image: url('hero.jpg');\n  height: 100vh;\n  background-attachment: fixed;\n  background-size: cover;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pcmVuZXRydW9uZy9EZXNrdG9wL2NvZGluZy9wc2QtbmctdGhlLWpvdXJuYWwvc3JjL2FwcC9jb21wb25lbnRzL2hlcm8vaGVyby5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9oZXJvL2hlcm8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQ0FBQTtFQUNBLGFBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVyby9oZXJvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlcm8ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9oZXJvLmpwZyk7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuIiwiLmhlcm8ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9oZXJvLmpwZyk7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeroComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-hero',
          templateUrl: './hero.component.html',
          styleUrls: ['./hero.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/logo/logo.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/logo/logo.component.ts ***!
    \***************************************************/

  /*! exports provided: LogoComponent */

  /***/
  function srcAppComponentsLogoLogoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LogoComponent", function () {
      return LogoComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var LogoComponent = /*#__PURE__*/function () {
      function LogoComponent() {
        _classCallCheck(this, LogoComponent);
      }

      _createClass(LogoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LogoComponent;
    }();

    LogoComponent.ɵfac = function LogoComponent_Factory(t) {
      return new (t || LogoComponent)();
    };

    LogoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LogoComponent,
      selectors: [["app-logo"]],
      decls: 2,
      vars: 0,
      consts: [["routerLink", ""], ["src", "../../../assets/images/logo.png", "alt", "Mountain view."]],
      template: function LogoComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: ["img[_ngcontent-%COMP%] {\n  max-width: 45px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pcmVuZXRydW9uZy9EZXNrdG9wL2NvZGluZy9wc2QtbmctdGhlLWpvdXJuYWwvc3JjL2FwcC9jb21wb25lbnRzL2xvZ28vbG9nby5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9sb2dvL2xvZ28uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xvZ28vbG9nby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImltZyB7XG4gIG1heC13aWR0aDogNDVweDtcbn1cbiIsImltZyB7XG4gIG1heC13aWR0aDogNDVweDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LogoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-logo',
          templateUrl: './logo.component.html',
          styleUrls: ['./logo.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/layout/footer/footer.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/layout/footer/footer.component.ts ***!
    \***************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppLayoutFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _components_logo_logo_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../components/logo/logo.component */
    "./src/app/components/logo/logo.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    function FooterComponent_li_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var link_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("routerLink", link_r1.source);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](link_r1.title);
      }
    }

    var FooterComponent = /*#__PURE__*/function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);

        this.links = [{
          title: 'About',
          source: 'home#about'
        }, {
          title: 'Blog',
          source: 'blog'
        }, {
          title: 'Contact',
          source: 'contact'
        }];
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent.ɵfac = function FooterComponent_Factory(t) {
      return new (t || FooterComponent)();
    };

    FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["app-footer"]],
      decls: 13,
      vars: 1,
      consts: [[1, "container"], [1, "ptb-20"], [4, "ngFor", "ngForOf"], [1, "line-divider"], ["href", "https://irenetruong.tech", "target", "_blank", "rel", "noopener noreferrer"], [3, "routerLink"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nav");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-logo", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, FooterComponent_li_5_Template, 3, 2, "li", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Created at Juno College of Technology");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Written in Angular by ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Irene Truong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.links);
        }
      },
      directives: [_components_logo_logo_component__WEBPACK_IMPORTED_MODULE_1__["LogoComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]],
      styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Roboto&family=Vidaloka&display=swap\");\n\n\nfooter[_ngcontent-%COMP%] {\n  height: 280px;\n  background: #0c1d24;\n  color: #b5c1c6;\n}\nfooter[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin: 40px 0;\n}\nfooter[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #b5c1c6;\n}\nfooter[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] {\n  font-family: \"Roboto\", sans-serif;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\nfooter[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  display: flex;\n  padding-left: 0;\n}\nfooter[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 0 10px;\n}\nfooter[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pcmVuZXRydW9uZy9EZXNrdG9wL2NvZGluZy9wc2QtbmctdGhlLWpvdXJuYWwvc3JjL2Fzc2V0cy9zdHlsZXMvcGFydGlhbHMvX3ZhcmlhYmxlcy5zY3NzIiwiL1VzZXJzL2lyZW5ldHJ1b25nL0Rlc2t0b3AvY29kaW5nL3BzZC1uZy10aGUtam91cm5hbC9zcmMvYXBwL2xheW91dC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sYXlvdXQvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBVVEsMkZBQUE7QUFWUixnQkFBQTtBQVNBLG9CQUFBO0FDUEE7RUFDRSxhQUFBO0VBQ0EsbUJER0s7RUNGTCxjQUFBO0FDRUY7QURBRTtFQUNFLGNBQUE7QUNFSjtBRENFO0VBQ0UsY0RQRztBRVFQO0FEQ0U7RUFDRSxpQ0RIRztFQ0lILGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FDQ0o7QURFRTtFQUNFLGFBQUE7RUFDQSxlQUFBO0FDQUo7QURFRTtFQUNFLGNBQUE7QUNBSjtBREVFO0VBQ0Usa0JBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiBDT0xPVVJTICoqKi9cbiRhY2NlbnQ6ICNkNDUxMjE7XG5cbiRsaWdodDogI2ViZWZmMTtcblxuJGdyYXk6ICNiNWMxYzY7IC8vIzhkOWJhMDtcblxuJGRhcms6ICMwYzFkMjQ7XG5cbi8qKiogRk9OVCBTVFlMRVMgKioqL1xuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90byZmYW1pbHk9VmlkYWxva2EmZGlzcGxheT1zd2FwXCIpO1xuXG4kcm9ibzogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiR2aWRhOiBcIlZpZGFsb2thXCIsIHNlcmlmO1xuXG5AbWl4aW4gaGVhZGluZygkZnMsICRjb2wpIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAkZnM7XG4gIGNvbG9yOiAkY29sO1xuICBmb250LWZhbWlseTogJHZpZGE7XG59XG5cbkBtaXhpbiBidXR0b24oJHBhZGRpbmcpIHtcbiAgZm9udC1zaXplOiAxLjhyZW07XG4gIGNvbG9yOiAkbGlnaHQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogJGFjY2VudDtcbiAgcGFkZGluZzogJHBhZGRpbmc7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1mYW1pbHk6ICR2aWRhO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB0cmFuc2l0aW9uOiAwLjNzIGVhc2UgYWxsO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICY6aG92ZXIsXG4gICY6Zm9jdXMge1xuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIH1cbn1cbiIsIkBpbXBvcnQgXCIuLi8uLi8uLi9hc3NldHMvc3R5bGVzL3BhcnRpYWxzL3ZhcmlhYmxlc1wiO1xuXG5mb290ZXIge1xuICBoZWlnaHQ6IDI4MHB4O1xuICBiYWNrZ3JvdW5kOiAkZGFyaztcbiAgY29sb3I6ICRncmF5O1xuXG4gIGltZyB7XG4gICAgbWFyZ2luOiA0MHB4IDA7XG4gIH1cblxuICBhIHtcbiAgICBjb2xvcjogJGdyYXk7XG4gIH1cbiAgbmF2IHtcbiAgICBmb250LWZhbWlseTogJHJvYm87XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgLy8ganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbiAgdWwge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xuICB9XG4gIGxpIHtcbiAgICBtYXJnaW46IDAgMTBweDtcbiAgfVxuICBwIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbn1cbiIsIi8qKiogQ09MT1VSUyAqKiovXG4vKioqIEZPTlQgU1RZTEVTICoqKi9cbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG8mZmFtaWx5PVZpZGFsb2thJmRpc3BsYXk9c3dhcFwiKTtcbmZvb3RlciB7XG4gIGhlaWdodDogMjgwcHg7XG4gIGJhY2tncm91bmQ6ICMwYzFkMjQ7XG4gIGNvbG9yOiAjYjVjMWM2O1xufVxuZm9vdGVyIGltZyB7XG4gIG1hcmdpbjogNDBweCAwO1xufVxuZm9vdGVyIGEge1xuICBjb2xvcjogI2I1YzFjNjtcbn1cbmZvb3RlciBuYXYge1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbmZvb3RlciB1bCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmctbGVmdDogMDtcbn1cbmZvb3RlciBsaSB7XG4gIG1hcmdpbjogMCAxMHB4O1xufVxuZm9vdGVyIHAge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-footer',
          templateUrl: './footer.component.html',
          styleUrls: ['./footer.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/layout/header/header.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/layout/header/header.component.ts ***!
    \***************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppLayoutHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _components_logo_logo_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../components/logo/logo.component */
    "./src/app/components/logo/logo.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    function HeaderComponent_li_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var link_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("routerLink", link_r1.source);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](link_r1.title);
      }
    }

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent() {
        _classCallCheck(this, HeaderComponent);

        this.links = [{
          title: 'About',
          source: '#about'
        }, {
          title: 'Blog',
          source: 'blog'
        }, {
          title: 'Contact',
          source: 'contact'
        }];
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)();
    };

    HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      decls: 5,
      vars: 1,
      consts: [[1, "container"], [4, "ngFor", "ngForOf"], [3, "routerLink"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-logo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HeaderComponent_li_4_Template, 3, 2, "li", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.links);
        }
      },
      directives: [_components_logo_logo_component__WEBPACK_IMPORTED_MODULE_1__["LogoComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]],
      styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Roboto&family=Vidaloka&display=swap\");\n\n\nheader[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  z-index: 1000;\n}\nnav[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 40px;\n}\nul[_ngcontent-%COMP%] {\n  display: flex;\n}\nli[_ngcontent-%COMP%] {\n  margin-left: 88px;\n}\nli[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #ebeff1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pcmVuZXRydW9uZy9EZXNrdG9wL2NvZGluZy9wc2QtbmctdGhlLWpvdXJuYWwvc3JjL2Fzc2V0cy9zdHlsZXMvcGFydGlhbHMvX3ZhcmlhYmxlcy5zY3NzIiwiL1VzZXJzL2lyZW5ldHJ1b25nL0Rlc2t0b3AvY29kaW5nL3BzZC1uZy10aGUtam91cm5hbC9zcmMvYXBwL2xheW91dC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sYXlvdXQvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBVVEsMkZBQUE7QUFWUixnQkFBQTtBQVNBLG9CQUFBO0FDUEE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FDRUY7QURDQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNFRjtBRENBO0VBQ0UsYUFBQTtBQ0VGO0FEQ0E7RUFDRSxpQkFBQTtBQ0VGO0FEREU7RUFDRSxjRG5CSTtBRXNCUiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiBDT0xPVVJTICoqKi9cbiRhY2NlbnQ6ICNkNDUxMjE7XG5cbiRsaWdodDogI2ViZWZmMTtcblxuJGdyYXk6ICNiNWMxYzY7IC8vIzhkOWJhMDtcblxuJGRhcms6ICMwYzFkMjQ7XG5cbi8qKiogRk9OVCBTVFlMRVMgKioqL1xuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90byZmYW1pbHk9VmlkYWxva2EmZGlzcGxheT1zd2FwXCIpO1xuXG4kcm9ibzogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiR2aWRhOiBcIlZpZGFsb2thXCIsIHNlcmlmO1xuXG5AbWl4aW4gaGVhZGluZygkZnMsICRjb2wpIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAkZnM7XG4gIGNvbG9yOiAkY29sO1xuICBmb250LWZhbWlseTogJHZpZGE7XG59XG5cbkBtaXhpbiBidXR0b24oJHBhZGRpbmcpIHtcbiAgZm9udC1zaXplOiAxLjhyZW07XG4gIGNvbG9yOiAkbGlnaHQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogJGFjY2VudDtcbiAgcGFkZGluZzogJHBhZGRpbmc7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1mYW1pbHk6ICR2aWRhO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB0cmFuc2l0aW9uOiAwLjNzIGVhc2UgYWxsO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICY6aG92ZXIsXG4gICY6Zm9jdXMge1xuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIH1cbn1cbiIsIkBpbXBvcnQgXCIuLi8uLi8uLi9hc3NldHMvc3R5bGVzL3BhcnRpYWxzL3ZhcmlhYmxlc1wiO1xuXG5oZWFkZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiAxMDAwO1xufVxuXG5uYXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG59XG5cbnVsIHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxubGkge1xuICBtYXJnaW4tbGVmdDogODhweDtcbiAgYSB7XG4gICAgY29sb3I6ICRsaWdodDtcbiAgfVxufVxuIiwiLyoqKiBDT0xPVVJTICoqKi9cbi8qKiogRk9OVCBTVFlMRVMgKioqL1xuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90byZmYW1pbHk9VmlkYWxva2EmZGlzcGxheT1zd2FwXCIpO1xuaGVhZGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgei1pbmRleDogMTAwMDtcbn1cblxubmF2IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tdG9wOiA0MHB4O1xufVxuXG51bCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbmxpIHtcbiAgbWFyZ2luLWxlZnQ6IDg4cHg7XG59XG5saSBhIHtcbiAgY29sb3I6ICNlYmVmZjE7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-header',
          templateUrl: './header.component.html',
          styleUrls: ['./header.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/blog/blog.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/pages/blog/blog.component.ts ***!
    \**********************************************/

  /*! exports provided: BlogComponent */

  /***/
  function srcAppPagesBlogBlogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BlogComponent", function () {
      return BlogComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var BlogComponent = /*#__PURE__*/function () {
      function BlogComponent() {
        _classCallCheck(this, BlogComponent);
      }

      _createClass(BlogComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BlogComponent;
    }();

    BlogComponent.ɵfac = function BlogComponent_Factory(t) {
      return new (t || BlogComponent)();
    };

    BlogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BlogComponent,
      selectors: [["app-blog"]],
      decls: 2,
      vars: 0,
      template: function BlogComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "blog works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Jsb2cvYmxvZy5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-blog',
          templateUrl: './blog.component.html',
          styleUrls: ['./blog.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/contact/contact.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/pages/contact/contact.component.ts ***!
    \****************************************************/

  /*! exports provided: ContactComponent */

  /***/
  function srcAppPagesContactContactComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactComponent", function () {
      return ContactComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ContactComponent = /*#__PURE__*/function () {
      function ContactComponent() {
        _classCallCheck(this, ContactComponent);
      }

      _createClass(ContactComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ContactComponent;
    }();

    ContactComponent.ɵfac = function ContactComponent_Factory(t) {
      return new (t || ContactComponent)();
    };

    ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ContactComponent,
      selectors: [["app-contact"]],
      decls: 2,
      vars: 0,
      template: function ContactComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "contact works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-contact',
          templateUrl: './contact.component.html',
          styleUrls: ['./contact.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/home/home.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/pages/home/home.component.ts ***!
    \**********************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppPagesHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _components_hero_hero_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../components/hero/hero.component */
    "./src/app/components/hero/hero.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _components_banner_destinations_banner_destinations_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../components/banner-destinations/banner-destinations.component */
    "./src/app/components/banner-destinations/banner-destinations.component.ts");

    function HomeComponent_div_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var image_r2 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](image_r2.size);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", image_r2.source, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", image_r2.alt);
      }
    }

    function HomeComponent_div_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var blog_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", blog_r3.source, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", blog_r3.alt);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](blog_r3.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", blog_r3.date, " ");
      }
    }

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);

        this.galleryImages = [{
          id: 1,
          source: '../../../assets/images/image6-gal-1.jpg',
          alt: 'Peeker view of langscape.',
          size: 'smol'
        }, {
          id: 2,
          source: '../../../assets/images/image7-gal-2.jpg',
          alt: 'A cabin in the winter surrounded by a bunch of pine trees and a frozen lake.',
          size: 'smol'
        }, {
          id: 3,
          source: '../../../assets/images/image8-gal-3.jpg',
          alt: 'View of a large canon landscape in between two large pieces of land.',
          size: 'smol'
        }, {
          id: 4,
          source: '../../../assets/images/image9-gal-4.jpg',
          alt: 'Drone view of a historic city.',
          size: 'large-bb'
        }, {
          id: 5,
          source: '../../../assets/images/image10-gal-5.jpg',
          alt: 'Historical building with a 3 figure statues situated in front.',
          size: 'large-bb'
        }];
        this.blogPosts = [{
          id: 1,
          source: '../../../assets/images/image3-gg-bridge.jpg',
          alt: 'Golden Gate Bridge view.',
          title: 'Golden State',
          date: 'Feb 26'
        }, {
          id: 2,
          source: '../../../assets/images/image4-11-cities.jpg',
          alt: 'Snow on roofs of buildings in a Venetian city.',
          title: '11 Cities in 12 Days',
          date: 'Feb 1'
        }, {
          id: 3,
          source: '../../../assets/images/image5-year-in-awe.jpg',
          alt: 'Lights on the balcony shaded by the roof.',
          title: 'Year in Awe',
          date: 'Jan 27'
        }];
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)();
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 26,
      vars: 2,
      consts: [["id", "about", 1, "about", "container"], [1, "row"], [1, "col-md-5"], ["src", "../../../assets/images/image1-about.jpg", "alt", "A person hiking carrying a flag to demonstrate their pride."], [1, "col-md-1"], [1, "col-md-5", "align-self-center"], ["routerLink", "contact", 1, "faux-button"], [1, "gallery", "container"], [1, "gallery-view"], [3, "class", 4, "ngFor", "ngForOf"], [1, "latest-blog-posts", "container"], [1, "card-deck"], ["class", "card", 4, "ngFor", "ngForOf"], [3, "src", "alt"], [1, "card"], [1, "card-img-top", 3, "src", "alt"], [1, "card-body"], [1, "card-title"], [1, "card-text"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-hero");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "main");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "About");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia eos omnis distinctio laborum recusandae ullam itaque porro saepe eligendi magnam! Accusantium, dolore dignissimos. Vel rerum provident veritatis deserunt doloremque sit consectetur ullam, atque tempora odio quia aliquid distinctio eveniet, magni vitae quas ea itaque harum magnam. Ullam amet quis exercitationem? ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Say hello");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "section", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Gallery");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, HomeComponent_div_19_Template, 2, 5, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "app-banner-destinations");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "section", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Latest");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, HomeComponent_div_25_Template, 7, 4, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.galleryImages);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.blogPosts);
        }
      },
      directives: [_components_hero_hero_component__WEBPACK_IMPORTED_MODULE_1__["HeroComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _components_banner_destinations_banner_destinations_component__WEBPACK_IMPORTED_MODULE_4__["BannerDestinationsComponent"]],
      styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Roboto&family=Vidaloka&display=swap\");\n\n\n.about[_ngcontent-%COMP%] {\n  margin: 90px auto;\n}\n.about[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 36px 0;\n}\n.gallery[_ngcontent-%COMP%] {\n  margin: 100px auto;\n}\n.gallery[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 50px;\n}\n.gallery-view[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n}\n.gallery-view[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  aspect-ratio: 1/1;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.smol[_ngcontent-%COMP%] {\n  width: 32%;\n  margin-bottom: 20px;\n}\n.large-bb[_ngcontent-%COMP%] {\n  width: 49%;\n}\n.latest-blog-posts[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 100px auto 50px;\n  text-align: center;\n}\n.latest-blog-posts[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  border: none;\n}\n.latest-blog-posts[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 2.4rem;\n  color: #0c1d24;\n  font-family: \"Vidaloka\", serif;\n  padding: 32px 0 16px;\n}\n.latest-blog-posts[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  background: #ebeff1;\n}\n.latest-blog-posts[_ngcontent-%COMP%]   .card-deck[_ngcontent-%COMP%] {\n  margin-bottom: 120px;\n}\n.latest-blog-posts[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%] {\n  margin-bottom: 32px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pcmVuZXRydW9uZy9EZXNrdG9wL2NvZGluZy9wc2QtbmctdGhlLWpvdXJuYWwvc3JjL2Fzc2V0cy9zdHlsZXMvcGFydGlhbHMvX3ZhcmlhYmxlcy5zY3NzIiwiL1VzZXJzL2lyZW5ldHJ1b25nL0Rlc2t0b3AvY29kaW5nL3BzZC1uZy10aGUtam91cm5hbC9zcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFVUSwyRkFBQTtBQVZSLGdCQUFBO0FBU0Esb0JBQUE7QUNQQTtFQUNFLGlCQUFBO0FDRUY7QURERTtFQUNFLGNBQUE7QUNHSjtBRENBO0VBQ0Usa0JBQUE7QUNFRjtBRERFO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBQ0dKO0FEQ0E7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0FDRUY7QURERTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7QUNHSjtBRENBO0VBQ0UsVUFBQTtFQUNBLG1CQUFBO0FDRUY7QURDQTtFQUNFLFVBQUE7QUNFRjtBREVFO0VBQ0UsdUJBQUE7RUFDQSxrQkFBQTtBQ0NKO0FEQ0U7RUFDRSxZQUFBO0FDQ0o7QURFRTtFRDlCQSxnQkFBQTtFQUNBLGlCQzhCbUI7RUQ3Qm5CLGNBWEs7RUFZTCw4QkFOSztFQ21DSCxvQkFBQTtBQ0dKO0FEQUU7RUFDRSxtQkRqREk7QUVtRFI7QURDRTtFQUNFLG9CQUFBO0FDQ0o7QURFRTtFQUNFLG1CQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqIENPTE9VUlMgKioqL1xuJGFjY2VudDogI2Q0NTEyMTtcblxuJGxpZ2h0OiAjZWJlZmYxO1xuXG4kZ3JheTogI2I1YzFjNjsgLy8jOGQ5YmEwO1xuXG4kZGFyazogIzBjMWQyNDtcblxuLyoqKiBGT05UIFNUWUxFUyAqKiovXG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvJmZhbWlseT1WaWRhbG9rYSZkaXNwbGF5PXN3YXBcIik7XG5cbiRyb2JvOiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuJHZpZGE6IFwiVmlkYWxva2FcIiwgc2VyaWY7XG5cbkBtaXhpbiBoZWFkaW5nKCRmcywgJGNvbCkge1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6ICRmcztcbiAgY29sb3I6ICRjb2w7XG4gIGZvbnQtZmFtaWx5OiAkdmlkYTtcbn1cblxuQG1peGluIGJ1dHRvbigkcGFkZGluZykge1xuICBmb250LXNpemU6IDEuOHJlbTtcbiAgY29sb3I6ICRsaWdodDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAkYWNjZW50O1xuICBwYWRkaW5nOiAkcGFkZGluZztcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LWZhbWlseTogJHZpZGE7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHRyYW5zaXRpb246IDAuM3MgZWFzZSBhbGw7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgJjpob3ZlcixcbiAgJjpmb2N1cyB7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgfVxufVxuIiwiQGltcG9ydCBcIi4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvcGFydGlhbHMvdmFyaWFibGVzXCI7XG5cbi5hYm91dCB7XG4gIG1hcmdpbjogOTBweCBhdXRvO1xuICBwIHtcbiAgICBtYXJnaW46IDM2cHggMDtcbiAgfVxufVxuXG4uZ2FsbGVyeSB7XG4gIG1hcmdpbjogMTAwcHggYXV0bztcbiAgaDIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICB9XG59XG5cbi5nYWxsZXJ5LXZpZXcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZGl2IGltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYXNwZWN0LXJhdGlvOiAxLzE7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gIH1cbn1cblxuLnNtb2wge1xuICB3aWR0aDogMzIlO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4ubGFyZ2UtYmIge1xuICB3aWR0aDogNDklO1xufVxuXG4ubGF0ZXN0LWJsb2ctcG9zdHMge1xuICBoMiB7XG4gICAgbWFyZ2luOiAxMDBweCBhdXRvIDUwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC5jYXJkIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gIH1cblxuICAuY2FyZC10aXRsZSB7XG4gICAgQGluY2x1ZGUgaGVhZGluZygyLjRyZW0sICRkYXJrKTtcbiAgICBwYWRkaW5nOiAzMnB4IDAgMTZweDtcbiAgfVxuXG4gIC5jYXJkLWJvZHkge1xuICAgIGJhY2tncm91bmQ6ICRsaWdodDtcbiAgfVxuXG4gIC5jYXJkLWRlY2sge1xuICAgIG1hcmdpbi1ib3R0b206IDEyMHB4O1xuICB9XG5cbiAgLmNhcmQtdGV4dCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMzJweDtcbiAgfVxufVxuIiwiLyoqKiBDT0xPVVJTICoqKi9cbi8qKiogRk9OVCBTVFlMRVMgKioqL1xuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90byZmYW1pbHk9VmlkYWxva2EmZGlzcGxheT1zd2FwXCIpO1xuLmFib3V0IHtcbiAgbWFyZ2luOiA5MHB4IGF1dG87XG59XG4uYWJvdXQgcCB7XG4gIG1hcmdpbjogMzZweCAwO1xufVxuXG4uZ2FsbGVyeSB7XG4gIG1hcmdpbjogMTAwcHggYXV0bztcbn1cbi5nYWxsZXJ5IGgyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xufVxuXG4uZ2FsbGVyeS12aWV3IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG4uZ2FsbGVyeS12aWV3IGRpdiBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgYXNwZWN0LXJhdGlvOiAxLzE7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG4uc21vbCB7XG4gIHdpZHRoOiAzMiU7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5sYXJnZS1iYiB7XG4gIHdpZHRoOiA0OSU7XG59XG5cbi5sYXRlc3QtYmxvZy1wb3N0cyBoMiB7XG4gIG1hcmdpbjogMTAwcHggYXV0byA1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ubGF0ZXN0LWJsb2ctcG9zdHMgLmNhcmQge1xuICBib3JkZXI6IG5vbmU7XG59XG4ubGF0ZXN0LWJsb2ctcG9zdHMgLmNhcmQtdGl0bGUge1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDIuNHJlbTtcbiAgY29sb3I6ICMwYzFkMjQ7XG4gIGZvbnQtZmFtaWx5OiBcIlZpZGFsb2thXCIsIHNlcmlmO1xuICBwYWRkaW5nOiAzMnB4IDAgMTZweDtcbn1cbi5sYXRlc3QtYmxvZy1wb3N0cyAuY2FyZC1ib2R5IHtcbiAgYmFja2dyb3VuZDogI2ViZWZmMTtcbn1cbi5sYXRlc3QtYmxvZy1wb3N0cyAuY2FyZC1kZWNrIHtcbiAgbWFyZ2luLWJvdHRvbTogMTIwcHg7XG59XG4ubGF0ZXN0LWJsb2ctcG9zdHMgLmNhcmQtdGV4dCB7XG4gIG1hcmdpbi1ib3R0b206IDMycHg7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/page-not-found/page-not-found.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/pages/page-not-found/page-not-found.component.ts ***!
    \******************************************************************/

  /*! exports provided: PageNotFoundComponent */

  /***/
  function srcAppPagesPageNotFoundPageNotFoundComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function () {
      return PageNotFoundComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var PageNotFoundComponent = /*#__PURE__*/function () {
      function PageNotFoundComponent() {
        _classCallCheck(this, PageNotFoundComponent);
      }

      _createClass(PageNotFoundComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PageNotFoundComponent;
    }();

    PageNotFoundComponent.ɵfac = function PageNotFoundComponent_Factory(t) {
      return new (t || PageNotFoundComponent)();
    };

    PageNotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PageNotFoundComponent,
      selectors: [["app-page-not-found"]],
      decls: 2,
      vars: 0,
      template: function PageNotFoundComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "page-not-found works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageNotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-page-not-found',
          templateUrl: './page-not-found.component.html',
          styleUrls: ['./page-not-found.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/irenetruong/Desktop/coding/psd-ng-the-journal/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map