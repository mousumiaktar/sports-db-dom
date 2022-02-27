const allplayers = () => {
    document.getElementById('player-container').innerHTML = '';
    // document.getElementById('spiner').style.display = 'block';
   const searchValue = document.getElementById('search-box').value;
   const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${searchValue}`;
   fetch(url)
   .then(res => res.json())
   .then(data => showPlayerDetails(data.player));
//    console.log(url);
};

const showPlayerDetails = (players) => {
    // if(players) {
    //     document.getElementById('spiner').style.display = 'block';
    // }

    for(const player of players){
        // console.log(player);
    const parent = document.getElementById('player-container');

    const div = document.createElement('div');
    div.innerHTML = `
    <div class="card border p-5">
    <div class="pro-pic">
        <img class="w-50" src="${player.strThumb}" alt="">
    </div>
    <h2>Name:${player.strPlayer}</h2>
    <h5>Country:${player.strNationality}</h5>
    <p></p>
    <div class="all-button">
        <button class="btn btn-danger">Delete</button>
        <button onclick="details('${player.idPlayer}')" class="btn btn-success">Details</button>
    </div>
</div>
    `;
    parent.appendChild(div);
    }
};

const details = (id) => {
    // console.log(info);
    const url = (`https://www.thesportsdb.com/api/v1/json/2/lookupplayer.php?id=${id}`);
    fetch(url)
    .then(res => res.json())
    .then(data => setDetails(data.players[0]));
};
const setDetails = (info) => {
    document.getElementById('details-container').innerHTML =`
    <div>
    <img src="${info.strThumb}" alt="">
    <h1>Name: ${info.strPlayer}</h1>
    </div>
    `
}