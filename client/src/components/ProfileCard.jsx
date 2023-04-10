import { Card, CardContent, CardMedia, Typography } from "@mui/material";

export default function ProfileCard(props) {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "max-content",
      }}
    >
      <CardMedia
        component="img"
        image={props.avatar}
        alt="user avatar"
        sx={{
          objectFit: "cover",
          height: "100px",
          width: "100px",
          borderRadius: "50%",
        }}
      />
      <CardContent sx={{ textAlign: "center" }}>
        <Typography variant="h1" sx={{ fontSize: "1.5rem" }}>
          {props.name}
        </Typography>
        <Typography color="text.secondary" sx={{ fontSize: "14px" }}>
          {props.postsCount} Posts • User since {props.creationDate}
        </Typography>
        <Typography sx={{ width: "300px" }}>{props.bio}</Typography>
      </CardContent>
    </Card>
  );
}
