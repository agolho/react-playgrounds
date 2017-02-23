var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('.././styles/style');
var UserDetails = require('./UserDetails');
var UserDetailsWrapper = require('./UserDetailsWrapper');
var Link = require('react-router').Link;
var MainContainer = require('./MainContainer');
var Loading = require('./Loading');

function StartOver(){
  return(
    <div className='col-sm-12' style={styles.space}>
      <Link to='/playerOne'>
        <button type='button' className='btn btn-lg'>Select New Players</button>
      </Link>
    </div>
  )
}
function Results(props){
  if (props.isLoading===true){
    return(
      <Loading text={'Tickling Repositories'} speed={100}/>
    )
  }
  if (props.scores[0] === props.scores[1]){
    return(
      <div>
        <h1>It's a Tie!</h1>
        <StartOver />
      </div>
    )
  }
  var winningIndex = props.scores[0] > props.scores[1] ? 0: 1;
  var losingIndex = winningIndex === 0 ? 1 : 0;
  return(
    <MainContainer>
        <h1>Results</h1>
      <div className='col-sm-8 col-sm-offset-2'>
        <UserDetailsWrapper header='Winner'>
          <UserDetails score={props.scores[winningIndex]} info={props.playerInfo[winningIndex]} />
        </UserDetailsWrapper>
        <UserDetailsWrapper header='Loser'>
          <UserDetails score={props.scores[losingIndex]} info={props.playerInfo[losingIndex]} />
        </UserDetailsWrapper>
      </div>
      <StartOver />
    </MainContainer>
  )
}
Results.PropTypes = {
  isLoading: PropTypes.bool.isRequired,
  playerInfo: PropTypes.array.isRequired,
  scores: PropTypes.array.isRequired
}
module.exports = Results;
