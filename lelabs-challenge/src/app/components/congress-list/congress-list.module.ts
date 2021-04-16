import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/shared/material.module';
import { RouterModule, Routes } from '@angular/router';
import { CongressListComponent } from './congress-list.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { MembersCrudComponent } from './members-crud/members-crud.component';

const routes: Routes = [
  { path: '', component: CongressListComponent},
  { path: ':id', component: MembersCrudComponent},
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [CongressListComponent, MembersCrudComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes),
    FlexLayoutModule,
    HttpClientModule
  ],
  providers: []
})
export class CongressListModule { }
