import { ThemeProvider as MUIThemeProvider, createTheme } from '@material-ui/core';

const theme = createTheme({
    palette: {
        background: {
            default: '#e6e6e6',
        },
        primary: {
            main: '#f44336',
        },
        secondary: {
            main: '#3f51b5',
        },
    }
});


export default function ThemeProvider({ children }) {
    return (
        <MUIThemeProvider theme={theme}>
            {children}
        </MUIThemeProvider>
    )
}