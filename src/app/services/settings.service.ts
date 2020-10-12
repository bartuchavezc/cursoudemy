import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class SettingsService {
  private linkTheme = document.querySelector("#theme");

  constructor() {
    const url =
      localStorage.getItem("theme") || "./assets/css/colors/purple-dark.css";
    this.linkTheme.setAttribute("href", url);
  }

  changeTheme(theme: string) {
    const url = `./assets/css/colors/${theme}.css`;

    this.linkTheme.setAttribute("href", url);
    localStorage.setItem("theme", url);
    this.checkCurrentTheme();
  }

  checkCurrentTheme(): void {
    const links = document.querySelectorAll(".selector");

    links.forEach((elem) => {
      elem.removeAttribute(".working");

      const btnTheme = elem.getAttribute("data-theme");
      const btmThemeUrl = `./assets/css/colors/${btnTheme}.css`;
      const currentTheme = this.linkTheme.getAttribute("href");

      if (btmThemeUrl === currentTheme) {
        elem.classList.add("working");
      }
    });
  }
}
