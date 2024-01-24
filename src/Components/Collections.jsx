import { Grid, Box, styled } from "@mui/material";

//component styles
const Container = styled(Box)`
  border: 2px solid grey;
  border-radius: 5%;
  padding: 20px;
`;
const Wrapper = styled(Box)`
  color: white;
`;
const Image = styled("img")`
  width: 100%;
  height: 250px;
  &:hover{
    transform: scale(1.1);
    transition: 0.5s;
  }
`;

const Collections = () => {
  return (
    <div style={{ width: "90%", margin: "0 auto" }}>
      <h1 style={{ color: "white", textAlign: "center" }}>
        Browse Your Favorite Collections
      </h1>
      <Grid container spacing={2}>
        <Grid item sm={3}>
          <Container>
            <Wrapper>
              <Image src="https://cf.bstatic.com/xdata/images/hotel/max500/502257345.jpg?k=a272e7772535ef38ecc2ad49e5ad0e3e838a9c2f0c56c1b18c00693aa6f9a03f&o=" />
              <h1>this is sample text</h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Corrupti mollitia sed, repellendus dolore architecto animi
              </p>
            </Wrapper>
          </Container>
        </Grid>
        <Grid item sm={3}>
          <Container>
            <Wrapper>
              <Image src="https://cf.bstatic.com/xdata/images/hotel/max500/502257345.jpg?k=a272e7772535ef38ecc2ad49e5ad0e3e838a9c2f0c56c1b18c00693aa6f9a03f&o=" />
              <h1>this is sample text</h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Corrupti mollitia sed, repellendus dolore architecto animi
              </p>
            </Wrapper>
          </Container>
        </Grid>
        <Grid item sm={3}>
          <Container>
            <Wrapper>
              <Image src="https://cf.bstatic.com/xdata/images/hotel/max500/502257345.jpg?k=a272e7772535ef38ecc2ad49e5ad0e3e838a9c2f0c56c1b18c00693aa6f9a03f&o=" />
              <h1>this is sample text</h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Corrupti mollitia sed, repellendus dolore architecto animi
              </p>
            </Wrapper>
          </Container>
        </Grid>
        <Grid item sm={3}>
          <Container>
            <Wrapper>
              <Image src="https://cf.bstatic.com/xdata/images/hotel/max500/502257345.jpg?k=a272e7772535ef38ecc2ad49e5ad0e3e838a9c2f0c56c1b18c00693aa6f9a03f&o=" />
              <h1>this is sample text</h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Corrupti mollitia sed, repellendus dolore architecto animi
              </p>
            </Wrapper>
          </Container>
        </Grid>
      </Grid>
    </div>
  );
};

export default Collections;
