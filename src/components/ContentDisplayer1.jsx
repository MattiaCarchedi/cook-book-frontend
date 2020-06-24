import React from 'react';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
    const { children, value, index } = props;

    return (
        <div>
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
};

const ContentDisplayer1 = (props) => {
    return (
        <div>
            <TabPanel value={props.value} index={0}>
                <Card className={props.classes.root}>
                    <CardHeader
                        title={props.recipes[0].title}
                        subheader="September 14, 2016"
                    />
                    <CardMedia
                        className={props.classes.media}
                        image={props.recipes[0].image}
                        title={props.recipes[0].title}
                    />
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {props.recipes[0].description}
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <IconButton aria-label="add to favorites">
                            <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="share">
                            <ShareIcon />
                        </IconButton>
                        <IconButton
                            className={clsx(props.classes.expand, {
                                [props.classes.expandOpen]: props.expanded,
                            })}
                            onClick={props.handleExpandClick}
                            aria-expanded={props.expanded}
                            aria-label="show more"
                        >
                            <ExpandMoreIcon />
                        </IconButton>
                    </CardActions>
                    <Collapse in={props.expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            <Typography paragraph>Ingredients:</Typography>
                            <Typography paragraph>
                                {props.recipes[0].ingredients[0].name} - Quantity: {props.recipes[0].ingredients[0].quantity} <br />
                                {props.recipes[0].ingredients[1].name} - Quantity: {props.recipes[0].ingredients[1].quantity} <br />
                                {props.recipes[0].ingredients[2].name} - Quantity: {props.recipes[0].ingredients[2].quantity} <br />
                                {props.recipes[0].ingredients[3].name} - Quantity: {props.recipes[0].ingredients[3].quantity} <br />
                                {props.recipes[0].ingredients[4].name} - Quantity: {props.recipes[0].ingredients[4].quantity} <br />
                            </Typography>
                            <Typography paragraph>
                                Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
                                heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
                                browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
                                and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
                                pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
                                saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                                    </Typography>
                            <Typography paragraph>
                                Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
                                without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
                                medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
                                again without stirring, until mussels have opened and rice is just tender, 5 to 7
                                minutes more. (Discard any mussels that don’t open.)
                                    </Typography>
                            <Typography>
                                Set aside off of the heat to let rest for 10 minutes, and then serve.
                                    </Typography>
                        </CardContent>
                    </Collapse>
                </Card>
            </TabPanel>
        </div>
    )
}

export default ContentDisplayer1;