import { useTranslation } from 'next-i18next';
import React, { memo } from 'react';
import { CloseButton, Modal } from 'react-bootstrap';

import { WeatherData, WeatherUnits } from '@app/types';

import styles from './index.module.scss';

interface Props {
  isVisible: boolean;
  units?: WeatherUnits;
  weatherData?: WeatherData;
  onClose: () => void;
}

export const WeatherDetailModal: React.FC<Props> = (props) => {
  const { isVisible, weatherData, onClose } = props;
  const { t } = useTranslation('common');

  if (!weatherData) {
    return <></>;
  }

  return (
    <Modal centered onHide={onClose} show={isVisible} size="sm">
      <Modal.Header>
        <CloseButton aria-label="Close" onClick={onClose} />
      </Modal.Header>
      <Modal.Body className={styles.modalBody}>
        <h3 className="m-mt-24">{t('weather.detail.title')}</h3>
        <div>
          <p>
            {t('weather.detail.next1summary')}:{' '}
            {t(`weather.detail.summary.${weatherData.next_1_hours?.summary.symbol_code}`)}
          </p>
          <p>
            {t('weather.detail.next1precipitation')}: {weatherData.next_1_hours?.details?.precipitation_amount}
          </p>
          <p>
            {t('weather.detail.next6summary')}:{' '}
            {t(`weather.detail.summary.${weatherData.next_6_hours?.summary.symbol_code}`)}
          </p>
          <p>
            {t('weather.detail.next6precipitation')}: {weatherData.next_6_hours?.details?.precipitation_amount}
          </p>
          <p>
            {t('weather.detail.next12summary')}:{' '}
            {t(`weather.detail.summary.${weatherData.next_12_hours?.summary.symbol_code}`)}
          </p>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default memo(WeatherDetailModal);
