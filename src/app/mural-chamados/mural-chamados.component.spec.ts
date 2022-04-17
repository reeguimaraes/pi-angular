import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuralChamadosComponent } from './mural-chamados.component';

describe('MuralChamadosComponent', () => {
  let component: MuralChamadosComponent;
  let fixture: ComponentFixture<MuralChamadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MuralChamadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MuralChamadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
