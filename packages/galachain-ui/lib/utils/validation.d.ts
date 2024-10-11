import { default as BigNumber } from 'bignumber.js';

export declare const validate: <T>(data: T, validator: ((data: T) => string) | Array<(data: T) => string>) => string[];
export declare const getStepSizeFromDecimals: (decimals: number) => BigNumber;
