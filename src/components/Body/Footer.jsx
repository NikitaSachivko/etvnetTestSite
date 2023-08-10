import React from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import OnTopSvg from '../../../public/onTop.svg'
import Image from 'next/image'
import Stack from '@mui/material/Stack'
import {
    Divider
} from "@mui/material"
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

const Footer = () => {
    const theme = useTheme()
    const isMobile = useMediaQuery(
        theme.breakpoints.down("sm")
    )

    const handleScroll = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const footerLinks = [
        'О компании',
        'Способы оплаты',
        'Условия предоставления услуг',
        'Архив по каналам',
        'Прямой эфир',
        'Сериалы',
        'Факты о кино и ТВ',
        'Персоналии',
        'Радио',
        'Помощь',
        'Подключение к ТВ'
    ]


    return (
        <Box
            component="footer"
            sx={{
                width: 'full',
                height: 'auto',
                backgroundColor: '#23222A',
                py: 3,
                position: 'relative',
            }}
        >
            <Container maxWidth="xl">
                <Box sx={{
                    marginTop: '30px',
                    display: 'flex',
                    justifyContent:
                        'flex-start',
                }}>
                    {!isMobile &&
                        <Grid container columnSpacing={0} rowSpacing={1}>
                            {footerLinks.map((link, index) => (
                                <Grid key={index} item xs={3} sm={3} md={3}>
                                    <Typography
                                        sx={{
                                            fontStyle: 'normal',
                                            fontFeatureSettings: "'clig' off, 'liga' off",
                                            fontFamily: 'Manrope',
                                            color: '#FFF',
                                            fontSize: '14px',
                                        }}
                                    >
                                        {link}
                                    </Typography>
                                </Grid>
                            ))}
                        </Grid>
                    }

                    {
                        isMobile &&
                        <Container maxWidth="xl"
                            sx={{
                                display: 'flex', alignItems: 'center',
                                flexDirection: 'column'
                            }}>
                            <Stack spacing={2} direction="column" sx={{ textDecoration: 'none' }}>
                                {footerLinks.map((link, index) => (
                                    <div key={index}>
                                        <Typography
                                            variant="body2"
                                            sx={{
                                                fontStyle: 'normal',
                                                fontFeatureSettings: "'clig' off, 'liga' off",
                                                fontFamily: 'Manrope',
                                                color: '#FFF',
                                                textAlign: 'center', // Center-align the content
                                            }}
                                        >
                                            {link}
                                        </Typography>
                                        {/* Using this technique to divide grid */}
                                        {(index + 1) % 3 === 0 && <p sx={{ marginTop: '20px' }} />}
                                    </div>
                                ))}
                            </Stack>
                        </Container>
                    }

                    <Box
                        sx={{
                            position: 'absolute',
                            top: '20px',
                            right: isMobile ? '10px' : '300px',
                        }}
                        onClick={() => handleScroll()}

                    >
                        <Image
                            src={OnTopSvg}
                            height={50}
                            width={50}
                            alt={'On Top'}
                            sx={{
                                transform: 'rotate(-90deg)',
                            }}
                        />
                    </Box>
                </Box>
                <Divider sx={{
                    backgroundColor: '#35373D',
                    marginTop: isMobile ? '40px' : '50px',
                    marginBottom: isMobile ? '40px' : '50px'
                }} />
                <Typography
                    sx={{
                        width: 'full',
                        fontStyle: 'normal',
                        fontFeatureSettings: "'clig' off, 'liga' off",
                        fontFamily: 'Manrope',
                        color: '#ABA8B2',
                        fontSize: '14px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        minHeight: '50px',
                        textAlign: 'center'
                    }}
                >
                    ©2005 - 2020 eTVnet.com Ethnic Television Network Matvil Corp.
                </Typography>
            </Container >
        </Box >

    )
}

export default Footer
