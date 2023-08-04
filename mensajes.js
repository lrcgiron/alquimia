//Random message generator

//array with the list of messages to be displayed

let messages = [
"calcination in libra, air, venus, justice", 
"congelation in scorpio, water, death, healing water, deep water",
"finxation in saggitarius. fire",
"dissolution in capricorn, earth",
"digestion in aquarium, air",
"distelation in piscis, water",
"sublimation in aries, mars, fire, explosion, the star, astral projection",
"suspension in taurus, earth",
"incineration in geminis, air",
"fermentation in cancer, water, the lovers, from saturn to the sun",
"multiplication in leo, fire",
"projection in virgo, earth",
"cycling through the elements in a predefined order",
"mirror scrying is the key to strengthen the self-symbol"
]; 


//generate random number between 1 and 13 to select message

const ramdomNumber = () =>{
 return Math.floor((Math.random() * 14) + 1);
};

const mensaje = () =>{
    let numero = ramdomNumber();
    return messages[numero];
};

//mensaje();
