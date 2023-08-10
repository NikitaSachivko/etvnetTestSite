'use client'

import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import IconButton from '@mui/material/IconButton'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import EvtnetLogo from '../../../public/etvnet.svg'
import Image from 'next/image'
import TabsNavigation from './TabsNavigation'
import SearchSvg from '../../../public/search.svg'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import TabsNavigationMobile from './TabsNavigationMobile'

const DrawerAppBar = () => {
    const theme = useTheme()
    const isMobile = useMediaQuery(
        theme.breakpoints.down("sm")
    )

    return (
        <Box sx={{ flexDirection: 'column' }}>
            <CssBaseline />
            <AppBar
                component="nav"
                sx={{
                    background: isMobile ? '#0A0A14' : '#35373D',
                    height: '100px',
                    display: 'flex',
                    alignItems: 'center',
                    paddingLeft: isMobile ? "5px" : "50px",
                    paddingRight: isMobile ? "5px" : "50px"
                }}
            >
                <Toolbar sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '100%',
                    padding: '20px'
                }}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                    >
                        {/* Logo on the left */}
                        <Image src={EvtnetLogo} height={isMobile ? 31 : 40} width={isMobile ? 131 : 167} alt={'etvnet'} />
                    </IconButton>

                    {!isMobile &&
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <TabsNavigation pages={['О компании', 'Личный кабинет', 'Сериалы', 'Фильмы', 'Передачи', 'Детям', 'Архив']} /> {/* Show TabsNavigation only if not mobile */}
                        </Box>
                    }

                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        {/* Circular Search IconButton */}
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            sx={{
                                backgroundColor: "#373741",
                                borderRadius: "50%",
                                padding: "10px",
                                marginRight: isMobile ? "20px" : "0px",
                            }}
                        >
                            <Image src={SearchSvg} height={21} width={21} alt={'etvnet'} />
                            {!isMobile && <Typography sx={{ marginLeft: '10px', fontSize: '18px' }}>Поиск</Typography>}
                        </IconButton>

                        {/* Mobile navigation */}
                        {isMobile && (
                            <IconButton color="inherit" aria-label="open drawer" edge="start">
                                <TabsNavigationMobile pages={['О компании', 'Личный кабинет', 'Сериалы', 'Фильмы', 'Передачи', 'Детям', 'Архив']} />
                            </IconButton>
                        )}
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>

    )
}

export default DrawerAppBar