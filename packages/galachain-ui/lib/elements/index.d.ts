import { VueElementConstructor } from 'vue';
import { TransferTokenProps } from '../components/TransferToken.vue';
import { MintTokenProps } from '../components/MintToken.vue';
import { MintTokenWithAllowanceProps } from '../components/MintTokenWithAllowance.vue';

declare const GalaTransferToken: VueElementConstructor<TransferTokenProps>;
declare const GalaMintToken: VueElementConstructor<MintTokenProps>;
declare const GalaMintTokenWithAllowance: VueElementConstructor<MintTokenWithAllowanceProps>;
export { GalaTransferToken, GalaMintToken, GalaMintTokenWithAllowance };
