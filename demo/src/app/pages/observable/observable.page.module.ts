import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ObservablePage } from './observable.page';

@NgModule({
  declarations: [ObservablePage],
  imports: [
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: 'iets', component: ObservablePage },
      { path: '', pathMatch: 'full', redirectTo: 'iets' },
    ]),
  ],
  providers: [],
})
export class ObservablePageModule {}
