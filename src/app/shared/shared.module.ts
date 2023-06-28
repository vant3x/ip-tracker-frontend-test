import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './components/layout/layout.component';
import { HeroHeaderComponent } from './components/hero-header/hero-header.component';
import { SearchBarModule } from '../search-bar/search-bar.module';
import { IpDetailsModule } from '../ip-details/ip-details.module';
import { MapDetailModule } from '../map-detail/map-detail.module';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  declarations: [
    LoaderComponent,
    LayoutComponent,
    HeroHeaderComponent,
  ],
  exports: [
    LoaderComponent,
    LayoutComponent,
  ],
  imports: [
    CommonModule,
    SearchBarModule,
    IpDetailsModule,
    MapDetailModule
  ]
})
export class SharedModule { }
