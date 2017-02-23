var React = require('react');
var PropTypes = React.PropTypes;
var Link = require('react-router').Link;
var styles = require('.././styles/style');
var UserDetails = require ('./UserDetails');
var UserDetailsWrapper = require('./UserDetailsWrapper');
var MainContainer = require('./MainContainer');
var Loading = require('./Loading');

function ConfirmBattle(props){
  return props.isLoading === true
    ?<Loading speed={900} text={'One Moment'}/>
    :<MainContainer>
        <h1>Confirm Players</h1>
        <div className='col-sm-8 col-sm-offset-2'>
          <UserDetailsWrapper header='Player One'>
          <UserDetails info={props.playersInfo[0]}/>
          </UserDetailsWrapper>

          <UserDetailsWrapper header='Player Two'>
          <UserDetails info={props.playersInfo[1]}/>
          </UserDetailsWrapper>

        </div>
        <div className='col-sm-8 col-sm-offset-2'>
          <div className='col-sm-12' >
            <button type='button' style={styles.space} className='btn btn-lg btn-success' onClick={props.onInitiateBattle}>Initiate Battle!</button>
          </div>
          <div className='col-sm-12'>
          <Link to='/playerOne'>
              <button type='button' style={styles.space} className='btn btn-lg btn-danger'>Reselect Players</button>
          </Link>
          </div>
        </div>
      </MainContainer>
}
ConfirmBattle.propTypes ={
  isLoading: PropTypes.bool.isRequired,
  playersInfo: PropTypes.array.isRequired,
  onInitiateBattle: PropTypes.func.isRequired
}
module.exports = ConfirmBattle;
