import {Produit} from './Produit';
import {DetailsFormation} from './DetailsFormation';
import {Sport} from './Sport';
import {LigneDeCommande} from './LigneDeCommande';
import {Favoris} from './Favoris';

export class FormationSportive extends Produit {

  public sportEnseigne: Sport;
  public categorie = 'SPORTIVE';
  public designation: string;
  public detailsFormation: DetailsFormation;
  public disponibilite: boolean;
  public id: number;
  public ligneDeCommandes: LigneDeCommande[];
  public favoris: Favoris[];
  public prixUnitaire: number;
  public stock: number;
  public urlImage: string;
}
