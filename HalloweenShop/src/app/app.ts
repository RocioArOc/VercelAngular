import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CatalogoHwComponent } from './catalogo-hw/catalogo-hw';

@Component({
  selector: 'app-root',
  template: '<app-catalogo-hw />',
  styles: [':host { display: block; }'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CatalogoHwComponent],
})
export class AppComponent {
  
}