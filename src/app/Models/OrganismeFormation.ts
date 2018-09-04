import {DetailsFormation} from './DetailsFormation';
import {Adresse} from './Adresse';

export class OrganismeFormation {

  public id: number;
  public nom: string;
  public adresse: Adresse;
  public detailsFormation: DetailsFormation[];
}
