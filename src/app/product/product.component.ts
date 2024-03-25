import { Component } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';

interface Product {
  name: string;
  description: string;
  price: number;
}

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  products: Product[] = [
    { name: 'Dress', description: 'Beautiful pink dress', price: 2000 },
    { name: 'Toy', description: 'Affordable toy', price: 500 },
    { name: 'Shoes', description: 'White shoes', price: 2500 },
    { name: 'Juices', description: 'Fresh fruit juice', price: 150 },
    { name: 'Choclates', description: 'dairy Milk Cateburay', price: 700 },
    { name: 'Books', description: 'Inspirational books', price: 7500 },
    { name: 'Laptop', description: 'MacBook', price: 90000 },
    { name: 'Mobile', description: 'Oppo', price: 8000 }
  ];

  cart: Product[] = [];
  cartVisible = false;

  addToCart(product: Product): void {
    this.cart.push(product);
  }
  // Method to toggle cart visibility
  toggleCart() {
    this.cartVisible = !this.cartVisible; // Toggle cart visibility

    if (this.cartVisible) {
      this.populateCartItems();
    }
  }

  populateCartItems() {
    this.cart;
  }

}
