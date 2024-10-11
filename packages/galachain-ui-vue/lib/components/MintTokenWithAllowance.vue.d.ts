import { TokenClass, MintTokenWithAllowanceDto } from '@gala-chain/api';
import { IGalaChainError } from '../types/galachain-error';

export interface MintTokenWithAllowanceProps {
    /** User address */
    address?: string;
    /** Token class */
    token?: TokenClass;
    /** Submit button loading state */
    loading?: boolean;
    /** Submit button disabled state */
    disabled?: boolean;
    /** Fee amount */
    feeAmount?: string;
    /** Fee currency */
    feeCurrency?: string;
}
export interface MintTokenWithAllowanceEmits {
    /** Fired when the form is successfully submitted */
    (event: 'submit', value: MintTokenWithAllowanceDto): void;
    /** Fired when a form error occurs, does not include validation errors */
    (event: 'error', value: IGalaChainError): void;
    /** Fired when the form is changed */
    (event: 'change', value: MintTokenWithAllowanceDto): void;
}
declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<import('vue').ExtractPropTypes<__VLS_TypePropsToRuntimeProps<MintTokenWithAllowanceProps>>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    submit: (value: MintTokenWithAllowanceDto) => void;
    error: (value: IGalaChainError) => void;
    change: (value: MintTokenWithAllowanceDto) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<__VLS_TypePropsToRuntimeProps<MintTokenWithAllowanceProps>>> & Readonly<{
    onChange?: (value: MintTokenWithAllowanceDto) => any;
    onError?: (value: IGalaChainError) => any;
    onSubmit?: (value: MintTokenWithAllowanceDto) => any;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>, {
    empty?(_: {}): any;
}>;
export default _default;
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
