import axios from '../../api/axios';
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import "./SearchPage.css";
import { useDebounce } from '../../hooks/useDebounce';
export default function SearchPage() {
    const navigate = useNavigate();
    const [searchResults, setSearchResults] = useState([]);
    const useQuery =()=>{
        return new URLSearchParams(useLocation().search);
    }
    let query = useQuery();
    const searchTerm = query.get("q");
    const debouncedSearchTerm = useDebounce(searchTerm, 500);//0.5초 delay debounce후 검색
    useEffect(()=>{
        if(debouncedSearchTerm){//검색마다 아래 함수 콜
            fetchSearchMovie(debouncedSearchTerm);
        }

    }, [debouncedSearchTerm]);
    const fetchSearchMovie = async (searchTerm) => {//검색어에 따른 영화 끌어오기
        console.log("searchTerm", searchTerm);
        try {
          const request = await axios.get(
            `/search/multi?include_adult=false&query=${searchTerm}`
          );
          console.log(request);
          setSearchResults(request.data.results);
        } catch (error) {
          console.log("error", error);
        }
      };

    const renderSearchResults = () =>{
        return searchResults.length >0?(
            <section className='search-container'>
                {searchResults.map((movie)=>{
                    if(movie.backdrop_path !== null && movie.media_type !== "person")//이미지가 없거나 미디어타입이 person이 아니면
                    {
                        const movieImageUrl = 
                        "http://image.tmdb.org/t/p/w500" + movie.backdrop_path
                        return (
                            <div className='movie' key={movie.id}>
                                <div onClick={() => navigate(`/${movie.id}`)} className='movie__column-poster'>
                                    <img
                                    src={movieImageUrl} alt='movie'
                                    className='movie__poster'
                                    />
                                </div>
                            </div>
                        )
                    }
                })}
            </section>
        ): (
            <section className='no-results'>
                <div className='no-results__text'>
                    <p>
                        찾고자하는 검색어"{debouncedSearchTerm}"에 맞는 영화가 없습니다.
                    </p>
                </div>
            </section>
        )
    }
  return renderSearchResults();

}
