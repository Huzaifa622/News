import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Link from 'next/link';
// import { useGlobalContext } from '@/pages/context';


export default function ActionAreaCard(props) {
    // const {articles } = useGlobalContext;
  return (
    <Link href={props.url} target="_blank">
    <Card sx={{ maxWidth: 345 }} >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image= {props.image}
          alt={props.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Link>
  );
}