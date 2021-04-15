import { Component, OnInit } from '@angular/core';
import { CongressListService } from 'src/app/services/congress-list.service';

@Component({
  selector: 'app-congress-list',
  templateUrl: './congress-list.component.html',
  styleUrls: ['./congress-list.component.scss']
})
export class CongressListComponent implements OnInit {

  constructor(private membersService: CongressListService) { }

  ngOnInit(): void {
    this.membersService.getAllMembers();
  }

}
