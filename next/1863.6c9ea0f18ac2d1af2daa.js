(window.webpackJsonp=window.webpackJsonp||[]).push([[1863],{R86j:function(n,e,o){"use strict";o.r(e),e.default="import {Component, Inject} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TUI_IS_IOS} from '@taiga-ui/cdk/tokens';\n\n@Component({\n    selector: `tui-token-example-5`,\n    templateUrl: `./index.html`,\n    changeDetection,\n    encapsulation,\n})\nexport class TuiTokensExample5 {\n    constructor(@Inject(TUI_IS_IOS) readonly isIos: boolean) {}\n}\n"}}]);