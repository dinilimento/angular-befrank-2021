import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CarViewerComponent } from "./car-viewer/car-viewer.component";

@NgModule({
    declarations: [CarViewerComponent], // wat in je HTML: components directives pipes
    imports: [FormsModule, CommonModule], // modules
    providers: [], // globale instellingen & DI  Date
    exports: [CarViewerComponent]
})
export class ComponentsModule {
    // RouterModule .forRoot() .forChild()
    // third-party modules
    // ToastrModule.forRoot()

    // static forRoot(routes: Route[]) {
    // }
}
