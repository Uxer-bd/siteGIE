import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PiImpactComponent } from './composants/pi-impact/pi-impact.component';
import { PiComponent } from './composants/pi/pi.component';
import { PiSuccesComponent } from './composants/pi-succes/pi-succes.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PiPublicationComponent } from './composants/pi-publication/pi-publication.component';
import { StepComponent } from './composants/step/step.component';
import { StepImpactComponent } from './composants/step-impact/step-impact.component';
import { StepPublicationComponent } from './composants/step-publication/step-publication.component';
import { StepSuccesComponent } from './composants/step-succes/step-succes.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RealisationComponent } from './realisation/realisation.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PiImpactComponent,
    PiComponent,
    PiSuccesComponent,
    PiPublicationComponent,
    StepComponent,
    StepImpactComponent,
    StepPublicationComponent,
    StepSuccesComponent,
    HomeComponent,
    AboutComponent,
    RealisationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
