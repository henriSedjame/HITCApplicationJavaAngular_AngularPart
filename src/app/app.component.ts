import {Component, Input, OnInit} from '@angular/core';
import {Client} from './Models/Client';

import {Adresse} from './Models/Adresse';
import {Produit} from './Models/Produit';
import {Panier} from './Models/Panier';
import {forEach} from '@angular/router/src/utils/collection';
import {LigneDeCommande} from './Models/LigneDeCommande';
import {Commande} from './Models/Commande';
import {ClientService} from './Services/Client/client.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
 templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers : []
})
export class AppComponent implements  OnInit {

  nomOganisme: string[] = ['AJC', 'MTN'];

  durees: number[] = [100, 200, 300, 400];
  panierVirtuel: LigneDeCommande[];
  username: string;
  motDePasse: string;
  clientConnecte: Client;
  clientAInscrire: Client;
  connecte: boolean;
  produitDesigne: Produit;
  produits: Produit[];
  produitsParPrix: Produit[];
  categorieSelectionne: string;
  prixMin: number;
  prixMax: number;
  designation: string;
  idOrg: number;
  nomOrg: string;
  duree: number;
  ligneCommande: LigneDeCommande;
  produitAjouter: Produit;
  produitFavori: Produit;
  qte: number;
  index: number;
  nouvelleCommande: Commande;
  produitsFavoris: Produit[];
  nomProdFav: string[];
  histoCommandeClient: Commande[];
  error: any;


  constructor(private clientService: ClientService, private router: Router) {

  }

  ngOnInit(): void {
    this.connecte = false;
    this.clientConnecte = new Client();
    this.clientConnecte.adresse = new Adresse();
    this.clientAInscrire = new Client();
    this.clientAInscrire.adresse = new Adresse();
    this.panierVirtuel = [];
    this.produitsFavoris = [];
    this.nomProdFav = [];

  }

// ----------------------------------- TEST CONNEXION OK --------------------------------------------------

  seConnecter() {
    this.clientService.seConnecter(this.username, this.motDePasse)
      .then(client => this.clientConnecte = client )
      .then(() => {
        this.connecte = true;
        this.nouvelleCommande = new Commande();
        localStorage.setItem('clientConnecte', JSON.stringify(this.clientConnecte));
      })
      .then(() => {
        console.log(this.clientConnecte);
        this.username = null;
        this.motDePasse = null;
      })
      .catch(this.clientService.handleError)
      .then((resp: Response) => {
        this.error = resp;
        console.log(this.error._body);
      });
  }

  seDeconnecter() {

    this.misAJourPanier();
    localStorage.removeItem('clientConnecte');
    this.connecte = false;
    if (this.clientConnecte != null) {
      this.clientConnecte = new Client();
      this.clientConnecte.adresse = new Adresse();
      this.router.navigate(['/Accueil']);
    }

  }

  sInscrire() {
    this.clientService.sInscrire(this.clientAInscrire)
      .then(client => this.clientAInscrire = client)
      .then(() => localStorage.setItem('clientConnecte', JSON.stringify(this.clientAInscrire)))
      .then(() => this.clientConnecte = this.clientAInscrire )
      .catch(this.clientService.handleError)
      .then((resp: Response) => {
        this.error = resp;
      });
  }

  misAJourPanier() {
    this.clientService.misAJourPanier(this.clientConnecte.panier)
      .then(panier => this.clientConnecte.panier = panier )
      .catch(this.clientService.handleError)
      .then((resp: Response) => {
        this.error = resp;
      });
  }

  afficherPanier(): Panier {

    if (this.connecte){
      console.log(this.clientConnecte.panier);
      this.router.navigate(['/Panier']);
      return this.clientConnecte.panier;
    } else {
      this.router.navigate(['/Panier']);
    }

  }


}







