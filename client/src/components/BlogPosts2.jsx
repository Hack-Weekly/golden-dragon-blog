import { Card, CardActions, CardContent, Typography, Grid, Box, Container, CardMedia, Button} from "@mui/material";



function BlogPosts2() {
    
    return (
        <div className="blogposts">
           <Container maxWidth="lg" className="blog-container">
            
            <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="dream state"
        height="180"
        image="https://images.nightcafe.studio/jobs/slHUHMtiMsOhBRysHLOL/slHUHMtiMsOhBRysHLOL.jpg?tr=w-1600,c-at_max"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lucid Dreams
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Dreams have been the subject of much speculation and research throughout history, with various cultures attaching different meanings and interpretations to them. While some experts believe that dreams serve as a way for the brain to process and consolidate memories and emotions, others suggest that they may hold deeper symbolic or spiritual significance
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">See Post</Button>
      </CardActions>
    </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="dream state"
        height="180"
        image="https://images.nightcafe.studio/jobs/slHUHMtiMsOhBRysHLOL/slHUHMtiMsOhBRysHLOL.jpg?tr=w-1600,c-at_max"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lucid Dreams
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Dreams have been the subject of much speculation and research throughout history, with various cultures attaching different meanings and interpretations to them. While some experts believe that dreams serve as a way for the brain to process and consolidate memories and emotions, others suggest that they may hold deeper symbolic or spiritual significance
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">See Post</Button>
      </CardActions>
    </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="dream state"
        height="180"
        image="https://images.nightcafe.studio/jobs/slHUHMtiMsOhBRysHLOL/slHUHMtiMsOhBRysHLOL.jpg?tr=w-1600,c-at_max"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lucid Dreams
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Dreams have been the subject of much speculation and research throughout history, with various cultures attaching different meanings and interpretations to them. While some experts believe that dreams serve as a way for the brain to process and consolidate memories and emotions, others suggest that they may hold deeper symbolic or spiritual significance
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">See Post</Button>
      </CardActions>
    </Card>
            </Grid>
            </Grid>
           </Container>
        </div>
    )
}

export default BlogPosts2;
