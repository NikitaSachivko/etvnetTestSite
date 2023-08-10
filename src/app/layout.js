'use client'

import { Inter } from 'next/font/google'
import AppBar from '../components/Navigation/AppBar'
import { createTheme, ThemeProvider, styled } from '@mui/material/styles'
import {
  Box
} from "@mui/material"
import BreadcrumbsHeader from '../components/Body/BreadcrumbsHeader'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import Footer from '../components/Body/Footer'

const CustomColors = createTheme({
  palette: {
    navigationTab: {
      main: '#FFF',
      selected: '#ABA8B2',
      underline: '#F71735',
    },
    background: {
      main: '#35373D',
      dark: "#0A0A14"
    },
    pageBackground: {
      main: "#17171F"
    }
  },
  typography: {
    fontFamily: 'Manrope, sans-serif', // Specify font and fallback
    fontStyle: 'normal', // Use normal font style
    fontWeight: 400, // Default font weight
  },
})


export default function RootLayout({ children }) {
  const theme = useTheme()
  const isMobile = useMediaQuery(
    theme.breakpoints.down("sm")
  )

  return (
    <html lang="en">
      <body>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Manrope&family=Roboto:ital,wght@1,100;1,300&display=swap" rel="stylesheet" />
        <ThemeProvider theme={CustomColors}>
          <AppBar />
          <Box
            sx={{
              width: 'full',
              minHeight: '100vh', // Use minHeight instead of height
              position: 'relative', // Set position to relative
              overflow: 'hidden', // Hide content overflow
              background: '#17171F',
              paddingLeft: isMobile ? '20px' : '100px',
              paddingRight: isMobile ? '20px' : '100px',
              paddingTop: isMobile ? '120px' : '120px',
              paddingBottom: isMobile ? '30px' : '100px',
            }}
          >
            <BreadcrumbsHeader />
            {children}
          </Box>
        </ThemeProvider>
        <Footer />
      </body>
    </html>
  )
}
