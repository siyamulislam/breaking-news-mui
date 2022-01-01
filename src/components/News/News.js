import React from 'react';
import { Card, CardContent, CardMedia, Typography, CardActions, Button } from '@mui/material/';

const News = (props) => {

    const { author, content, description, urlToImage, publishedAt, title, url } = props.article;
    return (
        <Card className='m-2' sx={{ maxWidth: 645 }}>
            <CardMedia
                component="img"
                height="240"
                image={urlToImage}
                alt="green iguana"
            />
            <CardContent>
                <Typography className='text-success' gutterBottom variant="h5" component="div">{title}</Typography>

                <Typography className='text-muted' gutterBottom variant="overline" component="div">{author}  ||  <span>{publishedAt}</span></Typography>
                <Typography variant="body1" color="text.secondary">{description}</Typography>
            </CardContent>
            <CardActions>
                <Button size="small" variant='contained' target="_self" onClick={()=>window.location.href = url}>View Full Article</Button>
                <Button size="small" variant='contained' target="_parent" onClick={()=>window.location.href = url}> See More</Button>
                
                 </CardActions>
        </Card>
    );
};

export default News;