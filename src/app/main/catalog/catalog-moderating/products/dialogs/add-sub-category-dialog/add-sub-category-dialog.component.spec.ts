import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSubCategoryDialogComponent } from './add-sub-category-dialog.component';

describe('AddSubCategoryDialogComponent', () => {
  let component: AddSubCategoryDialogComponent;
  let fixture: ComponentFixture<AddSubCategoryDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSubCategoryDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSubCategoryDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
