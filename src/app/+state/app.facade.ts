import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { UserAppState } from "./app.reducer";
import { AppActions } from "./app.action";
import { fromApp } from "./app.selector";

@Injectable({
    providedIn: 'root'
})

export class AppUserFacade {
    constructor(private store: Store<UserAppState>) {}
    getRoleDataList$ = this.store.select(fromApp.RoleValue);
    loadData(data: any) {
        this.store.dispatch(AppActions.UserListData({ data }));
    }

    addData(data: any){
      this.store.dispatch(AppActions.addData({ data }));
    }

    deleteRecord(index: any) {
      this.store.dispatch(AppActions.deleteData({ index }));
    }

    updateRecord(data: any) {
      this.store.dispatch(AppActions.updateData({ data }));
    }
}
