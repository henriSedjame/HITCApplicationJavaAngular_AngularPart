import {Utilisateur} from './Utilisateur';
import {Adresse} from './Adresse';
import {IdentifiantsConnexion} from './IdentifiantsConnexion';
import {Panier} from './Panier';
import {Favoris} from './Favoris';

export class Client extends Utilisateur {
  public id: number;
  public nom: string;
  public prenom: string;
  public adresse: Adresse;
  public email: string;
  public dateNaissance: Date ;
  public identifiantsConnexion: IdentifiantsConnexion = new IdentifiantsConnexion();
  public panier: Panier ;
  public favoris: Favoris ;
}
