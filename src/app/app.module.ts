import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { 
    MatIconModule ,
    MatButtonModule,  
    MatFormFieldModule, 
    MatInputModule, 
    MatRippleModule, 
    MatCheckboxModule, 
    MatToolbarModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatTableModule,
    MatPaginatorModule, 
    MatExpansionModule,
    MatTabsModule,
    MatNavList,
    MatListModule
} from '@angular/material'; 
import { MatMenuModule } from '@angular/material/menu';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatSidenavModule } from '@angular/material/sidenav'; 
import { SearchSelectModule } from '@oasisdigital/angular-material-search-select';  


import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { LoginComponent } from './modules/login/login.component'; 

import { SidebarComponent } from './core/sidebar/sidebar.component'; 
import { HomeComponent } from './modules/home/home.component';


const MaterialImports = [
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatRippleModule,
  MatMenuModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatIconModule,
  MatSelectModule,
  MatAutocompleteModule,
  MatProgressSpinnerModule,
  MatTableModule,
  MatPaginatorModule, 
  MatExpansionModule,
  MatTabsModule,
  MatSidenavModule,
  MatListModule
];

const appRoutes: Routes = [
  { path: "", redirectTo:  "login", pathMatch: 'full' },
  { path: "login", component: LoginComponent }, 
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    SidebarComponent, 
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialImports,
    HttpModule,
    HttpClientModule
  ],
  /*exports: [
    MaterialImports,
    SearchSelectModule
  ],*/
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
