//: Playground - noun: a place where people can play

import UIKit

let suits = ["Clubs", "Spades", "Hearts", "Diamonds"]
let values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
let numerical_values = [1,2,3,4,5,6,7,8,9,10,11,12,13]

struct Card{
    var value: String
    var Suit: String
    var numerical_value: Int
}

class Deck{
    var cards: [Card] = []
    func constructDeck(){
        for suit in suits{
            for i in 0 ..< values.count{
                self.cards.append(Card(value: values[i], Suit: suit, numerical_value: numerical_values[i]))
            }
        }
    }
    func drawCard() -> Card{
        let drawnCard = cards.remove(at: cards.count-1)
        return drawnCard
    }
    func reset(){
        self.cards = []
        self.constructDeck()
    }
    func shuffle(){
        for i in 0 ..< self.cards.count{
            let temp = self.cards[i]
            let rand = Int(arc4random_uniform(UInt32(self.cards.count-1)))
            self.cards[i] = self.cards[rand]
            self.cards[rand] = temp
        }
    }
}

class Player{
    var name: String
    init(name: String){
        self.name = name
    }
    var hand: [Card] = []
    func draw(deck: Deck){
        hand.append(deck.drawCard())
    }
    func discard(card: Card) -> Bool{
        for paper in hand {
            if card.value == paper.value && card.Suit == paper.Suit && card.numerical_value == paper.numerical_value{
                return true
            }
        }
        return false
    }
}

var k = Deck()
k.constructDeck()
print(k.cards)
k.drawCard()
k.drawCard()
k.reset()
print(k.cards)
k.shuffle()
print(k.cards)

var omar = Player(name: "Omar")
omar.draw(deck: k)
omar.draw(deck: k)
print(omar.name)
print(omar.hand)
print(omar.discard(card: Card(value: "A", Suit: "Spade", numerical_value: 1)))