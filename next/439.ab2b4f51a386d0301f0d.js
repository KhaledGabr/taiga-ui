(window.webpackJsonp=window.webpackJsonp||[]).push([[439],{"4kqd":function(n,e,t){"use strict";t.r(e),e.default="import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\nimport {default as avatar} from '!!file-loader!../../../../../assets/images/avatar.jpg';\n\n@Component({\n    selector: `tui-button-example-1`,\n    templateUrl: `./index.html`,\n    changeDetection,\n    encapsulation,\n})\nexport class TuiButtonExample1 {\n    readonly avatarUrl = avatar;\n\n    onClick(event: MouseEvent): void {\n        console.info(`click`, event);\n    }\n}\n"}}]);