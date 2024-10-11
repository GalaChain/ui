import { ValidationArgs } from '@vuelidate/core';
import { TransferTokenDto, TokenClass } from '@gala-chain/api';
import { IGalaChainError } from '../../types/galachain-error';

export interface TokenClassBalance extends TokenClass {
    available: string;
}
interface IFormModel {
    token: TokenClassBalance;
    quantity: string;
    recipient: string;
}
declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    recipient: import('vue').PropType<string>;
    quantity: import('vue').PropType<string>;
    error: {
        type: import('vue').PropType<IGalaChainError>;
        default: any;
    };
    disabled: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    token: {
        type: import('vue').PropType<TokenClassBalance>;
        required: true;
    };
    walletAddress: {
        type: import('vue').PropType<string>;
    };
    loading: {
        type: import('vue').PropType<boolean>;
    };
    showRecipient: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    recipientHeader: {
        type: import('vue').PropType<string>;
        default: string;
    };
    recipientPlaceholder: {
        type: import('vue').PropType<string>;
        default: string;
    };
    submitText: {
        type: import('vue').PropType<string>;
        default: string;
    };
    feeAmount: {
        type: import('vue').PropType<string>;
    };
    feeCurrency: {
        type: import('vue').PropType<string>;
        default: string;
    };
    rules: {
        type: import('vue').PropType<ValidationArgs<Partial<IFormModel>>>;
        default: any;
    };
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    change: (value: TransferTokenDto) => void;
    error: (value: IGalaChainError) => void;
    submit: (value: TransferTokenDto) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    recipient: import('vue').PropType<string>;
    quantity: import('vue').PropType<string>;
    error: {
        type: import('vue').PropType<IGalaChainError>;
        default: any;
    };
    disabled: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    token: {
        type: import('vue').PropType<TokenClassBalance>;
        required: true;
    };
    walletAddress: {
        type: import('vue').PropType<string>;
    };
    loading: {
        type: import('vue').PropType<boolean>;
    };
    showRecipient: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    recipientHeader: {
        type: import('vue').PropType<string>;
        default: string;
    };
    recipientPlaceholder: {
        type: import('vue').PropType<string>;
        default: string;
    };
    submitText: {
        type: import('vue').PropType<string>;
        default: string;
    };
    feeAmount: {
        type: import('vue').PropType<string>;
    };
    feeCurrency: {
        type: import('vue').PropType<string>;
        default: string;
    };
    rules: {
        type: import('vue').PropType<ValidationArgs<Partial<IFormModel>>>;
        default: any;
    };
}>> & Readonly<{
    onChange?: (value: TransferTokenDto) => any;
    onError?: (value: IGalaChainError) => any;
    onSubmit?: (value: TransferTokenDto) => any;
}>, {
    error: IGalaChainError;
    disabled: boolean;
    showRecipient: boolean;
    recipientHeader: string;
    recipientPlaceholder: string;
    submitText: string;
    feeCurrency: string;
    rules: ValidationArgs<Partial<IFormModel>>;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>, {
    submit?(_: {
        label: string;
    }): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
