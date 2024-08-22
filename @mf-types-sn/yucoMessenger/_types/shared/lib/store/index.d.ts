import { TypedUseSelectorHook } from 'react-redux';
import { localStore } from 'app/store';
import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
export type RootState = ReturnType<ReturnType<typeof localStore.createReducer>>;
export type AppThunkDispatch = ThunkDispatch<RootState, any, AnyAction>;
export declare const useAppDispatch: () => AppThunkDispatch;
export declare const useAppSelector: TypedUseSelectorHook<RootState>;
