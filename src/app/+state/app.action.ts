import { createAction, props } from '@ngrx/store';

const UserListData = createAction('[user] Load User ', props<{ data: any }>());

const addData = createAction('[user] Add Data ', props<{ data: any }>());

const deleteData = createAction('[user] Delete Data ', props<{ index: any }>());

const updateData = createAction('[user] Update Data ', props<{ data: any }>());

export const AppActions = {
  UserListData,
  addData,
  deleteData,
  updateData
};
