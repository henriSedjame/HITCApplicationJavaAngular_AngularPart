import {Produit} from './Produit';
import {DetailsFormation} from './DetailsFormation';
import {Techno} from './Techno';
import {LigneDeCommande} from './LigneDeCommande';
import {Favoris} from './Favoris';

export class FormationInformatique extends Produit{

  public technoEnesigne: Techno;
  public categorie = 'INFORMATIQUE';
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
