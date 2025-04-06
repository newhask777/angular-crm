import { Component, OnInit } from '@angular/core';
import { Navigation } from 'src/app/models/navigation';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.sass']
})
export class LayoutComponent implements OnInit {

  navigation : Navigation[] = [];
  navMenu : boolean = true;

  constructor(
    private navigationService: NavigationService,
  ) { }

  ngOnInit(): void {
    this.getMenu();
  }

  getMenu(): void {
    this.navigationService.getNavigation().subscribe(
      (data: Navigation[]) => {
        this.navigation = data;
        console.log(this.navigation);
      }
    );
  }

}
