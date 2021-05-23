import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OpenCardsComponent } from './open-cards/open-cards.component';
import { OpenLandingPageComponent } from './open-landing-page/open-landing-page.component';

import { DemoMaterialModule } from "./material.module";

import { FormsModule } from '@angular/forms';

import { FlexLayoutModule } from '@angular/flex-layout';
import { OpenBusinessContentComponent } from './open-business-content/open-business-content.component';
import { ToolBarContentComponent } from './tool-bar-content/tool-bar-content.component';
@NgModule({
  declarations: [
    AppComponent,
    OpenCardsComponent,
    OpenLandingPageComponent,
    OpenBusinessContentComponent,
    ToolBarContentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    FlexLayoutModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
