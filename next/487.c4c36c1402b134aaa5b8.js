(window.webpackJsonp=window.webpackJsonp||[]).push([[487],{TPzS:function(n,i,t){"use strict";t.r(i),i.default='<tui-carousel\n    [duration]="4000"\n    [(index)]="index"\n>\n    <ng-container *ngFor="let item of items">\n        <tui-island *tuiItem>\n            <h2 class="tui-island__title">{{ item }}</h2>\n            <a\n                tuiButton\n                href="https://en.wikipedia.org/wiki/{{ item }}"\n            >\n                Wiki\n            </a>\n        </tui-island>\n    </ng-container>\n</tui-carousel>\n<tui-pagination\n    size="s"\n    class="pagination"\n    [length]="items.length"\n    [(index)]="index"\n></tui-pagination>\n'}}]);