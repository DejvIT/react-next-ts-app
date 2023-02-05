import { FacebookIcon, InstagramIcon, LinkedinIcon, TwitterIcon, YoutubeIcon } from '@app/components/Icons';
import { FooterData, SocialNetworkType, ThemeType, WebsiteLogo } from '@app/types';
import { MAIN_FOOTER_DATA, WEBSITE_LOGO } from '@app/constants';

export class Theme {
  static getSocialIconForType(type: SocialNetworkType) {
    switch (type) {
      case 'facebook':
        return <FacebookIcon />;
      case 'instagram':
        return <InstagramIcon />;
      case 'twitter':
        return <TwitterIcon />;
      case 'linkedin':
        return <LinkedinIcon />;
      case 'youtube':
        return <YoutubeIcon />;
      default:
        console.warn(`Unsupported social network of type '${type}'.`);
        return null;
    }
  }

  static getWebsiteLogo(theme?: ThemeType): WebsiteLogo {
    switch (theme) {
      default:
        return WEBSITE_LOGO;
    }
  }

  static getRootStyle(theme?: ThemeType): string | undefined {
    switch (theme) {
      case ThemeType.Primary:
        return `
         --clrPrimary: #e95414;
         --clrPrimaryDark: #B13601;
         --clrPrimaryLight: #f9cbb8;
         --clrPrimaryLighter: #fbeae3;

         --clrDarkPrimary: #3b3330;
         --clrDarkSecondary: #736158;
         --clrDarkTertiary: #ab9b93;

         --clrGreen: #46b48b;
         --clrGreenLight: #daf0e8;
         --clrGreenDark: #288260;

         --clrOrange: #e98f14;
         --clrOrangeLight: #f9ecd1;
         --clrOrangeDark: #b46b07;

         --clrDivider: #e1d9ce;
         --clrBg: #f5f4f3;

         --clrInputFocusShadow: rgba(233, 84, 20, 0.16);
         --clrItemBoxShadow: rgba(59, 51, 48, 0.12);

         --clrDisabledBg: #F5F4F3;
         --clrDisabledText: #AB9B93;
     `;
      case ThemeType.Secondary:
        return `
         --clrPrimary: #0000ff;
         --clrPrimaryDark: #1b08d9;
         --clrPrimaryLight: #705bdf;
         --clrPrimaryLighter: #a398ed;

         --clrDarkPrimary: #262178;
         --clrDarkSecondary: #564982;
         --clrDarkTertiary: #786cb3;

         --clrGreen: #3890a2;
         --clrGreenLight: #c4d8ea;
         --clrGreenDark: #226e78;

         --clrOrange: #af6b4f;
         --clrOrangeLight: #e0d4d6;
         --clrOrangeDark: #995b2c;

         --clrDivider: #bfb8d5;
         --clrBg: #dcdcf4;

         --clrInputFocusShadow: rgba(233, 84, 20, 0.16);
         --clrItemBoxShadow: rgba(59, 51, 48, 0.12);

         --clrDisabledBg: #F5F4F3;
         --clrDisabledText: #AB9B93;
     `;
      default:
        // Default in app.scss
        return undefined;
    }
  }

  static getFooterData(theme?: ThemeType): FooterData | undefined {
    if (!theme) {
      return undefined;
    }

    return MAIN_FOOTER_DATA;
  }
}
