const team={
    _players:[
      {
        firstName: 'Vijay',
        lastName: 'Jha',
        age: 20
      },
       {
        firstName: 'Harshul',
        lastName: 'Agrawal',
        age: 22
      },
       {
        firstName: 'Saurabh',
        lastName: 'Verma',
        age: 23
      },
    ],
    _games:[
      {
    opponent: 'Kho-Kho',
    teamPoints: 50,
    opponentPoints: 27
      },
      {
    opponent: 'Kabbidi',
    teamPoints: 42,
    opponentPoints: 30
  },
  {
    opponent: 'tug-of-war',
    teamPoints: 35,
    opponentPoints: 22
  }
    ],
    get players(){
      return this._players;
    },
    get games(){
      return this._games;
    },
    addPlayer(firstName,lastName,age){
      let player={
        firstName:firstName,
        lastName:lastName,
        age:age
      };
       this._players.push(player);
    },
    addGame(opponent,teamPoints,opponentPoints){
      let game={
        opponent:opponent,
        teamPoints:teamPoints,
        opponentPoints:opponentPoints
      };
      this._games.push(game);
    }
  };
  team.addPlayer('Steph','Curry',28);
  team.addPlayer('Lisa','Leslie',44);
  team.addPlayer('Bugs','Bunny',76);
  console.log(team.players);
  
  team.addGame('chess',34,67);
  console.log(team.games);
  
  