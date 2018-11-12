import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Button from '@material-ui/core/Button';

import styles from './styles';

class PrimaryButton extends React.Component {
  render() {
    const { text, click } = this.props;
    const { classes } = this.props;

    return (
      <Button variant='contained' color='primary' className={classes.button} onClick={click}>
        {text}
      </Button>
    );
  }
}

PrimaryButton.propTypes = {
  classes: PropTypes.object.isRequired,
  text: PropTypes.any.isRequired,
  click: PropTypes.any.isRequired,
};

export default withStyles(styles)(PrimaryButton);
