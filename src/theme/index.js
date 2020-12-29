import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import PrintAble4U_BoldItalic from '../assets/fonts/PrintAble4U/PrintAble4U_Bold_Italic_ver_1.00.otf';
import PrintAble4U_Bold from '../assets/fonts/PrintAble4U/PrintAble4U_Bold_ver_1.00.otf';
import PrintAble4U_Italic from '../assets/fonts/PrintAble4U/PrintAble4U_Italic_ver_1.00.otf';
import PrintAble4U_Regular from '../assets/fonts/PrintAble4U/PrintAble4U_Regular_ver_1.00.otf';

const PrintAble4UBoldItalic = {
    fontFamily: 'PrintAble4U',
    fontStyle: 'normal',
    fontDisplay: 'swap',
    fontWeight: 400,
    src: `
    local('PrintAble4U'),
    local('PrintAble4U-BoldItalic'),
    url(${PrintAble4U_BoldItalic}) format('otf')
  `,
    unicodeRange:
        'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};

const PrintAble4UBold = {
    fontFamily: 'PrintAble4U',
    fontStyle: 'normal',
    fontDisplay: 'swap',
    fontWeight: 400,
    src: `
    local('PrintAble4U'),
    local('PrintAble4U-Bold'),
    url(${PrintAble4U_Bold}) format('otf')
  `,
    unicodeRange:
        'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};

const PrintAble4UItalic = {
    fontFamily: 'PrintAble4U',
    fontStyle: 'normal',
    fontDisplay: 'swap',
    fontWeight: 400,
    src: `
    local('PrintAble4U'),
    local('PrintAble4U-Italic'),
    url(${PrintAble4U_Italic}) format('otf')
  `,
    unicodeRange:
        'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};

const PrintAble4URegular = {
    fontFamily: 'PrintAble4U',
    fontStyle: 'normal',
    fontDisplay: 'swap',
    fontWeight: 400,
    src: `
    local('PrintAble4U'),
    local('PrintAble4U-Regular'),
    url(${PrintAble4U_Regular}) format('otf')
  `,
    unicodeRange:
        'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};

const theme = createMuiTheme({
    typography: {
        fontFamily: "'PrintAble4U'",
    },
    overrides: {
        MuiCssBaseline: {
            '@global': {
                '@font-face': [PrintAble4UBoldItalic, PrintAble4UBold, PrintAble4UItalic, PrintAble4URegular],
            },
        },
    },
});


export default function ApiDocTheme(props) {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {props.children}
        </ThemeProvider>
    );
}