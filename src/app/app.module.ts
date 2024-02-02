import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from "@angular/material/table";
import { AppEffects } from "./+state/app.effect";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { featureKey, reducer } from "./+state/app.reducer";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature(featureKey, reducer),
    EffectsModule.forRoot([]),
    EffectsModule.forFeature([AppEffects]),
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    StoreDevtoolsModule.instrument({}),
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
