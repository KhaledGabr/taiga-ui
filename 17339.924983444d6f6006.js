(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[17339],{17339:n=>{n.exports='<div\n    tuiDropdownLimitWidth="fixed"\n    tuiGroup\n    [tuiDropdown]="dropdown"\n    [(tuiDropdownOpen)]="open"\n>\n    <button\n        size="l"\n        tuiButton\n        type="button"\n        class="tui-group__auto-width-item"\n    >\n        Button that does not open dropdown\n    </button>\n    <button\n        #tuiDropdownHost\n        size="l"\n        tuiChevron\n        tuiIconButton\n        type="button"\n        class="tui-group__auto-width-item"\n    >\n        Menu\n    </button>\n</div>\n<ng-template\n    #dropdown\n    let-activeZone\n>\n    <p class="margin">\n        There is\n        <code>let-activeZone</code>\n        in dropdown template context to work with nested dropdowns\n    </p>\n    <tui-select\n        class="margin"\n        [tuiActiveZoneParent]="activeZone"\n        [(ngModel)]="selected"\n    >\n        Nested Select\n        <tui-data-list-wrapper\n            *tuiDataList\n            [items]="selectItems"\n        />\n    </tui-select>\n    <tui-data-list>\n        <button\n            *ngFor="let item of items"\n            tuiOption\n            (click)="onClick()"\n        >\n            {{ item }}\n        </button>\n    </tui-data-list>\n</ng-template>\n'}}]);