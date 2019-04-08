import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChartComponent } from './chart/chart.component';
import { ItemListComponent } from './item-list/item-list.component';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';

@NgModule({
  declarations: [
      HeaderComponent,
      MenuComponent,
      ItemListComponent,
      ChartComponent,
      ProgressBarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    HeaderComponent,
    MenuComponent,
    ItemListComponent,
    ChartComponent,
    ProgressBarComponent
  ],
  providers: [
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ComponentsModule {}
