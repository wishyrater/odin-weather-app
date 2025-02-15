const GiphyAPIClient = (() => {

    const apiKey = 'dwjqicuAfA6q3qC6tYkMmS9XTiwo5R5Z';
    const endpoint = 'https://api.giphy.com/v1/gifs/translate';

    const fetchGif = async (searchTerm) => {
        try {
            const response = await fetch(`${endpoint}?api_key=${apiKey}&s=${searchTerm}`);
            if (!response.ok) {
                throw new Error(`HTTP error. Status: ${response.status}`);
            }
            const data = await response.json();
            if (!data.data || data.data.length === 0) {
                throw new Error('No gifs found for the given search term');
            }
            return data;
        } catch (error) {
            console.error('Error fetching GIF:', error);
        }
    };

    return { fetchGif };
})();

export default GiphyAPIClient;