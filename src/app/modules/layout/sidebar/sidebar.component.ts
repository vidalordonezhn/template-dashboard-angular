import { CommonModule } from '@angular/common';
import { Component, Input, type OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-sidebar',
  imports: [CommonModule, RouterLink],
  templateUrl: './sidebar.component.html',
  animations: [
    trigger('submenuAnimation', [
      transition(':enter', [
        style({ opacity: 0, maxHeight: 0 }),
        animate('300ms ease-in-out', style({ opacity: 1, maxHeight: '100vh' })),
      ]),
      transition(':leave', [
        style({ opacity: 1, maxHeight: '100vh' }),
        animate('300ms ease-in-out', style({ opacity: 0, maxHeight: 0 })),
      ]),
    ]),
    trigger('sidebarAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-20px)' }),
        animate(
          '150ms ease-in-out',
          style({ opacity: 1, transform: 'translateX(0)' })
        ),
      ]),
      transition(':leave', [
        style({ opacity: 1, transform: 'translateX(0)' }),
        animate(
          '150ms ease-in-out',
          style({ opacity: 0, transform: 'translateX(-20px)' })
        ),
      ]),
    ]),
  ],
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent implements OnInit {
  ngOnInit(): void {}

  @Input() isSideMenuOpen = false;
  sidebarToggle = false;
  selected = ''; // Estado para controlar el menú desplegable
  page = ''; // Estado de la página actual

  toggleSidebar() {
    this.sidebarToggle = !this.sidebarToggle; // Alterna el estado
  }

  toggleSelection(menuItem: string) {
    this.selected = this.selected === menuItem ? '' : menuItem;
  }

  isPagesMenuOpen: boolean = false;
  togglePagesMenu() {
    this.isPagesMenuOpen = !this.isPagesMenuOpen;
  }

  toggleSideMenu() {
    this.isSideMenuOpen = !this.isSideMenuOpen;
  }
  closeSideMenu() {
    this.isSideMenuOpen = false;
  }
}
