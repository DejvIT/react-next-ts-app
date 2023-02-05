import { filterCurrentFromWeather, filterFutureFromWeather, formatDateTime } from "@app/helpers";
import { weatherMockDataArray } from "@app/__tests__/mock-data/weather-mock";

jest.spyOn(Date, 'now').mockImplementation(() => new Date('2022-02-04T12:00:00Z').valueOf());

describe('filterCurrentFromWeather', () => {
    it('should return filtered weather items of current day', () => {
        const result = filterCurrentFromWeather(weatherMockDataArray);
        const mockTimestamp = new Date('2022-02-04T12:00:00Z').valueOf();

        expect(result).toHaveLength(1);
        expect(new Date(result[0].time).valueOf()).toBe(mockTimestamp);
    });
});

describe('filterFutureFromWeather', () => {
    it('should return filtered future weather items', () => {
        const result = filterFutureFromWeather(weatherMockDataArray);
        const mockTimestamp = new Date('2022-02-05T12:00:00Z').valueOf();

        expect(result).toHaveLength(1);
        expect(new Date(result[0].time).valueOf()).toBe(mockTimestamp);
    });
});

describe('formatDateTime', () => {
    it('should return time format for today', () => {
        const today = new Date('2022-02-04T12:00:00Z');
        const todayDateTime = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}T12:00:00Z`;

        const result = formatDateTime(todayDateTime);
        expect(result).toBe(`12:00`);
    });

    it('should return full date format for not today', () => {
        const dateTime = '2022-02-05T12:00:00Z';
        const result = formatDateTime(dateTime);
        expect(result).toBe(`5. 2. 2022 12:00`);
    });
});

