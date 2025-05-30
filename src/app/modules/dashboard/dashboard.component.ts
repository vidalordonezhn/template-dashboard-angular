import { Component, type OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from '../../components/card/card.component';

@Component({
  standalone: true,
  selector: 'app-dashboard',
  imports: [RouterOutlet, CardComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit {
  ngOnInit(): void {}
}
