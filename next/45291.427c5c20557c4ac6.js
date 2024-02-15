(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[45291],{45291:e=>{e.exports="import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {TuiSafeHtml} from '@taiga-ui/cdk';\nimport {TUI_SANITIZER, tuiSvgSrcInterceptors} from '@taiga-ui/core';\nimport {NgDompurifySanitizer} from '@tinkoff/ng-dompurify';\n\n@Component({\n    selector: 'tui-icons-customization-example-1',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    providers: [\n        /**\n         * @note:\n         * required for rendering inline svg sources\n         */\n        {\n            provide: TUI_SANITIZER,\n            useClass: NgDompurifySanitizer,\n        },\n        /**\n         * @note:\n         * Be careful, component has its own injector which doesn't inherit providers from parent injector.\n         * https://angular.io/guide/providers#providing-services-in-modules-versus-components\n         *\n         * If you want to keep previous interceptors then best to keep it global,\n         * provide all necessary interceptors at the top level of your app (e.g. AppModule).\n         */\n        tuiSvgSrcInterceptors((src: TuiSafeHtml) =>\n            String(src).startsWith('icons8::')\n                ? `assets/icons/${String(src).replace('icons8::', '')}.svg`\n                : src,\n        ),\n    ],\n})\nexport class TuiIconsCustomizationExample1 {}\n"}}]);