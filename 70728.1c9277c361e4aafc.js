(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[70728],{70728:n=>{n.exports="import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiDay, TuiDayRange} from '@taiga-ui/cdk';\nimport {TUI_CALENDAR_DATE_STREAM} from '@taiga-ui/kit';\nimport {of} from 'rxjs';\n\nexport const calendarStream$ = of(\n    new TuiDayRange(new TuiDay(2019, 2, 11), new TuiDay(2019, 2, 14)),\n);\n\n@Component({\n    selector: 'tui-calendar-range-example-2',\n    templateUrl: './index.html',\n    encapsulation,\n    changeDetection,\n    providers: [\n        {\n            provide: TUI_CALENDAR_DATE_STREAM,\n            useValue: calendarStream$,\n        },\n    ],\n})\nexport class TuiCalendarRangeExample2 {}\n"}}]);