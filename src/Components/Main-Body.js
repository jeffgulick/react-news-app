import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const Main = (props) => {
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
                    <Typography variant="body2" color="textSecondary">
                        Created: {props.item.created_at}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}
export default Main