import {IdentifiantsConnexion} from './IdentifiantsConnexion';
import {Utilisateur} from './Utilisateur';
import {Adresse} from './Adresse';

export class Administrateur extends Utilisateur {
  public id: number;
  public nom: string;
  public prenom: string;
  public adresse: Adresse;
  public email: string;
  public dateNaissance: Date;
  public identifiantsConnexion: IdentifiantsConnexion;
}
