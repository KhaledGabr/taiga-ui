(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[55757],{55757:n=>{n.exports='<div class="header">\n    <button\n        size="xs"\n        tuiButton\n        type="button"\n        class="tui-space_right-2"\n        (click)="showSkeleton()"\n    >\n        Show/hide skeleton\n    </button>\n    <button\n        size="xs"\n        tuiButton\n        type="button"\n        class="tui-space_right-2"\n        (click)="toggleLight()"\n    >\n        Light mode\n    </button>\n\n    <div class="skeleton-options b-form">\n        --tui-skeleton-radius:\n\n        <tui-input\n            tuiTextfieldSize="s"\n            class="radius-option"\n            [(ngModel)]="radius"\n        ></tui-input>\n    </div>\n</div>\n\n<div\n    class="container"\n    [class.container_dark]="lightMode"\n    [style.--tui-skeleton-radius.px]="radius"\n    [tuiMode]="lightMode ? \'onDark\' : null"\n>\n    <div class="tui-row">\n        <div class="tui-col_md-4 tui-col_stretch">\n            <tui-island\n                size="l"\n                class="island"\n                [transparent]="true"\n            >\n                <div class="tui-island__content">\n                    <div class="tui-island__figure">\n                        <form [formGroup]="testForm">\n                            <tui-toggle\n                                formControlName="testValue"\n                                size="l"\n                                [class.tui-skeleton_light]="lightMode"\n                                [class.tui-skeleton]="skeletonVisible"\n                            ></tui-toggle>\n                        </form>\n                    </div>\n                    <div class="island-content">\n                        <p\n                            class="tui-island__category"\n                            [class.tui-skeleton_light]="lightMode"\n                            [class.tui-skeleton]="skeletonVisible"\n                        >\n                            A category\n                        </p>\n                        <h3\n                            class="tui-island__title"\n                            [class.tui-skeleton_light]="lightMode"\n                            [class.tui-skeleton_short]="skeletonVisible"\n                            [class.tui-skeleton_text]="skeletonVisible"\n                            [class.tui-skeleton]="skeletonVisible"\n                        >\n                            {{ skeletonVisible ? \'\' : \'Title\' }}\n                        </h3>\n                        <p\n                            class="tui-island__paragraph"\n                            [class.tui-skeleton_light]="lightMode"\n                            [class.tui-skeleton_text]="skeletonVisible"\n                            [class.tui-skeleton]="skeletonVisible"\n                        >\n                            {{ skeletonVisible ? \'\' : placeholder }}\n                        </p>\n                        <p\n                            class="tui-island__paragraph tui-island__paragraph_link"\n                            [class.tui-skeleton_light]="lightMode"\n                            [class.tui-skeleton]="skeletonVisible"\n                        >\n                            <a\n                                href="https://github.com/taiga-family/taiga-ui"\n                                rel="noreferrer"\n                                target="_blank"\n                                tuiLink\n                            >\n                                Link\n                            </a>\n                        </p>\n                    </div>\n                </div>\n            </tui-island>\n        </div>\n        <div class="tui-col_md-4 tui-col_stretch">\n            <a\n                href="https://ng-web-apis.github.io/dist/assets/images/web-api.svg"\n                rel="noreferrer"\n                size="l"\n                target="_blank"\n                tuiIsland\n                class="island"\n                [hoverable]="true"\n                [transparent]="true"\n            >\n                <div class="tui-island__content">\n                    <figure class="tui-island__figure">\n                        <div\n                            class="some-figure"\n                            [class.tui-skeleton_light]="lightMode"\n                            [class.tui-skeleton_rounded]="skeletonVisible"\n                            [class.tui-skeleton]="skeletonVisible"\n                        ></div>\n                    </figure>\n                    <div class="island-content">\n                        <h3\n                            class="tui-island__title"\n                            [class.tui-skeleton_light]="lightMode"\n                            [class.tui-skeleton_short]="skeletonVisible"\n                            [class.tui-skeleton_text]="skeletonVisible"\n                            [class.tui-skeleton]="skeletonVisible"\n                        >\n                            {{ skeletonVisible ? \'\' : \'Another title\' }}\n                        </h3>\n                        <p\n                            class="tui-island__paragraph"\n                            [class.tui-skeleton_light]="lightMode"\n                            [class.tui-skeleton_text]="skeletonVisible"\n                            [class.tui-skeleton]="skeletonVisible"\n                        >\n                            {{ skeletonVisible ? \'\' : \'And some new text again\' }}\n                        </p>\n                    </div>\n                </div>\n            </a>\n        </div>\n        <div class="tui-col_md-4 tui-col_stretch">\n            <tui-island\n                size="l"\n                textAlign="center"\n                class="island"\n                [transparent]="true"\n            >\n                <div class="tui-island__content">\n                    <figure class="tui-island__figure">\n                        <div\n                            class="some-figure"\n                            [class.tui-skeleton_light]="lightMode"\n                            [class.tui-skeleton_rounded]="skeletonVisible"\n                            [class.tui-skeleton]="skeletonVisible"\n                        ></div>\n                    </figure>\n                    <div class="island-content">\n                        <h3\n                            class="tui-island__title"\n                            [class.tui-skeleton_center]="skeletonVisible"\n                            [class.tui-skeleton_light]="lightMode"\n                            [class.tui-skeleton_text]="skeletonVisible"\n                            [class.tui-skeleton]="skeletonVisible"\n                        >\n                            {{ skeletonVisible ? \'\' : \'One more title\' }}\n                        </h3>\n                        <p\n                            class="tui-island__paragraph"\n                            [class.tui-skeleton_light]="lightMode"\n                            [class.tui-skeleton_text]="skeletonVisible"\n                            [class.tui-skeleton]="skeletonVisible"\n                        >\n                            {{ skeletonVisible ? \'\' : \'All right, I get it\' }}\n                        </p>\n                    </div>\n                </div>\n            </tui-island>\n        </div>\n    </div>\n</div>\n'}}]);