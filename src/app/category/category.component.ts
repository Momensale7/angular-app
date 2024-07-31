import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
interface category {
  categoryName:string,
  categoryImage:string,
}
@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {
categories:category[]=[
  {categoryName:"Labtop",
    categoryImage:"../../assets/images/Electronics.jfif"
  },
  {categoryName:"Clothes",
    categoryImage:"../../assets/images/classic-red.jpeg"
  },
  {categoryName:"Furnitures",
    categoryImage:"../../assets/images/download (3).jfif"
  },
  {categoryName:"Mobiles",
    categoryImage:"../../assets/images/iphone.jpeg"
  },
  {categoryName:"watches",
    categoryImage:"../../assets/images/smartWath.jpeg"
  },
  {categoryName:"shoes",
    categoryImage:"../../assets/images/Vibrant Pink Classic Sneaker.jpeg"
  },
]
responsiveOptions = [
  {
      breakpoint: '1199px',
      numVisible: 3,
      numScroll: 1
  },
  {
      breakpoint: '991px',
      numVisible: 2,
      numScroll: 1
  },
  {
      breakpoint: '767px',
      numVisible: 1,
      numScroll: 1
  }
];
}
