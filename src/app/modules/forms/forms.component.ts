import { Component, inject, type OnInit } from '@angular/core';
import { ButtonComponent } from "../../components/button/button.component";
import { ToasttrService } from '../../shared/services/toasttr.service';
import { TableComponent } from "../../components/table/table.component";

@Component({
  selector: 'app-forms',
  imports: [ButtonComponent, TableComponent],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css',
})
export class FormsComponent implements OnInit {
  _toasttr = inject(ToasttrService);

  ngOnInit(): void { }

  onClick(){
    this._toasttr.showSuccess('¡Formulario enviado exitosamente!');
  }
}
