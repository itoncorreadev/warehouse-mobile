import { Component } from "@angular/core";
import { TokenService } from "./shared/token.service";

@Component({
    selector: "ns-app",
    templateUrl: "./app.component.html",
})

export class AppComponent {
  public constructor(private tokenService: TokenService){
    this.tokenService.init({
      apiBase: "https://warehouse-rails-api.herokuapp.com",
      globalOptions: {
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/vnd.warehouse.v2"
        }
      }
    });
  }
}
