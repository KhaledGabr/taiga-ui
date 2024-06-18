import {inject, Injectable, NgZone} from '@angular/core';
import {ANIMATION_FRAME} from '@ng-web-apis/common';
import {EMPTY_CLIENT_RECT, tuiInjectElement, tuiZonefree} from '@taiga-ui/cdk';
import {TuiPositionAccessor} from '@taiga-ui/core/classes';
import type {TuiPoint} from '@taiga-ui/core/types';
import {finalize, map, Observable, startWith} from 'rxjs';

@Injectable()
export class TuiPositionService extends Observable<TuiPoint> {
    private readonly el = tuiInjectElement();
    private readonly accessor = inject(TuiPositionAccessor);

    constructor() {
        const animationFrame$ = inject(ANIMATION_FRAME);
        const zone = inject(NgZone);

        super(subscriber =>
            animationFrame$
                .pipe(
                    startWith(null),
                    map(() => this.el.getBoundingClientRect()),
                    map(rect => this.accessor.getPosition(rect)),
                    tuiZonefree(zone),
                    finalize(() => this.accessor.getPosition(EMPTY_CLIENT_RECT)),
                )
                .subscribe(subscriber),
        );
    }
}
