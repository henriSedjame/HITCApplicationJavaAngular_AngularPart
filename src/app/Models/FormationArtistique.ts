

import {Produit} from './Produit';
import {DetailsFormation} from './DetailsFormation';
import {Art} from './Art';
import {LigneDeCommande} from './LigneDeCommande';
import {Favoris} from './Favoris';

export class FormationArtistique extends Produit {

  public artEnseigne: Art;
  public categorie = 'ARTISTIQUE';
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
