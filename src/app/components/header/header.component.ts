import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DropdownContentComponent } from '../dropdown-content/dropdown-content.component';

@Component({
  selector: 'app-header',
  standalone: true,
  template: `
    <div
      class="container-fluid"
      style="background-color: blueviolet;">
      <div class="row dropdown">
        <div class="col-md-auto menu dropdown">
          <img
            src="../assets/menu.png"
            alt="menu" />
          Products
          <ul
            app-dropdown-content
            class="dropdown-menu dropdown-menu"></ul>
        </div>
        <div class="col-md-auto menu">Todays deals</div>
        <div class="col-md-auto menu">Customer service</div>
        <div class="col-md-auto menu">About</div>
      </div>
    </div>
  `,
  styleUrls: ['./header.component.css'],
  imports: [NgbModule, DropdownContentComponent],
})
export class HeaderComponent {}
