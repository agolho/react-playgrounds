var React = require('react');
var PropTypes = React.PropTypes;
var Link = require('react-router').Link;
var styles = require('.././styles/style');

function ConfirmBattle(props){
  return props.isLoading === true
    ?<p>Loading</p>
    :<div className="jumbotron col-sm-12 text-center" style={styles.transparentBackground}>
        <h1>Confirm Players</h1>
        <div className='col-sm-8 col-sm-offset-2'>
          <div className='col-sm-6'>Player One Info</div>
          <div className='col-sm-6'>Player Two Info</div>
        </div>
        <div className='col-sm-8 col-sm-offset-2'>
          <div className='col-sm-12' >
            <button type='button' className='btn btn-lg btn-success' onClick={props.onInitiateBattle}>Initiate Battle!</button>
          </div>
          <div className='col-sm-12'>
          <Link to='/playerOne'>
              <button type='button' className='btn btn-lg btn-danger'>Reselect Players</button>
          </Link>
          </div>
        </div>
      </div>
}
ConfirmBattle.propTypes ={
  isLoading: PropTypes.bool.isRequired,
  playersInfo: PropTypes.array.isRequired,
  onInitiateBattle: PropTypes.func.isRequired
}
module.exports = ConfirmBattle;
