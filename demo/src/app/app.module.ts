import { HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsPage } from './pages/forms/forms.page';
import { ChangeDetectPage } from './pages/change-detect/change-detect.page';
import { MijnPurePipe } from './pipes/mijn-pure.pipe';
import { MijnImpurePipe } from './pipes/mijn-impure.pipe';
import { ComponentsModule } from './components/components.module';
import { TestPage } from './pages/test/test.page';

@NgModule({
  declarations: [
    AppComponent,
    FormsPage,
    ChangeDetectPage,
    MijnPurePipe,
    MijnImpurePipe,
    TestPage
  ],
  imports: [
    BrowserModule,
    FormsModule, // template-driven
    ReactiveFormsModule, // model-driven
    AppRoutingModule,
    HttpClientModule,
    ComponentsModule
  ],
  providers: [
    // { provide: ErrorHandler, useClass: MijnErrorHandler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
