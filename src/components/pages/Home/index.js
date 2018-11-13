import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import posed from 'react-pose';

import MainTemplate from '../../templates/MainTemplate';

import PrimaryButton from '../../atoms/PrimaryButton';
import PlanetCard from '../../organisms/PlanetCard';

import styles from './styles';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.audiourl ='https://www.soundboard.com/handler/DownLoadTrack.ashx?cliptitle=SlowSabr&filename=22/228946-22d24dcf-53a7-46d9-9065-de95fb703981.mp3';
    this.audio = new Audio(this.audiourl);
    this.state = {
      isFighting: false,
      isVisible: false,
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

    this.audio.play();
    this.setState({
      isFighting: !this.state.isFighting,
      isVisible: !this.state.isVisible,
    });

    setTimeout(() => {
      this.setState({
        isFighting: !this.state.isFighting,
        isVisible: !this.state.isVisible,
      });
    }, 500);
  }

  render() {
    const { classes } = this.props;
    const {
      name, population, climate, terrain, filmsCount, isFighting, isVisible,
    } = this.state;

    const Jedi = posed.img({
      fight: {
        position: 'relative',
        left: 55,
        bottom: 20,
      },
      iddle: {
        position: 'relative',
        left: 0,
        bottom: 0,
      },
    });

    const Sith = posed.img({
      fight: {
        position: 'relative',
        right: 25,
        bottom: 20,
      },
      iddle: {
        position: 'relative',
        right: 0,
        bottom: 0,
      },
    });

    const Spark = posed.img({
      visible: {
        display: 'inline-block',
        position: 'relative',
        width: 50,
        right: 180,
        bottom: 30,
      },
      hidden: {
        display: 'none',
      },
    });

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
        <div className={classes.battleWrapper}>
          <Jedi className={classes.jedi} src={require('../../assets/img/luke.png')} alt='luke' pose={isFighting ? 'fight' : 'idle'} />
          <Sith className={classes.sith} src={require('../../assets/img/vader.png')} alt='vader' pose={isFighting ? 'fight' : 'idle'} />
          <Spark className={classes.spark} src={require('../../assets/img/spark.png')} alt='spark' pose={isVisible ? 'visible' : 'hidden'} />
        </div>
      </MainTemplate>
    );
  }
}


Home.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(Home);
