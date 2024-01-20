const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const characters = {
    'Meowth':{
        'characteristic': 'multifacetad mischief-maker who changed himself for love'
        
    },
    'charizard':{
        'characteristic': 'An icon whose antics have gone down in pokemon history'

    },
    'squirtle':{
        'characteristic': 'A stylish leader with a sinister side'
        
    },
    'wobbuffet':{
        'characteristic': 'A goofballwith impeccable timing'

    },
    'pikachu': {
        'characteristic': 'An impressionist and a movie star'

    },
    'scraggy': {
         'characteristic': 'Started looking for fights as soon as it was born'

    },
    'gengar': {
         'characteristic': 'Mischievous, playful and one half of a comedy duo'

    },
    'greninja': {
         'characteristic': 'A lone wolf who grew into a fierce competitor'

    },
    'pignite': {
          'characteristic': 'Its traumatic past helped it build character'

    },
    'snivy': {
          'characteristic': 'Cool, calm, collected and refreshingly candid'

    },
    'unknown': {
        'characteristic': 'unknown'
    }
}

app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request,response)=>{
    const characterName = request.params.name.toLowerCase()
    if(characters[characterName]){
        response.json(characters[characterName])
    }else{
        response.json(characters['unknown'])
    }
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is running on port ${PORT}! You better go catch it!`)
})