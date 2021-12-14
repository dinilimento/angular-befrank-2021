import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsPage } from './pages/forms/forms.page';
import { ObservablePage } from './pages/observable/observable.page';

const routes: Routes = [
  { path: 'forms', component: FormsPage },
  { path: 'observables', component: ObservablePage },
  { path: '', pathMatch: 'full', redirectTo: '/forms' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
