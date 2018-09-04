/* import { NgModule } from '@angular/core';


import { RouterModule, Routes} from '@angular/router';
import { FormationComponent } from './formation.component';
import { FormationinformatiqueComponent } from './formationinformatique/formationinformatique.component';

const formationRoutes: Routes = [
{path : 'formation', component : FormationComponent, children : [
    {
        path :'formationinformatique',
        component: FormationinformatiqueComponent
    }
]}
]


@NgModule({
  imports: [ RouterModule.forChild(formationRoutes)],
  exports : [RouterModule]

})
export class formationRoutingModule {} */