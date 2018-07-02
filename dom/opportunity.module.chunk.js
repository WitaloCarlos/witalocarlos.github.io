webpackJsonp(["opportunity.module"],{

/***/ "./src/app/project/opportunity/opportunity.component.css":
/***/ (function(module, exports) {

module.exports = ".container {\r\n    width: 70vw;\r\n}\r\n\r\n.opportunity-button {\r\n    color: white;\r\n    margin-right: 10px;\r\n}"

/***/ }),

/***/ "./src/app/project/opportunity/opportunity.component.html":
/***/ (function(module, exports) {

module.exports = "<app-dom-flex-container>\n  <div class=\"container\" fxLayout=\"column\">\n    <div fxLayout=\"row\">\n      <h1 class=\"mat-h1\">1. Oportunidade</h1>\n    </div>\n    <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\n      <div fxLayout=\"column\">\n        <app-text-editor [editorModel]='oportunidade' [editorPlaceholder]=\"'Descreva a oportunidade'\" (updateModel)=\"handleChanges($event)\">\n        </app-text-editor>\n        <div fxLayout=\"row\">\n          <button mat-raised-button color=\"accent\" class=\"opportunity-button\" (click)=\"clearText()\">\n            <mat-icon>clear</mat-icon> Limpar</button>\n          <button mat-raised-button color=\"accent\" class=\"opportunity-button\" (click)=\"saveText()\">\n            <mat-icon>save</mat-icon> Salvar</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</app-dom-flex-container>"

/***/ }),

/***/ "./src/app/project/opportunity/opportunity.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OpportunityComponent; });
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

var OpportunityComponent = /** @class */ (function () {
    function OpportunityComponent() {
        this.oportunidade = '';
    }
    OpportunityComponent.prototype.ngOnInit = function () {
    };
    OpportunityComponent.prototype.handleChanges = function (value) {
        this.oportunidade = value;
    };
    OpportunityComponent.prototype.clearText = function () {
        this.oportunidade = '';
    };
    OpportunityComponent.prototype.saveText = function () {
        alert('Função ainda não disponível!');
    };
    OpportunityComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-opportunity',
            template: __webpack_require__("./src/app/project/opportunity/opportunity.component.html"),
            styles: [__webpack_require__("./src/app/project/opportunity/opportunity.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], OpportunityComponent);
    return OpportunityComponent;
}());



/***/ }),

/***/ "./src/app/project/opportunity/opportunity.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpportunityModule", function() { return OpportunityModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__opportunity_component__ = __webpack_require__("./src/app/project/opportunity/opportunity.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__opportunity_routing__ = __webpack_require__("./src/app/project/opportunity/opportunity.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__util_text_editor_text_editor_module__ = __webpack_require__("./src/app/util/text-editor/text-editor.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_util_dom_flex_container_dom_flex_container_module__ = __webpack_require__("./src/app/util/dom-flex-container/dom-flex-container.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var OpportunityModule = /** @class */ (function () {
    function OpportunityModule() {
    }
    OpportunityModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__opportunity_routing__["a" /* opportunityRouting */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["h" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_6__app_util_dom_flex_container_dom_flex_container_module__["a" /* DomFlexContainerModule */],
                __WEBPACK_IMPORTED_MODULE_4__util_text_editor_text_editor_module__["a" /* TextEditorModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__opportunity_component__["a" /* OpportunityComponent */]]
        })
    ], OpportunityModule);
    return OpportunityModule;
}());



/***/ }),

/***/ "./src/app/project/opportunity/opportunity.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return opportunityRouting; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__opportunity_component__ = __webpack_require__("./src/app/project/opportunity/opportunity.component.ts");


var opportunityRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__opportunity_component__["a" /* OpportunityComponent */] }
];
var opportunityRouting = __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forChild(opportunityRoutes);


/***/ }),

/***/ "./src/app/util/text-editor/text-editor.component.css":
/***/ (function(module, exports) {

module.exports = ".editor-area {\r\n    width: 60%;\r\n}"

/***/ }),

/***/ "./src/app/util/text-editor/text-editor.component.html":
/***/ (function(module, exports) {

module.exports = "\n  <mat-form-field class=\"editor-area\">\n    <textarea matInput placeholder=\"{{editorPlaceholder}}\" \n    matTextareaAutosize matAutosizeMinRows=\"5\"\n    [(ngModel)]=\"editorModel\" (ngModelChange)=\"updateValue($event)\"\n    [ngModelOptions]=\"{standalone: true}\"></textarea>\n  </mat-form-field>\n\n"

/***/ }),

/***/ "./src/app/util/text-editor/text-editor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextEditorComponent; });
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

var TextEditorComponent = /** @class */ (function () {
    function TextEditorComponent() {
        this.editorPlaceholder = 'Input a content';
        this.updateModel = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    TextEditorComponent.prototype.ngOnInit = function () { };
    TextEditorComponent.prototype.updateValue = function (model) {
        this.updateModel.emit(model);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], TextEditorComponent.prototype, "editorPlaceholder", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], TextEditorComponent.prototype, "editorModel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */])
    ], TextEditorComponent.prototype, "updateModel", void 0);
    TextEditorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-text-editor',
            template: __webpack_require__("./src/app/util/text-editor/text-editor.component.html"),
            styles: [__webpack_require__("./src/app/util/text-editor/text-editor.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TextEditorComponent);
    return TextEditorComponent;
}());



/***/ }),

/***/ "./src/app/util/text-editor/text-editor.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextEditorModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__text_editor_component__ = __webpack_require__("./src/app/util/text-editor/text-editor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var TextEditorModule = /** @class */ (function () {
    function TextEditorModule() {
    }
    TextEditorModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["i" /* MatInputModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__text_editor_component__["a" /* TextEditorComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__text_editor_component__["a" /* TextEditorComponent */]]
        })
    ], TextEditorModule);
    return TextEditorModule;
}());



/***/ })

});
//# sourceMappingURL=opportunity.module.chunk.js.map