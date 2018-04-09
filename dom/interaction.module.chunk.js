webpackJsonp(["interaction.module"],{

/***/ "./src/app/project/interaction/interaction.component.css":
/***/ (function(module, exports) {

module.exports = ".container {\r\n    width: 70vw;\r\n}"

/***/ }),

/***/ "./src/app/project/interaction/interaction.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" fxLayout=\"column\" fxFlex=\"1\">\n  <div fxLayout=\"row\">\n    <h1 class=\"mat-h1\">2. Interação</h1>\n  </div>\n  <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\n    <mat-tab-group>\n      <mat-tab label=\"Quadro de Imagens I\">\n        <ng-template mat-tab-label>\n          <mat-icon>looks_one</mat-icon> \n        </ng-template>\n        <app-photo-grid [imagesList]=\"quadroI\"></app-photo-grid>\n      </mat-tab>\n      <mat-tab label=\"Quadro de Imagens II\">\n        <ng-template mat-tab-label>\n            <mat-icon>looks_two</mat-icon> \n        </ng-template>\n        <app-photo-grid [imagesList]=\"quadroII\"></app-photo-grid>\n      </mat-tab>\n    </mat-tab-group>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/project/interaction/interaction.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InteractionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InteractionComponent = /** @class */ (function () {
    function InteractionComponent() {
        this.quadroI = [
            'https://images.pexels.com/photos/533604/pexels-photo-533604.jpeg?auto=compress&cs=tinysrgb&h=350',
            'https://images.pexels.com/photos/346766/pexels-photo-346766.jpeg?auto=compress&cs=tinysrgb&h=350',
            'https://images.pexels.com/photos/5957/gift-brown-shopping-market.jpg?auto=compress&cs=tinysrgb&h=350',
            'https://images.pexels.com/photos/278912/pexels-photo-278912.jpeg?auto=compress&cs=tinysrgb&h=350',
            'https://images.pexels.com/photos/57750/pexels-photo-57750.jpeg?auto=compress&cs=tinysrgb&h=350',
            'https://images.pexels.com/photos/8434/holiday-trip-packaging-8434.jpg?auto=compress&cs=tinysrgb&h=350',
            'https://images.pexels.com/photos/90893/pexels-photo-90893.jpeg?auto=compress&cs=tinysrgb&h=350',
            'https://images.pexels.com/photos/158108/wolf-predator-carnivores-pack-animal-158108.jpeg?auto=compress&cs=tinysrgb&h=350',
            'https://images.pexels.com/photos/510541/pexels-photo-510541.jpeg?auto=compress&cs=tinysrgb&h=350',
            'https://images.pexels.com/photos/39018/cards-jass-cards-card-game-strategy-39018.jpeg?auto=compress&cs=tinysrgb&h=350'
        ];
        this.quadroII = [
            'https://images.pexels.com/photos/67861/mozartkugeln-chocolates-sweetness-chocolate-67861.jpeg?auto=compress&cs=tinysrgb&h=350',
            'https://images.pexels.com/photos/965743/pexels-photo-965743.jpeg?auto=compress&cs=tinysrgb&h=350',
            'https://images.pexels.com/photos/59519/pexels-photo-59519.jpeg?auto=compress&cs=tinysrgb&h=350',
            'https://images.pexels.com/photos/386009/pexels-photo-386009.jpeg?auto=compress&cs=tinysrgb&h=350',
            'https://images.pexels.com/photos/248771/pexels-photo-248771.jpeg?auto=compress&cs=tinysrgb&h=350',
            'https://images.pexels.com/photos/287240/pexels-photo-287240.jpeg?auto=compress&cs=tinysrgb&h=350',
            'https://images.pexels.com/photos/413960/pexels-photo-413960.jpeg?auto=compress&cs=tinysrgb&h=350',
            'https://images.pexels.com/photos/247929/pexels-photo-247929.jpeg?auto=compress&cs=tinysrgb&h=350',
            'https://images.pexels.com/photos/721169/pexels-photo-721169.jpeg?auto=compress&cs=tinysrgb&h=350',
            'https://images.pexels.com/photos/227417/pexels-photo-227417.jpeg?auto=compress&cs=tinysrgb&h=350',
            'https://images.pexels.com/photos/269850/pexels-photo-269850.jpeg?auto=compress&cs=tinysrgb&h=350'
        ];
    }
    InteractionComponent.prototype.ngOnInit = function () { };
    InteractionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-interaction',
            template: __webpack_require__("./src/app/project/interaction/interaction.component.html"),
            styles: [__webpack_require__("./src/app/project/interaction/interaction.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], InteractionComponent);
    return InteractionComponent;
}());



/***/ }),

/***/ "./src/app/project/interaction/interaction.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InteractionModule", function() { return InteractionModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__interaction_component__ = __webpack_require__("./src/app/project/interaction/interaction.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__interaction_routing__ = __webpack_require__("./src/app/project/interaction/interaction.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__photo_grid_photo_grid_module__ = __webpack_require__("./src/app/project/interaction/photo-grid/photo-grid.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var InteractionModule = /** @class */ (function () {
    function InteractionModule() {
    }
    InteractionModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["f" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["c" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_3__interaction_routing__["a" /* interactionRouting */],
                __WEBPACK_IMPORTED_MODULE_4__photo_grid_photo_grid_module__["a" /* PhotoGridModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__interaction_component__["a" /* InteractionComponent */]]
        })
    ], InteractionModule);
    return InteractionModule;
}());



/***/ }),

/***/ "./src/app/project/interaction/interaction.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return interactionRouting; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__interaction_component__ = __webpack_require__("./src/app/project/interaction/interaction.component.ts");


var interactionRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__interaction_component__["a" /* InteractionComponent */] }
];
var interactionRouting = __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forChild(interactionRoutes);


/***/ }),

/***/ "./src/app/project/interaction/photo-grid/photo-grid.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/project/interaction/photo-grid/photo-grid.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  Breve descrição do quadro de imagens\n</p>\n<mat-grid-list cols=\"4\" rowHeight=\"100px\">\n    <mat-grid-tile\n        *ngFor=\"let image of imagesList\">\n      <img src=\"{{image}}\">\n    </mat-grid-tile>\n  </mat-grid-list>\n"

/***/ }),

/***/ "./src/app/project/interaction/photo-grid/photo-grid.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhotoGridComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PhotoGridComponent = /** @class */ (function () {
    function PhotoGridComponent() {
    }
    PhotoGridComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], PhotoGridComponent.prototype, "imagesList", void 0);
    PhotoGridComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-photo-grid',
            template: __webpack_require__("./src/app/project/interaction/photo-grid/photo-grid.component.html"),
            styles: [__webpack_require__("./src/app/project/interaction/photo-grid/photo-grid.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PhotoGridComponent);
    return PhotoGridComponent;
}());



/***/ }),

/***/ "./src/app/project/interaction/photo-grid/photo-grid.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhotoGridModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__photo_grid_component__ = __webpack_require__("./src/app/project/interaction/photo-grid/photo-grid.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var PhotoGridModule = /** @class */ (function () {
    function PhotoGridModule() {
    }
    PhotoGridModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["b" /* MatGridListModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__photo_grid_component__["a" /* PhotoGridComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__photo_grid_component__["a" /* PhotoGridComponent */]]
        })
    ], PhotoGridModule);
    return PhotoGridModule;
}());



/***/ })

});
//# sourceMappingURL=interaction.module.chunk.js.map