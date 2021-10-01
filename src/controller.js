const { response, request } = require('express');
const fs = require('fs');
const axios = require('axios')
const http = require('http');


const getPairsOfPlayers = async (req = request, resp = response, next) => {
  //Implementar logica aquí
  const players = await axios.get('https://gist.githubusercontent.com/jhonatan89/bc554ec3ded15407609714e8b7b8f1c8/raw/5ab1e3e5b45e99aabcbbdd30f55d2ae5eafb9cbe/nba-players');
  let players_info = ""
  fs.readFile(players, 'utf8', function(err, data){
    if (err) {
      console.error(err)
    }
    else{
      players_info = data;
    }
  });
  //...
  return resp.json({ message: 'To be implemented' });
};

function getJSONP(url, success) {

  var ud = '_' + +new Date,
      script = document.createElement('script'),
      head = document.getElementsByTagName('head')[0] 
             || document.documentElement;

  window[ud] = function(data) {
      head.removeChild(script);
      success && success(data);
  };

  script.src = url.replace('callback=?', 'callback=' + ud);
  head.appendChild(script);

}

module.exports = { getPairsOfPlayers };
