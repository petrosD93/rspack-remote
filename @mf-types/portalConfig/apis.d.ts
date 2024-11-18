
    export type RemoteKeys = 'portalConfig/Config';
    type PackageType<T> = T extends 'portalConfig/Config' ? typeof import('portalConfig/Config') :any;