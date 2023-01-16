import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UerdetailsComponent } from './uerdetails.component';

describe('UerdetailsComponent', () => {
  let component: UerdetailsComponent;
  let fixture: ComponentFixture<UerdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UerdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UerdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
