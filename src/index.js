import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './App'
import { createStore } from 'redux';
import rootReducer from './Reducers/combinend-reducers';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './CSS/colors';

const store = createStore(rootReducer)
console.log(theme);

render(
    <MuiThemeProvider theme={theme}>
        <Provider store={store}>
            <App />
        </Provider>
    </MuiThemeProvider>
    ,
    document.getElementById('root')
)

