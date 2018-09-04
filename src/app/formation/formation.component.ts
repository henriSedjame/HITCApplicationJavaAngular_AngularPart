
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ClientService} from '../Services/Client/client.service';
import {Produit} from '../Models/Produit';

@Component({
  selector: 'app-formation',

  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css'],
  /* template: `
  <h2>Formation</h2>
  <router-outlet></router-outlet> ` */

})
export class FormationComponent implements OnInit {

  formationCategories1 = [
    {
      id: 1,
      title: 'INFORMATIQUE',
      description: 'Découvrir les langages, le hardware, le software pour mieux...',
      image: '..\\..\\/assets/Images/milky-way.jpg',
      msgBouton: 'Inventer',
      alt: 'Formations informatiques'
    },

    {
      id: 2,
      title: 'ARTISTIQUE',
      description: 'Dessiner, sculpter, peindre, apprendre la musique pour mieux...',
      image: '..\\..\\/assets/Images/street-art.jpg',
      msgBouton: 'Créer',
      alt: 'Formations artistiques'
    }
  ];

  formationCategories2 = [
    {
      id: 3,
      title: 'LINGUISTIQUE',
      description: 'Parler de nouvelles langues pour mieux...',
      image: '..\\..\\/assets/Images/photo.jpg',
      msgBouton: 'Explorer',
      alt: 'Formations linguistique'
    },

    {
      id: 4,
      title: 'SPORTIVE',
      description: 'Pratiquer de nouveaux sports pour mieux...',
      image: '..\\..\\/assets/Images/friends.jpg',
      msgBouton: 'Jouer',
      alt: 'Formations sportives'
    }
  ];

  produitsCat: Produit[];

  error: any;

  constructor(private clientService: ClientService, private router: Router) {

  }

  ngOnInit() {
    this.produitsCat = [];
  }

  produitParCategorie(cat: string) {
    this.clientService.rechercherParCategorie(cat)
      .then(produits => this.produitsCat = produits)
      .then(() => {
      sessionStorage.setItem('produitsCat', JSON.stringify(this.produitsCat));
        this.router.navigate(['/Formation', cat]);
      })
      .then(() => console.log(this.produitsCat))
      .catch(this.clientService.handleError)
      .then((resp: Response) => {
        this.error = resp;
      });
  }

}

