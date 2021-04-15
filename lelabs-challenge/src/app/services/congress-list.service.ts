import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CongressResponse } from '../models/congress-response.model';

// API_KEY PRO_PUBLICA k2GqBGrANBtOWkBcqdWytYIPXpv8XCpG2xInnAiP
@Injectable({
  providedIn: 'root'
})
export class CongressListService {
  private _members: BehaviorSubject<CongressResponse>;
  private congressMembers: { 
    responseCongressMembers:  CongressResponse
  }

  constructor(private http: HttpClient) { 
    this.congressMembers = { responseCongressMembers: new CongressResponse };
    this._members = new BehaviorSubject<CongressResponse>(new CongressResponse);
  }

  get members(): Observable<CongressResponse> {
    return this._members.asObservable();
  }

  getAllMembers() {
    const headers = new HttpHeaders({'X-API-Key': 'k2GqBGrANBtOWkBcqdWytYIPXpv8XCpG2xInnAiP'});
    const baseUrl = 'https://api.propublica.org/congress/v1/'; 

    return this.http.get<CongressResponse>(baseUrl + '80/senate/members.json', {headers: headers})
      .subscribe(data => {
        console.log(data);
        this.congressMembers.responseCongressMembers = data;
        this._members.next(Object.assign({}, this.congressMembers).responseCongressMembers)
    }, error => {
      console.log("Failed to fetch users")
    });
  }
  //let headers = new HttpHeaders({'TRN-Api-Key': this.apiKey});
 //this.http.get(this.apiUrl, {headers: headers})
}
