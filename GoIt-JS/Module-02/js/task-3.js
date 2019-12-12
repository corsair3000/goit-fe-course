'use strict'
const ourString = ('11 222 333 4444 55555 66666');


const findPosition = function(string)
{
const arrayWithLongerWorlds = [];
let j=0;
let arrFromString = [];
let elementLength = 0;

arrFromString = (string.split(' '));
let arrLength = arrFromString.length;
let pos;
let i;
for (i=0; i<arrLength; i +=1)
{
    
    if ( arrFromString[i].length >= elementLength)

    {
        elementLength =  arrFromString[i].length;
        pos = i;
    }

    }

    for (i=0; i<arrLength; i +=1)
    {
    
        if ( arrFromString[i].length === arrFromString[pos].length)
            {

                arrayWithLongerWorlds[j]=arrFromString[i];
                j += 1;
            }
    }


return arrayWithLongerWorlds;
}


console.log(findPosition(ourString));



