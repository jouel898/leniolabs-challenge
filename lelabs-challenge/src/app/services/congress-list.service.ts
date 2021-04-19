import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CongressResponse, Members } from '../models/congress-response.model';

// API_KEY PRO_PUBLICA k2GqBGrANBtOWkBcqdWytYIPXpv8XCpG2xInnAiP
@Injectable({
  providedIn: 'root'
})
export class CongressListService {
  private _members: BehaviorSubject<Members[]>;
  private congressMembers: { 
    responseCongressMembers:  CongressResponse
  }
  public defaultCongress: string = '80';
  public defaultChamber: string = 'senate';

  constructor(private http: HttpClient) { 
    this.congressMembers = { responseCongressMembers: new CongressResponse };
    this._members = new BehaviorSubject<Members[]>([]);
  }

  get members(): Observable<Members[]> {
    return this._members.asObservable();
  }

  getAllMembers(congress: string, chambers: string) {
    const headers = new HttpHeaders({'X-API-Key': 'k2GqBGrANBtOWkBcqdWytYIPXpv8XCpG2xInnAiP'});
    const baseUrl = 'https://api.propublica.org/congress/v1/'; 

    return this.http.get<CongressResponse>(baseUrl + congress + '/' + chambers + '/members.json', {headers: headers})
      .subscribe(data => {
        this.congressMembers.responseCongressMembers = data;
        this._members.next(Object.assign({}, this.congressMembers.responseCongressMembers.results[0]).members)
    }, error => {
      console.log("Failed to fetch members")
    });
  }

  getMemberById(id: string){
    return this.congressMembers.responseCongressMembers.results[0].members.find(x => x.id == id);
  }
  
}
