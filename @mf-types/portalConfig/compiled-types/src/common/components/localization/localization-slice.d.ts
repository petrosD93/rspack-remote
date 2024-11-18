import { Draft, PayloadAction } from '@reduxjs/toolkit';
export interface LocalizationState {
    locale: string;
}
export declare const localizationSlice: import("@reduxjs/toolkit").Slice<LocalizationState, {
    setLocale: (state: Draft<LocalizationState>, action: PayloadAction<any>) => void;
}, "localization">;
export declare const setLocale: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, "localization/setLocale">;
export declare const getLocale: (state: RootStateType<T>) => any;
declare const _default: import("redux").Reducer<LocalizationState, import("redux").AnyAction>;
export default _default;
