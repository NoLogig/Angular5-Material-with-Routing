import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IsometricComponent } from './pages/math/games/isometric/isometric.component';
import { GithubViewerComponent } from './utils/github-viewer/github-viewer.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'isometrics', component: IsometricComponent, pathMatch: 'full' },
  { path: 'github', component: GithubViewerComponent, pathMatch: 'full' }
  // { path: 'choice', children: [], component: SplitScreenSkewedComponent },
  // { path: 'img/:id', component: ImageManipulationComponent,
  //   children: [
  //     { path: '', redirectTo: 'overview', pathMatch: 'full' },
  //     { path: 'overview', component: ImgOverviewComponent },
  //     { path: 'specs', component: ImgSpecsComponent }
  //   ]
  // },
  // { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
