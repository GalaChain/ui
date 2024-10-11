import { defineComponent, Plugin, VueElementConstructor } from 'vue';

interface IOptions {
    includeStyles?: boolean;
    plugins?: {
        plugin: Plugin;
        options: unknown;
    }[];
}
export declare const defineCustomElement: <T>(component: ReturnType<typeof defineComponent>, { includeStyles, plugins }: IOptions) => VueElementConstructor<T>;
export {};
