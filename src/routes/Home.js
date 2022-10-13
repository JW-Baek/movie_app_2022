import React, { Component } from 'react'
import axios from 'axios';
import Movie from '../components/Movie';
import './Home.css'

class Home extends Component {

    state =
    {
        isLoading: true,
        movies: [],
    }

    // axios는 네트워크를 사용하므로 느림 -> 별도의 비동기 함수로 생성, async await
    // get 방식 (콘솔에 값 노출), post 방식 (노출X)

    getMovies = async () => 
    {
        const {data: {data:{movies},},}     // json 파일의 data > data > movies 에서 정보 가져오기
        = await axios.get('https://yts-proxy.now.sh/list_movies.json?genre=animation&sort_by=like_count');     // get 방식: 주소 뒤에 ?(조건1)&(조건2)...

        console.log(movies);

        this.setState({isLoading:false, movies})       // 키:키값 이름이 동일하면 하나만 써도 됨
    }
    
    componentDidMount()
    {
        // setTimeout
        // (
        //     () =>
        //     {this.setState({isLoading: false});}, 6000
        // );

        this.getMovies();
    }

    render()
    {
        const {isLoading, movies} = this.state;     // 구조 분해 할당

        return (
            <div>
                <section className='container'>
                {
                    isLoading ?
                    (<div className='loader'>
                        <span className='loader_text'>'Loading...'</span>
                    </div>)
                    :
                    (<div className='movies'>
                        {movies.map
                            ( (movie,index) =>
                                (<Movie
                                    key={index}
                                    id={movie.id}
                                    title={movie.title}
                                    year={movie.year}
                                    summary={movie.summary}
                                    poster={movie.medium_cover_image}
                                    genres={movie.genres}
                                    />)
                            )
                        }
                    </div>)
                    
                }
                </section>
            </div>
        )
    }
}

export default Home;