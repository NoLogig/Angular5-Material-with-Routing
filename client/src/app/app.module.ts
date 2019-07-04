import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';


import { BusinessCardModule } from './utils/business-card/business-card.module';
import { CanvasModule } from './utils/canvas/initializer/initializer.module';
import { Gn8PlayerModule } from './pages/multimedia/gn8-player/gn8-player.module';
import { GoldenModule } from './pages/math/golden-ratio/golden-ratio.module';
import { HexagonsModule } from './pages/layouts/hexagons/hexagons.module';
import { MatSchematicLayoutsModule } from './pages/layouts/mat-schematics/layouts.module';
import { HomeModule } from './pages/home/home.module';
import { NodeGardenModule } from './pages/math/node-garden/node-garden.module';
import { ParallaxModule } from './pages/layouts/parallax/parallax.module';
import { SplitScreensModule } from './pages/layouts/split-screens/split-screens.module';
import { MatVerticalTabsModule } from './pages/layouts/mat-vertical-tabs/mat-vertical-tabs.module';

import { ActiveDirective } from './utils/directives/active.directive';
import { IsometricComponent } from './pages/math/games/isometric/isometric.component';
import { GamesModule } from './pages/math/games/games.module';
import { MapModule } from './pages/maps/maps.module';
import { FrequencyModule } from './pages/multimedia/frequency/frequency.module';
import { SoundWavesModule } from './pages/multimedia/sound-waves/sound-waves.module';
import { ParticleSpiratRayModule } from './pages/math/particle-spiral-ray/particle-spiral-ray.module';
import { DropNodesModule } from './pages/math/drop-nodes/drop-nodes.module';
import { ChartsDataModule } from './pages/charts/chatrs.module';
import { GithubViewerComponent } from './utils/github-viewer/github-viewer.component';
import { CssFlipCardComponent } from './pages/layouts/css/css-flip-card/css-flip-card.component';
import { CssCubeComponent } from './pages/layouts/css/css-cube/css-cube.component';
import { CssCarouselComponent } from './pages/layouts/css/css-carousel/css-carousel.component';
import { MatCardModule, MatFormFieldModule, MatInputModule,MatSliderModule,MatSlideToggleModule, } from '@angular/material';

@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [
    AppComponent,
    CssFlipCardComponent,
    ActiveDirective, 
    IsometricComponent, GithubViewerComponent, CssCubeComponent, CssCarouselComponent, 
  ],
  imports: [
    AppRoutingModule, BrowserModule, BrowserAnimationsModule,MatSliderModule,MatSlideToggleModule,

    FormsModule, MatCardModule, MatFormFieldModule, MatInputModule,
    BusinessCardModule, CanvasModule, Gn8PlayerModule, GoldenModule, HexagonsModule, MatSchematicLayoutsModule, 
    HomeModule, NodeGardenModule, ParallaxModule, SplitScreensModule, MatVerticalTabsModule, GamesModule, MapModule,
    FrequencyModule, SoundWavesModule, ParticleSpiratRayModule, DropNodesModule, ChartsDataModule,

    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [ ]
})
export class AppModule { }

