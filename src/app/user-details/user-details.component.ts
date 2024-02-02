import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatTableDataSource } from "@angular/material/table";
import { AppUserFacade } from "../+state/app.facade";
import { Router } from "@angular/router";



@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  @Output() updateRecordEmit = new EventEmitter();
  displayedColumns: string[] = ['userName', 'email', 'address', 'actionDelete', 'actionEdit'];
  dataSource : any;
  list = 2;
  constructor(private router: Router, private facade: AppUserFacade) {
  }

  ngOnInit(): void {
    this.facade.getRoleDataList$.subscribe((data) => {
      if(data){
        this.dataSource = new MatTableDataSource(data);
      }
    })
  }

  deleteRecord(i: any) {
    this.facade.deleteRecord(i);
  }

  updateRecord(i: any, element: any) {
    this.router.navigate([], {
      queryParams: {
        Page: 'Registration'
      },
      queryParamsHandling: 'merge',
    });
    this.updateRecordEmit.emit({i: i, element: element})
  }
}
