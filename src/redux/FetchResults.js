import axios from "axios";
const API_KEY = 'dd4342e8391048828ad5f4f1e44ab62d';
let news_Api =`https://newsapi.org/v2/top-headlines?sources=bbc-news,cnn-news&apiKey=${API_KEY}`;


const fetchResults =  async() => {
const results = [];
const response = await axios.get(news_Api);
const data = response;
const res = data.data.articles;

  res.map((item) => {
    const r = [{
      aurthor: item.author,
      content: item.content,
      description: item.description,
      publishedAt:item.publishedAt,
      sources:item.source,
      title: item.title,
      url: item.url,
      urlToImage: item.urlToImage,
    }];

    results.push(r);
    return results;
  });
  return results;
};

export default fetchResults;