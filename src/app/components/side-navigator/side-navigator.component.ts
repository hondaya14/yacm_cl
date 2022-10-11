import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-side-navigator',
  templateUrl: './side-navigator.component.html',
  styleUrls: ['./side-navigator.component.css']
})
export class SideNavigatorComponent implements OnInit {
  expanded: boolean = false; // side nav expanded flag
  constructor() {
  }

  ngOnInit(): void {
  }

}
