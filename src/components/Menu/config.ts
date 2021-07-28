import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://exchange.pancakeswap.finance/',
      },
      {
        label: 'Liquidity',
        href: 'https://exchange.pancakeswap.finance/#/pool',
      },
    ],
  },
  {
    label: 'Meteor',
    icon: 'CometIcon',
    href: '/meteor',
  },
  {
    label: 'Nebula',
    icon: 'MoonIcon',
    href: '/nebula',
  },
  // {
  //   label: 'Pools',
  //   icon: 'PoolIcon',
  //   href: '/pools',
  // },
  {
    label: 'Lottery (Coming Soon)',
    icon: 'TicketIcon',
    href: '',
  },
  {
    label: 'NFT (Coming Soon)',
    icon: 'NftIcon',
    href: '',
  },
  {
    label: 'Price Chart',
    icon: 'InfoIcon',
    href: 'https://dex.guru/token/',
  },
  {
    label: 'Audit',
    icon: 'AuditIcon',
    href: 'https://github.com/TechRate/Smart-Contract-Audits/blob/main/Cosmic%20Swap.pdf',
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/cosmicswap/',
      },
      {
        label: 'Docs',
        href: 'https://docs.cosmicswap.finance/',
      },
      {
        label: 'Medium',
        href: 'https://cosmicswap.medium.com/',
      },
    ],
  },
]

export default config
