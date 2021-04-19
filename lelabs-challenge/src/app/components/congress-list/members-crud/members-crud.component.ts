import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLinkActive } from '@angular/router';
import { Observable } from 'rxjs';
import { Members } from 'src/app/models/congress-response.model';
import { CongressListService } from 'src/app/services/congress-list.service';

@Component({
  selector: 'app-members-crud',
  templateUrl: './members-crud.component.html',
  styleUrls: ['./members-crud.component.scss']
})
export class MembersCrudComponent implements OnInit {
  id: string;
  memberFields: Members;
  members: Observable<Members[]>;
  fieldNames: string[];
  fieldValues: string[];

  constructor(private congressListService: CongressListService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.memberFields = this.congressListService.getMemberById(this.id);
      this.fieldNames = Object.keys(this.memberFields);
      this.fieldValues = Object.values(this.memberFields);
      console.log(this.memberFields);
    })
  }

}
