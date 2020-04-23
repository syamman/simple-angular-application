import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PostCardComponent } from './posts-card/posts-card.component';
import { RouterModule } from '@angular/router';

const components = [NavbarComponent, FooterComponent, PostCardComponent];

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [...components],
  exports: [...components],
})
export class PublicComponentModule {}
