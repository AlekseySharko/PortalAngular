import {Component, Input, OnInit} from '@angular/core';
import {ProductImage} from "../../../../../catalog-classes/products/product-image";

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.css']
})
export class ImageGalleryComponent implements OnInit {
  @Input() images: ProductImage[] = [];
  selectedImage: string = 'https://icon-library.com/images/image-placeholder-icon/image-placeholder-icon-16.jpg';
  constructor() {}

  ngOnInit(): void {
    this.setInitialImage();
  }

  onAddImage() {

  }

  setInitialImage() {
    if (this.images.length > 0) {
      this.selectedImage = this.images[0].address;
    }
  }
}
