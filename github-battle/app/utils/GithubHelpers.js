var axios = require('axios');

var id= '48a102dbcde2a2be4b7c';
var sec= 'a87a53b8eeca82a8af3854322458e07a662a2098';
var param = '?client_id='+ id + '&client_secret='+sec;

function getUserInfo(name){
  return axios.get('https://api.github.com/users/'+name+param);
}
function getRepos(username){
  return axios.get('https://api.github.com/users/'+username+'/repos'+param+ '&per_page=100');
}
function getTotalStars(repos){
  return repos.data.reduce(function(prev, current){
    return prev + current.stargazers_count
  },0)
}
function getPlayerData (player){
return getRepos(player.login).then(getTotalStars).then(function(totalStars){
  return {
    followers: player.followers,
    totalStars: totalStars
  }
})
}
function calculateScores (players){
  return[
    players[0].followers * 3 + players[0].totalStars,
    players[1].followers * 3 + players[1].totalStars
  ]
}
var helpers = {
  getPlayersInfo: function(players){
    return axios.all(players.map(function(name){
      return getUserInfo(name);
    })).then(function(info){
      return info.map(function(user){
        return user.data;
      })
    }).catch(function(err){
      console.warn('Error in /utils/GithubHelpers');
    })
  },
  battle: function(playerInfo){
    var playerOneData = getPlayerData(playerInfo[0]);
    var playerTwoData = getPlayerData(playerInfo[1]);

    return axios.all([playerOneData, playerTwoData])
    .then(calculateScores)
    .catch(function (err) {console.warn('Error in getPlayerData: ',err)})

  }
};
module.exports = helpers;
