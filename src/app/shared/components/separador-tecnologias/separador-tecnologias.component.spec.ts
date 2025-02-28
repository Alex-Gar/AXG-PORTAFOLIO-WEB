import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeparadorTecnologiasComponent } from './separador-tecnologias.component';

describe('SeparadorTecnologiasComponent', () => {
  let component: SeparadorTecnologiasComponent;
  let fixture: ComponentFixture<SeparadorTecnologiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeparadorTecnologiasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeparadorTecnologiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
