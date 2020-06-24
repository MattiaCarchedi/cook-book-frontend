import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const TabDisplayer = (props) => {
    return (
        <div>
            <Tabs value={props.value} onChange={props.handleChange}>
                <Tab label={props.recipes[0].title} />
                <Tab label={props.recipes[1].title} />
                <Tab label={props.recipes[2].title} />
                <Tab label={props.recipes[3].title} />
                <Tab label={props.recipes[4].title} />
            </Tabs>
        </div>
    )
}

export default TabDisplayer;