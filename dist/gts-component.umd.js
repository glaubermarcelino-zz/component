(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/common'], factory) :
	(factory((global['gts-component'] = {}),global.core,global.common));
}(this, (function (exports,core,common) { 'use strict';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var GTSComponent = (function () {
    function GTSComponent() {
    }
    GTSComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'gts-component',
                    template: "<h1>Component Exemplo</h1> <h1>Component Exemplo</h1> <h1>Component Exemplo</h1> <h1>Component Exemplo</h1> <h1>Component Exemplo</h1> <h1>Component Exemplo</h1> <h1>Component Exemplo</h1> <h1>Component Exemplo</h1> <h1>Component Exemplo</h1> <h1>Component Exemplo</h1> <h1>Component Exemplo</h1> <h1>Component Exemplo</h1> <h1>Component Exemplo</h1> <h1>Component Exemplo</h1>"
                },] },
    ];
    /** @nocollapse */
    GTSComponent.ctorParameters = function () { return []; };
    return GTSComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var GTSModule = (function () {
    function GTSModule() {
    }
    /**
     * @return {?}
     */
    GTSModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: GTSModule,
            providers: []
        };
    };
    GTSModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [
                        common.CommonModule
                    ],
                    declarations: [
                        GTSComponent
                    ],
                    exports: [
                        GTSComponent
                    ]
                },] },
    ];
    /** @nocollapse */
    GTSModule.ctorParameters = function () { return []; };
    return GTSModule;
}());

exports.GTSModule = GTSModule;
exports.GTSComponent = GTSComponent;

Object.defineProperty(exports, '__esModule', { value: true });

})));
