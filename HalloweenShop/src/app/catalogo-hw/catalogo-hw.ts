import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Producto } from './producto';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-catalogo-hw',
  imports: [CommonModule, FormsModule],
  templateUrl: './catalogo-hw.html',
  styleUrls: ['./catalogo-hw.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CatalogoHwComponent {
  productos = signal<Producto[]>([
    new Producto('Botella térmica', '/assets/Botella.jpg', 29.99, true),
    new Producto('Caldero', '/assets/Caldero.jpg', 9.99, true),
    new Producto('Caldero Animado', '/assets/CalderoAnimado.jpg', 14.99, false),
    new Producto('Disfraz de muerto', '/assets/Disfraz.jpg', 19.99, true),
    new Producto('Diadema de Cuchillo', '/assets/Diadema.jpg', 12.99, false),
    new Producto('Disfraz de Esqueleto', '/assets/DisfrazEsqueleto.jpg', 34.99, true),
    new Producto('Velas temáticas', '/assets/Velas.jpg', 7.50, true),
    new Producto('Maquillaje', '/assets/Maquillaje.jpg', 11.99, true),
  ]);

  nProductos:Producto[]=[];


  comprar(producto: Producto): void {
    alert(`Has comprado: ${producto.nombre}`);
  }
}

