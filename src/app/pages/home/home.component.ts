import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderComponent } from "../../layouts/header/header.component";
import { SobreMiComponent } from "../../layouts/sobre-mi/sobre-mi.component";
import { SeparadorTecnologiasComponent } from "../../shared/components/separador-tecnologias/separador-tecnologias.component";
import { SeparadorLineasComponent } from "../../shared/components/separador-lineas/separador-lineas.component";
import { NavComponent } from "../../layouts/header/nav/nav.component";
import { TecnologiasComponent } from "../../layouts/tecnologias/tecnologias.component";

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, SobreMiComponent, SeparadorTecnologiasComponent, SeparadorLineasComponent, NavComponent, TecnologiasComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {


}
