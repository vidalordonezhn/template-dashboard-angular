import { Component, EventEmitter, Output, type OnInit } from '@angular/core';
import { ExcelReaderService } from '../../shared/services/excel-reader.service';

@Component({
  selector: 'app-excel-upload',
  imports: [],
  templateUrl: './excel-upload.component.html',
  styleUrl: './excel-upload.component.css',
})
export class ExcelUploadComponent implements OnInit {
  fileName: string = '';
  @Output() dataParsed = new EventEmitter<any[]>();
  ngOnInit(): void {}

  constructor(private excelService: ExcelReaderService) {}

  onFileChange(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      this.fileName = file.name;
      this.excelService
        .readFile(file)
        .then((data) => this.dataParsed.emit(data))
        .catch((err) => console.error('Error al leer archivo Excel:', err));
    }
  }
}
