import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [MatToolbarModule, MatIconModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  contact_email: String = 'baltaxxxx@gmail.com';
  contact_address: String = 'str. Buduhala XXXX, nr.XX, Copălău, Botoșani';
  contact_number: String = '+40 07XX XXX XXX';
}
