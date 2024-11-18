/// <reference types="react" />
import './entity.scss';
import { Action } from './entity-actions/actions';
interface EntityProps {
    type: string;
    heading: string | JSX.Element;
    tag?: string | JSX.Element;
    flag1?: string | JSX.Element;
    flag2?: string | JSX.Element;
    actions?: Action[];
    disableHover?: boolean;
    isActive?: boolean;
    body?: JSX.Element;
    isRequired?: boolean;
    isGlobal?: boolean;
    showActionsOnHover?: boolean;
}
export declare const ENTITY_TYPES: {
    header: string;
    subheader: string;
    subsection: string;
    category: string;
    default: string;
};
export declare const Entity: (props: EntityProps) => import("react/jsx-runtime").JSX.Element;
export {};
