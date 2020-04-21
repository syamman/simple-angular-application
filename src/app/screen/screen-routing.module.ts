import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { ScreenComponent } from './screen.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PostsDetailComponent } from './posts-detail/posts-detail.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [{
  path: '',
  component: ScreenComponent,
  children: [
    {
      path: '',
      component: LandingPageComponent,
    },
    {
      path: ':id',
      component: PostsDetailComponent,
    },
    {
      path: '**',
      component: NotFoundComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScreenRoutingModule {
}

export const routedComponents = [
  ScreenComponent,
  LandingPageComponent,
  PostsDetailComponent,
  NotFoundComponent
];
