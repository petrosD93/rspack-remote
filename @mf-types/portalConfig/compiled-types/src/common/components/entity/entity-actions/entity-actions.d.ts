/// <reference types="react" />
import './entity-actions.scss';
import { Action } from './actions';
interface EntityActionsProps {
    tag?: string | JSX.Element;
    flag1?: string | JSX.Element;
    flag2?: string | JSX.Element;
    actions?: Action[];
    totalEnabled?: boolean;
}
export declare const EntityActions: (props: EntityActionsProps) => import("react/jsx-runtime").JSX.Element;
export {};
