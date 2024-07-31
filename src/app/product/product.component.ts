import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
interface product {
  productImage:string,
   productName:string,
   price:number,
   onSale:boolean
}
@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
products:product[] =[
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
