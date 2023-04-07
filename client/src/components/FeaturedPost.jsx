import { GridOn } from "@mui/icons-material";
import { Box, Paper, Link, Grid, Typography, Card, CardMedia, CardActionArea, CardContent, Container } from "@mui/material";

function FeaturedPost() {

        return (
        <Container className="hero" maxWidth="lg">
            <Card sx={{ maxWidth: 1128 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="440"
                  image="https://t3.ftcdn.net/jpg/05/57/26/24/360_F_557262440_N3AT3czLnyl5EIuS8ZTwrdmPdK9ChWUd.jpg"
                  alt=""
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    What are dreams?
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                  Dreams are a natural and mysterious part of the human experience. They are a series of thoughts, images, and sensations that occur during sleep and can be vivid, complex, and emotional. Dreams can be influenced by a variety of factors, including our daily experiences, emotions, and subconscious desires. Some dreams can be enjoyable and even fantastical, while others can be frightening or unsettling.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
        </Container>
          );
}


export default FeaturedPost;
