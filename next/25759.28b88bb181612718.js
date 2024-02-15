(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[25759],{25759:e=>{e.exports="import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';\nimport {DomSanitizer} from '@angular/platform-browser';\nimport {TUI_IS_MOBILE} from '@taiga-ui/cdk';\nimport {map, timer} from 'rxjs';\n\n@Component({\n    selector: 'tui-pdf-content',\n    templateUrl: './pdf-content.component.html',\n    styleUrls: ['./pdf-content.component.less'],\n    changeDetection: ChangeDetectionStrategy.OnPush,\n})\nexport class PdfContentComponent {\n    private readonly pdf = 'assets/media/taiga.pdf';\n\n    /**\n     * @description:\n     * Embedded PDFs in mobile doesn't work,\n     * so you can use third-party services\n     * or your own service to render PDF in mobile iframe\n     */\n    readonly src$ = timer(3000).pipe(\n        map(() =>\n            this.sanitizer.bypassSecurityTrustResourceUrl(\n                this.isMobile\n                    ? `https://drive.google.com/viewerng/viewer?embedded=true&url=https://taiga-ui.dev/${this.pdf}`\n                    : this.pdf,\n            ),\n        ),\n    );\n\n    constructor(\n        @Inject(TUI_IS_MOBILE) private readonly isMobile: boolean,\n        @Inject(DomSanitizer) private readonly sanitizer: DomSanitizer,\n    ) {}\n}\n"}}]);