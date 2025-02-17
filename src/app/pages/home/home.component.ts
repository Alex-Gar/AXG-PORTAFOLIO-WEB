import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderComponent } from "../../layouts/header/header.component";

@Component({
  selector: 'app-home',
  imports: [HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {

}
