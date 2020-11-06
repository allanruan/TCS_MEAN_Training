import { Component, OnInit } from '@angular/core';
import { Product } from '../model.product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products:Product[]=[];
  flag:boolean=false;
  constructor(private productSer:ProductService) {
  }

  ngOnInit(): void {
  }

  loadProduct():void{
    this.flag=true;
    this.productSer.loadProductDetails().subscribe(data=>this.products=data,error=>console.log(error))
  }

}
