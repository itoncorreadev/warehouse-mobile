import { NgModule, NO_ERRORS_SCHEMA} from "@angular/core";
import { NativeScriptFormsModule, NativeScriptModule, NativeScriptHttpClientModule, ModalDialogService } from "@nativescript/angular";
import { ReactiveFormsModule } from "@angular/forms"

import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";

import { SignInComponent } from "./pages/sign-in/sign-in.component";
import { SignUpComponent } from "./pages/sign-up/sign-up.component";
import { HomeComponent } from "./pages/home/home.component";

import { AuthGuard } from "./guards/auth.guard";
import { AuthService } from "./shared/auth.service";
import { TokenService } from "./shared/token.service";

import { HttpModule, JsonpModule} from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        HttpModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule,
        NativeScriptFormsModule,
        NativeScriptHttpClientModule,
        JsonpModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        SignInComponent,
        SignUpComponent
    ],
    providers: [
        AuthGuard,
        AuthService,
        TokenService,
        ModalDialogService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
