import {LigneDeCommande} from './LigneDeCommande';

export class FicheCommande {
  public id: number;
  public prixTotal: number;
  public ligneDeCommandes: LigneDeCommande[];
}
