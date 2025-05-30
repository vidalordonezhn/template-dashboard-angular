import { CommonModule } from '@angular/common';
import { Component, type OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnInit {
  ngOnInit(): void {}
  private readonly themeKey = 'dark';

  isNotificationsMenuOpen: boolean = false;
  toggleNotificationsMenu(event: any) {
    this.isNotificationsMenuOpen = !this.isNotificationsMenuOpen;
  }

  closeNotificationsMenu() {
    this.isNotificationsMenuOpen = false;
  }

  isSideMenuOpen: boolean = false;
  toggleSideMenu() {
    this.isSideMenuOpen = !this.isSideMenuOpen;
  }
  closeSideMenu() {
    this.isSideMenuOpen = false;
  }

  dark = this.getThemeFromLocalStorage();

  toggleTheme() {
    this.dark = !this.dark;
    this.setThemeInLocalStorage(this.dark);
  }

  getThemeFromLocalStorage(): boolean {
    try {
      const storedTheme = localStorage.getItem(this.themeKey);
      if (storedTheme !== null) {
        return JSON.parse(storedTheme);
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    } catch (error) {
      console.error('Error al obtener el tema de localStorage:', error);
      return false;
    }
  }

  setThemeInLocalStorage(isDarkMode: boolean): void {
    try {
      localStorage.setItem(this.themeKey, JSON.stringify(isDarkMode));
      document.documentElement.classList.toggle('dark', isDarkMode);
    } catch (error) {
      console.error('Error al guardar el tema en localStorage:', error);
    }
  }

  isProfileMenuOpen: boolean = false;
  toggleProfileMenu() {
    this.isProfileMenuOpen = !this.isProfileMenuOpen;
  }
  closeProfileMenu() {
    this.isProfileMenuOpen = false;
  }
}
