import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  nomeInicio = "Inicio";
  nomeProdutos = "Produtos";

  constructor() { }

  ngOnInit(): void {
  }

}
