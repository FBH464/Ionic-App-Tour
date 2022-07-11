import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AmigoToursPageRoutingModule } from './amigo-tours-routing.module';

import { AmigoToursPage } from './amigo-tours.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AmigoToursPageRoutingModule
  ],
  declarations: [AmigoToursPage]
})
export class AmigoToursPageModule {}
