import type { NextPage } from 'next'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button, Container, Stack, SxProps, TextField } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useState } from 'react';

type Inputs = {
  name: string;
};

type Row = {
  no: number
  name: string
  stage: number
  types: string
  color: string
}

const INITIAL_LEFT_SX:SxProps = {position:"absolute",top:0,left:0,width:"20%",height:"100%"}
const INITIAL_RIGHT_SX:SxProps = {position:"absolute",top:0,right:0,width:"20%",height:"100%"}


const Home: NextPage = () => {
  const [leftSx,setLeftSx] = useState(INITIAL_LEFT_SX)
  const [rightSx,setRightSx] = useState(INITIAL_RIGHT_SX)

  const LeftEnterHandler = () => {
    setLeftSx(Object.assign({borderLeft:4,borderColor:"red"},INITIAL_LEFT_SX))
  }
  const leftLeaveHandler = () => {
    setLeftSx(INITIAL_LEFT_SX)
  }

  const rightEnterHandler = () => {
    setRightSx(Object.assign({borderRight:4,borderColor:"red"},INITIAL_RIGHT_SX))
  }

  const rightLeaveHandler = () => {
    setRightSx(INITIAL_RIGHT_SX)
  }

  return (
    <>
      <Box sx={{ flexGrow: 1, pb:3 }}>
        <AppBar position="static">
          <Toolbar variant="dense">
            <Typography variant="h6" color="inherit" component="div">
              Pokemon
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <Container fixed>
        <Stack spacing={2}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>チーム</TableCell>
                  <TableCell align="right">0:00</TableCell>
                  <TableCell align="right">1:00</TableCell>
                  <TableCell align="right">2:00</TableCell>
                  <TableCell align="right">3:00</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell component="th" scope="row">
                    テスト
                  </TableCell>
                  <TableCell sx={{position:"relative"}}>
                    <Box sx={leftSx} onMouseEnter={LeftEnterHandler} onMouseLeave={leftLeaveHandler}/>
                    0.19
                    <Box sx={rightSx} onMouseEnter={rightEnterHandler} onMouseLeave={rightLeaveHandler}/>
                  </TableCell>
                  <TableCell align="right">0.20</TableCell>
                  <TableCell align="right">0.30</TableCell>
                  <TableCell align="right">0.40</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Stack>
      </Container>
    </>
  )
}

export default Home
