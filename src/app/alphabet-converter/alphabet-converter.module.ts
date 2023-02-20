import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlphabetConverterComponent } from './alphabet-converter/alphabet-converter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AlphabetConverterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    AlphabetConverterComponent
  ]
})
export class AlphabetConverterModule { }
