import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavComponent } from "./nav/nav.component";
import { SeparadorLineasComponent } from "../../shared/components/separador-lineas/separador-lineas.component";

@Component({
  selector: 'app-header',
  imports: [NavComponent, SeparadorLineasComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {

}
