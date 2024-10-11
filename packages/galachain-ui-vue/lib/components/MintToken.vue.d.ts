import { TokenClass, MintTokenDto, TokenAllowance } from '@gala-chain/api';
import { IGalaChainError } from '../types/galachain-error';

export interface MintTokenProps {
    /** Token allowance */
    tokenAllowance?: {
        token: TokenClass;
        allowances: TokenAllowance[];
    };
    /** Submit button loading state */
    loading?: boolean;
    /** Submit button disabled state */
    disabled?: boolean;
    /** Fee amount */
    feeAmount?: string;
    /** Fee currency */
    feeCurrency?: string;
}
export interface MintTokenEmits {
    /** Fired when the form is successfully submitted */
    (event: 'submit', value: MintTokenDto): void;
    /** Fired when a form error occurs, does not include validation errors */
    (event: 'error', value: IGalaChainError): void;
    /** Fired when the form is changed */
    (event: 'change', value: MintTokenDto): void;
}
declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<import('vue').ExtractPropTypes<__VLS_TypePropsToRuntimeProps<MintTokenProps>>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    submit: (value: MintTokenDto) => void;
    error: (value: IGalaChainError) => void;
    change: (value: MintTokenDto) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<__VLS_TypePropsToRuntimeProps<MintTokenProps>>> & Readonly<{
    onChange?: (value: MintTokenDto) => any;
    onError?: (value: IGalaChainError) => any;
    onSubmit?: (value: MintTokenDto) => any;
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
