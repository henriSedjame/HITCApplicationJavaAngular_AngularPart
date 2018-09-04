import {OrganismeFormation} from './OrganismeFormation';
import {Produit} from './Produit';

export class DetailsFormation {
  public id: number;
  public descriptif: string;
  public duree: number;
  public organismeFormation: OrganismeFormation;
  public produit: Produit;
}
