import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { CalculadoraService } from '../../services/calculadora.service';
import { CommonModule } from '@angular/common';
import { CurrencyMaskModule } from 'ng2-currency-mask';

@Component({
  selector: 'app-calculadora',
  standalone: true,  // Certificando-se de que o componente é standalone
  imports: [ReactiveFormsModule, CommonModule, CurrencyMaskModule],  // Importando ReactiveFormsModule e CommonModule
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})

export class CalculadoraComponent {
  calculadoraForm: FormGroup;
  resultado: any;

  constructor(private calculadoraService: CalculadoraService) {
    this.calculadoraForm = new FormGroup({
      valorInicial: new FormControl('', [Validators.required, Validators.min(0.01)]),
      prazoMeses: new FormControl('', [Validators.required, Validators.min(1)]),
    });
  }

  calcular() {
    if (this.calculadoraForm.valid) {
      const { valorInicial, prazoMeses } = this.calculadoraForm.value;
      this.calculadoraService.calcularInvestimento({ valorInicial, prazoMeses })
        .subscribe(result => {
          this.resultado = result;
        }, error => {
          console.error('Erro ao calcular investimento:', error);
        });
    }
  }
}
