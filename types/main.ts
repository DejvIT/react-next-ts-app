export type WebsiteLogo = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

export type HomepageSlideshowItem = {
  src: string;
  altText: string;
  caption: string;
  title: string;
  url: string;
};

export type FooterData = {
  logoSubtitle?: string;
  contact?: {
    title: string;
    cityAddress: string;
    streetAddress: string;
    phone: string;
    email: string;
    openingHours?: {
      interval: string;
      time: string;
    }[];
  };
  sections?: Array<{ title: string; items: FooterSectionItem }>;
  socials?: Array<{ type: SocialNetworkType; url: string }>;
  certification?: string;
  certifications?: Array<{ title: string; url?: string | null; target?: string }>;
  rating?: {
    value: number;
    maxValue: number;
    ratingsCount?: number | string;
    url?: string;
    text?: string;
  } | null;
};

type FooterSectionItem = Array<{
  title: string;
  url?: string | null;
  categoryCount?: number;
  target?: string;
}>;

export type SocialNetworkType = 'facebook' | 'instagram' | 'youtube' | 'twitter' | 'linkedin';
