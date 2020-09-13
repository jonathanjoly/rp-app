import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnackBarSaveComponent } from './snack-bar-save.component';

describe('SnackBarSaveComponent', () => {
  let component: SnackBarSaveComponent;
  let fixture: ComponentFixture<SnackBarSaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnackBarSaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnackBarSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
