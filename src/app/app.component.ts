import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lista';
  lista:string[] = ['Baso', 'Computadora', 'cargador', 'Monitor', 'Celular'];
}
