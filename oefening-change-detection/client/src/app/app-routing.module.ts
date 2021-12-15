import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartPage } from './pages/start/start.page';
import { ChatPage } from './pages/chat/chat.page';
import { AdminPage } from './pages/admin/admin.page';

const routes: Routes = [
	{
		path: 'start',
		component: StartPage
	},
	{
		path: 'chat',
		component: ChatPage
	},
	{
		path: 'admin',
		component: AdminPage
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
