// format for youtube links
// 'https://www.googleapis.com/youtube/v3/search?part=snippet&q=QUERY&key=[YOUR_API_KEY]' 

const axios = require('axios')
const fs = require('fs')
const Artist = require('../../models/Artists')
const apiKey = ""


// have to get each artist from Artist database
Artist.find({}).then(artists => artists.forEach(artist =>{
    let query = `${artist.name}%20concert`
    let url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&key=${apiKey}-aAs`
    axios.get(url).then(response => {
        console.log(JSON.stringify({"${artist.name}":response.data.items[0].id.videoId}))
    })
}))

// console.log(youtube['Rich Brian'].items[0].id.videoId)
