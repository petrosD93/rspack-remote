import './dynamic-element.scss';
interface DynamicElementProps {
    elementsSchema: any;
    form: any;
    values: any | any[] | string;
    onKeysChanged?: (name: string, sections: any[]) => any;
    cache: any;
    dataApi?: () => any;
}
export declare const DynamicElement: (props: DynamicElementProps) => import("react/jsx-runtime").JSX.Element;
export {};
