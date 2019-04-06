import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LocalStorageService } from './services/local-storage.service';
import { MockService } from './services/mock.service';
import { ComponentsModule } from './components/components.module';
import { FormatterService } from './services/formatter.service';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    FormsModule,
    ComponentsModule
  ],
  exports: [
    ComponentsModule
  ],
  providers: [
    LocalStorageService,
    MockService,
    FormatterService
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class SharedModule {}
