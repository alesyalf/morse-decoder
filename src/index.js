const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let symbols = [];
    let answer = [];
    let [i,j] = [0,1];
    let n = expr.length
    while (i < n) {
        let current ='';
        symbols =(expr.slice(i,(+(j+'0'))));
        for (let i = 0; i <= 10; i = i + 2) {
            if(symbols[i] === '*') {
                current = ` `;
                break;
            }
            if(symbols[i] + symbols[i+1] === '00') {
                current += '';
                continue;
            }
            if(symbols[i] + symbols[i+1] === '10') {
                current += '.';
                continue;
            }
            if(symbols[i] + symbols[i+1] === '11') {
                current += '-';
                continue;
            }
        }
        current === ` ` ? answer.push(` `) : answer.push(MORSE_TABLE[current]);
        i = i + 10;
        j++;
    }
    answer = answer.join('');
    return answer;
}

module.exports = {
    decode
}