import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiActiveZoneDirective, TuiMapperPipe} from '@taiga-ui/cdk';
import {
    TuiPrimitiveTextfieldModule,
    TuiSvgComponent,
    TuiTextfieldControllerModule,
    TuiTextfieldLegacyComponent,
} from '@taiga-ui/core';
import {TuiCalendarMonthComponent} from '@taiga-ui/kit';
import {TuiHostedDropdownModule} from '@taiga-ui/legacy/components/hosted-dropdown';

import {TuiInputMonthRangeComponent} from './input-month-range.component';
import {TuiInputMonthRangeDirective} from './input-month-range.directive';

@NgModule({
    imports: [
        CommonModule,
        TuiCalendarMonthComponent,
        TuiHostedDropdownModule,
        TuiPrimitiveTextfieldModule,
        TuiSvgComponent,
        TuiActiveZoneDirective,
        TuiMapperPipe,
        TuiTextfieldControllerModule,
    ],
    declarations: [TuiInputMonthRangeComponent, TuiInputMonthRangeDirective],
    exports: [
        TuiInputMonthRangeComponent,
        TuiInputMonthRangeDirective,
        TuiTextfieldLegacyComponent,
    ],
})
export class TuiInputMonthRangeModule {}
