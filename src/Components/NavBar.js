import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import SvgIcon from '@material-ui/core/SvgIcon';

  //for home icon
  function HomeIcon(props) {
    return (
      <SvgIcon {...props}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </SvgIcon>
    );
  }
  
const NavBar = (props) => {
    return(
        <div>
            <AppBar position="sticky">
                <Toolbar>
                    <Avatar variant="square" >
                        H
                    </Avatar>
                    <Typography style={{marginLeft:"10pt"}} component="h4" variant="h4" >
                        Hacker News Search
                    </Typography>
                    <IconButton edge="end"  color="inherit" aria-label="home" onClick = {props.home}>
                        <HomeIcon fontSize="large" />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    )
}
export default NavBar