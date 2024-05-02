(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[16508],{16508:e=>{e.exports="import {Component} from '@angular/core';\nimport {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport type {TuiCurrencyVariants} from '@taiga-ui/addon-commerce';\nimport {tuiGetCurrencySymbol} from '@taiga-ui/addon-commerce';\nimport {TuiDataListWrapperModule, TuiSelectModule} from '@taiga-ui/kit';\n\n@Component({\n    standalone: true,\n    imports: [ReactiveFormsModule, TuiSelectModule, TuiDataListWrapperModule],\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport default class ExampleComponent {\n    protected readonly items = [\n        'USD',\n        'RUB',\n        '643',\n        'KZT',\n        '051',\n        'KRW',\n        'CHF',\n        'EUR',\n        'GBP',\n    ];\n\n    protected parametersForm = new FormGroup({\n        currency: new FormControl<TuiCurrencyVariants>(null),\n    });\n\n    protected get currency(): string | null {\n        const {currency} = this.parametersForm.value;\n\n        return currency ? tuiGetCurrencySymbol(currency) : null;\n    }\n}\n"}}]);