import { Component } from "@angular/core";
// import { libraryEntryPoint } from "@ci-web/lib";
// import { librarySecondaryEntryPoint } from "@ci-web/lib/secondary";

@Component({
  selector: "app-component",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  constructor() {
    console.log(libraryEntryPoint);
    console.log(librarySecondaryEntryPoint);
  }
}
