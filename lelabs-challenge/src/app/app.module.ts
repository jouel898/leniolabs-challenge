import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from './shared/material.module';
import { ToolbarComponent } from './shared/toolbar/toolbar.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FiltersComponent } from './shared/filters/filters.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CongressListService } from './services/congress-list.service';

const routes: Routes = [
  { path: 'congresslist', loadChildren: () => import('./components/congress-list/congress-list.module').then(m => m.CongressListModule) },
  { path: '**', redirectTo: 'congresslist' }
];
@NgModule({
  declarations: [AppComponent, ToolbarComponent, FiltersComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    MaterialModule,
    RouterModule.forRoot(routes),
    FlexLayoutModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
