import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';

// import {formationRoutingModule} from './formation/formation-routing.module';

import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { FormationComponent } from './formation/formation.component';
import {FormationinformatiqueComponent} from './formation/formationinformatique/formationinformatique.component';
import {FormationlinguistiqueComponent} from './formation/formationlinguistique/formationlinguistique.component';
import {FormationartistiqueComponent} from './formation/formationartistique/formationartistique.component';
import {FormationsportiveComponent} from './formation/formationsportive/formationsportive.component';
import { PanierComponent } from './panier/panier.component';
import {ClientService} from './Services/Client/client.service';
import { DetailsFormationComponent } from './details-formation/details-formation.component';
import { TypeFormationComponent } from './type-formation/type-formation.component';

const appRoutes: Routes = [
  {path: '' , redirectTo: '/Accueil', pathMatch: 'full'},
  {path: 'Accueil', component: AccueilComponent},
  {path: 'Contact', component: ContactComponent},
  {path: 'About', component: AboutComponent},
  {path: 'Formation', component: FormationComponent },
  {path : 'formationinformatique', component: FormationinformatiqueComponent},
  {path : 'formationlinguistique', component: FormationlinguistiqueComponent},
  {path : 'formationartistique', component: FormationartistiqueComponent},
  {path : 'formationsportive', component: FormationsportiveComponent},
  {path : 'Panier', component: PanierComponent},
  {path : 'DetailsFormation/:des', component: DetailsFormationComponent},
  {path : 'Formation/:cat', component: TypeFormationComponent}

];

@NgModule({
  declarations: [AppComponent, AccueilComponent, ContactComponent, AboutComponent,
     FormationComponent,
    FormationinformatiqueComponent,
    FormationlinguistiqueComponent,
    FormationartistiqueComponent,
    FormationsportiveComponent,
  PanierComponent,
  DetailsFormationComponent,
  TypeFormationComponent ],
  imports: [BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(appRoutes)],
  //formationRoutingModule,
  providers: [ClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
