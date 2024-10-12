import { Component } from '@angular/core';
import { CalculadoraComponent } from "../calculadora/calculadora.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CalculadoraComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
