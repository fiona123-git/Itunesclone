import axios from 'axios'
//import Search from './components/Search'



describe('test api call from Search ', () => {

    it("it fetches data from Search", async () => {
        /*expect(mockAxios.get).toHaveBeenCalledWith(
            `https://itunes.apple.com/search?term=${searchTerm}&media=${mediaType}`, {
                params: {
                    Search
                    
                }
            }
        );*/
        axios
            .get(`/api/batman/movie`)
            .then(function (response) {
                // handle success
                console.log(response.data.results);
                setTracks(response.data.results);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    })
})