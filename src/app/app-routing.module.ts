import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { PiImpactComponent } from './composants/pi-impact/pi-impact.component';
import { PiPublicationComponent } from './composants/pi-publication/pi-publication.component';
import { PiSuccesComponent } from './composants/pi-succes/pi-succes.component';
import { StepImpactComponent } from './composants/step-impact/step-impact.component';
import { PiComponent } from './composants/pi/pi.component';
import { StepComponent } from './composants/step/step.component';
import { StepPublicationComponent } from './composants/step-publication/step-publication.component';
import { StepSuccesComponent } from './composants/step-succes/step-succes.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RealisationComponent } from './realisation/realisation.component';

const routes: Routes = [
  { path: 'navbar', component: NavbarComponent },
  
  {path:"home", component:HomeComponent},

  { path: 'pi-impact', component: PiImpactComponent },
  {path:"about", component:AboutComponent},
  {path:"realisation", component:RealisationComponent},
  { path: 'pi-publication', component: PiPublicationComponent },
  { path: 'pi-succes', component: PiSuccesComponent },
  { path: 'step-impact', component: StepImpactComponent },
  { path: 'pi', component: PiComponent }, // Composant pour la page PI
  { path: 'step', component: StepComponent },
  { path: 'step-publication', component: StepPublicationComponent },
  { path: 'step-succes', component: StepSuccesComponent }
  // Autres routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
