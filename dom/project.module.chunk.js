webpackJsonp(["project.module"],{

/***/ "./src/app/project/help/help.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/project/help/help.component.html":
/***/ (function(module, exports) {

module.exports = "<button mat-fab color=\"primary\" (click)=\"openHelpDialog()\" matTooltip=\"Abrir ajuda\" matTooltipPosition=\"below\" >\r\n    <mat-icon>help</mat-icon>\r\n</button>"

/***/ }),

/***/ "./src/app/project/help/help.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_project_help_process_dialog_process_dialog_component__ = __webpack_require__("./src/app/project/help/process-dialog/process-dialog.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HelpComponent = /** @class */ (function () {
    function HelpComponent(dialog) {
        this.dialog = dialog;
    }
    HelpComponent.prototype.ngOnInit = function () {
    };
    HelpComponent.prototype.openHelpDialog = function () {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_2__app_project_help_process_dialog_process_dialog_component__["a" /* ProcessDialogComponent */], {
            height: '40vw',
            width: '68vw',
        });
    };
    HelpComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-help',
            template: __webpack_require__("./src/app/project/help/help.component.html"),
            styles: [__webpack_require__("./src/app/project/help/help.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatDialog */]])
    ], HelpComponent);
    return HelpComponent;
}());



/***/ }),

/***/ "./src/app/project/help/help.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__help_component__ = __webpack_require__("./src/app/project/help/help.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_project_help_process_dialog_process_dialog_module__ = __webpack_require__("./src/app/project/help/process-dialog/process-dialog.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var HelpModule = /** @class */ (function () {
    function HelpModule() {
    }
    HelpModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["h" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["e" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["r" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_3__app_project_help_process_dialog_process_dialog_module__["a" /* ProcessDialogModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__help_component__["a" /* HelpComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__help_component__["a" /* HelpComponent */]]
        })
    ], HelpModule);
    return HelpModule;
}());



/***/ }),

/***/ "./src/app/project/help/process-dialog/process-dialog.component.css":
/***/ (function(module, exports) {

module.exports = ".infograph{\r\n    max-height: 28vw;\r\n}"

/***/ }),

/***/ "./src/app/project/help/process-dialog/process-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"dom-dialog-header\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n  <h2 mat-dialog-title>\n    Processo Projetual</h2>\n</div>\n<div class=\"dom-dialog-body\">\n  <div fxLayout=\"row\" fxLayoutAlign=\"center center\" mat-dialog-content>\n    <div fxFlex=\"50\" fxLayoutAlign=\"center center\">\n      <img src=\"assets/images/projetual.png\" class=\"infograph\">\n    </div>\n    <div fxFlex=\"50\" fxLayoutAlign=\"center center\">\n      <section class=\"mat-typography\">\n\n        <p class=\"mat-body-1\">\n          <strong>DOM</strong> Design, Objetos e Memórias é um processo projetual que proporciona ações reflexivas e dinâmicas para\n          o desenvolvimento de projeto de produto. O Design Centrado no Utilizador é um dos princípios norteadores desse\n          processo projetual. As etapas são interligadas e possibilitaram a retroalimentação. Para cada uma dessas etapas\n          são sugeridas ações que podem ser desenvolvidas em paralelo e se possível através de um trabalho de colaboração\n          em equipe.\n        </p>\n        <p>\n          O itinerário está dividido em cinco etapas:\n        </p>\n        <ul>\n          <li>\n            <strong>Interação:</strong> compreender o contexto, conversar com usuários, pensar possibilidades e em oportunidades de design.\n          </li>\n          <li>\n              <strong>Definição:</strong> elaborar ações, definir o caminho, relacionar informações, propor critérios, pensar em novas possibilidades.\n          </li>\n          <li>\n              <strong>Criação:</strong> gerar ideias, estudar ideias, discutir ideias, desenvolver modelos.\n          </li>\n          <li>\n              <strong>Avaliação:</strong> discutir o processo, avaliar critérios, ideias devem ser avaliadas juntos com usuários.\n          </li>\n          <li>\n              <strong>Projetação:</strong> definir o produto realizar o detalhamento.\n          </li>\n        </ul>\n      </section>\n    </div>\n  </div>\n  <mat-dialog-actions fxLayoutAlign=\"end center\">\n    <button mat-button mat-dialog-close>Fechar</button>\n  </mat-dialog-actions>\n</div>"

/***/ }),

