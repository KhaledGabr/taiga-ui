(window.webpackJsonp=window.webpackJsonp||[]).push([[1806],{Fk3y:function(n,t,o){"use strict";o.r(t),t.default='<ng-container *tuiLet="count$ | async as count">\n    <div *ngIf="count | tuiIsPresent; else loading">\n        count is\n        <code>{{ count | json }}</code>\n    </div>\n\n    <ng-template #loading>\n        <div>\n            count is\n            <code>{{ count | json }}</code>\n            while it\'s loading\n        </div>\n    </ng-template>\n</ng-container>\n\n<button\n    tuiButton\n    size="m"\n    class="tui-space_top-4"\n    (click)="loadCount()"\n>\n    Load count\n</button>\n'}}]);