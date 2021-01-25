import BigNumber from 'bignumber.js/bignumber'

export const SUBTRACT_GAS_LIMIT = 100000

const ONE_MINUTE_IN_SECONDS = new BigNumber(60)
const ONE_HOUR_IN_SECONDS = ONE_MINUTE_IN_SECONDS.times(60)
const ONE_DAY_IN_SECONDS = ONE_HOUR_IN_SECONDS.times(24)
const ONE_YEAR_IN_SECONDS = ONE_DAY_IN_SECONDS.times(365)

export const INTEGERS = {
  ONE_MINUTE_IN_SECONDS,
  ONE_HOUR_IN_SECONDS,
  ONE_DAY_IN_SECONDS,
  ONE_YEAR_IN_SECONDS,
  ZERO: new BigNumber(0),
  ONE: new BigNumber(1),
  ONES_31: new BigNumber('4294967295'), // 2**32-1
  ONES_127: new BigNumber('340282366920938463463374607431768211455'), // 2**128-1
  ONES_255: new BigNumber(
    '115792089237316195423570985008687907853269984665640564039457584007913129639935',
  ), // 2**256-1
  INTEREST_RATE_BASE: new BigNumber('1e18'),
}


export const contractAddresses = {
  lfi: {
    3: '0x2c8CA595e711f770613335c26CbB0086aDa90428',
  },
  masterChef: {
    3: '0x1fBE8EA0e880f35B55C7845d4e832b8C6Cf51223',
  },
  weth: {
    3: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
  },
  xLfi: {
    3: '0x213802F7D2874d1EaeD1cb4A28e6485C41600C75'
  }
}



export const supportedPools = [
  // Perm Menu
  {
    pid: 0,
    lpAddresses: {
      3: '0x2b73a8268f2430d155a82b612b9ec513f505a39e',
    },
    tokenAddresses: {
      3: '0x2c8CA595e711f770613335c26CbB0086aDa90428',
    },
    name: 'Lfi Swag!',
    symbol: 'LFI-ETH LLP',
    tokenSymbol: 'LFI',
    icon: '⛷️',
  }
  
]
