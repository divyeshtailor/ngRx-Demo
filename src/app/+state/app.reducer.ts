import { Action, createReducer, on } from '@ngrx/store';
import { AppActions } from './app.action';


export const featureKey = 'userDetail';

export interface AppState {
  Role: any
}

export const initialState: AppState = {
  Role: null,
};

export interface UserAppState {
    [featureKey]: AppState;
}

export const appReducer = createReducer<AppState>(
    initialState,
    on(AppActions.UserListData, (state,  { data } ) => (
      {
        ...state,
        Role: data
    })),
    on(AppActions.addData, (state,  { data } ) => (
      {
        ...state,
        Role: addRecord(data, state.Role)
    })),
    on(AppActions.deleteData, (state,  { index } ) => (
      {
        ...state,
        Role: deleteRecord(index, state.Role)
    })),
    on(AppActions.updateData, (state,  { data } ) => {
      return ({
            ...state,
            Role: updateRecord(data, state.Role)
          })
      }
    ),
);

const addRecord = (data: any, allData: any) => {
  let record = allData;
    record.push(data);
  return record;
};

const updateRecord = (data: any, allData: any) => {
  let updatedRecord: any = [];

  allData.forEach((r: any, i: number) => {
    if(data.index == i) {
      updatedRecord.push(data.updatedData);
    } else {
      updatedRecord.push(r);
    }
  });

  return updatedRecord;
};


const deleteRecord = (index: any, allData: any) => {
  let r: any = [];
  allData.forEach((record: any, i:any) => {
    if(i != index) r.push(record)
  });
return r
};



export function reducer(state: AppState | undefined, action: Action) {
    return appReducer(state, action);
}
