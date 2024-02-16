import { Component } from '@angular/core';

@Component({
  selector: '[app-dropdown-content]',
  standalone: true,
  imports: [],
  templateUrl: './dropdown-content.component.html',
  styles: `
    .cat-title {
      font-weight: bold;
      padding-left: 10px;
    }
  `,
})
export class DropdownContentComponent {}
