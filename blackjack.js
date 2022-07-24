import { createHand, hands, deck } from "./cards.js";

function main(){
    setUpHands();

    let shoeSize = parseInt(prompt("Shoe Size: "));
    setupShoe(shoeSize);

    let hitOnSoftSeventeen = getSoftSeventeenBool();
    console.log(hitOnSoftSeventeen);

}

function setUpHands(){
    let numPlayers = 0;
    while(numPlayers < 1 || numPlayers > 10){
        numPlayers = parseInt(prompt("Number of players (1-10): "));
    }
    for(let i = 0; i < numPlayers+1; i++){
        createHand();
    }
    hands[0].isDealer = true;
    console.log(hands);
}

function setupShoe(size){
    for(let i = 0; i < size-1; i++){
        deck.push("JK","JK",
        "AS","2S","3S","4S","5S","6S","7S","8S","9S","10S","JS","QS","KS",
        "AD","2D","3D","4D","5D","6D","7D","8D","9D","10D","JD","QD","KD",
        "KC","QC","JC","10C","9C","8C","7C","6C","5C","4C","3C","2C","AC",
        "KH","QH","JH","10H","9H","8H","7H","6H","5H","4H","3H","2H","AH");
    }
    console.log(deck);
    return true;
}

function getSoftSeventeenBool(){
    let hit = prompt("Must the dealer hit on a soft 17? (Y/N): ");
    if(hit == "Y") return true;
    if(hit == "N") return false;
    return true;
}

main();