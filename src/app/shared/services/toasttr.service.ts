import { inject, Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class ToasttrService {
  toastr = inject(ToastrService);

  showSuccess(message: string = 'Operación existosa') {
    this.toastr.success(message, 'Éxito');
  }

  showError(message: string = 'Operación fallida') {
    this.toastr.error(message, 'Error');
  }

  showWarning(message: string = 'Operación fallida') {
    this.toastr.warning(message, 'Cuidado');
  }

  showInfo(message: string = 'Operación fallida') {
    this.toastr.info(message, 'Info');
  }
}
