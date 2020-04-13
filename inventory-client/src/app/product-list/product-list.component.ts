import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { ProductService } from "../product.service";
import { Product } from "../product";
import { Router } from '@angular/router';


@Component({
selector: 'app-product-list',
templateUrl: './product-list.component.html',
styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
products: Observable<Product[]>;// array form data

constructor(private productService: ProductService,
private router: Router) { }

ngOnInit(): void {
this.reloadData();
}
reloadData()
{
this.products = this.productService.getProductsList();//produt consist of data
}

productDetails(id:number)
{
this.router.navigate(['details',id])
}
deleteProduct(id:number)
{
this.router.navigate(['details',id])
}
editProduct(id:number)
{
this.router.navigate(['update',id])
}
}