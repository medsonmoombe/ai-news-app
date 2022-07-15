import React from 'react';

const NewsCard = (props) => {
  console.log(props);
  const { result: [{ aurthor, content, description, title, publishedAt, urlToImage, url }] } = props;
  return (
    <>
      <section className="card">
        <div className="single-card">
          <div className="imgDiv">
            <img className="img" src={urlToImage} alt="" />
          </div>
          <div className="details">
            <h1 className="aurthor">{aurthor}</h1>
            <p>{publishedAt}</p>
          </div>
          <h2 className="title">{title}</h2>
          <div className="descr-cont">
            <p className="descrpt">{description}</p>
            <p className="cont">{content}</p>
          </div>
          <a href={url}>Read more</a>
        </div>
      </section>
    </>
  )
}

export default NewsCard;

// aurthor: item.author,
// content: item.content,
// description: item.description,
// publishedAt:item.publishedAt,
// sources:item.source,
// title: item.title,
// url: item.url,
// urlToImage: item.urlToImage,