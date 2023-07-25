export async function getNews() {
  const apiKey = 'dad438cd0bc248d6a6f4f18c9bab1b77';
  const apiUrl = 'https://newsapi.org/v2/everything';
  const query = 'technology';
  const fromDate = '2023-07-17';
  const toDate = '2023-07-24';
  const sortBy = 'relevancy';

  try {
    const response = await fetch(`${apiUrl}?q=${query}&from=${fromDate}&to=${toDate}&sortBy=${sortBy}&apiKey=${apiKey}`);
    const data = await response.json();

    const articles = data.articles;
    console.log(articles);
  } catch (error) {
    console.error('Error fetching news:', error.message);
  }
}

