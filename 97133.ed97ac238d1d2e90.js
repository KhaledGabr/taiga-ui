(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[97133],{97133:e=>{e.exports="import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiTime} from '@taiga-ui/cdk';\n\n@Component({\n    selector: 'tui-input-time-example-1',\n    templateUrl: './index.html',\n    encapsulation,\n    changeDetection,\n})\nexport class TuiInputTimeExample1 {\n    protected readonly testForm = new FormGroup({\n        testValue: new FormControl(new TuiTime(12, 30)),\n    });\n}\n"}}]);