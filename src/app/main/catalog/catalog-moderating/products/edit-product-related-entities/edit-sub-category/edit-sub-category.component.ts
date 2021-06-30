import {Component, Input, OnInit} from '@angular/core';
import {CatalogMainCategory} from "../../../../classes/catalog-header/catalog-main-category";
import {MatSelectChange} from "@angular/material/select";
import {AddMainCategoryDialogComponent} from "../../dialogs/add-main-category-dialog/add-main-category-dialog.component";
import {AreYouSureDialogComponent} from "../../../../../dialogs/are-you-sure-dialog/are-you-sure-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {AddSubCategoryDialogComponent} from "../../dialogs/add-sub-category-dialog/add-sub-category-dialog.component";
import {UpdatedEventProviderService} from "../../../../services/updated-event-provider.service";
import {CatalogSubCategory} from "../../../../classes/catalog-header/catalog-subcategory";
import {InformationDialogComponent} from "../../../../../dialogs/information-dialog/information-dialog.component";
import {SubCategoryStandardProviderService} from "../../../../services/sub-category-standard-provider.service";

@Component({
  selector: 'app-edit-sub-category',
  templateUrl: './edit-sub-category.component.html'
})
export class EditSubCategoryComponent implements OnInit {

  @Input() mainCategories: CatalogMainCategory[] = [];
  selectedMainCategory: CatalogMainCategory = new CatalogMainCategory();
  selectedSubCategory: CatalogSubCategory = new CatalogSubCategory();

  constructor(private dialog: MatDialog,
              private updatedEvent: UpdatedEventProviderService,
              private subCategoryProvider: SubCategoryStandardProviderService) {}

  ngOnInit(): void {
  }

  onAdd() {
    let subCategoryToAdd = new CatalogSubCategory();
    subCategoryToAdd.parentMainCategory = this.selectedMainCategory;
    const dialogRef = this.dialog.open(AddSubCategoryDialogComponent, {
      width: '24rem',
      data: {edit: false, subCategory: subCategoryToAdd}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.onAfterChange(result);
    });
  }

  onEdit() {
    this.selectedSubCategory.parentMainCategory = this.selectedMainCategory;
    const dialogRef = this.dialog.open(AddSubCategoryDialogComponent, {
      width: '24rem',
      data: {edit: true, subCategory: this.selectedSubCategory}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.onAfterChange(result);
    });
  }

  onDelete() {
    if (!this.selectedSubCategory) return;

    const dialogRef = this.dialog.open(AreYouSureDialogComponent, {
      width: '24rem',
      data: {
        question: `Are you sure you want to remove ${this.selectedSubCategory.name}?`,
        okButton: "Remove",
        cancelButton: "Cancel"
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if(!result) return;
      this.subCategoryProvider.deleteSubCategory(this.selectedSubCategory?.catalogSubCategoryId ?? 0).subscribe(
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

  onAfterChange(result: boolean) {
    if(!result) return;
    this.updatedEvent.updatedProductRelatedDataEmitter.emit();
    this.selectedMainCategory = new CatalogMainCategory();
    this.selectedSubCategory = new CatalogSubCategory();
  }
}
