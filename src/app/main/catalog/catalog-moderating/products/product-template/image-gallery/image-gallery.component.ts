import {Component, Input, OnInit} from '@angular/core';
import {ProductImage} from "../../../../../../core/classes/main/catalog/products/product-image";
import {MatDialog} from "@angular/material/dialog";
import {SingleStringDialogComponent} from "../../../../../../core/dialogs/single-string-dialog/single-string-dialog.component";
import {InformationDialogComponent} from "../../../../../../core/dialogs/information-dialog/information-dialog.component";
import {AreYouSureDialogComponent} from "../../../../../../core/dialogs/are-you-sure-dialog/are-you-sure-dialog.component";
import {DialogMessageHandlerService} from "../../../../../../core/services/dialog-message-handler.service";

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.css']
})
export class ImageGalleryComponent implements OnInit {
  @Input() images: ProductImage[] = [];
  selectedId!: number;
  selectedImage: string = 'https://icon-library.com/images/image-placeholder-icon/image-placeholder-icon-16.jpg';
  beforeEditImage: string = '';

  constructor(private dialog: MatDialog) {}
  ngOnInit(): void {
    this.setInitialImage();
  }

  onImageChange(index: number) {
    this.selectedId = index;
    this.selectedImage = this.images[index].address;
  }

  onInvalidUrl(index: number) {
    this.dialog.open(InformationDialogComponent, {
      maxWidth: '24rem',
      data: {bold: this.images[index].address, regular: " invalid and is going to be removed"}
    });
    if(this.beforeEditImage) {
      this.images[index].address = this.beforeEditImage;
    } else {
      this.images.splice(index, 1);
    }
  }

  onAddImage() {
    this.beforeEditImage = '';
    const dialogRef = this.dialog.open(SingleStringDialogComponent, {
      width: "30rem",
      data: {question: 'Add new image', label: 'http://', information: ''}
    });
    dialogRef.afterClosed().subscribe(result => {
      if(!result) return;
      this.images.push(new ProductImage(result))
      this.onImageChange(this.images.length - 1);
    });
  }

  onEditImage() {
    if(this.selectedId === undefined) return;
    this.beforeEditImage = this.selectedImage;
    const dialogRef = this.dialog.open(SingleStringDialogComponent, {
      width: "30rem",
      data: {question: 'Edit image', label: 'Url', information: this.selectedImage }
    });
    dialogRef.afterClosed().subscribe(result => {
      if(!result) return;
      this.images[this.selectedId].address = result;
      this.onImageChange(this.selectedId);
    });
  }

  onDeleteImage() {
    if(this.selectedId === undefined) return;
    this.beforeEditImage = '';
    const dialogRef = this.dialog.open(AreYouSureDialogComponent, {
      maxWidth: '24rem',
      data: {
        question: "Are you sure you want to delete selected image?",
        okButton: "Delete",
        cancelButton: "Cancel"
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if(!result) return;
      this.images.splice(this.selectedId, 1);
      if(this.images.length) this.onImageChange(0);
    });
  }

  setInitialImage() {
    if (this.images.length > 0) {
      this.selectedImage = this.images[0].address;
    }
  }
}
