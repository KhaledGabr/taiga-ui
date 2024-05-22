(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[12038],{12038:e=>{e.exports="import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiDay, TuiDayRange} from '@taiga-ui/cdk';\n\n@Component({\n    selector: 'tui-data-list-example-5',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport class TuiDataListExample5 {\n    protected dropdownOpen = false;\n    protected dateValue: TuiDay = new TuiDay(2020, 0, 1);\n    protected euro = 87; // 1 euro = 87 rub\n    protected dollar = 75; // 1 dollar = 75 rub\n\n    protected readonly testForm = new FormGroup({\n        testValue: new FormControl('mail@mail.ru'),\n    });\n\n    protected readonly moneyForm = new FormGroup({\n        moneyValue: new FormControl(1000),\n    });\n\n    protected rangeValue = new TuiDayRange(\n        TuiDay.currentLocal(),\n        TuiDay.currentLocal().append({year: 1}),\n    );\n\n    protected get testValue(): string | null | undefined {\n        return this.testForm.get('testValue')?.value;\n    }\n\n    protected get moneyValue(): number {\n        return Number(this.moneyForm.get('moneyValue')?.value) || 0;\n    }\n\n    protected onDayClick(day: TuiDay): void {\n        this.dateValue = day;\n    }\n}\n"}}]);