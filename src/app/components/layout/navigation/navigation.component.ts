import { Component, Input, OnInit, Output } from '@angular/core';
import { Navigation } from 'src/app/models/navigation';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.sass']
})
export class NavigationComponent implements OnInit {

  @Input() navigation: Navigation[] = [];
  @Output() sidenavToggle = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onToggleSidenav() {
    this.sidenavToggle.emit()
  }

}
