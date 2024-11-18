import { Draft, PayloadAction } from '@reduxjs/toolkit';
export interface SettingsState {
    settingDetails: any;
}
export declare const settingsSlice: import("@reduxjs/toolkit").Slice<SettingsState, {
    setSettingDetails: (state: Draft<SettingsState>, action: PayloadAction<any>) => void;
}, "settings">;
export declare const setSettingDetails: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, "settings/setSettingDetails">;
export declare const getSettingDetails: (state: RootStateType<T>) => any;
declare const _default: import("redux").Reducer<SettingsState, import("redux").AnyAction>;
export default _default;
