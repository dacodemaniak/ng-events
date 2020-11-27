import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Add some Angular Material Modules
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [
    MatFormFieldModule,
    MatInputModule
  ]
})
export class MaterialModule { }
