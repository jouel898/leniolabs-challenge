import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { CongressListService } from 'src/app/services/congress-list.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {
  minSenate: number = 80;
  maxSenate: number = 117; 
  minHouse: number = 102;
  maxHouse: number = 117;
  minCongress: number;
  maxCongress: number;
  chamber: string;
  congress: string = 'senate';
  constructor(private congressService: CongressListService) {
  }

  ngOnInit(): void {
    this.minCongress = this.minSenate;
    this.maxCongress = this.maxSenate;
    this.congress = this.congressService.defaultCongress;
    this.chamber = this.congressService.defaultChamber;
  }

  submitFilters() {
    this.congressService.getAllMembers(this.congress, this.chamber);
  }

}
