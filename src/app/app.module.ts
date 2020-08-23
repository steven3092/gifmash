import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SectionComponent } from './landing/section/section.component';
import { LandingComponent } from './landing/landing.component';
import { ScoreComponent } from './score/score.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FadeInDirective } from './fade-in.directive';

@NgModule({
  declarations: [
    AppComponent,
    SectionComponent,
    LandingComponent,
    ScoreComponent,
    FadeInDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
