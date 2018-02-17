import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var GTSComponent = (function () {
    function GTSComponent() {
    }
    GTSComponent.decorators = [
        { type: Component, args: [{
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
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
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

export { GTSModule, GTSComponent };
