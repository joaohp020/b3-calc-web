import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CalculadoraService } from '../../services/calculadora.service'; // Atualize o caminho, se necessário

@Component({
  selector: 'app-calculadora',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {
  calculadoraForm: FormGroup;

  constructor(private calculadoraService: CalculadoraService) {
    this.calculadoraForm = new FormGroup({
      dataInicial: new FormControl('', Validators.required),
      dataFinal: new FormControl('', Validators.required),
      valorInicial: new FormControl('', [Validators.required, Validators.min(0.01)]),
    });
  }

  calcular() {
    if (this.calculadoraForm.valid) {
      const { dataInicial, dataFinal, valorInicial } = this.calculadoraForm.value;
      // Chamar o serviço que se comunica com a API
      this.calculadoraService.calcularInvestimento({ dataInicial, dataFinal, valorInicial })
        .subscribe(result => {
          console.log('Resultado', result);
          // Processar o resultado
        });
    }
  }
}
