import './array-element-buttons.scss';
interface ArrayElementButtonsProps {
    index?: number;
    fieldsLength: number;
    onAdd?: () => any;
    onRemove?: () => any;
    shouldAddMargin: boolean;
    disabled: boolean;
}
export declare const ArrayElementButtons: (props: ArrayElementButtonsProps) => import("react/jsx-runtime").JSX.Element;
export {};
