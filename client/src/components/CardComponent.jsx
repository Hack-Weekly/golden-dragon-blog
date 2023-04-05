import {
  Card,
  CardActions,
  CardContent,
  Typography,
  Button,
  Box,
  CardActionArea,
  IconButton,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";

function CardComponent() {
  const paraText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

  return (
    <Card sx={{ m: 2 }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <Box sx={{ fontWeight: 500 }}>This is a Card Title</Box>
          </Typography>
          <Typography variant="body2">{paraText}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <IconButton>
          <FavoriteIcon />
        </IconButton>
        <IconButton>
          <ShareIcon />
        </IconButton>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

export default CardComponent;
