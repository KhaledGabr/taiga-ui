import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {DemoRoute} from '@demo/routes';
import {TuiDemo} from '@demo/utils';
import type {TuiSizeL, TuiSizeS} from '@taiga-ui/core';
import {TuiButton, TuiNotification} from '@taiga-ui/core';
import {TuiIslandDirective} from '@taiga-ui/legacy';

import {StylesInfo} from '../../app/styles-info';

@Component({
    standalone: true,
    imports: [TuiDemo, StylesInfo, TuiIslandDirective, TuiButton, TuiNotification],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
})
export default class Page {
    protected hoverable = false;

    protected readonly textAlignVariants = ['left', 'right', 'center'] as const;

    protected textAlign: 'center' | 'left' | 'right' = this.textAlignVariants[0];

    protected readonly sizeVariants: ReadonlyArray<TuiSizeL | TuiSizeS> = ['s', 'm', 'l'];

    protected size: TuiSizeL | TuiSizeS = this.sizeVariants[0];
    protected readonly routes = DemoRoute;
}
