console.log('Hello World');

const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 3000;

app.use(cors);

const pc = {
    'beau' : {
        'name': 'Beauregard Lionett',
        'alignment': 'Neutral',
        'race': 'Human',
        'class': 'Monk',
        'level': 17,
        'profession': 'Expositor',
        'age': 23,
        'party': 'The Mighty Nein',
        'homeTown': 'Kamordah',
    },
    'caduceus' : {
        'name': 'Caduceus Clay',
        'alignment': 'unknown',
        'race': 'Firbolg',
        'class': 'Cleric',
        'level': 16,
        'profession': 'n/a',
        'age': 80,
        'party': 'The Mighty Nein',
        'homeTown': 'Blooming Grove',
    },
    'caleb' : {
        'name': 'Caleb Widowgast',
        'alignment': 'Chaotic Good',
        'race': 'Human/Zemnian',
        'class': 'Wizard',
        'level': 13,
        'profession': 'n/a',
        'age': 33,
        'party': 'The Mighty Nein',
        'homeTown': 'Blumenthal',
    },
    'fjord' : {
        'name': 'Fjord',
        'alignment': 'unkown',
        'race': 'Half-Orc',
        'class': 'Warlock/Paladin',
        'level': 17,
        'profession': 'Sailor',
        'age': 30,
        'party': 'The Mighty Nein',
        'homeTown': 'Port Damali',
    },
    'jester' : {
        'name': 'Jester Lavorre',
        'alignment': 'Chaotic Neutral',
        'race': 'Teifling',
        'class': 'Cleric',
        'level': 17,
        'profession': 'n/a',
        'age': 25,
        'party': 'The Mighty Nein',
        'homeTown': 'Nicodranas',
    },
    'nott' : {
        'name': 'Veth Brenatto',
        'alignment': 'unknown',
        'race': 'Lightfoot Halfling/Goblin',
        'class': 'Rogue/Wizard',
        'level': 17,
        'profession': 'n/a',
        'age': 25,
        'party': 'The Mighty Nein',
        'homeTown': 'Felderwin',
    },
    'yasha' : {
        'name': 'Yasha Nydoorin',
        'alignment': 'unknown',
        'race': 'Aasimar',
        'class': 'Barbarian',
        'level': 17,
        'profession': 'n/a',
        'age': 27,
        'party': 'The Mighty Nein',
        'homeTown': 'Iotha Moorland',
    },
    'unknown' :{
        'name': 'uknown',
        'alignment': 'uknown',
        'race': 'uknown',
        'class': 'uknown',
        'level': 'uknown',
        'profession': 'uknown',
        'age': 'uknown',
        'party': 'uknown',
        'homeTown': 'uknown',
    }
}


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
});

app.get('/api', (req, res) => {
    res.json(pc);
})

app.get('/api/:name', (req, res) => {
    const characterName = req.params.name.toLowerCase();
    if (pc[characterName]) {
        res.json(pc[characterName]);
    } else {
        res.json(pc['unknown']);
    }
})

app.listen(PORT, ()=> {
    console.log(`Listening on ${PORT}`)
});