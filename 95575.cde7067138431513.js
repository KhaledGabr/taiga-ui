(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[95575],{95575:n=>{n.exports="import {Component} from '@angular/core';\nimport {\n    FormControl,\n    FormGroup,\n    FormsModule,\n    ReactiveFormsModule,\n    Validators,\n} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport type {TuiBooleanHandler} from '@taiga-ui/cdk';\nimport {TuiTitleDirective} from '@taiga-ui/core';\nimport {TuiRadioListComponent} from '@taiga-ui/kit';\n\n@Component({\n    standalone: true,\n    exportAs: \"ExampleComponent3\",\n    imports: [FormsModule, ReactiveFormsModule, TuiRadioListComponent, TuiTitleDirective],\n    templateUrl: './index.html',\n    encapsulation,\n    changeDetection,\n})\nexport default class ExampleComponent {\n    protected readonly form = new FormGroup({\n        vertical: new FormControl(null, Validators.required),\n    });\n\n    protected readonly objects = [\n        {\n            name: 'King Arthur',\n            description: 'Graham Chapman',\n        },\n        {\n            name: \"It's Man\",\n            description: 'Michael Palin',\n        },\n        {\n            name: 'Silly Walks',\n            description: 'John Cleese',\n        },\n    ];\n\n    protected readonly strings = ['King Arthur', \"It's Man\", 'Silly Walks'];\n\n    protected horizontal = this.strings[0];\n\n    protected readonly handler: TuiBooleanHandler<string> = item =>\n        item === this.strings[2];\n}\n"}}]);