// @flow
import configJSON from './config.json';

import ConfigLoader from '@renomia/shared-logic/lib/config/ConfigLoader/ConfigLoader';

export const config: ConfigLoader = new ConfigLoader(configJSON);
