import { CommonModule } from '@angular/common';
import { Component, Input, type OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent implements OnInit {

  ngOnInit(): void { }

  @Input() title: string = 'Total clients'; // Título del card
  @Input() count: number|string = 0; // Número de clientes
  @Input() iconColor: string = '';
}
