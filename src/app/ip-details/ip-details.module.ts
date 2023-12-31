import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IpDetailsInfoComponent } from './components/ip-details-info/ip-details-info.component';
import { LoaderComponent } from '../shared/components/loader/loader.component';


@NgModule({
  declarations: [
    IpDetailsInfoComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    IpDetailsInfoComponent
  ]
})
export class IpDetailsModule { }
