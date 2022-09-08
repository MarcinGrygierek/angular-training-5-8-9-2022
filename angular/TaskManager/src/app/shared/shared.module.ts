import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimePipe } from './time.pipe';

@NgModule({
  declarations: [
    TimePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TimePipe
  ]
})
// ten moduł zawiera elementy współdzielone pomiędzy innymi modułami
// grupuje je w systemie plików oraz w strukturze samego projektu
// jeżeli chcemy gdzieś wykorzystać TimePipe - to należy do docelowego
// modułu zaimportować SharedModule
export class SharedModule { }
