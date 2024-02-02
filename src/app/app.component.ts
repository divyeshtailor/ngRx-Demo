import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AppUserFacade } from "./+state/app.facade";

const ELEMENT_DATA: any = [
  {userName: 'Jhon Doe', email: 'sample@sample.com', address: [{city: 'Bangalore' , state: 'Karnataka' , pin: 123456 }]}
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  page = 'reg';
  title = 'my-website';
  updateData : any;

   constructor(private router: Router,  private ref: ChangeDetectorRef, private facade: AppUserFacade) {

   }
ngOnInit(): void {
  this.facade.loadData(ELEMENT_DATA);
  this.router.navigate([], {
    queryParams: {
      Page: 'Registration'
    },
    queryParamsHandling: 'merge',
  });
}

  registration() {
    this.page = 'reg';
    this.router.navigate([], {
      queryParams: {
        Page: 'Registration'
      },
      queryParamsHandling: 'merge',
    });
  }

  user() {
    this.page = 'user';
    this.router.navigate([], {
      queryParams: {
        Page: 'User-Detail'
      },
      queryParamsHandling: 'merge',
    });
  }

  sendUser($event: any) {
    if($event) {
      this.page = 'user';
      this.router.navigate([], {
        queryParams: {
          Page: 'User-Detail'
        },
        queryParamsHandling: 'merge',
      });
    }
  }

  updateR($event: any) {
    this.page = 'reg';
    this.updateData = $event;
  }
}
