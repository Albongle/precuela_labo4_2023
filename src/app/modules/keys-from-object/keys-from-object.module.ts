import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetKeysFromObjectPipe } from './pipes/obj-keys-to-array.pipe';

@NgModule({
  declarations: [GetKeysFromObjectPipe],
  imports: [CommonModule],
  exports: [GetKeysFromObjectPipe],
})
export class GetKeysFromObject {}
