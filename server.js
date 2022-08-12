const express = require('express')
const app = express()
const port = 4000
const axios = require('axios')


app.get('/api/:searchTerm/:mediaType', (req, res) => {
    let searchTerm = req.params.searchTerm
    let mediaType = req.params.mediaType 
    console.debug(searchTerm)
    console.debug(mediaType)
    axios.get(`https://itunes.apple.com/search?term=${searchTerm}&media=${mediaType}`)
        .then(function (response) {
            // handle success
            console.log(response);
            res.json(response.data)
        })
        .catch(function (error) {
            // handle error
            console.log(error);

        })
        
})


if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'frontend/build')));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname,
            'frontend', 'build', 'index.html'));
    });
}

app.use(express.static(path.join(__dirname, 'frontend/build')));









const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {


    console.log(`Server is listening on port ${PORT}`);
});