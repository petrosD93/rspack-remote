import { Reducer } from 'redux';
import { RouteObject } from '@portal/portal-foundation';
import { MenuItem } from '@portal/portal-components/components/NavigationMenu/NavigationMenu';
import { ResourceRoleMap } from '@portal/portal-auth';
declare const Exposes: ExposesI;
export default Exposes;
export interface ExposesI {
    reducers: {
        [k: string]: Reducer<any>;
    };
    rolesResourceMap: ResourceRoleMap;
    routes: RouteObject[];
    components: any;
    menuItems: {
        primary?: MenuItem[];
        secondary?: MenuItem[];
    };
    languages: {
        [k: string]: any;
    };
    version: string;
}
