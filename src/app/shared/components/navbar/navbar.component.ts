import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  title: string;

  constructor(private titleService: Title) {
    this.title = this.titleService.getTitle();
  }

  ngOnInit(): void {
  }

}
