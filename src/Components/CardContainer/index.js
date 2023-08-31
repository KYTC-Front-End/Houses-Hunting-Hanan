import React from 'react';
import Card from '../Cards'
import { Grid } from "@mui/material";
import Container from "@mui/material/Container";

const CardContainer = ({houses})=> {
return <>
{
  <Container>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {houses.map(houses => (
            <Grid item key={houses.id} xs={12} sm={6} md={4} lg={4}>
              <Card houses={houses} />
            </Grid>
          ))}
        </Grid>
    </Container>
}
</>
}
export default CardContainer