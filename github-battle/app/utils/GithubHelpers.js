var axios = require('axios');

var id= '48a102dbcde2a2be4b7c';
var sec= 'a87a53b8eeca82a8af3854322458e07a662a2098';
var param = '?client_id='+ id + '&client_secret='+sec;
function getUserInfo(name){
  return axios.get('https://api.github.com/users/'+name+param);
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
  }
};
module.exports = helpers;
