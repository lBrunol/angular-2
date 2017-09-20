import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoPipesComponent } from './curso-pipes.component';

describe('CursoPipesComponent', () => {
  let component: CursoPipesComponent;
  let fixture: ComponentFixture<CursoPipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CursoPipesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CursoPipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
