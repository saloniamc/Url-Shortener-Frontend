// API endpoint (ensure your backend is running at this address)
const API_URL = 'http://localhost:3001';

// Function to shorten the URL
document.getElementById('urlForm').addEventListener('submit', async function (e) {
    e.preventDefault();
    const originalUrl = document.getElementById('originalUrl').value;

    try {
        const response = await fetch(`${API_URL}/shorten`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ originalUrl }),
        });

        const data = await response.json();

        // Display shortened URL
        document.getElementById('shortenedUrl').innerHTML = `<a href="${API_URL}/${data.shortUrl}" target="_blank">${API_URL}/${data.shortUrl}</a>`;
        document.getElementById('shortenedUrlSection').classList.remove('d-none');

        // Fetch and display all URLs after shortening
        //fetchAllUrls();

    } catch (error) {
        console.error('Error:', error);
    }
});

// Function to fetch all URLs and display them
// async function fetchAllUrls() {
//     try {
//         const response = await fetch(`${API_URL}/urls`);
//         const urls = await response.json();

//         const urlList = document.getElementById('urlList');
//         urlList.innerHTML = ''; // Clear existing list

//         urls.forEach(url => {
//             const listItem = document.createElement('li');
//             listItem.className = 'list-group-item';
//             listItem.innerHTML = `<a href="${API_URL}/${url.shortUrl}" target="_blank">${API_URL}/${url.shortUrl}</a> - ${url.originalUrl}`;
//             urlList.appendChild(listItem);
//         });
//     } catch (error) {
//         console.error('Error:', error);
//     }
// }

// // Fetch all URLs when the page loads
// document.addEventListener('DOMContentLoaded', fetchAllUrls); 




