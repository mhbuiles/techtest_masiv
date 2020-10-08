import React , { useEffect , useState } from 'react';
import axios from 'axios';
import '../styles/comic.css';
import {
  useHistory,
} from 'react-router-dom';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function RandomComic() {

  const history = useHistory();
  const [ comic , setComic ] = useState( {} );
  const [ rate , setRate ] = useState( 0 );

  let randomComicNo = Math.floor(Math.random()*( 2000 - 1 ) + 1 );

  useEffect( () => {
    axios({
      method : 'GET',
      url : `https://cors-anywhere.herokuapp.com/http://xkcd.com/${randomComicNo}/info.0.json`,
    })
    .then( data => {
      setComic( data.data );
    })
    .catch( function (error) {
        console.log(error);
      });
  }, [] );

  function click() {
    history.push('/currentcomic');
  }

  return(
    <div className = 'comic'>
      <div>
        <h1>Here You'll always find a different comic!!</h1>
        { comic.title ? <h3>{comic.title}</h3> : <h3>Loading...</h3>}
        <img src = {comic.img} alt = {comic.transcript}/>
        <section className = 'comicInfo'>
          <p>Comic No. {comic.num}</p>
          <p>Published on {comic.day}/{comic.month}/{comic.year}</p>
        </section>
        <Box className = 'rating' component = 'fieldset' mb = {3} borderColor = 'transparent' >
          <Typography component = 'legend' align = 'center' color = 'textPrimary' variant = 'h6'>Rate this comic!!</Typography>
          <Rating
            name = 'half-rating'
            precision  = {0.5}
            value = {rate}
            size = 'large'
            onChange = { ( e , newValue ) => {
              setRate( newValue );
            }}
          />
        </Box>
        <button className = 'button' onClick = {click}>I wanna see the latest comic!!</button>
      </div>
    </div>
  )
}

export default RandomComic;
