(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[45789],{45789:t=>{t.exports='<ng-container *ngFor="let status of statuses; let last = last">\n    <tui-notification\n        *ngFor="let size of sizes"\n        [size]="size"\n        [status]="status"\n    >\n        {{ status | titlecase }} label ({{ size | uppercase }})\n    </tui-notification>\n\n    <hr />\n\n    <tui-notification\n        *ngFor="let size of sizes"\n        tuiNotification\n        [size]="size"\n        [status]="status"\n    >\n        {{ status | titlecase }} label ({{ size | uppercase }})\n        <tui-svg\n            src="tuiIconHelpCircle"\n            tuiHintAppearance="onDark"\n            tuiHintDirection="right"\n            [tuiHint]="tooltip"\n        ></tui-svg>\n        <ng-template #tooltip>Hello world</ng-template>\n    </tui-notification>\n\n    <hr />\n\n    <button\n        *ngFor="let size of sizes"\n        tuiNotification\n        [size]="size"\n        [status]="status"\n    >\n        {{ status | titlecase }} label ({{ size | uppercase }})\n    </button>\n\n    <hr *ngIf="!last" />\n</ng-container>\n'}}]);