import { useTranslation } from 'next-i18next';
import React, { memo, useMemo, useState } from 'react';
import { Table } from 'react-bootstrap';

import { Button, ChevronRightIcon, WeatherDetailModal } from '@app/components';
import WeatherCard from '@app/components/WeatherCard';
import { filterCurrentFromWeather, filterFutureFromWeather, formatDateTime } from '@app/helpers';
import { WeatherData, WeatherItem, WeatherUnits } from '@app/types';

import styles from './index.module.scss';

interface Props {
  weatherItems: WeatherItem[];
  units: WeatherUnits;
}

export const WeatherTable: React.FC<Props> = (props) => {
  const { weatherItems, units } = props;
  const { t } = useTranslation('common');

  const [selectedItem, setSelectedItem] = useState<WeatherData | undefined>(undefined);
  const [selectedCardIndex, setSelectedCardIndex] = useState(0);

  const openDetail = (weatherData: WeatherData) => {
    setSelectedItem(weatherData);
  };

  const todayWeatherData = useMemo(() => filterCurrentFromWeather(weatherItems), [weatherItems]);
  const futureWeatherData = useMemo(() => filterFutureFromWeather(weatherItems), [weatherItems]);

  const renderWeatherCards = () => {
    return (
      <div className={styles.horizontalGridWrapper}>
        <div className={styles.horizontalGrid}>
          {todayWeatherData.map(({ time, data }, index) => {
            return (
              <React.Fragment key={`weather-card-${index}`}>
                <div id={`card-${index}`}>
                  <WeatherCard
                    airPressure={data?.instant?.details.air_pressure_at_sea_level}
                    airTemperature={data?.instant?.details.air_temperature}
                    cloudAreaFraction={data?.instant?.details.cloud_area_fraction}
                    onClick={() => {
                      setSelectedCardIndex(index);
                      openDetail(data);
                    }}
                    relativeHumidity={data?.instant?.details.relative_humidity}
                    selected={selectedCardIndex === index}
                    time={time}
                    units={units}
                    variant={selectedCardIndex === index ? 'Primary' : 'Info'}
                    windDirection={data?.instant?.details.wind_from_direction}
                    windSpeed={data?.instant?.details.wind_speed}
                  />
                </div>
              </React.Fragment>
            );
          })}
        </div>
        <Button
          className={styles.leftButton}
          disabled={selectedCardIndex <= 0}
          onClick={() => {
            setSelectedCardIndex(selectedCardIndex - 1);
            document.getElementById(`card-${selectedCardIndex - 1}`)?.scrollIntoView({
              behavior: 'smooth',
            });
          }}
          size="small"
          variant="tertiary"
        >
          <ChevronRightIcon colorHex="var(--clrPrimary)" style={{ transform: 'rotate(180deg)' }} />
        </Button>
        <Button
          className={styles.rightButton}
          disabled={selectedCardIndex > todayWeatherData.length - 2}
          onClick={() => {
            setSelectedCardIndex(selectedCardIndex + 1);
            document.getElementById(`card-${selectedCardIndex + 1}`)?.scrollIntoView({
              behavior: 'smooth',
            });
          }}
          size="small"
          variant="secondary"
        >
          <ChevronRightIcon colorHex="var(--clrPrimary)" />
        </Button>
      </div>
    );
  };

  return (
    <>
      <h4 className="text-center">{t('weather.subtitle')}</h4>
      {renderWeatherCards()}
      <h4 className="text-center">{t('weather.more')}</h4>
      <div className={styles.tableWrapper}>
        <Table bordered hover striped>
          <thead>
            <tr>
              <th>Time</th>
              <th>Air Pressure</th>
              <th>Air Temperature</th>
              <th>Cloud Area Fraction</th>
              <th>Relative Humidity</th>
              <th>Wind Direction</th>
              <th>Wind Speed</th>
            </tr>
          </thead>
          <tbody>
            {futureWeatherData.map(({ time, data }) => (
              <tr className={styles.tableRow} key={time} onClick={() => openDetail(data)}>
                <td>{formatDateTime(time)}</td>
                <td>
                  {data.instant?.details.air_pressure_at_sea_level} {units.air_pressure_at_sea_level}
                </td>
                <td>
                  {data.instant?.details.air_temperature} {units.air_temperature}
                </td>
                <td>{data.instant?.details.cloud_area_fraction}%</td>
                <td>{data.instant?.details.relative_humidity}%</td>
                <td>{data.instant?.details.wind_from_direction}°</td>
                <td>
                  {data.instant?.details.wind_speed} {units.wind_speed}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <WeatherDetailModal
        isVisible={!!selectedItem}
        onClose={() => setSelectedItem(undefined)}
        units={units}
        weatherData={selectedItem}
      />
    </>
  );
};

export default memo(WeatherTable);
