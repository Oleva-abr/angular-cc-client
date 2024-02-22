import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product, Products } from '../../types';
import { ProductComponent } from '../components/product/product.component';
import { CommonModule } from '@angular/common';
import { PaginatorModule } from 'primeng/paginator';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductComponent, CommonModule, PaginatorModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(
    private productsService: ProductService
  ) { }

  products: Product[] = [];
  totalrecords: number = 0;
  rows: number = 5;

  onProductOutput(product: Product) {

  }

  onPageChange(event: any) {
    this.fetchProducts(event.page, event.rows)
  }


  fetchProducts(page: number, perPage: number) {
    this.productsService.getProducts('http://localhost:3000/clothes', { page, perPage })
      .subscribe((products: Products) => {
        this.products = products.items;
        this.totalrecords = products.total;
      })
  }
  ngOnInit() {
    this.fetchProducts(0, this.rows)
  }
}
