import React, {useState} from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import classes from './NotesCard.module.css'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import NotFavoriteIcon from '@material-ui/icons/FavoriteBorderOutlined';
import Description from '../Description/Description';

const NotesCard = props => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [modalOpen, setModalOpen] = useState(false)

    const handleClick = (event) => {
        event.stopPropagation();
        setAnchorEl(event.currentTarget);
    }

    function handleClose(event) {
        event.stopPropagation();
        setAnchorEl(null);
    }
    let favoriteIcon = null;
    if(props.favorite) {
        favoriteIcon = <IconButton className={classes.Favorite} aria-label="remove from favorites" onClick={props.changeFavorite}>
            <FavoriteIcon />
        </IconButton>
    }
    else {
        favoriteIcon = <IconButton className={classes.Favorite} aria-label="Add to favorites" onClick={props.changeFavorite}>
            <NotFavoriteIcon />
        </IconButton>
    }

    const getModal = () => {
        setModalOpen(true);
    }

    const modalClose = () => {
        setModalOpen(false);
    }


    return (
        <div className={classes.NotesCard} >
            <Description 
            title={props.title}
            timestamp={props.timestamp}
            description={props.description}
            open={modalOpen} 
            modalClose={() => {modalClose(); props.updateDescription(props.index, props.id) }} 
            changeDescription={props.changeDescription}
            />
            <Card className={classes.card} onClick={getModal}>
            <CardHeader
                avatar={
                    <Avatar style={{zIndex:1}} aria-label="Recipe" className={classes.avatar}>
                         {props.avatar}
          </Avatar>
                }
                action={
                    <div>
                        <IconButton aria-label="simple-menu" onClick={handleClick}>
                        <MoreVertIcon />
                    </IconButton>
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={props.deleteNote}
                        style={{ backgroundColor: 'white', color: 'black' }}>Delete</MenuItem> 
                    </Menu>
                    </div>
                }
                title={props.title}
                subheader={props.timestamp}
            />
            <CardMedia
                className={classes.media}
                image={require('../../assets/notes_app.jpg')}
                title="Paella dish"
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p" noWrap>
                   {(props.description.length === 0)? <span>Please add description</span>
                   : props.description}
        </Typography>
            </CardContent>
            <CardActions disableSpacing>
                {favoriteIcon}
                <IconButton aria-label="Share">
                    <ShareIcon />
                </IconButton>
            </CardActions>
        </Card>
        </div>
    );
}

export default NotesCard;