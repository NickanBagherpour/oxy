import { Box  } from '@mui/material';
import { styled } from '@mui/material-pigment-css';


const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  color: ${p => p.theme.red};
  background-color: ${p => {
    console.log('aaaaaaaaaaaaaaaaaaaaa',p);
    return p.theme.blue;
    // return p.theme.palette.background.default;
  }};
`;


export default function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */
  return (
   <Container>
     <h2>Hello there!</h2>
   </Container>
  );
}
