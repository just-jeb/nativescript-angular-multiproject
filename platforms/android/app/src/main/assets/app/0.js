(global["webpackJsonp"] = global["webpackJsonp"] || []).push([[0],{

/***/ "./app/home/home-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("nativescript-angular/router");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/home/home.component.ts");




const routes = [
    { path: "", component: _home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] }
];
let HomeRoutingModule = class HomeRoutingModule {
};
HomeRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2__["NativeScriptRouterModule"].forChild(routes)],
        exports: [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2__["NativeScriptRouterModule"]]
    })
], HomeRoutingModule);



/***/ }),

/***/ "./app/home/home.component.html":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ActionBar>\n    <Label text=\"Home\"></Label>\n</ActionBar>\n\n<GridLayout>\n    <!-- Add your page content here -->\n</GridLayout>");

/***/ }),

/***/ "./app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);


let HomeComponent = class HomeComponent {
    constructor() {
        // Use the component constructor to inject providers.
    }
    ngOnInit() {
        // Init your component properties here.
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "Home",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__("./app/home/home.component.html")).default
    })
], HomeComponent);



/***/ }),

/***/ "./app/home/home.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nativescript_angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("nativescript-angular/common");
/* harmony import */ var nativescript_angular_common__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_common__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/home/home-routing.module.ts");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./app/home/home.component.ts");





let HomeModule = class HomeModule {
};
HomeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            nativescript_angular_common__WEBPACK_IMPORTED_MODULE_2__["NativeScriptCommonModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_3__["HomeRoutingModule"]
        ],
        declarations: [
            _home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]
        ],
        schemas: [
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["NO_ERRORS_SCHEMA"]
        ]
    })
], HomeModule);



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvaG9tZS9ob21lLXJvdXRpbmcubW9kdWxlLnRzIiwid2VicGFjazovLy8uL2FwcC9ob21lL2hvbWUuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL2hvbWUvaG9tZS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2hvbWUvaG9tZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXlDO0FBRThCO0FBRXRCO0FBRWpELE1BQU0sTUFBTSxHQUFXO0lBQ25CLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsNkRBQWEsRUFBRTtDQUN6QyxDQUFDO0FBTUYsSUFBYSxpQkFBaUIsR0FBOUIsTUFBYSxpQkFBaUI7Q0FBSTtBQUFyQixpQkFBaUI7SUFKN0IsOERBQVEsQ0FBQztRQUNOLE9BQU8sRUFBRSxDQUFDLG9GQUF3QixDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNwRCxPQUFPLEVBQUUsQ0FBQyxvRkFBd0IsQ0FBQztLQUN0QyxDQUFDO0dBQ1csaUJBQWlCLENBQUk7QUFBSjs7Ozs7Ozs7O0FDZDlCO0FBQWUscU07Ozs7Ozs7Ozs7Ozs7O0FDQW1DO0FBTWxELElBQWEsYUFBYSxHQUExQixNQUFhLGFBQWE7SUFFdEI7UUFDSSxxREFBcUQ7SUFDekQsQ0FBQztJQUVELFFBQVE7UUFDSix1Q0FBdUM7SUFDM0MsQ0FBQztDQUNKO0FBVFksYUFBYTtJQUp6QiwrREFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLE1BQU07UUFDaEIsOEhBQW9DO0tBQ3ZDLENBQUM7R0FDVyxhQUFhLENBU3pCO0FBVHlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTmlDO0FBQ1k7QUFFYjtBQUNUO0FBY2pELElBQWEsVUFBVSxHQUF2QixNQUFhLFVBQVU7Q0FBSTtBQUFkLFVBQVU7SUFadEIsOERBQVEsQ0FBQztRQUNOLE9BQU8sRUFBRTtZQUNMLG9GQUF3QjtZQUN4QixzRUFBaUI7U0FDcEI7UUFDRCxZQUFZLEVBQUU7WUFDViw2REFBYTtTQUNoQjtRQUNELE9BQU8sRUFBRTtZQUNMLDhEQUFnQjtTQUNuQjtLQUNKLENBQUM7R0FDVyxVQUFVLENBQUk7QUFBSiIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuXG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSBcIi4vaG9tZS5jb21wb25lbnRcIjtcblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gICAgeyBwYXRoOiBcIlwiLCBjb21wb25lbnQ6IEhvbWVDb21wb25lbnQgfVxuXTtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcyldLFxuICAgIGV4cG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIEhvbWVSb3V0aW5nTW9kdWxlIHsgfVxuIiwiZXhwb3J0IGRlZmF1bHQgXCI8QWN0aW9uQmFyPlxcbiAgICA8TGFiZWwgdGV4dD1cXFwiSG9tZVxcXCI+PC9MYWJlbD5cXG48L0FjdGlvbkJhcj5cXG5cXG48R3JpZExheW91dD5cXG4gICAgPCEtLSBBZGQgeW91ciBwYWdlIGNvbnRlbnQgaGVyZSAtLT5cXG48L0dyaWRMYXlvdXQ+XCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIkhvbWVcIixcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2hvbWUuY29tcG9uZW50Lmh0bWxcIlxufSlcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAvLyBVc2UgdGhlIGNvbXBvbmVudCBjb25zdHJ1Y3RvciB0byBpbmplY3QgcHJvdmlkZXJzLlxuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICAvLyBJbml0IHlvdXIgY29tcG9uZW50IHByb3BlcnRpZXMgaGVyZS5cbiAgICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvY29tbW9uXCI7XG5cbmltcG9ydCB7IEhvbWVSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vaG9tZS1yb3V0aW5nLm1vZHVsZVwiO1xuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gXCIuL2hvbWUuY29tcG9uZW50XCI7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUsXG4gICAgICAgIEhvbWVSb3V0aW5nTW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgSG9tZUNvbXBvbmVudFxuICAgIF0sXG4gICAgc2NoZW1hczogW1xuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBIb21lTW9kdWxlIHsgfVxuIl0sInNvdXJjZVJvb3QiOiIifQ==