import { Theme } from "@react-navigation/native"

type ThemeAction =
    | { type: 'set_light_theme' }
    | { type: 'set_dark_theme' }

export interface ThemeState extends Theme {
    currentTheme: 'light' | 'dark',
    dividerColor: string,
}

export const lightTheme: ThemeState = {
    currentTheme: 'light',
    dark: false,
    dividerColor: 'rgba(0,0,0,0.7)',
    colors: {
        primary: '#084f6a',
        background: 'white',
        card: 'white',
        text: 'black',
        border: 'white',
        notification: 'teal',
    }
}

export const darkTheme: ThemeState = {
    currentTheme: 'dark',
    dark: true,
    dividerColor: 'white',
    colors: {
        primary: '#2a93a3',
        background: 'black',
        card: 'green',
        text: 'white',
        border: 'white',
        notification: 'teal',
    }
}

const ThemeReducer = (state: ThemeState, action: ThemeAction ): ThemeState => {
    switch (action.type) {
        case 'set_light_theme':
            return {
                ...lightTheme
            }
        case 'set_dark_theme':
            return {
                ...darkTheme
            }
        default:
            return state
    }
}

export default ThemeReducer