import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, NgForm, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-floating-whatsapp',
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './floating-whatsapp.component.html',
  styleUrl: './floating-whatsapp.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class FloatingWhatsappComponent {
  whatsappIcon = 'assets/img/whatsapp.png';
  phoneNumber = '522821371363';
  message = '¡Hola! Estoy interesado en tus servicios.';
  whatsappLink: string;
  isPopupOpen = false;

  constructor() {
    const encodedMessage = encodeURIComponent(this.message);
    this.whatsappLink = `https://wa.me/${this.phoneNumber}?text=${encodedMessage}`;
  }

  togglePopup() {
    this.isPopupOpen = !this.isPopupOpen;
  }

}
