import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PueblosMagicosPage } from './pueblos-magicos.page';

const routes: Routes = [
  {
    path: '',
    component: PueblosMagicosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PueblosMagicosPageRoutingModule {}
