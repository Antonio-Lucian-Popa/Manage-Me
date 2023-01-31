import { PostComponent } from './../post/post.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDividerModule} from '@angular/material/divider';
import { IonicModule } from '@ionic/angular';


const COMPONENTS: any[] = [
  PostComponent
];

const NB_MODULES: any[] = [
  MatExpansionModule,
  MatDividerModule,
  IonicModule,
];


@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    ...NB_MODULES
  ],
  exports: [...COMPONENTS, ...NB_MODULES]
})
export class SharedModule { }
