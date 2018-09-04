import { Component, OnInit } from '@angular/core';
import {ClientService} from '../Services/Client/client.service';
import {LigneDeCommande} from '../Models/LigneDeCommande';
import {Client} from '../Models/Client';
import {Produit} from '../Models/Produit';
import {Commande} from '../Models/Commande';
import {Adresse} from '../Models/Adresse';
import {Router} from '@angular/router';

@Component({
  selector: 'app-accueil',

  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  nomOganisme: string[] = ['AJC', 'MTN'];
  categories: string[] = ['INFORMATIQUE', 'LINGUISTIQUE', 'ARTISTIQUE', 'SPORTIVE'];
  durees: number[] = [100, 200, 300, 400];
  panierVirtuel: LigneDeCommande[];

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

  constructor(private clientService: ClientService, private router: Router) { }

  ngOnInit() {
    this.connecte = false;
    this.clientConnecte = new Client();
    this.clientConnecte.adresse = new Adresse();
    this.clientAInscrire = new Client();
    this.clientAInscrire.adresse = new Adresse();
    this.panierVirtuel = [];
    this.produitsFavoris = [];
    this.nomProdFav = [];
    this.tousLesProduits();
  }


  // ------------------------------- CONNEXION INSCRIPTION DECONNEXION --------------------------------------------------




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

// ---------------------------------- PRODUITS ------------------------------------------------------------------------

  tousLesProduits() {
    this.clientService.rechercherTousLesProduits()
      .then(produits => this.produits = produits)
      .then(() => sessionStorage.setItem('produits', JSON.stringify(this.produits)))
      .then(() => console.log(this.produits))
      .catch(this.clientService.handleError)
      .then((resp: Response) => {
        this.error = resp;
      });
  }

  produitParDesignation(des: string) {
    this.clientService.rechercherParDesignation(des)
      .then(produit => this.produitDesigne = produit )
      .then(() => {
      sessionStorage.setItem('produitDesigne', JSON.stringify(this.produitDesigne));
        this.router.navigate(['/DetailsFormation', des ]);
      })
      .then(() => console.log(this.produitDesigne))
      .catch(this.clientService.handleError)
      .then((resp: Response) => {
        this.error = resp;
      });
  }


// -------------------------------------- PANIER ---------------------------------------------------------------------

  misAJourPanier() {
    this.clientService.misAJourPanier(this.clientConnecte.panier)
      .then(panier => this.clientConnecte.panier = panier )
      .catch(this.clientService.handleError)
      .then((resp: Response) => {
        this.error = resp;
      });
  }

}
