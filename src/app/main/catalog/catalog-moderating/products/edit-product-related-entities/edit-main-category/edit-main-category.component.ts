import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CatalogMainCategory} from "../../../../classes/catalog-header/catalog-main-category";
import {AddMainCategoryDialogComponent} from "../../dialogs/add-main-category-dialog/add-main-category-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {MainCategoryStandardProviderService} from "../../../../services/main-category-standard-provider.service";
import {AreYouSureDialogComponent} from "../../../../../dialogs/are-you-sure-dialog/are-you-sure-dialog.component";
import {InformationDialogComponent} from "../../../../../dialogs/information-dialog/information-dialog.component";
import {UpdatedEventProviderService} from "../../../../services/updated-event-provider.service";

@Component({
  selector: 'app-edit-main-category',
  templateUrl: './edit-main-category.component.html'
})
export class EditMainCategoryComponent implements OnInit {
  @Input() mainCategories: CatalogMainCategory[] = [];
  selectedMainCategory: CatalogMainCategory = new CatalogMainCategory();
  constructor(private dialog: MatDialog,
              private mainCategoryProvider: MainCategoryStandardProviderService,
              private updatedEvent: UpdatedEventProviderService ) {}

  ngOnInit(): void {
  }

  onAdd() {
    const dialogRef = this.dialog.open(AddMainCategoryDialogComponent, {
      width: '24rem',
      data: {edit: false, mainCategory: new CatalogMainCategory()}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.onAfterChange(result);
    });
  }

  onEdit() {
    const dialogRef = this.dialog.open(AddMainCategoryDialogComponent, {
      width: '24rem',
      data: {edit: true, mainCategory: this.selectedMainCategory}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.onAfterChange(result);
    });
  }

  onDelete() {
    if(!this.selectedMainCategory) return;

    const dialogRef = this.dialog.open(AreYouSureDialogComponent, {
      width: '24rem',
      data: {
        question: `Are you sure you want to remove ${this.selectedMainCategory.name}?`,
        okButton: "Remove",
        cancelButton: "Cancel"
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if(!result) return;
      this.mainCategoryProvider.deleteCategory(this.selectedMainCategory?.catalogMainCategoryId ?? 0).subscribe(
        () => {},
        error => {
          const dialogRef = this.dialog.open(InformationDialogComponent, {
            width: '24rem',
            data: {bold: error.error}
          });
          this.onAfterChange(true);
        },
        () => {
          this.onAfterChange(true);
        });
    });
  }

  canEditOrDelete() {
    return this.selectedMainCategory.catalogMainCategoryId > 0;
  }

  onAfterChange(result: boolean) {
    if(!result) return;
    this.updatedEvent.updatedProductRelatedDataEmitter.emit();
    this.selectedMainCategory = new CatalogMainCategory();
  }
}
