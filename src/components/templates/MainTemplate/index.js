import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import withStyles from '@material-ui/core/styles/withStyles';

import styles from './styles';

const MainTemplate = (props) => {
  const { children } = props;
  const { classes } = props;

  return (
    <Fragment>
      <CssBaseline />
      <main className={classes.main}>
        {children}
      </main>
    </Fragment>
  );
};

MainTemplate.propTypes = {
  children: PropTypes.element.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MainTemplate);
