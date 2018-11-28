var personnel = [
  {
    id: 5,
    name: "Luke Skywalker",
    pilotingScore: 98,
    shootingScore: 56,
    isForceUser: true,
  },
  {
    id: 82,
    name: "Sabine Wren",
    pilotingScore: 73,
    shootingScore: 99,
    isForceUser: false,
  },
  {
    id: 22,
    name: "Zeb Orellios",
    pilotingScore: 20,
    shootingScore: 59,
    isForceUser: false,
  },
  {
    id: 15,
    name: "Ezra Bridger",
    pilotingScore: 43,
    shootingScore: 67,
    isForceUser: true,
  },
  {
    id: 11,
    name: "Caleb Dume",
    pilotingScore: 71,
    shootingScore: 85,
    isForceUser: true,
  },
];


//Exercise 1

const answer1 = personnel
	.filter(character => character.isForceUser)
	.map(character => character.pilotingScore + character.shootingScore)
	.reduce((accumulator, totalScore) => accumulator + totalScore);

console.log(answer1);


//Exercise 2

const answer2 = personnel
	.map(character => {
		return `<li>${character.id}</li><li>${character.name}</li>`
	})
	.reduce((acc, e) => acc + e);

console.log(answer2);
