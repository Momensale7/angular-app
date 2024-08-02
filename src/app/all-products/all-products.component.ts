import { Component } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { Product } from '../product';

@Component({
  selector: 'app-all-products',
  standalone: true,
  imports: [ProductCardComponent,],
  templateUrl: './all-products.component.html',
  styleUrl: './all-products.component.css'
})
export class AllProductsComponent {
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
    {productImage:"../../assets/images/black-bants.jpeg",
     productName:"black pants",
     price:13,
     onSale:true
    },
    {productImage:"../../assets/images/blue-hat.jpeg",
     productName:"blue-hat",
     price:150,
     onSale:true
    },
    {productImage:"../../assets/images/Cabinet with doors.avif",
     productName:"Cabinet with doors",
     price: 90,
     onSale:true
    },
    {productImage:"../../assets/images/fred perry.webp",
     productName:"fred perry",
     price:35,
     onSale:true
    },
    {productImage:"../../assets/images/joystick.jpeg",
     productName:"joystick",
     price:50,
     onSale:true
    },
    {productImage:"../../assets/images/short.jpeg",
     productName:"labk short",
     price: 30,
     onSale:false
    },
    {productImage:"../../assets/images/gaming chair.avif",
     productName:"gaming chair",
     price: 70,
     onSale:false
    },
  ]
}
