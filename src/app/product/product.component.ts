import { Product } from './../product';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule,ProductCardComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
products:Product[] =[
  {productImage:"../../assets/images/sleek-wirless.jpeg",
   productName:"sleek-wirless",
   price:13,
   onSale:true
  },
  {productImage:"../../assets/images/sleekmodern-laptop.jpeg",
   productName:"sleekmodern-laptop",
   price:150,
   onSale:true
  },
  {productImage:"../../assets/images/smartWath.jpeg",
   productName:"smart watch",
   price: 80,
   onSale:false
  },
]
}
