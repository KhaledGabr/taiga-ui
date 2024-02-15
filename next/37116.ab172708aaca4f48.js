(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[37116],{37116:e=>{e.exports="import {Component, Inject} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TUI_IS_E2E} from '@taiga-ui/cdk';\nimport {map, of, startWith, takeWhile, timer} from 'rxjs';\n\n@Component({\n    selector: 'tui-progress-circle-example-1',\n    templateUrl: './index.html',\n    encapsulation,\n    changeDetection,\n})\nexport class TuiProgressCircleExample1 {\n    readonly max = 100;\n    readonly value$ = this.isE2E\n        ? of(30)\n        : timer(300, 200).pipe(\n              map(i => i + 30),\n              startWith(30),\n              takeWhile(value => value <= this.max),\n          );\n\n    constructor(@Inject(TUI_IS_E2E) private readonly isE2E: boolean) {}\n}\n"}}]);