/***/ "./src/app/project/help/process-dialog/process-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProcessDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var ProcessDialogComponent = /** @class */ (function () {
    function ProcessDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    ProcessDialogComponent.prototype.ngOnInit = function () {
    };
    ProcessDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-process-dialog',
            template: __webpack_require__("./src/app/project/help/process-dialog/process-dialog.component.html"),
            styles: [__webpack_require__("./src/app/project/help/process-dialog/process-dialog.component.css")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatDialogRef */], Object])
    ], ProcessDialogComponent);
    return ProcessDialogComponent;
}());



/***/ }),

/***/ "./src/app/project/help/process-dialog/process-dialog.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProcessDialogModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__process_dialog_component__ = __webpack_require__("./src/app/project/help/process-dialog/process-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_flex_layout__ = __webpack_require__("./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ProcessDialogModule = /** @class */ (function () {
    function ProcessDialogModule() {
    }
    ProcessDialogModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["h" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["e" /* MatDialogModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__process_dialog_component__["a" /* ProcessDialogComponent */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_2__process_dialog_component__["a" /* ProcessDialogComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__process_dialog_component__["a" /* ProcessDialogComponent */]]
        })
    ], ProcessDialogModule);
    return ProcessDialogModule;
}());



/***/ }),

/***/ "./src/app/project/project.component.css":
/***/ (function(module, exports) {

module.exports = ".container {\r\n    \r\n    margin: 1%;\r\n}\r\n\r\n.float-position {\r\n    position: absolute;\r\n    bottom: 0;\r\n    right: 0;\r\n    margin: 2%;\r\n  }\r\n  "

/***/ }),

/***/ "./src/app/project/project.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <div fxLayout=\"row\">\n    <mat-toolbar class=\"secondary-item\">\n      <mat-toolbar-row fxLayout=\"row\">\n        <div fxFlex=\"30\" fxLayoutAlign=\"start center\">\n          {{projectTitle}}\n        </div>\n        <div fxFlex=\"70\" fxLayoutAlign=\"end center\">\n          <button mat-button (click)=\"goToPage('opportunity')\">\n            <img src=\"assets/images/icons/ic_opportunity.png\" class=\"button-icon\">Oportunidade</button>\n          <button mat-button (click)=\"goToPage('interaction')\">\n            <img src=\"assets/images/icons/ic_interaction.png\" class=\"button-icon\">Interação</button>\n          <button mat-button (click)=\"goToPage('redefinition')\">\n            <img src=\"assets/images/icons/ic_concetration.png\" class=\"button-icon\">Concentração</button>\n          <button mat-button>\n            <img src=\"assets/images/icons/ic_creation.png\" class=\"button-icon\">Criação</button>\n          <button mat-button>\n            <img src=\"assets/images/icons/ic_evaluation.png\" class=\"button-icon\">Avaliação</button>\n          <button mat-button>\n            <img src=\"assets/images/icons/ic_projection.png\" class=\"button-icon\">Projetação</button>\n        </div>\n      </mat-toolbar-row>\n    </mat-toolbar>\n  </div>\n\n  <div fxLayout=\"row\" class=\"container\" *ngIf=\"!isLoading;else loadingView \">\n    \n        <router-outlet></router-outlet>\n      <app-help class=\"float-position\"></app-help>\n  </div>\n\n  <ng-template #loadingView>\n    <mat-progress-spinner color=\"primary\" mode=\"indeterminate\"></mat-progress-spinner>\n  </ng-template>\n\n</div>"

/***/ }),

/***/ "./src/app/project/project.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__project_service__ = __webpack_require__("./src/app/project/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_model_parser_project_parser__ = __webpack_require__("./src/app/model/parser/project.parser.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_session_service__ = __webpack_require__("./src/app/session.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProjectComponent = /** @class */ (function () {
    function ProjectComponent(router, sessionService, projectService) {
        this.router = router;
        this.sessionService = sessionService;
        this.projectService = projectService;
        this.projectTitle = 'Project';
        this.isLoading = false;
    }
    ProjectComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoading = true;
        this.sessionService.getProjects().subscribe(function (result) {
            result = result.filter(function (x) { return x.title === 'Molde API'; });
            _this.project = __WEBPACK_IMPORTED_MODULE_3__app_model_parser_project_parser__["a" /* ProjectParser */].parse(result[0]);
            _this.sessionService.setSelectedProject(_this.project);
            _this.projectTitle = _this.project.title;
            console.log(_this.project, _this.projectTitle);
        }, function (error) {
            console.log('Error ' + error);
        }, function () {
            _this.isLoading = false;
        });
    };
    ProjectComponent.prototype.ngAfterViewInit = function () { };
    ProjectComponent.prototype.goToPage = function (subroute) {
        this.router.navigate(["/" + subroute]);
    };
    ProjectComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-project',
            template: __webpack_require__("./src/app/project/project.component.html"),
            styles: [__webpack_require__("./src/app/project/project.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__app_session_service__["a" /* SessionService */],
            __WEBPACK_IMPORTED_MODULE_2__project_service__["a" /* ProjectService */]])
    ], ProjectComponent);
    return ProjectComponent;
}());



