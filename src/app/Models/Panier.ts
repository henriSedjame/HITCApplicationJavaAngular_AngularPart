import {FicheCommande} from './FicheCommande';
import {LigneDeCommande} from './LigneDeCommande';
import {Client} from './Client';

export class Panier extends FicheCommande {

  public id: number;
  public prixTotal: number;
  public ligneDeCommandes: LigneDeCommande[];
  public client: Client;

}
