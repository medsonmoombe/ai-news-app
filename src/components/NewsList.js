import React,{useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchResult } from '../redux/Reducers';
import fetchResults from '../redux/FetchResults';
import NewsCard from './NewsCard';

const NewsList = () => {
    const results = useSelector((state) => state.results);
    const dispatch = useDispatch();
    useEffect(() => {
      if (results.length === 0) {
        fetchResults().then((response) => dispatch(fetchResult(response)));
      }
    }, [results.length, dispatch]);

    return (
     <>
     <div className="newscard">
     {
            results.map((result) => <NewsCard key={Math.random()} result={result} />)
          }
     </div>
     </>
    );
}
export default NewsList;