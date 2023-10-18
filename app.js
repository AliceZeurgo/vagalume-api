// Função para buscar a letra da música
function searchLyrics(artist, song) {
    const apiKey = 'fda3e30a966083da85470c8870510404'; // Substitua pela sua chave de API do Vagalume

    // Faça uma solicitação à API do Vagalume
    fetch(`https://api.vagalume.com.br/search.php?apikey=${apiKey}&art=${artist}&mus=${song}`)
        .then(response => response.json())
        .then(data => {
            if (data.type === 'exact' && data.mus[0]) {
                const lyrics = data.mus[0].text;
                document.querySelector('.lyrics-content').textContent = lyrics;
            } else {
                document.querySelector('.lyrics-content').textContent = 'Letra não encontrada.';
            }
        })
        .catch(error => {
            console.error(error);
            document.querySelector('.lyrics-content').textContent = 'Erro na solicitação da API.';
        });
}

// Adicione um evento de envio de formulário para acionar a pesquisa
document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const artist = document.getElementById('artist').value;
    const song = document.getElementById('song').value;
    searchLyrics(artist, song);
});
