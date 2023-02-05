import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { configure } from 'enzyme';
import { ThemeType } from "@app/types";

configure({ adapter: new Adapter() });

jest.mock("next/router", () => ({
  useRouter() {
    return {
      route: "/",
      pathname: "",
      query: "",
      asPath: "",
    };
  },
}));

jest.mock('@app/contexts', () => ({
  useAppState: jest.fn().mockImplementation(() => {
    return {
      appState: { formData: {theme: ThemeType.Primary, data: undefined, initialized: true} },
      dispatch: jest.fn(),
    };
  }),
}));

jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key: string) => key }),
}));
