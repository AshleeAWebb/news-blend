export async function getTopNews() {
  const apiKey = 'dad438cd0bc248d6a6f4f18c9bab1b77';
  const apiUrl = 'https://newsapi.org/v2/top-headlines';
  const country = 'us';

  try {
    const response = await fetch(`${apiUrl}?country=${country}&apiKey=${apiKey}`);
    const data = await response.json();

    const articles = data.articles;
    console.log(articles);
    return articles;
  } catch (error) {
    console.error('Error fetching top news:', error.message);
    return [];
  }
}
