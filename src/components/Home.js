import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()
  const [searchValue, setSearchValue] = useState('')
  const [filmData, setFilmData] = useState({})


  const handleSubmit = (e) => {
    e.preventDefault()

    console.log(searchValue)
    searchValue && navigate(`/search-results/${searchValue}`)
    setSearchValue('')
  }

  const updateSearchValue = (e) => {
    setSearchValue(e.target.value)
  }

  useEffect(() => {

    const getRandomWord = async () => {
      try {
        const { data } = await axios.get('https://random-word-api.herokuapp.com/word?number=1')
        console.log(data)
        setSearchValue(data)
        // console.log(data.Response)
      } catch (error) {
        console.log(error.message)
      }

    }
    getRandomWord()
  }, [])

  useEffect(() => {

    const getRandomFilm = async () => {
      try {
        const { data } = await axios.get(`http://www.omdbapi.com/?t=${searchValue}&apikey=66b63fd8`)
        console.log('test', data)

        data.Error ? setSearchValue('So Random') : setFilmData(data)

        // console.log(data.Response)
      } catch (error) {
        console.log('test', error.message)
        // error.message === 'Movie not found!'

      }

    }
    getRandomFilm()
  }, [searchValue])

  const { Title, Released, Poster, Metascore, imdbRating } = filmData


  return (
    <>
      <h1>Home</h1>
      <div id="film-page">

        <div id='main'>

          <div id='left'>
            <h1>{Title}</h1>
            <p>{Released}</p>
            <div id='ratings'>
              <p>Metascore: <span>{Metascore}</span></p>
              <p>IMDB: <span>{imdbRating}</span></p>
            </div>
          </div>
          <div id='right'>
            <img src={Poster} alt="poster" />
          </div>

        </div>


      </div>

      {/* <form onSubmit={handleSubmit}>
        <input onChange={updateSearchValue} type="text" name='search' placeholder='Search' />
        <input type="submit" value='Search' />
      </form> */}
    </>

  )
}

export default Home