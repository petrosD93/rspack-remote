/// <reference types="react" />
import './confirmation-dialog.scss';
interface ConfirmationDialogProps {
    visible: boolean;
    message?: string | JSX.Element;
    rejectLabel: string;
    acceptLabel: string;
    header: string;
    accept?: () => any;
    reject?: () => any;
}
export declare const ConfirmationDialog: (props: ConfirmationDialogProps) => import("react/jsx-runtime").JSX.Element;
export {};
