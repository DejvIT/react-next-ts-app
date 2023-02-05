import classNames from 'classnames';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import React, { memo, useMemo } from 'react';
import { Col, Container, Nav, Navbar, NavDropdown, Row } from 'react-bootstrap';

import { CtIcon, DenevyIcon, FatlessIcon, JunoIcon, MesaIcon, StarIcon, SynapsaIcon } from '@app/components';
import { ActionType, useAppState } from '@app/contexts';
import { arrayFromLength, Theme } from '@app/helpers';
import { RouteType, ThemeType } from '@app/types';

import styles from './index.module.scss';

interface Props {
  title: string;
  children: React.ReactNode;
}

export const Layout: React.FC<Props> = (props) => {
  const { title, children } = props;
  const router = useRouter();
  const { appState, dispatch } = useAppState();
  const { t } = useTranslation('common');

  const theme = appState.formData?.theme;

  const rootStyleMemo = useMemo(() => Theme.getRootStyle(theme), [theme]);
  const rootLogoMemo = useMemo(() => Theme.getWebsiteLogo(theme), [theme]);
  const rootFooterMemo = useMemo(() => Theme.getFooterData(theme), [theme]);

  const routes = {
    home: {
      title: t('home.title'),
      url: RouteType.Home(),
    },
    about: {
      title: t('about.title'),
      url: RouteType.About(),
    },
    weather: {
      title: t('weather.title'),
      url: RouteType.Weather(),
    },
    gallery: {
      title: t('gallery.title'),
      url: RouteType.Portfolio(),
    },
    calendar: {
      title: t('calendar.title'),
      url: RouteType.Calendar(),
    },
    contact: {
      title: t('contact.title'),
      url: RouteType.Contact(),
    },
  };

  const partners = [
    {
      title: 'Fatless',
      src: 'https://www.fatless.sk',
      svg: <FatlessIcon colorHex="#ffffff80" />,
    },
    {
      title: 'Denevy',
      src: 'https://www.denevy.eu',
      svg: <DenevyIcon colorHex="#ffffff80" />,
    },
    {
      title: 'Juno One',
      src: 'https://www.juno.one',
      svg: <JunoIcon colorHex="#ffffff80" />,
    },
    {
      title: 'Česká Televize',
      src: 'https://www.ivysilani.cz/',
      svg: <CtIcon colorHex="#ffffff80" />,
    },
    {
      title: 'Synapsa',
      src: 'https://www.synapsa.tech',
      svg: <SynapsaIcon colorHex="#ffffff80" />,
    },
    {
      title: 'Mesa parts',
      src: 'https://www.mesa-parts.cz/',
      svg: <MesaIcon colorHex="#ffffff80" />,
    },
  ];

  const switchTheme = async () => {
    let newTheme: ThemeType | undefined = ThemeType.Primary;
    switch (theme) {
      case ThemeType.Primary:
        newTheme = ThemeType.Secondary;
        break;
      case ThemeType.Secondary:
        newTheme = undefined;
        break;
    }

    dispatch({
      type: ActionType.UpdateTheme,
      payload: {
        formData: {
          theme: newTheme,
        },
      },
    });
  };

  return (
    <>
      <Head>
        <title>{title ? `${title} |` : ''} React App</title>
        <link href="/favicon.ico" rel="icon" />
        <meta content="noindex,nofollow" key="robots" name="robots" />
        <meta content="noindex,nofollow" key="googlebot" name="googlebot" />
      </Head>

      <div>
        <header className={styles.header}>
          <Navbar bg="light" className={styles.navbar} collapseOnSelect expand="lg" variant="light">
            <Container>
              <Navbar.Brand>
                <img
                  alt={rootLogoMemo.alt}
                  className={styles.brandLogo}
                  height={rootLogoMemo.height}
                  src={rootLogoMemo.src}
                  width={rootLogoMemo.width}
                />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link onClick={() => router.replace(routes.home.url)}>{t('menu.home')}</Nav.Link>
                  <Nav.Link onClick={() => router.replace(routes.about.url)}>{t('menu.about')}</Nav.Link>
                  <NavDropdown id="collasible-nav-dropdown" title={t('menu.dropdown')}>
                    <NavDropdown.Item onClick={() => router.replace(routes.weather.url)}>
                      {t('menu.weather')}
                    </NavDropdown.Item>
                    <NavDropdown.Item onClick={() => router.replace(routes.gallery.url)}>
                      {t('menu.portfolio')}
                    </NavDropdown.Item>
                    <NavDropdown.Item onClick={() => router.replace(routes.calendar.url)}>
                      {t('menu.calendar')}
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item onClick={() => router.replace(routes.contact.url)}>
                      {t('menu.contact')}
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          <img alt="car" className={styles.absoluteImage} onClick={switchTheme} src="/img/navbar/car.png" width={250} />
        </header>

        <main className={styles.main}>{children}</main>

        {rootFooterMemo && (
          <>
            <footer className={styles.footer}>
              <Container>
                <div className={styles.footerInsuranceCompanyLogos}>
                  {partners.map((partner, index) => {
                    return (
                      <a href={partner.src} key={index} rel="noreferrer" target="_blank">
                        {partner.svg}
                      </a>
                    );
                  })}
                </div>
                <hr />
                <Row>
                  <Col lg={5}>
                    <img
                      alt="Logo"
                      className={styles.footerLogo}
                      draggable={false}
                      src={rootLogoMemo.src}
                      width={rootLogoMemo.width}
                    />
                    {rootFooterMemo.logoSubtitle && <p>{t(rootFooterMemo.logoSubtitle)}</p>}
                    <ul className={styles.footerSocials}>
                      {rootFooterMemo.socials
                        ?.filter((social) => !!social.url && !!social.type)
                        ?.map((socials) => (
                          <li key={socials.type}>
                            <a
                              href={socials.url}
                              rel="noopener noreferrer"
                              target="_blank"
                              title={socials.type.charAt(0).toUpperCase() + socials.type.slice(1)}
                            >
                              {Theme.getSocialIconForType(socials.type)}
                              <span className="visually-hidden">{socials.type}</span>
                            </a>
                          </li>
                        ))}
                    </ul>
                  </Col>

                  <Col lg={7}>
                    <Row>
                      {rootFooterMemo.sections?.map((section, xIndex) => {
                        return (
                          <Col className={styles.footerSection} key={xIndex} lg={4} sm={6} xs={6}>
                            <strong>{t(section.title)}</strong>
                            <ul>
                              {section?.items
                                ?.filter((item) => !!item.url)
                                ?.map((item, tIndex) => (
                                  <li key={tIndex}>
                                    <a href={item.url as string} target={item.target ? item.target : undefined}>
                                      {t(item.title)} {item.categoryCount ? <span>{item.categoryCount}</span> : null}
                                    </a>
                                  </li>
                                ))}
                            </ul>
                          </Col>
                        );
                      })}
                      {rootFooterMemo.contact && (
                        <Col className={styles.footerSection} lg={4} sm={6} xs={6}>
                          <strong>{t(rootFooterMemo.contact.title)}</strong>
                          <ul className={styles.textStrong}>
                            <li>
                              <span style={{ lineHeight: '1.7rem' }}>{t(rootFooterMemo.contact.streetAddress)},</span>
                              <br />
                              <span style={{ lineHeight: '1.7rem' }}>{t(rootFooterMemo.contact.cityAddress)}</span>
                            </li>
                          </ul>
                          <ul>
                            <li>
                              <span>
                                {t('footer.phone')} {t(rootFooterMemo.contact.phone)}
                              </span>
                            </li>
                            <li>
                              <span>
                                {t('footer.email')}{' '}
                                <a href={`mailto:${t(rootFooterMemo.contact.email)}`}>
                                  {t(rootFooterMemo.contact.email)}
                                </a>
                              </span>
                            </li>
                          </ul>
                          {rootFooterMemo.contact.openingHours && (
                            <ul className={styles.textStrong}>
                              {rootFooterMemo.contact.openingHours?.map((hours, hourIndex) => {
                                return (
                                  <li key={hourIndex}>
                                    <span style={{ width: '80px', display: 'inline-block' }}>{t(hours.interval)}</span>
                                    <span>{hours.time}</span>
                                  </li>
                                );
                              })}
                            </ul>
                          )}
                        </Col>
                      )}
                    </Row>
                  </Col>
                </Row>
                <Row>
                  {rootFooterMemo.rating && (
                    <Col lg={12}>
                      <div className={styles.footerRating}>
                        <div className={styles.stars}>
                          {arrayFromLength(rootFooterMemo.rating?.maxValue)?.map((x) => (
                            <StarIcon isFilled={x + 1 <= Math.round(rootFooterMemo.rating?.value || 0)} key={x} />
                          ))}
                        </div>
                        <div>
                          {rootFooterMemo.rating?.value}
                          <span>
                            {' '}
                            / {rootFooterMemo.rating?.maxValue}
                            {rootFooterMemo.rating?.ratingsCount ? <>・{t('footer.rating.amount')}</> : null}
                          </span>
                        </div>
                      </div>
                      <small className={styles.text}>{t(rootFooterMemo.rating.text as string)}</small>
                    </Col>
                  )}

                  <Col lg={12}>
                    <hr />
                  </Col>

                  <Col className="text-right" lg={12}>
                    <small className={classNames(styles.text, styles.disclaimer)}>
                      2020 - {new Date()?.getFullYear()} {t('footer.disclaimer')}
                    </small>
                  </Col>
                </Row>
              </Container>
            </footer>
          </>
        )}
      </div>
      {rootStyleMemo && (
        <style global jsx key="websiteTheme">{`
          :root {
            ${rootStyleMemo}
          }
        `}</style>
      )}
    </>
  );
};

export default memo(Layout);
