const releaseLookup = new Request('https://api.github.com/repos/Blish-Hud/Blish-Hud/releases/latest');

fetch(releaseLookup)
    .then(response => response.json())
    .then(data => {
        document.getElementsByClassName(".link--download").href = data.assets[0].browser_download_url;
    })
    .catch(console.error);