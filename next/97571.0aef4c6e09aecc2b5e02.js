(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[97571],{97571:n=>{n.exports='<div class="wrapper">\n    <tui-calendar\n        [value]="value"\n        [showAdjacent]="false"\n        [maxViewedMonth]="firstMonth"\n        [month]="firstMonth"\n        [(hoveredItem)]="hoveredItem"\n        (monthChange)="onMonthChangeFirst($event)"\n        (dayClick)="onDayClick($event)"\n    ></tui-calendar>\n    <tui-calendar\n        [value]="value"\n        [showAdjacent]="false"\n        [month]="middleMonth"\n        [minViewedMonth]="middleMonth"\n        [maxViewedMonth]="middleMonth"\n        [(hoveredItem)]="hoveredItem"\n        (monthChange)="onMonthChangeMiddle($event)"\n        (dayClick)="onDayClick($event)"\n    ></tui-calendar>\n    <tui-calendar\n        [value]="value"\n        [showAdjacent]="false"\n        [minViewedMonth]="lastMonth"\n        [month]="lastMonth"\n        [(hoveredItem)]="hoveredItem"\n        (monthChange)="onMonthChangeLast($event)"\n        (dayClick)="onDayClick($event)"\n    ></tui-calendar>\n</div>\n<div *ngIf="value">Chosen dates: {{ value }}</div>\n'}}]);