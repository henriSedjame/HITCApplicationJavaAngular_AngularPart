import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import {ClientService} from '../Services/Client/client.service';
import {Produit} from '../Models/Produit';

import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'app-details-formation',
  templateUrl: './details-formation.component.html',
  styleUrls: ['./details-formation.component.css']
})
export class DetailsFormationComponent implements OnInit {

  produitDesigne: Produit;
  error: any;

  constructor(private clientService: ClientService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.produitDesigne = JSON.parse(sessionStorage.getItem('produitDesigne'));
  }
}
