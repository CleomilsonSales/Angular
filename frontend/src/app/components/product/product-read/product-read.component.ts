import { ProductService } from './../product.service';
import { Product } from './../product.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  products:Product[]
  displayedColumns = ['id', 'name', 'price','action']
  

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.read().subscribe(products => {
      this.products = products
      /* mostrando no console do chrome para ver como esta sendo retornado os valores
      console.log(products) */
    })
  }

}
