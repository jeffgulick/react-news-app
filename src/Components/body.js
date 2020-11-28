import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import IconButton from '@material-ui/core/IconButton';
// import CardActions from '@material-ui/core/CardActions';

const Body = (props) => {
    return(
        <div>
            <Card variant="outlined">
                <CardContent >
                    <Typography component="h5" variant="h5">
                        <a href= {props.item.url} target= "_blank"  rel="noreferrer">{props.item.title}</a>
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        By: {props.item.author}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                        URL: {props.item.url}
                    </Typography>
                </CardContent>
                {/* <CardActions>
                    <IconButton aria-label="add to favorites" >
                        <FavoriteIcon />
                    </IconButton>
                </CardActions> */}
            </Card>
        </div>
    )
}
export default Body