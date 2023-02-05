import { FooterData, RouteType } from '@app/types';

export const MAIN_FOOTER_DATA: FooterData = {
  logoSubtitle: 'footer.subtitle',
  contact: {
    title: 'footer.contact.title',
    streetAddress: 'footer.contact.streetAddress',
    cityAddress: 'footer.contact.cityAddress',
    phone: 'footer.contact.phone',
    email: 'footer.contact.email',
    openingHours: [
      { interval: 'footer.contact.openingHours.weekdays', time: '08:00 – 21:00' },
      { interval: 'footer.contact.openingHours.sunday', time: '10:00 – 14:00' },
    ],
  },
  sections: [
    {
      title: 'footer.sites.title',
      items: [
        {
          title: 'menu.weather',
          url: RouteType.Weather(),
          target: '_parent',
        },
        {
          title: 'menu.portfolio',
          url: RouteType.Portfolio(),
          target: '_parent',
        },
        {
          title: 'menu.calendar',
          url: RouteType.Calendar(),
          target: '_parent',
        },
      ],
    },
    {
      title: 'footer.info.title',
      items: [
        {
          title: 'menu.about',
          url: RouteType.About(),
          target: '_parent',
        },
        {
          title: 'menu.contact',
          url: RouteType.Contact(),
          target: '_parent',
        },
      ],
    },
  ],
  socials: [
    {
      type: 'facebook',
      url: 'https://www.facebook.com/',
    },
    {
      type: 'instagram',
      url: 'https://www.instagram.com/',
    },
    {
      type: 'youtube',
      url: 'http://www.youtube.com/',
    },
    {
      type: 'linkedin',
      url: 'https://www.linkedin.com/',
    },
    {
      type: 'twitter',
      url: 'https://twitter.com/',
    },
  ],
  rating: {
    value: 4.9,
    maxValue: 5,
    ratingsCount: 'footer.rating.amount',
    url: 'https://www.google.com/search?q=google+ratings&client=firefox-b-d&ei=gJ3fY43eNI797_UP-r-mmAs&ved=0ahUKEwiNnr7Irf78AhWO_rsIHfqfCbMQ4dUDCA4&uact=5&oq=google+ratings&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIHCAAQgAQQEzIHCAAQgAQQEzIHCAAQgAQQEzIHCAAQgAQQEzIHCAAQgAQQEzIHCAAQgAQQEzIHCAAQgAQQEzIJCAAQgAQQChATMgkIABCABBAKEBMyBwgAEIAEEBM6CggAEEcQ1gQQsAM6EAguELEDEIMBEMcBENEDEEM6CggAELEDEIMBEEM6CwgAEIAEELEDEIMBOgQIABBDOggILhCxAxCDAToRCC4QgAQQsQMQgwEQxwEQ0QM6EwguEIAEELEDEIMBEMcBENEDEAo6DQgAEIAEELEDEIMBEAo6BwgAELEDEEM6CAgAEIAEELEDOgUIABCABDoHCAAQgAQQCjoGCAAQFhAeOggIABAWEB4QCkoECEEYAEoECEYYAFDkBFiYEWDgEmgBcAF4AIABhgGIAfQJkgEDOS41mAEAoAEByAEIwAEB&sclient=gws-wiz-serp',
    text: 'footer.rating.text',
  },
};
