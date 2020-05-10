const url = "https://api.disboard.team/teams";

export default function getTeams () {
  return  fetch(url)
  .then(function(res) {
    return res.json();
  })
  .then(function(teams) {
    console.log(teams);
  });
}