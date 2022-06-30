import { JsonDocsComponent, JsonDocsProp } from '../../stencil-public-runtime';
export declare const getDoc: (webcomponent: string) => Array<JsonDocsComponent>;
export declare const getProps: (webcomponent: string) => Array<JsonDocsProp>;
export declare const getDescription: (webcomponent: string, propName: string) => string;
export declare const getDefault: (webcomponent: string, propName: string) => string;
