import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangeDetectPage } from './pages/change-detect/change-detect.page';
import { FormsPage } from './pages/forms/forms.page';
import { ObservablePage } from './pages/observable/observable.page';
import { TestPage } from './pages/test/test.page';

const routes: Routes = [
  { path: 'forms', component: FormsPage },
  { path: 'observables', loadChildren: () => import('./pages/observable/observable.page.module').then(x => x.ObservablePageModule) },
  { path: 'change-detection', component: ChangeDetectPage },
  { path: 'test', component: TestPage },
  { path: '', pathMatch: 'full', redirectTo: '/forms' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