/***/ }),

/***/ "./src/app/project/project.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectModule", function() { return ProjectModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__project_component__ = __webpack_require__("./src/app/project/project.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__project_routing__ = __webpack_require__("./src/app/project/project.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_flex_layout__ = __webpack_require__("./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_util_dom_api_dom_api_module__ = __webpack_require__("./src/app/util/dom-api/dom-api.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_project_project_service__ = __webpack_require__("./src/app/project/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_project_help_help_module__ = __webpack_require__("./src/app/project/help/help.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var ProjectModule = /** @class */ (function () {
    function ProjectModule() {
    }
    ProjectModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["l" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["q" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["h" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["j" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_router__["b" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_9__app_project_help_help_module__["a" /* HelpModule */],
                __WEBPACK_IMPORTED_MODULE_7__app_util_dom_api_dom_api_module__["a" /* DomApiModule */],
                __WEBPACK_IMPORTED_MODULE_3__project_routing__["a" /* projectRouting */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_8__app_project_project_service__["a" /* ProjectService */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__project_component__["a" /* ProjectComponent */]]
        })
    ], ProjectModule);
    return ProjectModule;
}());



/***/ }),

/***/ "./src/app/project/project.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return projectRouting; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__project_component__ = __webpack_require__("./src/app/project/project.component.ts");


var projectRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__project_component__["a" /* ProjectComponent */], children: [
            { path: 'opportunity', loadChildren: 'app/project/opportunity/opportunity.module#OpportunityModule' },
            { path: 'interaction', loadChildren: 'app/project/interaction/interaction.module#InteractionModule' },
            { path: 'redefinition', loadChildren: 'app/project/redefinition/redefinition.module#RedefinitionModule' },
        ] }
];
var projectRouting = __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forChild(projectRoutes);


/***/ }),

/***/ "./src/app/project/project.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_util_dom_api_dom_api_service__ = __webpack_require__("./src/app/util/dom-api/dom-api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_util_read_only_util__ = __webpack_require__("./src/app/util/read-only-util.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_model_parser_project_parser__ = __webpack_require__("./src/app/model/parser/project.parser.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProjectService = /** @class */ (function () {
    function ProjectService(domApi) {
        this.domApi = domApi;
    }
    ProjectService.prototype.getProjects = function () {
        return this.domApi.get(__WEBPACK_IMPORTED_MODULE_2__app_util_read_only_util__["a" /* ReadOnlyUtil */].RequestPaths.SERVER_ROOT + "/" + __WEBPACK_IMPORTED_MODULE_2__app_util_read_only_util__["a" /* ReadOnlyUtil */].RequestPaths.PROJECT);
    };
    ProjectService.prototype.updateProject = function (project) {
        return this.domApi.patch(__WEBPACK_IMPORTED_MODULE_2__app_util_read_only_util__["a" /* ReadOnlyUtil */].RequestPaths.SERVER_ROOT + "/" + __WEBPACK_IMPORTED_MODULE_2__app_util_read_only_util__["a" /* ReadOnlyUtil */].RequestPaths.PROJECT + "/" + project.id, __WEBPACK_IMPORTED_MODULE_3__app_model_parser_project_parser__["a" /* ProjectParser */].parseToJson(project));
    };
    ProjectService.prototype.getProjectById = function (id) {
        return this.domApi.get(__WEBPACK_IMPORTED_MODULE_2__app_util_read_only_util__["a" /* ReadOnlyUtil */].RequestPaths.SERVER_ROOT + "/" + __WEBPACK_IMPORTED_MODULE_2__app_util_read_only_util__["a" /* ReadOnlyUtil */].RequestPaths.PROJECT + "/" + id);
    };
    ProjectService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__app_util_dom_api_dom_api_service__["a" /* DomApiService */]])
    ], ProjectService);
    return ProjectService;
}());



/***/ })

});
//# sourceMappingURL=project.module.chunk.js.map