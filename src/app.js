const PLAYERS = [
    "Spiderman",
    "Captain America",
    "Wonderwoman",
    // "Popcorn",
    // "Gemwoman",
    // "Bolt",
    // "Antwoman",
    // "Mask",
    // "Tiger",
    // "Captain",
    // "Catwoman",
    // "Fish",
    // "Hulk",
    // "Ninja",
    // "Black Cat",
    // "Volverine",
    // "Thor",
    // "Slayer",
    // "Vader",
    // "Slingo"
];

// Player Class
class Player {
    constructor(id, name, type) {
        // Create member variables and assign values
        // Type your code
        this.id=id;
        this.name=name;
        this.type=type;
        this.image="images/super-"+(this.id+1)+".png";
        this.strength=this.getRandomStrength()

    }

    // getting random strength
    getRandomStrength = () => {
        return Math.ceil(Math.random() * 100);
    }

    // Create a player for displaying
    view = () => {
        // Accumulate HTML template
        // Type your code here
        let player=document.createElement("div");
        player.className="player";
        player.textContent=this.name;
        let playerName=document.createElement("div");
        playerName.className="name";
        playerName.innerHTML=this.name;
        player.appendChild(playerName);
        let playerImage=document.createElement("img");
        playerImage.src=this.image;
        player.appendChild(playerImage);
        let playerstrength=document.createElement("div");
        playerName.className="strength";
        playerName.innerHTML=this.strength;
        player.appendChild(playerName);
        player.setAttribute("data-id",this.id);
        return player;
    }
}

// Superwar Class
class Superwar {
    constructor(players) {
    // Create a field players 
    // Use Map method to loop through players argument and create new players
    // Type your code her
    this.players=[];
    var type="hero"
    players.map((player)=>{
        var id=PLAYERS.indexOf(player)
        this.players.push(new Player(id,player,type));
        if(type=="hero")type="villain";
        else type="hero";
    });


    }

    // Display players in HTML
    viewPlayers = () => {
        let team = document.getElementById('heroes');
        team.innerHTML = '';
        let fragment =this.buildPlayers('hero');
        team.append(fragment);
        team = document.getElementById('villains');
        team.innerHTML = '';
        fragment =this.buildPlayers('villain');
        team.append(fragment);
    }

    // Build players fragment 
    buildPlayers = (type) => {
        let fragment = document.createDocumentFragment();
        this.players.filter(player => player.type == type)
            .forEach(player => fragment.append(player.view()));
        return fragment;
    }

}


window.onload = () => {
    const superwar = new Superwar(PLAYERS);
    superwar.viewPlayers();
}