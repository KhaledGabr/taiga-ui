(window.webpackJsonp=window.webpackJsonp||[]).push([[681],{"FyI+":function(n,t,e){"use strict";e.r(t),t.default='<tui-hosted-dropdown\n    [content]="dropdown"\n    [(open)]="open"\n>\n    <div tuiGroup>\n        <button\n            tuiButton\n            type="button"\n            size="l"\n            class="tui-group__auto-width-item"\n        >\n            Button\n        </button>\n        <button\n            tuiIconButton\n            type="button"\n            tuiHostedDropdownHost\n            title="Menu"\n            size="l"\n            class="tui-group__auto-width-item"\n            [iconRight]="icon"\n        ></button>\n        <ng-template #icon>\n            <tui-svg\n                src="tuiIconChevronDown"\n                class="icon"\n                [class.icon_rotated]="open"\n            ></tui-svg>\n        </ng-template>\n    </div>\n</tui-hosted-dropdown>\n<ng-template\n    #dropdown\n    let-activeZone\n>\n    <p class="margin">\n        There is\n        <code>let-activeZone</code>\n        in dropdown template context to work with nested dropdowns\n    </p>\n    <tui-select\n        class="margin"\n        [tuiActiveZoneParent]="activeZone"\n        [(ngModel)]="selected"\n    >\n        Nested Select\n        <tui-data-list-wrapper\n            *tuiDataList\n            [items]="selectItems"\n        ></tui-data-list-wrapper>\n    </tui-select>\n    <tui-data-list>\n        <button\n            *ngFor="let item of items"\n            tuiOption\n            (click)="onClick()"\n        >\n            {{ item }}\n        </button>\n    </tui-data-list>\n</ng-template>\n'}}]);