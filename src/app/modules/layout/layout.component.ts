import { Component, type OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "./navbar/navbar.component";

@Component({
  standalone: true,
  selector: 'app-layout',
  imports: [RouterOutlet, SidebarComponent, CommonModule, NavbarComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
})
export class LayoutComponent implements OnInit {
  ngOnInit(): void {
    this.trapCleanup = () => {};
  }

  isSideMenuOpen: boolean = false;
  toggleSideMenu() {
    this.isSideMenuOpen = !this.isSideMenuOpen;
  }
  closeSideMenu() {
    this.isSideMenuOpen = false;
  }

  isNotificationsMenuOpen: boolean = false;
  toggleNotificationsMenu(event:any) {
    this.isNotificationsMenuOpen = !this.isNotificationsMenuOpen;
  }

  closeNotificationsMenu() {
    this.isNotificationsMenuOpen = false;
  }

  isProfileMenuOpen: boolean = false;
  toggleProfileMenu() {
    this.isProfileMenuOpen = !this.isProfileMenuOpen;
  }
  closeProfileMenu() {
    this.isProfileMenuOpen = false;
  }

  // Modal
  isModalOpen: boolean = false;
  // trapCleanup:undefined = null;
  trapCleanup!: () => void;

  openModal() {
    this.isModalOpen = true;
    // this.trapCleanup = focusTrap(document.querySelector('#modal'));
  }

  closeModal() {
    this.isModalOpen = false;
    this.trapCleanup();
  }
}
