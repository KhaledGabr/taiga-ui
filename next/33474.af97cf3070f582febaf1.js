(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[33474],{33474:e=>{e.exports="import {Component, Inject} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TUI_IS_E2E} from '@taiga-ui/cdk';\nimport {of, timer} from 'rxjs';\nimport {repeat, takeWhile} from 'rxjs/operators';\n\n@Component({\n    selector: 'tui-progress-circle-example-6',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport class TuiProgressCircleExample6 {\n    readonly max = 100;\n    readonly value$ = this.isE2E\n        ? of(30)\n        : timer(300, 200).pipe(\n              takeWhile(value => value <= this.max),\n              repeat(),\n          );\n\n    constructor(@Inject(TUI_IS_E2E) private readonly isE2E: boolean) {}\n}\n"}}]);