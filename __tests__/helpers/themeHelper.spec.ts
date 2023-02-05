import { Theme } from "@app/helpers";
import { ThemeType } from "@app/types";
import { MAIN_FOOTER_DATA, WEBSITE_LOGO } from "@app/constants";

describe('Theme.getWebsiteLogo', () => {
  it('Should return website logo or fallback website logo when input parameters are invalid', () => {
    expect(Theme.getWebsiteLogo()).toStrictEqual(WEBSITE_LOGO);
    expect(Theme.getWebsiteLogo(ThemeType.Primary)).toStrictEqual(WEBSITE_LOGO);
    expect(Theme.getWebsiteLogo(ThemeType.Secondary)).toStrictEqual(WEBSITE_LOGO);
  });
});

describe('Theme.getRootStyle', () => {
  it('Should return style for website or empty string when input parameter is not supported', () => {
    expect(Theme.getRootStyle()).toStrictEqual(undefined);
    expect(Theme.getRootStyle(ThemeType.Primary)).not.toStrictEqual('');
    expect(Theme.getRootStyle(ThemeType.Secondary)).not.toStrictEqual('');
  });
});

describe('Theme.getFooterData', () => {
  it('Should return website footer data for website in provided theme variant', () => {
    expect(Theme.getFooterData(ThemeType.Primary)).toStrictEqual(MAIN_FOOTER_DATA);
    expect(Theme.getFooterData(ThemeType.Secondary)).toStrictEqual(MAIN_FOOTER_DATA);
  });

  it('Should return undefined when input variant not valid', () => {
    expect(Theme.getFooterData()).toStrictEqual(undefined);
    expect(Theme.getFooterData(undefined)).toStrictEqual(undefined);
  });
});

describe('Theme.getSocialIconForType', () => {
  it('Should return social icon according to an input parameter', () => {
    expect(Theme.getSocialIconForType('facebook')).toBeDefined();
    expect(Theme.getSocialIconForType('instagram')).toBeDefined();
    expect(Theme.getSocialIconForType('youtube')).toBeDefined();
    expect(Theme.getSocialIconForType('twitter')).toBeDefined();
    expect(Theme.getSocialIconForType('linkedin')).toBeDefined();
  });
});
