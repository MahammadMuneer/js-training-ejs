/* Consider the first verse of the song “99 Bottles of water:

99 bottles of water on the wall,
99 bottles of water,
ya’ take one down, ya’ pass it around,
98 bottles of water on the wall.

Subsequent verses are identical except that the number of bottles gets smaller by one in each verse, until the last verse:

No bottles of water on the wall,
no bottles of water,
ya’ can’t take one down, ya’ can’t pass it around,
’cause there are no more bottles of water on the wall!

And then the song (finally) ends.
*/
"use strict";

function poem() {
    for (let i = 99; i >= 0; i--) {
        if (i === 0) {
            console.log('No bottles of water on the wall,');
            console.log('no bottles of water,');
            console.log('ya’ can’t take one down, ya’ can’t pass it around,');
        } else {
            console.log(i + ' bottles of water on the wall,');
            console.log(i + ' bottles of water');
            console.log('ya’ take one down, ya’ pass it around,\n');
        }
    }
}

poem();