import React , { useEffect , useState } from 'react';
import axios from 'axios';
import '../styles/comic.css';
import {
  useHistory,
} from 'react-router-dom';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { withStyles } from '@material-ui/core/styles';
import FavoriteIcon from '@material-ui/icons/Favorite';

function CurrentComic() {

  const history = useHistory();
  const [ comic , setComic ] = useState( {} );

  const StyledRating = withStyles({
    iconFilled: {
      color: '#ff6d75',
    },
    iconHover: {
      color: '#ff3d47',
    },
  })(Rating);

  useEffect( () => {
    axios({
      method : 'GET',
      url : 'https://cors-anywhere.herokuapp.com/http://xkcd.com/info.0.json',
    })
    .then( data => {
      setComic( data.data );
    })
    .catch( function (error) {
        console.log(error);
      });
  }, [] );

  return(
    <div className = 'comic'>
      <div>
        <h1>This is the latest comic!!</h1>
        { comic.title ? <h3>{comic.title}</h3> : <h3>Loading...</h3>}
        <img src = {comic.img} alt = {comic.transcript}/>
        <section className = 'comicInfo'>
          <p>Comic No. {comic.num}</p>
          <p>Published on {comic.day}/{comic.month}/{comic.year}</p>
        </section>
        <Box component = 'fieldset' mb = {3} borderColor = 'transparent' >
          <Typography component = 'legend' align = 'center' color = 'secondary' variant = 'h6'>Rate this comic!!</Typography>
          <StyledRating
            name = "customized-color"
            defaultValue = {0}
            getLabelText = { ( value ) => `${value} Heart${value !== 1 ? 's' : ''}`}
            precision = {0.5}
            icon = {<FavoriteIcon fontSize = "inherit" />}
          />
        </Box>
        <button className = 'button' onClick = { () => history.push('/') }>I wanna read more comics!!</button>
      </div>
    </div>
  )
}

export default CurrentComic;
