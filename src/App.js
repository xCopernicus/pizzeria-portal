import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import MainLayout from './components/layout/MainLayout/MainLayout';
import Dashboard from './components/views/Dashboard/Dashboard';
import Login from './components/views/Login/Login';
import Tables from './components/views/Tables/Tables';
import Booking from './components/views/Booking/Booking';
import Event from './components/views/Event/Event';
import Ordering from './components/views/Ordering/OrderingContainer';
import NewOrder from './components/views/NewOrder/NewOrderContainer';
import Order from './components/views/Order/OrderContainer';
import Kitchen from './components/views/Kitchen/KitchenContainer';

import { createMuiTheme, ThemeProvider } from '@material-ui/core';

function App() {

  const theme = createMuiTheme({
    palette: {
      primary: {
        light: '#74b9ff',
        main: '#0984e3',
      },
      secondary: {
        light: '#ff7675',
        main: '#d63031',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <MainLayout>
          <Switch>
            <Route exact path={`${process.env.PUBLIC_URL}/`} component={Dashboard} />
            <Route exact path={`${process.env.PUBLIC_URL}/login`} component={Login} />
            <Route exact path={`${process.env.PUBLIC_URL}/tables`} component={Tables} />
            <Route exact path={`${process.env.PUBLIC_URL}/tables/booking/:id`} component={Booking} />
            <Route exact path={`${process.env.PUBLIC_URL}/tables/event/:id`} component={Event} />
            <Route exact path={`${process.env.PUBLIC_URL}/ordering`} component={Ordering} />
            <Route exact path={`${process.env.PUBLIC_URL}/ordering/new/:id`} component={NewOrder} />
            <Route exact path={`${process.env.PUBLIC_URL}/ordering/order/:id`} component={Order} />
            <Route exact path={`${process.env.PUBLIC_URL}/kitchen`} component={Kitchen} />
          </Switch>
        </MainLayout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
