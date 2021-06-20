import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.css']
})
export class ImageGalleryComponent implements OnInit {
  images: string[] = [];
  selectedImage: string = '';
  constructor() {
    this.images.push("https://content2.onliner.by/catalog/device/main/8d9186c7db3e7235287a7b665eb3640f.jpeg");
    this.images.push("https://content2.onliner.by/catalog/device/main/08dddddab2be478b8cef2cf39599adbd.jpeg");
    this.images.push("https://content2.onliner.by/catalog/device/main/1d8204d6d25eb86f33dd14c6db3f8457.jpeg");
    this.images.push("https://content2.onliner.by/catalog/device/main/2c647744d184aac78c7f8c0aab26e548.jpeg");
    this.images.push("https://content2.onliner.by/catalog/device/main/8d637629362ba948d658f8bfdfbf4da6.jpeg");
    this.images.push("https://content2.onliner.by/catalog/device/main/6d7c98e6a5f91f48296e5164f6779b71.jpeg");
    this.images.push("https://content2.onliner.by/catalog/device/main/c00db043775ddd1618bdd75c4a699099.jpeg");


    this.setInitialImage();
  }

  ngOnInit(): void {

  }
  setInitialImage() {
    if(this.images.length > 0) {
      this.selectedImage = this.images[0];
    }
  }
}
