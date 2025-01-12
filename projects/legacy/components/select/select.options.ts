import type {Provider} from '@angular/core';
import {tuiCreateToken, tuiProvideOptions} from '@taiga-ui/cdk/utils/miscellaneous';
import type {TuiValueContentContext} from '@taiga-ui/core/types';
import type {PolymorpheusContent} from '@taiga-ui/polymorpheus';

export interface TuiSelectOptions<T> {
    readonly valueContent: PolymorpheusContent<TuiValueContentContext<T>>;
}

export const TUI_SELECT_DEFAULT_OPTIONS: TuiSelectOptions<unknown> = {
    valueContent: '',
};

/**
 * Default parameters for Select component
 */
export const TUI_SELECT_OPTIONS = tuiCreateToken(TUI_SELECT_DEFAULT_OPTIONS);

export function tuiSelectOptionsProvider<T>(
    options: Partial<TuiSelectOptions<T>>,
): Provider {
    return tuiProvideOptions(TUI_SELECT_OPTIONS, options, TUI_SELECT_DEFAULT_OPTIONS);
}
