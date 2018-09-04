import {FicheCommande} from './FicheCommande';
import {LigneDeCommande} from './LigneDeCommande';


export class Commande extends FicheCommande {

  public id: number;
  public prixTotal: number;
  public ligneDeCommandes: LigneDeCommande[];
  public date: string;
  public idClient: number;

}
