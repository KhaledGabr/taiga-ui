(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[87054],{87054:n=>{n.exports="import {Injectable} from '@angular/core';\nimport {tuiLegacyEditorConverter} from '@taiga-ui/addon-editor';\nimport {AbstractTuiValueTransformer} from '@taiga-ui/cdk';\n\n@Injectable()\nexport class ExampleEditorConvertLegacyHtmlTransformer extends AbstractTuiValueTransformer<string> {\n    fromControlValue(controlValue: string): string {\n        return tuiLegacyEditorConverter(controlValue);\n    }\n\n    toControlValue(componentValue: string): string {\n        return componentValue;\n    }\n}\n"}}]);