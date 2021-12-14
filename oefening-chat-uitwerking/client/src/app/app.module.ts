import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StartPage } from './pages/start/start.page';
import { ChatPage } from './pages/chat/chat.page';
import { FocusOnDirective } from './directives/focus-on.directive';
import { AdminPage } from './pages/admin/admin.page';
import { MinichatComponent } from './components/minichat/minichat.component';

@NgModule({
	declarations: [
		AppComponent,
		FocusOnDirective,
		MinichatComponent,
		StartPage,
		ChatPage,
		AdminPage
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		ReactiveFormsModule,
		AppRoutingModule
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
