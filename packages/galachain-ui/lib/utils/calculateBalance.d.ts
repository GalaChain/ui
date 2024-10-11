import { TokenAllowance, TokenBalance, TokenClass } from '@gala-chain/api';
import { default as BigNumber } from 'bignumber.js';

export declare const calculateAvailableBalance: (balance: TokenBalance) => BigNumber;
export declare const calculateAvailableMintAllowances: (allowances: TokenAllowance[]) => BigNumber;
export declare const calculateAvailableMintSupply: (token: TokenClass, address?: string) => BigNumber;
