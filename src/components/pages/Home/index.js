import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import MainTemplate from '../../templates/MainTemplate';

import PrimaryButton from '../../atoms/PrimaryButton';
import PlanetCard from '../../organisms/PlanetCard';

import styles from './styles';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      population: '',
      climate: '',
      terrain: '',
      filmsCount: '',
    };
  }


  componentWillMount() {
    const id = Math.floor(Math.random() * 61);
    const url = `https://swapi.co/api/planets/ ${id}`;
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({
        name: data.name,
        population: data.population,
        climate: data.climate,
        terrain: data.terrain,
        filmsCount: data.films.length,
      }));
  }

  handleClick = () => {
    const id = Math.floor(Math.random() * (61 - 1 + 1) + 1);
    console.log(id);
    const url = `https://swapi.co/api/planets/ ${id}`;
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({
        name: data.name,
        population: data.population,
        climate: data.climate,
        terrain: data.terrain,
        filmsCount: data.films.length,
      }));
  }

  render() {
    const { classes } = this.props;
    const {
      name, population, climate, terrain, filmsCount,
    } = this.state;

    return (
      <MainTemplate>
        <div className={classes.body}>
          <PlanetCard
            name={name}
            population={population}
            climate={climate}
            terrain={terrain}
            filmsCount={filmsCount}
          />
          <PrimaryButton
            text='Next'
            click={this.handleClick}
          />
        </div>
      </MainTemplate>
    );
  }
}


Home.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(Home);
