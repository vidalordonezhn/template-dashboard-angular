import { Component, type OnInit } from '@angular/core';
import { ExcelUploadComponent } from '../../components/excel-upload/excel-upload.component';

@Component({
  selector: 'app-featurex',
  imports: [ExcelUploadComponent],
  templateUrl: './featurex.component.html',
  styleUrl: './featurex.component.css',
})
export class FeaturexComponent implements OnInit {
  ngOnInit(): void {}

  handleExcelData(data: any[]): void {
    console.log('Datos del Excel:', data);
  }
}
