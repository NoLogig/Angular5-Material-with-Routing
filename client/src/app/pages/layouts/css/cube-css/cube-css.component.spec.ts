import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CubeCssComponent } from './cube-css.component';

describe('CubeCssComponent', () => {
  let component: CubeCssComponent;
  let fixture: ComponentFixture<CubeCssComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CubeCssComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CubeCssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
