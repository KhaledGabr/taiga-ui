(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[64576],{64576:t=>{t.exports='<form [formGroup]="testForm">\n    <tui-input-date\n        formControlName="testValue"\n        tuiTextfieldSize="s"\n    >\n        Choose a date\n    </tui-input-date>\n    <tui-input-date\n        formControlName="testValue"\n        tuiTextfieldSize="m"\n        class="tui-space_vertical-4"\n        [tuiTextfieldLabelOutside]="true"\n    >\n        Choose a date\n    </tui-input-date>\n    <tui-input-date\n        formControlName="testValue"\n        tuiTextfieldSize="l"\n    >\n        Choose a date\n    </tui-input-date>\n    <p>\n        <tui-hosted-dropdown [content]="dropdown">\n            <button tuiButton>In dropdown</button>\n            <ng-template\n                #dropdown\n                let-activeZone\n            >\n                <tui-input-date\n                    formControlName="testValue"\n                    tuiTextfieldSize="l"\n                    [tuiActiveZoneParent]="activeZone"\n                >\n                    Choose a date\n                </tui-input-date>\n            </ng-template>\n        </tui-hosted-dropdown>\n    </p>\n</form>\n'}}]);