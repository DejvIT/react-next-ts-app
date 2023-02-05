import React, { createContext, ReactElement, ReactNode, useContext, useEffect, useMemo, useReducer } from 'react';

import { LOCALSTORAGE_APP_STATE_KEY } from '@app/constants';
import { FormDataIn, ThemeType } from '@app/types';

interface AppState {
  formData?: FormDataIn;
  isLoading?: boolean;
}

export enum ActionType {
  InitStore = 'init_store',
  UpdateStore = 'update_store',
  ResetStore = 'reset_store',

  UpdateData = 'update_data',
  ResetData = 'reset_data',
  UpdateTheme = 'update_theme',
  ResetTheme = 'reset_theme',
}

interface AppStateAction {
  type: ActionType;
  payload: AppState;
}

export const initialState: AppState = {
  formData: {
    data: undefined,
    initialized: false,
    theme: ThemeType.Primary,
  },
  isLoading: true,
};

export const AppReducer = (state: AppState, action: AppStateAction): AppState => {
  switch (action.type) {
    case ActionType.InitStore: {
      return {
        formData: {
          ...action.payload.formData,
          initialized: true,
        },
      };
    }

    case ActionType.UpdateStore: {
      return {
        formData: {
          ...state.formData,
          ...action.payload.formData,
        },
      };
    }

    case ActionType.ResetStore: {
      return {
        formData: {
          ...initialState.formData,
        },
      };
    }

    case ActionType.UpdateTheme: {
      return {
        formData: {
          ...state.formData,
          theme: action.payload.formData?.theme,
        },
      };
    }
    case ActionType.ResetData: {
      return {
        formData: {
          ...state.formData,
          data: undefined,
        },
      };
    }
    case ActionType.ResetTheme: {
      return {
        formData: {
          ...state.formData,
          theme: initialState.formData?.theme,
        },
      };
    }
    case ActionType.UpdateData: {
      return {
        formData: {
          ...state.formData,
          data: action.payload.formData?.data,
        },
      };
    }
    default:
      return state;
  }
};

interface Props {
  appState: AppState;
  isFormDataInitialized?: boolean;
  dispatch: React.Dispatch<AppStateAction>;
}

const AppStateContext = createContext<Props>({} as Props);

export const AppStateProvider = ({ children }: { children: ReactNode }): ReactElement => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  const contextValue = useMemo(() => {
    return { state, dispatch };
  }, [state, dispatch]);

  useEffect(() => {
    const localStorageAppState = localStorage?.getItem(LOCALSTORAGE_APP_STATE_KEY) || JSON.stringify(initialState);
    if (localStorageAppState) {
      // Check if there already is a state in localstorage
      // if yes, update the current state with the stored one on init
      dispatch({
        type: ActionType.InitStore,
        payload: JSON.parse(localStorageAppState),
      });
    }
  }, []);

  useEffect(() => {
    if (state !== initialState) {
      localStorage?.setItem(LOCALSTORAGE_APP_STATE_KEY, JSON.stringify(state));
    }
  }, [state]);

  return (
    <AppStateContext.Provider
      value={{
        appState: contextValue.state,
        isFormDataInitialized: contextValue.state.formData?.initialized,
        dispatch: contextValue.dispatch,
      }}
    >
      {children}
    </AppStateContext.Provider>
  );
};

export function useAppState(): Props {
  const context = useContext(AppStateContext);
  if (context === undefined) {
    throw new Error(`'useAppState' must be used within the 'AppStateProvider'.`);
  }

  return context;
}
