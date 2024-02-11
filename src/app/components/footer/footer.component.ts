import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  template: `
    <footer>
      footer works!
      <a href="https://www.flaticon.com/free-icons/nav" title="nav icons">Nav icons created by TravisAvery - Flaticon</a>
    </footer>
  `,
  styles: `footer {
    padding: 8px 16px;
    color: white;
    background: #3f51b5;
    margin-top: 2em;
    position: sticky;
    top: 100%;
    .copyright {
      margin: 1em 0 1em;
      font-size: 0.7em;
    }}`
})
export class FooterComponent {

}
