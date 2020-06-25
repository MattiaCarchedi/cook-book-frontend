import React, { useEffect, useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import TabDisplayer from '../components/TabDisplayer';
import ContentDisplayer from '../components/ContentDisplayer';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
        margin: '0 auto'
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
}));

export default function PageLayout() {
    const [value, setValue] = useState(0);
    const [recipes, setRecipes] = useState([]);
    const [fetchStatus, setFetchStatus] = useState('IDLE');
    const [errMessage, setErrMessage] = useState(null);
    const [randomNumber, setRandomNumber] = useState(null);
    const random = Math.abs(Math.round(Math.random() * recipes.length));


    const classes = useStyles();
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    useEffect(() => {
        fetch('https://powerful-lowlands-74701.herokuapp.com/recipes')
            .then(response => response.json())
            .then(recipes => {
                setRecipes(recipes);
                setFetchStatus('SUCCESS')
            })
            .catch(err => {
                setErrMessage({
                    message: err,
                });
            });
    }, []);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleRandom = () => {
        setRandomNumber(random);
    };

    useEffect(() => {
        if (value !== 5) {
            setRandomNumber(null)
        }
    }, [handleRandom]);

    console.log(randomNumber)
    return (
        <div>
            {fetchStatus === 'SUCCESS' && (
                <div>
                    <div className='test'>
                        <AppBar position="static">
                            <TabDisplayer
                                value={value}
                                handleChange={handleChange}
                                recipes={recipes}
                                randomNumber={randomNumber}
                                handleRandom={handleRandom}
                            />
                        </AppBar>
                        <ContentDisplayer
                            value={value}
                            recipes={recipes}
                            classes={classes}
                            expanded={expanded}
                            handleExpandClick={handleExpandClick}
                            randomNumber={randomNumber}
                        />
                    </div>
                </div>
            )}
        </div>
    );
}