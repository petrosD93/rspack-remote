import './dynamic-dropdown.scss';
interface DynamicDropdownProps {
    formField: any;
    elementSchema: any;
    change?: () => any;
    form: any;
    cache?: any;
    dataApi?: (url: any, param?: any, value?: any) => any;
}
export declare const DynamicDropdown: (props: DynamicDropdownProps) => import("react/jsx-runtime").JSX.Element | null;
export {};
