import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnknownUserBarComponent } from './unknown-user-bar.component';

describe('UnknownUserBarComponent', () => {
  let component: UnknownUserBarComponent;
  let fixture: ComponentFixture<UnknownUserBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnknownUserBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnknownUserBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
