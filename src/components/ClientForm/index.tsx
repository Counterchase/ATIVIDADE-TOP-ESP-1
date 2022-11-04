import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {RotatingLines} from 'react-loader-spinner'
import {useState, useEffect} from "react";

const theme = createTheme();

export default function ClientForm() {

    var [address, setAddress] = useState(' '); //logradouro
    const [uf, setUf] = useState(' '); //uf
    const [city, setCity] = useState(' '); //localidade
    const [cep, setCep] = useState(' '); //cep
    const [neighborhood, setNeighborhood] = useState(' '); //bairro
    const [ddd, setDdd] = useState(' '); //ddd

    const handleSubmit = (e) => {
        console.log(e);
    };


    const CheckCEP = (e) => {
        const cep = e.target.value.replace(/\D/g, '');
        const url = `https://viacep.com.br/ws/${cep}/json`;
        const options = {
            method: "GET",
            mode: "cors",
            headers: {
                'content-type': 'application/json;charset=utf-8',
            }
        }
        try {
            fetch(url, options).then(res => res.json()).then(data => {
                setAddress(data.logradouro);
                setCity(data.localidade);
                setUf(data.uf);

            })
        } catch (err) {
            return <Alert severity="error">This is an error alert — check it out!</Alert>
        }
    }

    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 5000)
    }, [])


    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="md">
                <CssBaseline/>
                            <Box
                                sx={{
                                    marginTop: 8,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                }}
                            >
                                <Typography component="h1" variant="h5" color="blue">
                                    Cadastro de Clientes
                                </Typography>
                                <Box component="form" noValidate onSubmit={handleSubmit} sx={{mt: 3}}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12}>
                                            <TextField
                                                autoComplete="given-name"
                                                name="name"
                                                required
                                                fullWidth
                                                id="name"
                                                label="Nome Completo:"
                                                autoFocus
                                            />
                                        </Grid>
                                        <Grid item xs={4}>
                                            <TextField
                                                required
                                                fullWidth
                                                id="rg"
                                                label="RG:"
                                                name="rg"
                                            />
                                        </Grid>
                                        <Grid item xs={4}>
                                            <TextField
                                                required
                                                fullWidth
                                                id="cpf"
                                                label="CPF:"
                                                name="cpf"
                                            />
                                        </Grid>

                                        <Grid item xs={4}>
                                            <TextField
                                                required
                                                fullWidth
                                                name="birthday"
                                                label="Data de Nascimento:"
                                                InputLabelProps={{shrink: true, required: true}}
                                                type="date"
                                                id="birthday"
                                                autoComplete="date"
                                            />
                                        </Grid>
                                        <Grid item xs={4}>
                                            <TextField
                                                required
                                                fullWidth
                                                id="cep"
                                                label="CEP:"
                                                name="cep"
                                                onBlur={CheckCEP}
                                            />
                                        </Grid>
                                        <Grid item xs={8}>
                                            <TextField
                                                required
                                                fullWidth
                                                value={address}
                                                id="address"
                                                label="Endereço:"
                                                name="address"
                                                autoComplete="address"
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <TextField
                                                required
                                                fullWidth
                                                value={city}
                                                id="city"
                                                label="Cidade:"
                                                name="city"
                                                autoComplete="city"
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <TextField
                                                required
                                                fullWidth
                                                value={uf}
                                                id="state"
                                                label="Estado:"
                                                name="state"
                                                autoComplete="state"
                                            />
                                        </Grid>
                                    </Grid>
                                    <Button
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        sx={{mt: 3, mb: 2}}
                                    >
                                        SALVAR
                                    </Button>
                                </Box>
                            </Box>
            </Container>
        </ThemeProvider>
    );
}
