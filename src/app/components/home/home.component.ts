import { Component, signal } from '@angular/core';
import { CalculadoraComponent } from "../calculadora/calculadora.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CalculadoraComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  // name = signal("João");
  // count = 0;
  // value = false;

  // teste() {
  //   // this.count.update(value => value + 1);
  //   this.count += 1;
  // }
}
