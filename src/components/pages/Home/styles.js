const styles = () => ({
  layout: {
    width: 'auto',
    display: 'block', // Fix IE11 issue.
  },
  body: {
    marginTop: '15%',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  jedi: {
    width: 150,
  },
  sith: {
    width: 150,
  },
  jediMove: {
    position: 'relative',
    left: 25,
    bottom: 20,
  },
  sithMove: {
    position: 'relative',
    left: 25,
    bottom: 20,
  },
  battleWrapper: {
    textAlign: 'center',
    marginTop: 10,
    marginLeft: 40,
  },
});

export default styles;
