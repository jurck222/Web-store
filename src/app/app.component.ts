import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { PromotionWindowComponent } from './components/promotion-window/promotion-window.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, FooterComponent, HeaderComponent, PromotionWindowComponent],
})
export class AppComponent {
  title = 'web-store';
}
