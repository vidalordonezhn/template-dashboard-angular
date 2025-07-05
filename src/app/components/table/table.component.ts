import { Component, type OnInit } from '@angular/core';
// import {  AgGridModule } from 'ag-grid-angular'; // Angular Data Grid Component
// import type { ColDef } from 'ag-grid-community'; // Column Definition Type Interface
import { ColumnMode, NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ExcelUploadComponent } from '../excel-upload/excel-upload.component';

export interface Employee {
  nombre: string;
  genero?: string;
  ciudad: string;
  edad?: number;
}

@Component({
  selector: 'app-table',
  imports: [NgxDatatableModule, ExcelUploadComponent],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
})
export class TableComponent implements OnInit {
  ngOnInit(): void {}

  handleExcelData(data: any[]): void {
    console.log('Datos del Excel:', data);
  }

  ColumnMode = ColumnMode;

  rows: Employee[] = [
    { nombre: 'Juan Pérez', edad: 28, ciudad: 'Madrid' },
    { nombre: 'María López', edad: 35, ciudad: 'Barcelona' },
    { nombre: 'Carlos Díaz', edad: 42, ciudad: 'Sevilla' },
    { nombre: 'Ana Torres', edad: 31, ciudad: 'Valencia' },
    { nombre: 'Pedro Gómez', edad: 45, ciudad: 'Bilbao' },
    { nombre: 'Lucía Fernández', edad: 39, ciudad: 'Zaragoza' },
    { nombre: 'Javier López', edad: 50, ciudad: 'Granada' },
    { nombre: 'Sofía Martínez', edad: 27, ciudad: 'Alicante' },
    { nombre: 'Manuel Castro', edad: 34, ciudad: 'Málaga' },
    { nombre: 'Raquel Vázquez', edad: 29, ciudad: 'Santander' },
    { nombre: 'Daniel Ruiz', edad: 41, ciudad: 'Valladolid' },
    { nombre: 'Carla Mendoza', edad: 36, ciudad: 'Gijón' },
    { nombre: 'Fernando Ortega', edad: 38, ciudad: 'Córdoba' },
    { nombre: 'Patricia Rojas', edad: 32, ciudad: 'Burgos' },
    { nombre: 'Alberto Jiménez', edad: 47, ciudad: 'Salamanca' },
    { nombre: 'Cristina Herrera', edad: 25, ciudad: 'Pamplona' },
    { nombre: 'Ricardo Fuentes', edad: 40, ciudad: 'Murcia' },
    { nombre: 'Elena Navarro', edad: 37, ciudad: 'Tarragona' },
    { nombre: 'Luis Álvarez', edad: 30, ciudad: 'San Sebastián' },
    { nombre: 'Marta Morales', edad: 33, ciudad: 'Oviedo' },
    { nombre: 'Juan Pérez', edad: 28, ciudad: 'Madrid' },
    { nombre: 'María López', edad: 35, ciudad: 'Barcelona' },
    { nombre: 'Carlos Díaz', edad: 42, ciudad: 'Sevilla' },
    { nombre: 'Ana Torres', edad: 31, ciudad: 'Valencia' },
    { nombre: 'Pedro Gómez', edad: 45, ciudad: 'Bilbao' },
    { nombre: 'Lucía Fernández', edad: 39, ciudad: 'Zaragoza' },
    { nombre: 'Javier López', edad: 50, ciudad: 'Granada' },
    { nombre: 'Sofía Martínez', edad: 27, ciudad: 'Alicante' },
    { nombre: 'Manuel Castro', edad: 34, ciudad: 'Málaga' },
    { nombre: 'Raquel Vázquez', edad: 29, ciudad: 'Santander' },
    { nombre: 'Daniel Ruiz', edad: 41, ciudad: 'Valladolid' },
    { nombre: 'Carla Mendoza', edad: 36, ciudad: 'Gijón' },
    { nombre: 'Fernando Ortega', edad: 38, ciudad: 'Córdoba' },
    { nombre: 'Patricia Rojas', edad: 32, ciudad: 'Burgos' },
    { nombre: 'Alberto Jiménez', edad: 47, ciudad: 'Salamanca' },
    { nombre: 'Cristina Herrera', edad: 25, ciudad: 'Pamplona' },
    { nombre: 'Ricardo Fuentes', edad: 40, ciudad: 'Murcia' },
    { nombre: 'Elena Navarro', edad: 37, ciudad: 'Tarragona' },
    { nombre: 'Luis Álvarez', edad: 30, ciudad: 'San Sebastián' },
    { nombre: 'Marta Morales', edad: 33, ciudad: 'Oviedo' },
  ];

  // columnDefs: ColDef[] = [
  //   { field: 'nombre', headerName: 'Nombre', flex: 1 },
  //   { field: 'edad', headerName: 'Edad', flex: 1 },
  //   { field: 'ciudad', headerName: 'Ciudad', flex: 1 },
  // ];
}
