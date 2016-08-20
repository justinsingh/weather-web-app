var styles = {
  transparentBg: {
    background: 'transparent'
  },
  inputCenter: {
    width: '175px',
    border: '1px solid ',
    display: 'inline-block'
  },
  smallButton: {
    width: '115px'
  },
  transContainer: {
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)'
  },
  container: {
    backgroundSize: 'cover',
    backgroundImage: "url('app/images/orangepattern.svg')",
    position: 'fixed',
    height: '100%',
    width: '100%'
  },
  content: {
    position: 'relative',
    color: 'black',
    zIndex: '5'
  },
  background: {
    position: 'absolute',
    borderRadius: '25px',
    border: '2px solid black',
    top: '0px',
    left: '0px',
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    zIndex: '1',
    msFilter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
    filter: 'alpha(opacity=50)',
    opacity: '0.5'
  },
  header: {
    fontSize: '45',
    color: '#fff',
    fontWeight: '100'
  },
  centerDiv: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  }
};

module.exports = styles;
