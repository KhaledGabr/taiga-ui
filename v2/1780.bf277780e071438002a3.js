(window.webpackJsonp=window.webpackJsonp||[]).push([[1780],{J4FZ:function(n,e,o){"use strict";o.r(e),e.default="import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: 'tui-filter-by-input-example-3',\n    templateUrl: './index.html',\n    changeDetection,\n    encapsulation,\n})\nexport class TuiFilterByInputExample3 {\n    readonly items = [\n        {name: 'John Cleese'},\n        {name: 'Eric Idle'},\n        {name: 'Graham Chapman'},\n        {name: 'Michael Palin'},\n        {name: 'Terry Gilliam'},\n        {name: 'Terry Jones'},\n    ];\n\n    readonly form = new FormGroup({\n        user: new FormControl(),\n    });\n\n    readonly stringify = ({name}: {name: string}): string => name;\n}\n"}}]);