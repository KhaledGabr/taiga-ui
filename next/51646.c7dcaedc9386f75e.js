(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[51646],{51646:n=>{n.exports='<tui-avatar-stack\n    *ngFor="let size of sizes; let odd = odd"\n    class="tui-space_vertical-4"\n    [direction]="odd ? \'left\' : \'right\'"\n>\n    <tui-avatar\n        *ngFor="let name of names"\n        [round]="odd"\n        [size]="size"\n        [src]="name | tuiInitials"\n        [style.background]="name | tuiAutoColor"\n    ></tui-avatar>\n    <tui-avatar\n        size="l"\n        [round]="odd"\n        [size]="size"\n    >\n        99+\n    </tui-avatar>\n</tui-avatar-stack>\n'}}]);