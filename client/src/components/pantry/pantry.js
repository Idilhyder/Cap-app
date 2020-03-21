import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  title: {
    fontSize: 14,
  },
});

const Pantry =(props) => {
    console.log(props)
  const classes = useStyles();
  return (
    <Card 
    className={classes.root}>
    {props.items.map(item =>{
        return (
            <>
            <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {props.item.name}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Edit</Button>
      </CardActions>
      </>
        )
    })}
      
    </Card>
  );
}

// const Pantry = props => {
// console.log(props.item)
//     return(
//     <div className="card">    
//     {props.items.map(item=>{
//     return (
//         <>
//     <div key={item.id}/>
//     <p className="card-title">{item.name}</p>
//     </>
//     )
//     })} 
//     </div>
// );
// }

export default Pantry;