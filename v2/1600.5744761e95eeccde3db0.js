(window.webpackJsonp=window.webpackJsonp||[]).push([[1600],{rmJ5:function(n,t,e){"use strict";e.r(t),t.default='<p>\n    <button\n        tuiButton\n        (click)="refresh()"\n    >\n        Refresh\n    </button>\n</p>\n<div *ngFor="let item of items$ | async; else: loading; empty: blank">\n    {{ item }}\n</div>\n<ng-template #loading>\n    <tui-loader></tui-loader>\n</ng-template>\n<ng-template #blank>Data is not available</ng-template>\n'}}]);