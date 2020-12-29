import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import ApiDocTheme from '@doc-api/theme';
import { HeaderNavbar, ClippedDrawer } from '@doc-api/components'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { routes } from '@doc-api/routes'


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function App() {
  const classes = useStyles();

  return (
    <Router>
      <ApiDocTheme>
        <div className={classes.root}>
          <CssBaseline />
          <HeaderNavbar></HeaderNavbar>
          <ClippedDrawer></ClippedDrawer>
          <main className={classes.content}>
            <Toolbar />
            <Switch>
              {routes.map((route, index) => (
                // Render more <Route>s with the same paths as
                // above, but different components this time.
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  children={<route.main />}
                />
              ))}
            </Switch>
          </main>
        </div>
      </ApiDocTheme>
    </Router>
  );
}
