import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    height: 620
  },
});

export default function BookCart(book) {
  const {title, author, image, price, addToCart, addedCount} = book
  const classes = useStyles();
  return (
    <Grid item md={3}>
    <Card className={classes.root}>
      <CardActionArea >
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="420"
          image={image}
          title="Contemplative Reptile"
        />
        <CardContent style={{height: 130}}>
          <Typography gutterBottom variant="h6" component="h2">
            {title}
          </Typography>
          <Typography gutterBottom variant="body1" component="h2">
            <b>{author}</b>
          </Typography>
          <Typography variant="body2"  >
            Цена: <b>{price}</b> грн.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={{paddingLeft: 0, paddingRight: 0}}>
        <Button onClick={() => addToCart(book)} style={{width: '100%'}} size="small" color="primary">
          Добавить в корзину {addedCount > 0 && `(${addedCount})`}
        </Button> 
      </CardActions>
    </Card>
    </Grid>
  );
}
// addToCart.bind(this, book)