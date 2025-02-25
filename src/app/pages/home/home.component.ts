import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderComponent } from "../../layouts/header/header.component";
import { SobreMiComponent } from "../../layouts/sobre-mi/sobre-mi.component";

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, SobreMiComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {

}
