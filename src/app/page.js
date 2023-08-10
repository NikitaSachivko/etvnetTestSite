'use client'

import Image from 'next/image'
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
  Divider
} from "@mui/material"
import { useTheme } from '@mui/material/styles'
import HeaderGrid from '../components/Body/HeaderGrid'
import TabsNavigation from '../components/Navigation/TabsNavigation'
import useMediaQuery from '@mui/material/useMediaQuery'
import ProfileBody from '../components/Body/ProfileBody'
import SettingBody from '../components/Body/SettingBody'

export default function Home() {
  const theme = useTheme()
  const isMobile = useMediaQuery(
    theme.breakpoints.down("sm")
  )


  return (
    <section>
      {/* Rectangle */}
      <HeaderGrid />
      <Divider sx={{
        backgroundColor: '#35373D',
        marginTop: isMobile ? '10px' : '20px',
        marginBottom: isMobile ? '10px' : '20px'
      }} />
      <Box sx={{
        display: 'flex', color: "#FFF",
        marginBottom: '40px'
      }}>
        <TabsNavigation pages={['Настройки и профили', 'Тарифный план', 'Персональные данные', 'Платежные данные', 'История просмотров']} />
      </Box>
      <Box
        sx={{
          width: '100%',
          height: 'auto',
          backgroundColor: '#23222A',
          borderRadius: '10px',
          overflow: 'auto',
          position: 'relative',
          padding: isMobile ? '10px' : '40px'
        }}>
        <ProfileBody />
        <SettingBody />
      </Box>
    </section>
  )
}
