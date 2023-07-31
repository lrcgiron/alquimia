//Random message generator

//array with the list of messages to be displayed

let messages = [
"calcination in libra, air, venus, justice", 
"congelation in scorpio, water, death",
"finxation in saggitarius. fire",
"dissolution in capricorn, earth",
"digestion in aquarium, air",
"distelation in piscis, water",
"sublimation in aries, mars, fire",
"suspension in taurus, earth",
"incineration in geminis, air",
"fermentation in cancer, water",
"multiplication in leo, fire",
"projection in virgo, earth",
]; 


//generate random number between 1 and 12 to select message

const ramdomNumber = () =>{
 return Math.floor((Math.random() * 12) + 1);
};

const mensaje = () =>{
    return messages[ramdomNumber()];
};

//mensaje();
