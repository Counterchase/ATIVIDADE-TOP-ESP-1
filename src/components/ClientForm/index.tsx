import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

export default function ClientForm() {

    const handleSubmit = () => {

    };
    const handleChangeCEP = () => {

    }


    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="md">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Typography component="h1" variant="h5" color="blue" >
                        Cadastro de Clientes
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
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
                                    InputLabelProps={{ shrink: true, required: true }}
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
                                    onChange={handleChangeCEP}
                                />
                            </Grid>
                            <Grid item xs={8}>
                                <TextField
                                    required
                                    fullWidth
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
                            sx={{ mt: 3, mb: 2 }}
                        >
                            SALVAR
                        </Button>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}
