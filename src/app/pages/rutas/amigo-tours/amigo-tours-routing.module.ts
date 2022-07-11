import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AmigoToursPage } from './amigo-tours.page';

const routes: Routes = [
  {
    path: '',
    component: AmigoToursPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AmigoToursPageRoutingModule {}
