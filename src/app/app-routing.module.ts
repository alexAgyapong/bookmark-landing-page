import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookmarkLandingPageComponent } from './bookmark-landing-page/bookmark-landing-page.component';

const routes: Routes = [{ path: '', component: BookmarkLandingPageComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
