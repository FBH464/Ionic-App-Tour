import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PueblosMagicosPageRoutingModule } from './pueblos-magicos-routing.module';

import { PueblosMagicosPage } from './pueblos-magicos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PueblosMagicosPageRoutingModule
  ],
  declarations: [PueblosMagicosPage]
})
export class PueblosMagicosPageModule {}
