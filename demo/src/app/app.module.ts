import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsPage } from './pages/forms/forms.page';

@NgModule({
  declarations: [
    AppComponent,
    FormsPage
  ],
  imports: [
    BrowserModule,
    FormsModule, // template-driven
    ReactiveFormsModule, // model-driven
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
