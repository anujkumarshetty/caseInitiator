import { createMuiTheme } from '@material-ui/core/styles';
const theme = createMuiTheme({
    palette: {
      primary: { main: '#4268b1' },
      secondary: { main: '#f50057' }
    },
  });

export default function () {
    return ({
        root: {
            flexGrow: 1,
            display: 'flex',
            flexWrap: 'wrap',
        },
        menuButton: {
            marginLeft: -18,
            marginRight: 10,
        },
        formControl: {
            margin: theme.spacing.unit,
            minWidth: 120,
        },
        selectEmpty: {
            marginTop: theme.spacing.unit * 2,
        },
        button: {
            margin: theme.spacing.unit,

        },
        input: {
            display: 'none',
        },
        container: {
            display: 'flex',
            flexWrap: 'wrap',
        },
        textField: {
            marginLeft: theme.spacing.unit,
            marginRight: theme.spacing.unit,
            width: 200,
        },
        dense: {
            marginTop: 19,
        },
        menu: {
            width: 200,
        },
        card: {
            minWidth: 275,
            margin: 10
        },
        icon: {
            margin: theme.spacing.unit * 2,
        },
        iconHover: {
            margin: theme.spacing.unit * 2,
            '&:hover': {
                color: "blue",
                cursor: "pointer"
            },
        },
        iconHoverMinus: {
            margin: theme.spacing.unit * 2,
            '&:hover': {
                color: "secondary",
                cursor: "pointer"
            },
        }
        ,
        paper: {
            padding: theme.spacing.unit,
            textAlign: 'center',
            color: theme.palette.text.secondary,
        },
    })
}


