/// <reference types="react" />
import './data-panel.scss';
export interface DataPanelProps {
    header: string | JSX.Element;
    data: any[] | any;
    itemTemplate: (item: any) => any;
    footer?: string | JSX.Element;
    loading: boolean;
    onScroll?: () => any;
    contentFooter?: string | JSX.Element;
    id: string;
}
export declare const DataPanel: (props: DataPanelProps) => import("react/jsx-runtime").JSX.Element;
