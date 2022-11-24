import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-related-sites',
  templateUrl: './related-sites.component.html',
  styleUrls: ['./related-sites.component.css']
})
export class RelatedSitesComponent implements OnInit {

  icon = "<span class=\"material-symbols-outlined\">open_in_new</span>"

  constructor() {
  }

  ngOnInit(): void {
  }

}
