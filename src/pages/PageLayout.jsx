import React, { useEffect, useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import TabDisplayer from '../components/TabDisplayer';
import ContentDisplayer1 from '../components/ContentDisplayer1';
import ContentDisplayer2 from '../components/ContentDisplayer2';
import ContentDisplayer3 from '../components/ContentDisplayer3';
import ContentDisplayer4 from '../components/ContentDisplayer4';
import ContentDisplayer5 from '../components/ContentDisplayer5';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
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
    const [value, setValue] = React.useState(0);
    const [recipes, setRecipes] = useState([]);
    const [fetchStatus, setFetchStatus] = useState('IDLE');
    const [errMessage, setErrMessage] = useState(null);

    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

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

    return (
        <div>
            {fetchStatus === 'SUCCESS' && (
                <div>
                    <AppBar position="static">
                        <TabDisplayer value={value} handleChange={handleChange} recipes={recipes} />
                    </AppBar>
                    <ContentDisplayer1
                        value={value}
                        recipes={recipes}
                        classes={classes}
                        expanded={expanded}
                        handleExpandClick={handleExpandClick}
                    />
                    <ContentDisplayer2 
                        value={value}
                        recipes={recipes}
                        classes={classes}
                        expanded={expanded}
                        handleExpandClick={handleExpandClick}
                    />
                    <ContentDisplayer3 
                        value={value}
                        recipes={recipes}
                        classes={classes}
                        expanded={expanded}
                        handleExpandClick={handleExpandClick}
                    />
                    <ContentDisplayer4
                        value={value}
                        recipes={recipes}
                        classes={classes}
                        expanded={expanded}
                        handleExpandClick={handleExpandClick}
                    />
                    <ContentDisplayer5
                        value={value}
                        recipes={recipes}
                        classes={classes}
                        expanded={expanded}
                        handleExpandClick={handleExpandClick}
                    />
                </div>
            )}
        </div>
    );
}