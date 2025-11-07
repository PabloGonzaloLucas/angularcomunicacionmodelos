import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PadredeporteComponent } from './padredeporte.component';

describe('PadredeporteComponent', () => {
  let component: PadredeporteComponent;
  let fixture: ComponentFixture<PadredeporteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PadredeporteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PadredeporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
