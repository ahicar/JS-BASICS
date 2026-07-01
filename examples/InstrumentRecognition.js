let instrument;

switch (instrument){
    case 'guitar':
        console.log('This instrument is a guitar');
        break; 
    case 'piano':
        console.log('This instruments is a piano');
        break;
    case 'drums':
        console.log('This instrument is a drums');
        break;
    default:
        console.log('This instrument is not recognized');    
}

//is else alternative to switch statement

if (instrument === 'guitar') console.log('This instrument is a guitar');
else if (instrument === 'piano') 
    console.log('This instrument is a piano');
else if (instrument === 'drums')
    console.log('This instrument is a drums');
else 
    console.log('This instrument is not recognized');

