import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";


@NgModule({
    imports: [
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [],
    exports: [
        FormsModule,
        ReactiveFormsModule
    ],
    providers: []
})

export class SharedModule{
    constructor(){}
}