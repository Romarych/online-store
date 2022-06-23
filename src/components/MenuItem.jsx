import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AppBar from '@material-ui/core/AppBar';
import { Box, Container, Grid, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import CartContainer from './CartContainer';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: '100%',
  },
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};


export default function MenuItem({ totalPrice, count, books, removeFromCart, addedCount }) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Container maxWidth='lg' >
          <Grid container >
            <Grid item xs={12} sm={12} md={12} >
              <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                variant="fullWidth"
                aria-label="full width tabs example"
              >
                <Tab style={{ margin: '0 35% 0 0' }} label="Магазин Книг" />
                <Tab label={`Итого: ${totalPrice} грн.`} />
                <Tab label={`Корзина ${count}`} />
              </Tabs>
            </Grid>
          </Grid>
        </Container>
      </AppBar>
      <AppBar style={{width: 400, float: 'right', top: 60, right: 10}} position="absolute" color="default">
        <TabPanel value={value} index={2}>
          {books.length ? books.map(b => <CartContainer key={b.id} addedCount={addedCount} book={b} removeFromCart={removeFromCart} />) : 'Корзина пуста'}
        </TabPanel>
      </AppBar>
    </div>

  );
}
