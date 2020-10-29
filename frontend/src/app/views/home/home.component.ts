import { HeaderService } from './../../components/template/header/header.service';
import { Component, OnInit, ɵgetComponentViewDefinitionFactory } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  titleViews = "Bem-vindo";

  constructor(private headerService: HeaderService) { 
    headerService.headerData = {
      title: 'Início',
      icon: 'home', 
      routeUrl: ''
    }
  }

  ngOnInit(): void {
  }

}
