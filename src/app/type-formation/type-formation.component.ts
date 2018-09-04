import { Component, OnInit } from '@angular/core';
import {Produit} from '../Models/Produit';
import {ClientService} from '../Services/Client/client.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-type-formation',
  templateUrl: './type-formation.component.html',
  styleUrls: ['./type-formation.component.css']
})
export class TypeFormationComponent implements OnInit {

  produitsCat: Produit[];
  produitSelectionne: Produit;
  error: any;


  constructor(private clientService: ClientService, private router: Router) { }

  ngOnInit() {
    this.produitsCat = JSON.parse(sessionStorage.getItem('produitsCat'));
  }

  produitParDesignation(des: string) {
    this.clientService.rechercherParDesignation(des)
      .then(produit => this.produitSelectionne = produit )
      .then(() => {
        sessionStorage.setItem('produitDesigne', JSON.stringify(this.produitSelectionne));
        this.router.navigate(['/DetailsFormation', des]);
      })
      .then(() => console.log(this.produitSelectionne))
      .catch(this.clientService.handleError)
      .then((resp: Response) => {
        this.error = resp;
      });
  }

}
