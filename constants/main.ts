import { RouteType, WebsiteLogo, HomepageSlideshowItem } from '@app/types';
import { PortfolioItem } from '@app/types/interface';

export const LOCALSTORAGE_APP_STATE_KEY = 'react_app_state';

export const HOMEPAGE_SLIDESHOW_ITEMS: HomepageSlideshowItem[] = [
  {
    src: '/img/slideshow/spring.png',
    altText: 'spring',
    caption: 'Spring',
    title: 'Spring',
    url: RouteType.Weather(),
  },
  {
    src: '/img/slideshow/summer.png',
    altText: 'summer',
    caption: 'Summer',
    title: 'Summer',
    url: RouteType.Weather(),
  },
  {
    src: '/img/slideshow/autumn.png',
    altText: 'autumn',
    caption: 'Autumn',
    title: 'Autumn',
    url: RouteType.Weather(),
  },
  {
    src: '/img/slideshow/winter.png',
    altText: 'winter',
    caption: 'Winter',
    title: 'Winter',
    url: RouteType.Weather(),
  },
];

export const WEBSITE_LOGO: WebsiteLogo = {
  src: '/img/navbar/wolf.png',
  width: 80,
  height: 80,
  alt: 'Logo',
};

export const PORTFOLIO_ITEMS_DESKTOP: PortfolioItem[] = [
  {
    src: '/img/portfolio/dp.png',
    altText: 'dp',
    title: 'David Pavlicko',
  },
  {
    src: '/img/portfolio/fatless.png',
    altText: 'fatless',
    title: 'Fatless',
  },
  {
    src: '/img/portfolio/fatless2.png',
    altText: 'fatless',
    title: 'Fatless',
  },
  {
    src: '/img/portfolio/gopromote.png',
    altText: 'gopromote',
    title: 'GoPromote',
  },
  {
    src: '/img/portfolio/juno.png',
    altText: 'juno',
    title: 'Juno',
  },
  {
    src: '/img/portfolio/juno2.png',
    altText: 'juno',
    title: 'Juno',
  },
  {
    src: '/img/portfolio/mesa.png',
    altText: 'mesa',
    title: 'Mesa',
  },
  {
    src: '/img/portfolio/mesa2.png',
    altText: 'mesa',
    title: 'Mesa',
  },
  {
    src: '/img/portfolio/synapsa.png',
    altText: 'synapsa',
    title: 'Synapsa',
  },
  {
    src: '/img/portfolio/synapsa2.png',
    altText: 'synapsa',
    title: 'Synapsa',
  },
  {
    src: '/img/portfolio/timeee.png',
    altText: 'timeee',
    title: 'Timeee',
  },
  {
    src: '/img/portfolio/timeee2.png',
    altText: 'timeee',
    title: 'Timeee',
  },
];

export const PORTFOLIO_ITEMS_MOBILE: PortfolioItem[] = [
  {
    src: '/img/portfolio/arkania.png',
    altText: 'arkania',
    title: 'Arkania',
  },
  {
    src: '/img/portfolio/calculator.png',
    altText: 'calculator',
    title: 'Insurance calculator',
  },
  {
    src: '/img/portfolio/denevy.png',
    altText: 'denevy',
    title: 'Denevy',
  },
  {
    src: '/img/portfolio/ivysilani.png',
    altText: 'ivysilani',
    title: 'iVysilani',
  },
  {
    src: '/img/portfolio/marketplace.png',
    altText: 'marketplace',
    title: 'Marketplace',
  },
];
