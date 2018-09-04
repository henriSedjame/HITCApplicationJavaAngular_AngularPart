import { Injectable } from '@angular/core';
import {Headers, Http} from '@angular/http';
import 'rxjs/add/Operator/toPromise';
import {Client} from '../../Models/Client';
import {Panier} from '../../Models/Panier';
import {Commande} from '../../Models/Commande';
import {Favoris} from '../../Models/Favoris';
import {Produit} from '../../Models/Produit';

@Injectable()
export class ClientService {


  // HEADERS
  private headers = new Headers({'Content-Type': 'application/json'});

  // CONSTRUCTEUR
  constructor(private http: Http) { }


// ---------------------- METHODES CONNEXION -------------------------------

  seConnecter(login: string, password: string): Promise<Client> {

    const url = 'api/connexion/' + login + '_' + password;

    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Client);
  }

  seDeconnecter(): Promise<any> {

    const url = 'api/deconnexion';
    return this.http.get(url)
      .toPromise();
  }

  sInscrire(client: Client): Promise<Client> {

    const url = 'api/postClient';
    console.log('DANS LA METHODE SERVICE');

    console.log(client);

    return this.http.post(url, JSON.stringify(client), {headers: this.headers})
      .toPromise()
      .then(response => response.json() as Client);

  }


// ---------------------- METHODES GESTION PROFIL -------------------------------


  modiClient(client: Client): Promise<Client> {

    const url = 'api/updateId';

    return this.http.put(url, JSON.stringify(client), {headers: this.headers})
      .toPromise()
      .then(response => response.json() as Client);

  }


// ---------------------- METHODES PRODUITS --------------------------------------

  rechercherTousLesProduits(): Promise<Produit[]> {

    const url = 'api/produits';

    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Produit []);
  }

  rechercherParCategorie(categorieSelectionnee: String): Promise<Produit[]> {

    const url = 'api/produits/categorie_' + categorieSelectionnee ;

    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Produit[] );
  }

  rechercherParFourchetteDePrix(prix1: number, prix2: number): Promise<Produit[]> {

    const url = 'api/produits/prix_' + prix1  + '-' + prix2;
    console.log(url);
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Produit[] )
      .catch(this.handleError);
  }

  rechercherParDesignation( designationProduit: String): Promise<Produit> {

    const url = 'api/produits/designation_' + designationProduit ;

    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Produit );
  }

  rechercherParIdOrganisme( idOrganisme: number): Promise<Produit[]> {

    const url = 'api/produits/organisme_' + idOrganisme;

    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Produit []);
  }

  rechercherParNomOrganisme( nomOrganisme: String): Promise<Produit[]> {

    const url = 'api/produits/organisme_Nom_' + nomOrganisme;

    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Produit[]);


  }

  rechercherParDuree( dureeFormation: number): Promise<Produit[]> {

    const url = 'api/produits/duree_' + dureeFormation;

    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Produit[]);

  }


// ---------------------- METHODES PANIER --------------------------------------

  afficherPanier(nomClientConnecte: string): Promise<Panier> {
    const url = 'api/panier/' + nomClientConnecte;

    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Panier );
  }

  validerPanier(idPanier: number, nouvelleCommandeACreer: Commande): Promise<Commande> {

    const url = 'api/panier/validate_' + idPanier;

    return this.http.post(url, JSON.stringify(nouvelleCommandeACreer), {headers: this.headers} )
      .toPromise()
      .then(response => response.json() as Commande);
  }

  misAJourPanier(panier: Panier): Promise<Panier> {

    const url = 'api/panier/maj';

    return this.http.put(url, JSON.stringify(panier), {headers: this.headers})
      .toPromise()
      .then(response => response.json() as Panier);
  }

// ---------------------- METHODES FAVORIS --------------------------------------
  ajouterProduitAuxFavoris(id: number, designationProduit: string, clientConnecte: Client, favorisClientConnecte: Favoris): Promise<Favoris> {

    const url = 'api/favoris/add_' + id + '_' + designationProduit;

    return this.http.post(url, JSON.stringify({client: clientConnecte, favoris: favorisClientConnecte}), {headers: this.headers} )
      .toPromise()
      .then(response => response.json() as Favoris);
  }

  supprimerProduitDesFavoris(idClientConnecte: number, designationProduit: string, clientConnecte: Client, favorisClientConnecte: Favoris): Promise<Favoris> {

    const url = 'api/favoris/delete_' + idClientConnecte + '_' + designationProduit;

    return this.http.put(url, JSON.stringify(favorisClientConnecte), {headers: this.headers})
      .toPromise()
      .then(response => response.json() as Favoris);
  }

  afficherFavoris(nomClientConnecte: string): Promise<Produit[]> {

    const url = 'api/favoris/' + nomClientConnecte;

    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Produit[]);
  }


// ---------------------- METHODES COMMANDES --------------------------------------

  afficherToutesCommandes(): Promise<Commande[]> {

    const url = 'api/commandes';

    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Commande[]);
  }

  afficherCommande(idClientConnecte: number): Promise<Commande[]> {

    const url = 'api/commandes/' + idClientConnecte;

    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Commande[]);
  }

// --------------------- GESTIONNAIRE D'EXCEPTION ----------------------------------

  handleError(error: any): Promise<any> {
    return error;
  }


}
