import './create-edit-config.scss';
interface CreateEditConfigProps {
    values?: any | any[] | string;
    visible?: boolean;
    schema: any | any[];
    onSubmit: (values: any) => any;
    displayName?: string;
    label?: string;
    onHide: () => any;
    submitLoading?: boolean;
    cache: any;
    dataApi?: (url: any, param?: any, value?: any) => any;
    permissions: any[];
    isEdit: boolean;
}
export declare const CreateEditConfig: (props: CreateEditConfigProps) => import("react/jsx-runtime").JSX.Element;
export {};
