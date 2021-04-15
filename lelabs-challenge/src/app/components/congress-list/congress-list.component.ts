import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { CongressResponse, Members } from 'src/app/models/congress-response.model';
import { CongressListService } from 'src/app/services/congress-list.service';

@Component({
  selector: 'app-congress-list',
  templateUrl: './congress-list.component.html',
  styleUrls: ['./congress-list.component.scss']
})
export class CongressListComponent implements OnInit {
  members: Observable<Members[]>;
  membersList: Members[];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] = ['id', 'title', 'date'];
  dataSource: MatTableDataSource<Members>;
  constructor(private congressService: CongressListService) { 
    this.dataSource = new MatTableDataSource<Members>(this.membersList);
  }

  ngOnInit(): void {
    this.members = this.congressService.members;
    this.congressService.getAllMembers();
    this.members.subscribe(members => {
      this.dataSource.data = members;
    });
  }

  
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
