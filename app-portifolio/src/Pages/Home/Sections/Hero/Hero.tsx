import { Button, Container, Grid, Typography, styled } from "@mui/material"
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import Avatar from "../../../../assets/Images/avatar.jpg"

const Hero = () => {

    const StyledHero = styled("div")(() => ({
        backgroundColor: "black",
        height: "100vh"

    }))

    const StyledImg = styled("img")(() => ({
        width: "100%",
        borderRadius: "50%"

    }))

    return (
        <>
            <StyledHero>
                <Container maxWidth="lg">
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={4}>
                            <StyledImg src={Avatar} />
                        </Grid>
                        <Grid item xs={12} md={8}>
                            <Typography color="primary" variant="h1" textAlign="center">Welington Luis Dias</Typography>
                            <Typography color="primary" variant="h2" textAlign="center">I’m Senior Developer</Typography>
                            <Grid container display="flex" justifyContent="center">
                                <Grid item xs={12} md={6} display="flex" justifyContent="center">
                                    <Button>
                                        <CloudDownloadIcon />
                                        Download CV</Button>
                                </Grid>

                                <Grid item xs={12} md={6} display="flex" justifyContent="center">
                                    <Button>
                                        <AlternateEmailIcon />
                                        Contact Me</Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </StyledHero>
        </>
    )
}

export default Hero