require('dotenv').config();

export async function getTopNews() {
  const apiKey = process.env.API_KEY;
  const apiUrl = 'https://newsapi.org/v2/top-headlines';
  const country = 'us';

  try {
    const response = await fetch(`${apiUrl}?country=${country}&apiKey=${apiKey}`);
    const data = await response.json();
    const articles = data.articles;
    return articles;
  } catch (error) {
    console.error('Error fetching top news:', error.message);
    return [];
  }
}

