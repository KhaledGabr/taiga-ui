(window.webpackJsonp=window.webpackJsonp||[]).push([[1698],{ckTv:function(t,e,l){"use strict";l.r(e),e.default='<table class="tui-table table">\n    <thead>\n        <tr>\n            <th class="tui-table__th cell_name">Name</th>\n            <th class="tui-table__th cell_sum">Sum, $</th>\n        </tr>\n        <tr *ngFor="let item of items | tuiFilter: matcher:300">\n            <td class="tui-table__td cell_name">{{ item.name }}</td>\n            <td class="tui-table__td cell_sum">{{ item.price }}</td>\n        </tr>\n    </thead>\n</table>\n'}}]);