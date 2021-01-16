# project-decoder-ring

by Leland T. Klauzer

## introduction

This is a project for a Thinkful engineering bootcamp. I wrote the JavaScript to make three different ciphers encode and decode for a website.  

The website is [here](https://llndklzr.github.io/project-decoder-ring/).

## caesar

This cipher will encode or decode messages by shifting values a number of characters given by the user,  
either to the right (positive shift value) or to the left (negative shift value).

### parameters

_input:_ a message given by the user to either encode or decode.

_shift:_ a number to shift the message to encode or decode.  
A positive number will shift right when encoding and left when decoding. A negative number will shift left when decoding and right when encoding.

_encode:_ (boolean, default = true) true if encoding, false if decoding.

## polybius

This cipher will encode or decode messages by turning them into a a number representative of a position in a two dimensional array known as a polybius square.  
The array used in this case is:

```js
    const polybiusSquare = [
      ['a', 'f', 'l', 'q', 'v'],
      ['b', 'g', 'm', 'r', 'w'],
      ['c', 'h', 'n', 's', 'x'],
      ['d', 'i/j', 'o', 't', 'y'],
      ['e', 'k', 'p', 'u', 'z']
    ];
```

### parameters

_input:_ a message given by the user to either encode or decode.

_encode:_ (boolean, default = true) true if encoding, false if decoding.

## substitution

This cipher will encode or decode messages by exchanging letters in the English alphabet with a different alphabet provided by the user.

### parameters

_input:_ a message given by the user to either encode or decode.

_alphabet:_ a series of exactly 26 unique characters.

_encode:_ (boolean, default = true) true if encoding, false if decoding.
