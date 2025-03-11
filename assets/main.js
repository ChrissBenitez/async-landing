
const url = 'https://youtube-v3-alternative.p.rapidapi.com/channel?id=UC3GIf53bKQyVWiwCHZO65Tw';
const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': '77adb703cemshd7c073b2f01593fp12b091jsn5caf7d6f3e8b',
        'x-rapidapi-host': 'youtube-v3-alternative.p.rapidapi.com'
    }
};

const content = null || document.getElementById('content');
console.log(content);

async function fetchData(url) {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
}

(async () => {
    console.log('fetching data...');
    try {
        const videos = await fetchData(url);
        console.log(videos);
        let view = `
        ${videos.data.map(video => `
            <div class="group relative">
                <div
                    class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                    <img src="${video.thumbnail[0].url}" alt="${video.description}" class="w-full">
                </div>
                <div class="mt-4 flex justify-between">
                    <h3 class="text-sm text-gray-700">
                        <span aria-hidden="true" class="absolute inset-0"></span>
                        ${video.title}
                    </h3>
                </div>
            </div>
        `).slice(0, 4).join('')}
        `;
        content.innerHTML = view;
    } catch (error) {
        console.error(error);
    }
})();