import {Produit} from './Produit';
import {Client} from './Client';

export class Favoris {
  public id: number;
  public client: Client;
  public produits: Produit[];
}
