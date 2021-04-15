import { Component, OnInit } from '@angular/core';
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
  constructor(private congressService: CongressListService) { }

  ngOnInit(): void {
    this.members = this.congressService.members;
    this.congressService.getAllMembers();
  }

}
