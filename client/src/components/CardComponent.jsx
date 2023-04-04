import { Card, CardActions, CardContent, Typography } from "@mui/material";

function CardComponent() {
  const paraText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

  return (
    <Card sx={{ m: 2 }}>
      <CardContent>
        <Typography variant="h5">This is a Card Title</Typography>
        <Typography variant="p" sx={{ fontSize: 15 }}>
          {paraText}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default CardComponent;
