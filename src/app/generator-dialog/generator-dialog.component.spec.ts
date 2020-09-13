import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratorDialogComponent } from './generator-dialog.component';

describe('GeneratorDialogComponent', () => {
  let component: GeneratorDialogComponent;
  let fixture: ComponentFixture<GeneratorDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneratorDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneratorDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
