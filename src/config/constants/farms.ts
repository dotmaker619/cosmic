import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    risk: 5,
    lpSymbol: 'COSMIC-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0xfF5F8C72070215CF6f1b24C6A3B281a901a5f693', // yes
    },
    tokenSymbol: 'COSMIC',
    tokenAddresses: {
      97: '',
      56: '0x960cC8F437165b7362a34D95D1ec62Dd2A940f00', // yes
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
    v2: true,
    tokenDecimals: 18
  },
  {
    pid: 1,
    risk: 3,
    lpSymbol: 'BNB-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
    },
    tokenSymbol: 'BNB',
    tokenAddresses: {
      97: '',
      56: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
    v2: true,
    tokenDecimals: 18
  },
  {
    pid: 2,
    risk: 2,
    lpSymbol: 'DOT-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xDd5bAd8f8b360d76d12FdA230F8BAF42fe0022CF',
    },
    tokenSymbol: 'DOT',
    tokenAddresses: {
      97: '',
      56: '0x7083609fce4d1d8dc0c979aab8c869ea2c873402',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
    v2: true,
    tokenDecimals: 18
  },
  {
    pid: 3,
    risk: 4,
    lpSymbol: 'STRITE-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xF7fAc8B64B4e92a420EdC3178bCAf4847Fe2cF75',
    },
    tokenSymbol: 'STRITE',
    tokenAddresses: {
      97: '',
      56: '0x9b93c29595dd603f75854EbA3C5f4EE078EE4454',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
    v2: false,
    tokenDecimals: 18
  },
  {
    pid: 4,
    risk: 4,
    lpSymbol: 'HAPPY-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xEDF4Cc0a7A7133Fd0cAf3568a197B0F04B938c0F',
    },
    tokenSymbol: 'HAPPY',
    tokenAddresses: {
      97: '',
      56: '0xB0B924C4a31b7d4581a7F78F57ceE1E65736Be1D',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
    v2: false,
    tokenDecimals: 18
  },
  {
    pid: 5,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'COSMIC',
    lpAddresses: {
      97: '',
      56: '0xfF5F8C72070215CF6f1b24C6A3B281a901a5f693', // COSMIC-BUSD
    },
    tokenSymbol: 'COSMIC',
    tokenAddresses: {
      97: '',
      56: '0x960cC8F437165b7362a34D95D1ec62Dd2A940f00',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
    v2: true,
    tokenDecimals: 18
  },
  {
    pid: 6,
    risk: 1,
    isTokenOnly: true,
    lpSymbol: 'HAPPY',
    lpAddresses: {
      97: '',
      56: '0xEDF4Cc0a7A7133Fd0cAf3568a197B0F04B938c0F', // HAPPY-BNB
    },
    tokenSymbol: 'HAPPY',
    tokenAddresses: {
      97: '',
      56: '0xB0B924C4a31b7d4581a7F78F57ceE1E65736Be1D',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
    v2: false,
    tokenDecimals: 9
  },
  {
    pid: 7,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'DOT',
    lpAddresses: {
      97: '',
      56: '0x54C1ec2f543966953F2F7564692606EA7D5a184e', // DOT-BUSD
    },
    tokenSymbol: 'DOT',
    tokenAddresses: {
      97: '',
      56: '0x7083609fce4d1d8dc0c979aab8c869ea2c873402',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
    v2: true,
    tokenDecimals: 18
  },
  {
    pid: 8,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'WBNB',
    lpAddresses: {
      97: '',
      56: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16', // BNB-BUSD
    },
    tokenSymbol: 'WBNB',
    tokenAddresses: {
      97: '',
      56: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
    v2: true,
    tokenDecimals: 18
  },
  {
    pid: 9,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'STRITE',
    lpAddresses: {
      97: '',
      56: '0xF7fAc8B64B4e92a420EdC3178bCAf4847Fe2cF75', // STRITE-BNB
    },
    tokenSymbol: 'STRITE',
    tokenAddresses: {
      97: '',
      56: '0x9b93c29595dd603f75854eba3c5f4ee078ee4454',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
    v2: true,
    tokenDecimals: 18
  },
  {
    pid: 10,
    risk: 5,
    lpSymbol: 'CAKE-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x0eD7e52944161450477ee417DE9Cd3a859b14fD0', // yes
    },
    tokenSymbol: 'CAKE',
    tokenAddresses: {
      97: '',
      56: '0x960cC8F437165b7362a34D95D1ec62Dd2A940f00', // yes
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
    v2: true,
    tokenDecimals: 18
  },
  {
    pid: 11,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'ADA',
    lpAddresses: {
      97: '',
      56: '0x28415ff2C35b65B9E5c7de82126b4015ab9d031F', // ADA-BNB
    },
    tokenSymbol: 'ADA',
    tokenAddresses: {
      97: '',
      56: '0x3ee2200efb3400fabb9aacf31297cbdd1d435d47',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
    v2: true,
    tokenDecimals: 18
  },
  {
    pid: 12,
    risk: 5,
    lpSymbol: 'ADA-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x28415ff2C35b65B9E5c7de82126b4015ab9d031F', // yes
    },
    tokenSymbol: 'ADA',
    tokenAddresses: {
      97: '',
      56: '0x3ee2200efb3400fabb9aacf31297cbdd1d435d47', // yes
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
    v2: true,
    tokenDecimals: 18
  },
]

export default farms
