import { NgModule } from '@angular/core';
import { ScreenRoutingModule, routedComponents } from './screen-routing.module';
import { ScreenService } from './screen.service';
import { CommonModule } from '@angular/common';
import { PublicComponentModule } from '../public-component/public-component.module';

@NgModule({
  imports: [CommonModule, ScreenRoutingModule, PublicComponentModule],
  declarations: [...routedComponents],
  providers: [ScreenService],
})
export class ScreenModule {}
