//Progression 1 - create a Manager array and return it

let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

//Write your function here
function createManager(managerName, managerAge, currentTeam, trophiesWon){
  return [managerName, managerAge, currentTeam, trophiesWon];
}

// Don't edit the following code
try {
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch (e) {
  // do nothing - expected error
}

//Progression 2 - create a formation object and return it
var formation = [4, 4, 3];

//write your function here
function createFormation(formation) {
  if (formation.length === 0) {
    return null;
  }
  
  var data = {
    defender: formation[0],
    midfield: formation[1],
    forward: formation[2]
  };
  
  return data;
}

// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year
function  filterByDebut(year){
  return players.filter(player => player.debutYear === year );
} 

//Progression 4 - Filter players that play at the position _______
function filterByPosition(position){
  return players.filter(player => player.position === position);
}

// //Progression 5 - Filter players that have won ______ award
function filterByAward(awardName) {
  return players.filter(player => player.awards.includes(awardName));
}


//Progression 6 - Filter players that won ______ award ____ times
function filterByAwardxTimes(awardName, noOfTimes) {
  return players.filter(player => player.awards.includes(awardName, noOfTimes));
}


//Progression 7 - Filter players that won ______ award and belong to ______ country
function filterByAwardxTimes(awardName, country) {
  return players.filter(player => player.awards.includes(awardName, country));
}

//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____
function filterByNoOfAwardsxTeamxAge(noOfAwards, team, age) {
  return players.filter(player => player.awards.includes(noOfAwards, team, age));
}


//Challenge 1 - Sort players in descending order of their age
function SortByAge(playerAge) {
  return playerAge.sort((a, b) => b.age - a.age);
}



//Challenge 2 - Sort players beloging to _____ team in descending order of awards won


//Judgement 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names


//Judgement  2 - Sort players that are older than _____ years in alphabetical order












