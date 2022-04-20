import type { NextPage } from 'next'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button, Container, Stack, TextField } from '@mui/material';
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

const Home: NextPage = () => {
  const [rows,setRows] = useState<Row[]>([])

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const res = await fetch('/api/pokemon')
    const json = await res.json() as Row[]
    const d = json.filter(j => j.name.includes(data.name))
    setRows(d)
  };


  return (
    <>
      <Box sx={{ flexGrow: 1, pb:3 }}>
        <AppBar position="static">
          <Toolbar variant="dense">
            <Typography variant="h6" color="inherit" component="div">
              POKEMONMON
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <Container fixed>
        <Stack spacing={2}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField placeholder='ポケモンの名前' {...register('name')}/>
            <Button type="submit">検索</Button>
          </form>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>No</TableCell>
                  <TableCell align="right">名前</TableCell>
                  <TableCell align="right">進化状態</TableCell>
                  <TableCell align="right">タイプ</TableCell>
                  <TableCell align="right">色</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.no}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.no}
                    </TableCell>
                    <TableCell align="right">{row.name}</TableCell>
                    <TableCell align="right">{row.stage}</TableCell>
                    <TableCell align="right">{row.types}</TableCell>
                    <TableCell align="right" sx={{backgroundColor:row.color.toLowerCase()}}>{row.color}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Stack>
      </Container>
    </>
  )
}

export default Home
