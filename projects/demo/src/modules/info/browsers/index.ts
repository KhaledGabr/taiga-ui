import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TuiDemo} from '@demo/utils';
import {TuiNotification} from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [TuiDemo, TuiNotification],
    templateUrl: './index.html',
    styles: ['td {width: 18.75rem}'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class Page {
    protected readonly desktopBrowsers = [
        {name: 'Google Chrome', version: '88+'},
        {name: 'Mozilla Firefox', version: '120+'},
        {name: 'Safari', version: '13.1+'},
        {name: 'Opera', version: '74+'},
        {name: 'Edge', version: '88+'},
        {name: 'Yandex Browser', version: '21.2+'},
        {name: 'Microsoft Internet Explorer', version: null},
    ] as const;

    protected readonly mobileBrowsers = [
        {name: 'Google Chrome', version: '88+'},
        {name: 'Mozilla Firefox', version: '120+'},
        {name: 'Safari', version: '13.4+'},
        {name: 'Opera', version: '63+'},
        {name: 'Samsung Mobile', version: '15+'},
        {name: 'Yandex Browser', version: '21.2+'},
    ];
}
