import { CommonModule } from '@angular/common';
import { Component, input, Type, type OnInit } from '@angular/core';
import { map } from 'rxjs';

export type ButtonColor =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning';

@Component({
  selector: 'app-button',
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent implements OnInit {
  color = input<ButtonColor>('primary');
  text = input<string>('Button');

  ngOnInit(): void {}

  buttonClass(): string {
    const base =
      'bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-5 py-2 rounded-lg shadow-sm';

    const map = {
      primary: 'bg-blue-600 hover:bg-blue-700 text-white',
      secondary: 'bg-gray-600 hover:bg-gray-900 text-gray-800',
      success: 'bg-emerald-600 hover:bg-emerald-700 text-white',
      danger: 'bg-red-500 hover:bg-red-600 text-white',
      warning: 'bg-yellow-400 hover:bg-yellow-500 text-gray-900',
    } as const;
    return `${base} ${map[this.color()]}`;
  }
}
