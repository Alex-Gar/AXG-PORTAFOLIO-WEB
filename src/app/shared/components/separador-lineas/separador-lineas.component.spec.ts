import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeparadorLineasComponent } from './separador-lineas.component';

describe('SeparadorLineasComponent', () => {
  let component: SeparadorLineasComponent;
  let fixture: ComponentFixture<SeparadorLineasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeparadorLineasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeparadorLineasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
