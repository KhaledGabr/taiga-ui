(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[38188],{38188:e=>{e.exports="import {Component} from '@angular/core';\nimport {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiInputModule} from '@taiga-ui/kit';\n\n@Component({\n    standalone: true,\n    exportAs: \"ExampleComponent1\",\n    imports: [ReactiveFormsModule, TuiInputModule],\n    templateUrl: './index.html',\n    encapsulation,\n    changeDetection,\n})\nexport default class ExampleComponent {\n    protected readonly testForm = new FormGroup({\n        testValue: new FormControl('mail@mail.ru'),\n    });\n}\n"}}]);