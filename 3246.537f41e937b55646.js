(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[3246],{3246:e=>{e.exports="import {Component} from '@angular/core';\nimport {FormsModule} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiIconComponent, TuiTextfieldModule} from '@taiga-ui/core';\nimport {TuiTooltipModule} from '@taiga-ui/experimental';\n\n@Component({\n    standalone: true,\n    exportAs: \"ExampleComponent1\",\n    imports: [FormsModule, TuiTextfieldModule, TuiIconComponent, TuiTooltipModule],\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport default class ExampleComponent {\n    protected value = '';\n}\n"}}]);