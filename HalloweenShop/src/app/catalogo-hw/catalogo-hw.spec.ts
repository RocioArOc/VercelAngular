import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { CatalogoHwComponent } from './catalogo-hw';

describe('CatalogoHwComponent', () => {
  let component: CatalogoHwComponent;
  let fixture: ComponentFixture<CatalogoHwComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CatalogoHwComponent],
      imports: [CommonModule]
    }).compileComponents();

    fixture = TestBed.createComponent(CatalogoHwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
