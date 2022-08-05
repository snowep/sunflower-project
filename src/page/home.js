/** @format */

import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

const Home = () => {
  const card = [
    {
      count: 130,
      text: "Laporan baru bulan ini."
    },
    {
      count: 20,
      text: "Laporan perlu diperiksa."
    }
  ];
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        p: 3
      }}>
      <Toolbar />
      <Grid container spacing={3}>
        {card.map((item, index) => {
          return (
            <Grid item xs={4}>
              <Card>
                <CardContent>
                  <Typography variant="h5" component="div">
                    {item.count}
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {item.text}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
      <Typography paragraph>Home</Typography>
      <Typography paragraph>
        Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
        ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar elementum
        integer enim neque volutpat ac tincidunt. Ornare suspendisse sed nisi
        lacus sed viverra tellus. Purus sit amet volutpat consequat mauris.
        Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
        vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra
        accumsan in. In hendrerit gravida rutrum quisque non tellus orci ac.
        Pellentesque nec nam aliquam sem et tortor. Habitant morbi tristique
        senectus et. Adipiscing elit duis tristique sollicitudin nibh sit.
        Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra
        maecenas accumsan lacus vel facilisis. Nulla posuere sollicitudin
        aliquam ultrices sagittis orci a.
      </Typography>
    </Box>
  );
};
export default Home;
