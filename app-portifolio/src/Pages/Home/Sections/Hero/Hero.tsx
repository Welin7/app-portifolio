import { Box, Container, Grid, Typography, styled } from "@mui/material"
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import Avatar from "../../../../assets/Images/avatar.jpg"
import ButtonStyled from "../../../../components/StyledButton/StyledButton";
import { AnimatedBackground } from "../../../../components/AnimatedBackground/AnimatedBackground";

const Hero = () => {

    const StyledHero = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,
        height: "100vh",
        display: "flex",
        alignItems: "center",
        [theme.breakpoints.up('xs')]: { // <= mobile
            paddingTop: "100px",

        },
        [theme.breakpoints.up('md')]: { // >=mobile
            paddingTop: "0",
        }
    }))

    const StyledImg = styled("img")(({ theme }) => ({
        width: "75%",
        borderRadius: "50%",
        border: `1px solid ${theme.palette.primary.contrastText}`
    }))

    return (
        <>
            <StyledHero>
                <Container maxWidth="lg">
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={5}>
                            <Box position="relative">
                                <Box position="absolute" width={"150%"} top={-100} right={0} >
                                    <AnimatedBackground />
                                </Box>
                            </Box>
                            <Box position="relative" textAlign="center">
                                <StyledImg src={Avatar} />
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={7}>
                            <Typography color="primary.contrastText" variant="h1" textAlign="center">Welington Luis Dias</Typography>
                            <Typography color="primary.contrastText" variant="h2" textAlign="center">I’m Senior Developer</Typography>
                            <Grid container display="flex" justifyContent="center" spacing={3}>
                                <Grid item xs={12} md={6} display="flex" justifyContent="center">
                                    <ButtonStyled>
                                        <CloudDownloadIcon />
                                        <Typography>
                                            Download CV
                                        </Typography>
                                    </ButtonStyled>
                                </Grid>
                                <Grid item xs={12} md={6} display="flex" justifyContent="center">
                                    <ButtonStyled>
                                        <AlternateEmailIcon />
                                        <Typography>
                                            Contact Me
                                        </Typography>
                                    </ButtonStyled>
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