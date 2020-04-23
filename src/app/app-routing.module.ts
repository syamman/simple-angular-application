import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./screen/screen.module').then((m) => m.ScreenModule),
  },
  { path: '', redirectTo: '/posts', pathMatch: 'full' },
  { path: '**', redirectTo: 'screen' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
