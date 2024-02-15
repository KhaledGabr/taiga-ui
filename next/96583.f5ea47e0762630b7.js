(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[96583],{96583:n=>{n.exports="import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {tuiFormatPhone} from '@taiga-ui/core';\n\n@Component({\n    selector: 'tui-format-example-4',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport class TuiFormatExample4 {\n    parametersForm = new FormGroup({\n        value: new FormControl('+79991234567'),\n        countryCode: new FormControl('+7'),\n        phoneMask: new FormControl('### ###-##-##'),\n    });\n\n    get formattedPhone(): string {\n        const {value, countryCode, phoneMask} = this.parametersForm.value;\n\n        return tuiFormatPhone(value ?? '', countryCode ?? '', phoneMask ?? '');\n    }\n}\n"}}]);