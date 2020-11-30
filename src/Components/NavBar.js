import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import Avatar from '@material-ui/core/Avatar';

const NavBar = () => {

    return(
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Avatar variant="square">
                        H
                    </Avatar>
                    <Typography style={{marginLeft:"10pt"}} component="h4" variant="h4" >
                        Hacker News Search
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}
export default NavBar