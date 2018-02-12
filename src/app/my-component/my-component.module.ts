// Angular Imports
import { NgModule } from '@angular/core';

// This Module's Components
import { MyComponentComponent } from './my-component.component';

@NgModule({
    imports: [

    ],
    declarations: [
        MyComponentComponent,
    ],
    exports: [
        MyComponentComponent,
    ]
})
export class MyComponentModule {

}
