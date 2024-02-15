(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[62544],{62544:n=>{n.exports="import {Component, OnInit} from '@angular/core';\nimport {FormControl, FormGroup, Validators} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {tuiMarkControlAsTouchedAndValidate} from '@taiga-ui/cdk';\n\n@Component({\n    selector: 'tui-miscellaneous-example-6',\n    templateUrl: './index.html',\n    encapsulation,\n    changeDetection,\n})\nexport class TuiMiscellaneousExample6 implements OnInit {\n    userDetailsForm = new FormGroup({\n        name: new FormControl('', Validators.required),\n        address: new FormGroup({\n            street: new FormControl('', Validators.required),\n            city: new FormControl('', Validators.required),\n            zipCode: new FormControl('', Validators.required),\n        }),\n    });\n\n    ngOnInit(): void {\n        tuiMarkControlAsTouchedAndValidate(this.userDetailsForm);\n    }\n}\n"}}]);