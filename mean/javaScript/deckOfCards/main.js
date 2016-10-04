class Card{
	constructor(name, suit, value, value2){
		this.name = name;
		this.suit = suit;
		this.value = value;
		this.value2 = value2;
	}
}

class Deck{
	constructor(){
		this.cards = [];
		this.create();
	}
	create(){
		var suits = ['hearts', 'diamonds', 'cloves', 'spades'];
		var names = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
		var suit = 0

		for(var i = 0; i < 4; i++){
			for(var x = 0; x < 13; x++){
				if(names[x] == 'J' || names[x] == 'Q' || names[x] == 'K'){
					this.cards.push(new Card(names[x],suits[i], 10));
				}
				else if(names[x] == 'A'){
					this.cards.push(new Card(names[x],suits[i], 1, 11));
				}
				else{
					this.cards.push(new Card(names[x],suits[i], x+2));
				}
			}
		}
	}
	shuffle(){
		for(var i = 0; i < this.cards.length; i++){
			var rand = Math.floor(Math.random()*52);
			var temp = this.cards[i];
			this.cards[i] = this.cards[rand];
			this.cards[rand] = temp;
		}
	}
}

class Player{
	constructor(name, chips){
		this.name = name;
		this.chips = chips;
		this.hand = [];
	}
}

class Table{
	constructor(Dealer){
		var dealer = new Player('Dealer');
		this.deck = new Deck();
		this.players = [dealer];

	}
	addPlayer(player){
		var newPlayer = new Player(player)
		this.players.push(newPlayer);
	}
	deal(){
		for(var x = 0; x < 2; x++){
			for(var i = 0; i < this.players.length; i++){
				this.players[i].hand.push(this.deck.cards[this.deck.cards.length-1]);
				this.deck.cards.pop();
			}
		}
	}
}

var table = new Table();
table.addPlayer('Pablo');
console.log(table.players);
table.deck.shuffle();
table.deal();
console.log(table.players[0].hand)
console.log(table.players[1].hand)