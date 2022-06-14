import type { NextPage } from 'next'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button, Container, Input, Stack, SxProps, TextField } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ChangeEvent, useState } from 'react';

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
  const [csvFiles, setCsvFiles] = useState<FileList|null>()

  const handleSubmit = async () => {

    try {
      const res = await fetch('/api/tmp',{
        method:'POST',
        body: JSON.stringify([
          {no:1,name:'tetete',stage:1,types:'god',color:"yellow"}
        ]),
      })
      const json = await res.json()

      console.log(json)
      console.log('終了')
    }catch{
      console.log('エラー起きてる')
    }
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
          <Input
            type='file'
            name='csv'
            required
            onChange={(e : ChangeEvent<HTMLInputElement>) => setCsvFiles(e.target.files)}
          />
          <Button
            onClick={() => handleSubmit()}
            >送信</Button>
        </Stack>
      </Container>
    </>
  )
}

export default Home
