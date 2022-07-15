import React from 'react';
import img from '../image/news.jpg';
function Home() {


    return (
     <>
    <div className="home">
        <div className="title-div">
           <h1 className="home-tilte">Get all latest news headline on <span className="n">News</span><span className="h">web</span></h1>
        </div>
        <img className="home-img" src={img} alt="news" />
        <div className="last-title-div">
            <h1 className="home-b-tilte">Get all latest news from different categories</h1>
        </div>
    </div>
     </>
    );
}
export default Home;
