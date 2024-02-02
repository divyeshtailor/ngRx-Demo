import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState, featureKey } from './app.reducer';

export const getFeatureState = createFeatureSelector<AppState>(featureKey);

export const fromApp = {
    RoleValue: createSelector(getFeatureState, (state) => state?.Role),
};
