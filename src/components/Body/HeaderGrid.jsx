import * as React from 'react'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import SeriesName from './SeriesName'
import Image from 'next/image'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import PlusSvg from '../../../public/plus.svg'
import Button from '@mui/material/Button'
import ExitSvg from '../../../public/exit.svg'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles'

const HeaderGrid = () => {
    const theme = useTheme()
    const isMobile = useMediaQuery(
        theme.breakpoints.down("sm")
    )

    return (
        <Grid container spacing={3} sx={{ marginTop: isMobile ? '1px' : '10px' }}>
            {isMobile ? (
                <Grid item xs sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-start', // Align to the left
                    textAlign: 'center',
                }}>
                    <SeriesName />
                </Grid>
            ) : (
                <Grid item xs sx={{
                    display: 'flex',
                    alignItems: 'center',
                    textAlign: 'center',
                }}>
                    <SeriesName />
                </Grid>
            )}

            {!isMobile && (
                <Grid item xs={5}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        sx={{
                            borderRadius: "50%",
                            padding: "10px",
                            marginRight: '20px'
                        }}
                    >
                        <Image src={PlusSvg} height={32} width={32} alt={'etvnet'} />
                        <Typography sx={{ marginLeft: '10px', fontSize: '18px', color: '#FFF' }}>Добавить профиль</Typography>
                    </IconButton>
                </Grid>
            )}

            <Grid item xs sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: isMobile ? 'flex-end' : 'center',
                textAlign: 'center',
            }}>
                <Button
                    variant="outlined"
                    sx={{
                        borderColor: "#35373D",
                        color: '#FFF',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center', // Center horizontally
                        textAlign: 'center',
                        padding: '15px', // Add padding for spacing around content
                        height: '55px',
                    }}
                >
                    {!isMobile && <span style={{ marginRight: '10px', textTransform: 'none' }}>Выйти</span>}
                    <Image src={ExitSvg} height={21} width={19} alt={'etvnet'} />
                </Button>
            </Grid>
        </Grid>

    )
}

export default HeaderGrid