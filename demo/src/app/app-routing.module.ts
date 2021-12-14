import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsPage } from './pages/forms/forms.page';

const routes: Routes = [
  { path: 'forms', component: FormsPage },
  { path: '', pathMatch: 'full', redirectTo: '/forms' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
