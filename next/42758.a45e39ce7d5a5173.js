(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[42758],{42758:e=>{e.exports="```ts\nexport class MyComponent {\n  constructor(@Inject(TuiPdfViewerService) private readonly pdfService: TuiPdfViewerService) {}\n\n  show(actions: PolymorpheusContent<TuiPdfViewerOptions>) {\n    this.pdfService\n      .open('/assets/taiga.pdf', {\n        label: 'Taiga UI',\n        actions,\n      })\n      .subscribe();\n  }\n}\n```\n"}}]);