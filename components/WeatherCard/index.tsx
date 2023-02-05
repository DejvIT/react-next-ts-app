import classNames from 'classnames';
import React, { memo } from 'react';
import { Card } from 'react-bootstrap';

import Button from '@app/components/Button';
import { formatDateTime } from '@app/helpers';
import { WeatherUnits } from '@app/types';

import styles from './index.module.scss';

interface Props {
  time: string;
  airPressure?: number;
  airTemperature?: number;
  cloudAreaFraction?: number;
  relativeHumidity?: number;
  windDirection?: number;
  windSpeed?: number;
  units: WeatherUnits;
  onClick: () => void;
  variant: 'Primary' | 'Secondary' | 'Success' | 'Danger' | 'Warning' | 'Info' | 'Light' | 'Dark';
  selected?: boolean;
}

const WeatherCard: React.FC<Props> = ({
  time,
  airPressure,
  airTemperature,
  cloudAreaFraction,
  relativeHumidity,
  windDirection,
  windSpeed,
  units,
  variant,
  selected,
  onClick,
}) => {
  return (
    <Card
      bg={variant.toLowerCase()}
      className={classNames(selected ? styles.cardSelected : styles.card, 'm-4')}
      key={variant}
      style={{ width: '18rem' }}
      text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
    >
      <Card.Header>{formatDateTime(time)}</Card.Header>
      <Card.Body>
        <Card.Title>{variant} Card Title</Card.Title>
        <Card.Text>
          <div>
            Air pressure: {airPressure} {units.air_pressure_at_sea_level}
          </div>
          <div>
            Air temperature: {airTemperature} {units.air_temperature}
          </div>
          <div>Cloud area fraction: {cloudAreaFraction}%</div>
          <div>Relative humidity: {relativeHumidity}%</div>
          <div>Wind direction: {windDirection}°</div>
          <div>
            Wind speed: {windSpeed} {units.wind_speed}
          </div>
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <Button block onClick={onClick} size="large" variant="primary" withChevronRight>
          Open detail
        </Button>
      </Card.Footer>
    </Card>
  );
};

export default memo(WeatherCard);
