import './field-per-type.scss';
interface FieldPerTypeProps {
    elementSchema: any;
    form: any;
    value: any;
    className: string | undefined;
    customOnChange?: (field: any) => any;
    cb?: any;
    cache: any;
    dataApi: any;
    index: any;
    values: any;
}
export declare const FieldPerType: (props: FieldPerTypeProps) => import("react/jsx-runtime").JSX.Element | null;
export declare const createRules: (elementSchema: any) => any;
export {};
