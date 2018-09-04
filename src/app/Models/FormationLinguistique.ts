import {Produit} from './Produit';
import {DetailsFormation} from './DetailsFormation';
import {Langues} from './Langues';
import {LigneDeCommande} from './LigneDeCommande';
import {Favoris} from './Favoris';

export class FormationLinguistique extends Produit{

  public languesEnseigne: Langues;
  public categorie = 'LINGUISTIQUE';
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
