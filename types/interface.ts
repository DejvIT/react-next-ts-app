import { ThemeType } from '@app/types/enum';

export interface PortfolioItem {
  title: string;
  src: string;
  altText: string;
}

export interface FormDataIn {
  data?: Person;
  initialized?: boolean;
  theme?: ThemeType;
}

export interface Person {
  name?: string;
  surname?: string;
  address?: string;
  email?: string;
  age?: number;
  description?: string;
}
