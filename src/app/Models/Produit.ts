import {DetailsFormation} from './DetailsFormation';
import {LigneDeCommande} from './LigneDeCommande';
import {Favoris} from './Favoris';

export abstract class Produit {

  public categorie: string;
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

