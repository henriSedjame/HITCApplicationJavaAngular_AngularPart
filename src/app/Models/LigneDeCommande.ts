import {Produit} from './Produit';
import {FicheCommande} from './FicheCommande';

export class LigneDeCommande {
    public id: number;
    public quantite: number;
    public produit: Produit;
    public ficheCommande: FicheCommande;
}
