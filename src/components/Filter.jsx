import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Grid, TextField } from '@material-ui/core';

export default function Filter({ setFilter, filterBy, searchQuery, setSearchQuery }) {
    return (
        <Grid container >
            <Grid item xs={12} sm={12} md={12} >
                <Paper style={{ margin: '15px 0' }} >
                    <Grid container >
                        <Grid item xs={8} sm={8} md={8} lg={8}>
                            <Tabs
                                value={filterBy}
                                indicatorColor="primary"
                                textColor="primary"
                                onChange={(event, newValue) => setFilter(newValue)}
                                aria-label="disabled tabs example"
                            >
                                <Tab label="Все" />
                                <Tab label="Сначала дорогие" />
                                <Tab label="Сначала дешевые" />
                                <Tab label="Автор" />
                                <Tab label="Название" />
                            </Tabs>
                        </Grid>
                        <Grid item xs={4} sm={4} md={4} lg={4}>
                            <TextField 
                                onChange={e => setSearchQuery(e.target.value)} 
                                value={searchQuery} 
                                size="small" 
                                style={{ margin: '1% 0 1% 30%' }} 
                                id="outlined-size-small" 
                                label="Введите запрос" 
                                type="search" 
                                variant="outlined" />
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        </Grid>
    );
}
