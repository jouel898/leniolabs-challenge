import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/shared/material.module';
import { RouterModule, Routes } from '@angular/router';
import { CongressListComponent } from './congress-list.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { CongressListService } from 'src/app/services/congress-list.service';

const routes: Routes = [
  { path: '', component: CongressListComponent},
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [CongressListComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes),
    FlexLayoutModule,
    HttpClientModule,
  ],
  providers: [CongressListService]
})
export class CongressListModule { }
