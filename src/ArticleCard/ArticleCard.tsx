import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import ArticleImg from '../logo.svg'

export default function ArticleCard() {
    return (
        <Card sx={{ maxWidth: 400 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="100"
                    image={ArticleImg}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Article 1
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
