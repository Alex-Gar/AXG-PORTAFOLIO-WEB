import { AfterViewInit, Component, OnInit, Renderer2 } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { FloatingWhatsappComponent } from "./shared/components/floating-whatsapp/floating-whatsapp.component";

declare var $: any;
declare function HOMEINIT(arg: any): void;

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, FloatingWhatsappComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'AXG-PORTAFOLIOWEB-FT-A18';

  constructor() {
    setTimeout(() => {
      HOMEINIT($); // Llama a la función con jQuery
    }, 50);
  }

}