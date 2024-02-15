(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[17687],{17687:n=>{n.exports="import {Component} from '@angular/core';\nimport {FormControl} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {tuiNumberFormatProvider} from '@taiga-ui/core';\n\n@Component({\n    selector: 'tui-input-range-example-2',\n    templateUrl: './index.html',\n    styles: [\n        `\n            tui-input-range {\n                max-width: 30rem;\n            }\n        `,\n    ],\n    encapsulation,\n    changeDetection,\n    providers: [\n        tuiNumberFormatProvider({\n            decimalSeparator: '.',\n            thousandSeparator: ',',\n            zeroPadding: true,\n        }),\n    ],\n})\nexport class TuiInputRangeExample2 {\n    readonly max = 50_000_001;\n    readonly min = 5_001;\n\n    readonly control = new FormControl([this.min, this.max / 2]);\n}\n"}}]);