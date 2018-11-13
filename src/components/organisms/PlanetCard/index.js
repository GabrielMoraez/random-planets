import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import styles from './styles';

class PlanetCard extends React.Component {
  render() {
    const {
      name, population, climate, terrain, filmsCount,
    } = this.props;
    const { classes } = this.props;

    return (
      <Card className={classes.card}>
        <CardContent className={classes.cardContent}>
          <div className={classes.titleWrapper}>
            <Typography className={classes.title}>
              {name}
            </Typography>
          </div>
          <div className={classes.infoWrapper}>
            <Typography className={classes.pos}>
              <span className={classes.span}>Population: </span>
              {population}
            </Typography>
            <Typography className={classes.pos}>
              <span className={classes.span}>Climate: </span>
              {climate}
            </Typography>
            <Typography className={classes.pos}>
              <span className={classes.span}>Terrain: </span>
              {terrain}
            </Typography>
          </div>
          <Typography className={classes.secondTitle}>
            {'Featured in '}
            {filmsCount}
            {' Films'}
          </Typography>
        </CardContent>
      </Card>
    );
  }
}


PlanetCard.propTypes = {
  classes: PropTypes.object.isRequired,
  name: PropTypes.any.isRequired,
  population: PropTypes.any.isRequired,
  climate: PropTypes.any.isRequired,
  terrain: PropTypes.any.isRequired,
  filmsCount: PropTypes.any.isRequired,
};


export default withStyles(styles)(PlanetCard);
