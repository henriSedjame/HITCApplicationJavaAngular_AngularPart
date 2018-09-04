import {Adresse} from './Adresse';
import {IdentifiantsConnexion} from './IdentifiantsConnexion';

export abstract class Utilisateur {
  public id: number;
  public nom: string;
  public prenom: string;
  public adresse: Adresse;
  public email: string;
  public dateNaissance: Date;
  public identifiantsConnexion: IdentifiantsConnexion;
}
