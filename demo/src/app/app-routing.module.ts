import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangeDetectPage } from './pages/change-detect/change-detect.page';
import { FormsPage } from './pages/forms/forms.page';
import { ObservablePage } from './pages/observable/observable.page';

const routes: Routes = [
  { path: 'forms', component: FormsPage },
  { path: 'observables', component: ObservablePage },
  { path: 'change-detection', component: ChangeDetectPage },
  { path: '', pathMatch: 'full', redirectTo: '/forms' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
