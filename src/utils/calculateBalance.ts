/*
 * Copyright (c) Gala Games Inc. All rights reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import type { TokenAllowance, TokenBalance, TokenClass } from '@gala-chain/api'
import BigNumber from 'bignumber.js'

export const calculateAvailableBalance = (balance: TokenBalance) => {
  const now = Date.now()
  // @ts-expect-error awaiting new type definitions
  const locked = balance?.lockedHolds?.reduce((acc, hold) => {
    if (hold.expires && hold.expires < now) {
      return acc
    }
    return acc.plus(hold.quantity)
  }, BigNumber(0))
  // @ts-expect-error awaiting new type definitions
  const available = BigNumber(balance?.quantity ?? 0).minus(locked ?? 0)
  return BigNumber.max(available, 0)
}

export const calculateAvailableMintAllowances = (allowances: TokenAllowance[]) => {
  return allowances.reduce((total, allowance) => {
    const availableAllowance = allowance.quantity.minus(allowance.quantitySpent ?? 0)
    return total.plus(availableAllowance)
  }, BigNumber(0))
}

export const calculateAvailableMintSupply = (token: TokenClass, address?: string) => {
  if (address && !token.authorities.includes(address)) {
    return new BigNumber(0)
  }
  const value1 = BigNumber(token.maxSupply ?? 0)
    .minus(token.knownMintAllowanceSupply ?? 0)
    .plus(token.totalBurned ?? 0)
  const value2 = BigNumber(token.maxCapacity ?? 0).minus(token.knownMintAllowanceSupply ?? 0)
  const min = BigNumber.min(value1, value2)
  return min.isGreaterThan(0) ? min : new BigNumber(0)
}
