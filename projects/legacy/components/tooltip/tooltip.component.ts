import {
    ChangeDetectionStrategy,
    Component,
    HostBinding,
    HostListener,
    inject,
    Input,
    ViewChild,
} from '@angular/core';
import {TUI_IS_MOBILE} from '@taiga-ui/cdk/tokens';
import {TuiHintHover, TuiHintOptionsDirective} from '@taiga-ui/core/directives/hint';

@Component({
    selector: 'tui-tooltip',
    templateUrl: './tooltip.template.html',
    styleUrls: ['./tooltip.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    inputs: ['content', 'direction', 'appearance', 'showDelay', 'hideDelay'],
})
export class TuiTooltipComponent<C = any> extends TuiHintOptionsDirective {
    private readonly isMobile = inject(TUI_IS_MOBILE);

    @ViewChild(TuiHintHover)
    protected readonly driver$?: TuiHintHover;

    @Input()
    public describeId = '';

    @Input()
    public context?: C;

    @HostBinding('attr.data-appearance')
    protected get computedAppearance(): string {
        return this.appearance || '';
    }

    @HostListener('mousedown', ['$event'])
    protected stopOnMobile(event: MouseEvent): void {
        if (this.isMobile) {
            event.preventDefault();
            event.stopPropagation();
        }

        this.driver$?.toggle();
    }
}
