import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepogetoriesComponent } from './repogetories.component';

describe('RepogetoriesComponent', () => {
  let component: RepogetoriesComponent;
  let fixture: ComponentFixture<RepogetoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepogetoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepogetoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
