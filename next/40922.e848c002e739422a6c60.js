(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[40922],{40922:e=>{e.exports="import {Component} from '@angular/core';\nimport {FormControl} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiFileLike} from '@taiga-ui/kit';\nimport {Observable, of, Subject, timer} from 'rxjs';\nimport {finalize, map, switchMap} from 'rxjs/operators';\n\n@Component({\n    selector: 'tui-input-files-example-1',\n    templateUrl: './index.html',\n    changeDetection,\n    encapsulation,\n})\nexport class TuiInputFilesExample1 {\n    readonly control = new FormControl();\n\n    readonly rejectedFiles$ = new Subject<TuiFileLike | null>();\n    readonly loadingFiles$ = new Subject<TuiFileLike | null>();\n    readonly loadedFiles$ = this.control.valueChanges.pipe(\n        switchMap(file => (file ? this.makeRequest(file) : of(null))),\n    );\n\n    onReject(file: TuiFileLike | readonly TuiFileLike[]): void {\n        this.rejectedFiles$.next(file as TuiFileLike);\n    }\n\n    removeFile(): void {\n        this.control.setValue(null);\n    }\n\n    clearRejected(): void {\n        this.removeFile();\n        this.rejectedFiles$.next(null);\n    }\n\n    makeRequest(file: TuiFileLike): Observable<TuiFileLike | null> {\n        this.loadingFiles$.next(file);\n\n        return timer(1000).pipe(\n            map(() => {\n                if (Math.random() > 0.5) {\n                    return file;\n                }\n\n                this.rejectedFiles$.next(file);\n\n                return null;\n            }),\n            finalize(() => this.loadingFiles$.next(null)),\n        );\n    }\n}\n"}}]);