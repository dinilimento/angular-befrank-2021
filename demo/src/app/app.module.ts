import { HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsPage } from './pages/forms/forms.page';
import { ObservablePage } from './pages/observable/observable.page';
import { ChangeDetectPage } from './pages/change-detect/change-detect.page';
import { CarViewerComponent } from './components/car-viewer/car-viewer.component';
import { MijnPurePipe } from './pipes/mijn-pure.pipe';
import { MijnImpurePipe } from './pipes/mijn-impure.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FormsPage,
    ObservablePage,
    ChangeDetectPage,
    CarViewerComponent,
    MijnPurePipe,
    MijnImpurePipe
  ],
  imports: [
    BrowserModule,
    FormsModule, // template-driven
    ReactiveFormsModule, // model-driven
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    // { provide: ErrorHandler, useClass: MijnErrorHandler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
