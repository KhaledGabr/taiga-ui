(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[16601],{16601:e=>{e.exports="import {Component} from '@angular/core';\nimport {FormControl, ReactiveFormsModule} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiTextfieldControllerModule} from '@taiga-ui/core';\nimport {TuiDataListWrapper, TuiFilterByInputPipe} from '@taiga-ui/kit';\nimport {TuiMultiSelectModule} from '@taiga-ui/legacy';\n\n@Component({\n    standalone: true,\n    exportAs: \"ExampleComponent3\",\n    imports: [\n        TuiMultiSelectModule,\n        ReactiveFormsModule,\n        TuiTextfieldControllerModule,\n        TuiDataListWrapper,\n        TuiFilterByInputPipe,\n    ],\n    templateUrl: './index.html',\n    encapsulation,\n    changeDetection,\n})\nexport default class ExampleComponent {\n    protected readonly items = [\n        'Luke Skywalker',\n        'Leia Organa Solo',\n        'Darth Vader',\n        'Han Solo',\n        'Obi-Wan Kenobi',\n        'Yoda',\n    ];\n\n    protected readonly control = new FormControl([this.items[0]]);\n}\n"}}]);