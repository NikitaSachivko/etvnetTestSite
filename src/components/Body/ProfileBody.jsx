import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import ProfileSvg from '../../../public/profile.svg'
import MainProfile from './MainProfile'
import SecondaryProfile from './SecondaryProfile'
import AddProfile from '../../components/Body/AddProfile'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import {
    Divider
} from "@mui/material"

const ProfileBody = () => {
    const theme = useTheme()
    const isMobile = useMediaQuery(
        theme.breakpoints.down("sm")
    )


    return (
        <Box>
            <Typography
                sx={{
                    top: '20px',
                    left: '20px',
                    color: '#FFF',
                    fontFeatureSettings: "'clig' off, 'liga' off",
                    fontFamily: 'Manrope',
                    fontSize: '32px',
                    fontStyle: 'normal',
                    fontWeight: 700,
                    lineHeight: 'normal',
                    marginBottom: '30px',
                    marginTop: isMobile ? '30px' : '0px'
                }}
            >
                Профили
            </Typography>
            {isMobile && <Divider sx={{
                backgroundColor: '#35373D',
                marginTop: isMobile ? '10px' : '20px',
                marginBottom: isMobile ? '40px' : '20px'
            }} />}
            <Grid container spacing={2} columns={16} >
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <MainProfile name={'Вася П.'} iconName={ProfileSvg} description={'Основной профиль'} />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <SecondaryProfile name={'Полина Г.'} iconName={ProfileSvg} description={'Основной профиль'} />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <AddProfile />
                </Grid>
            </Grid>

        </Box>



    )
}

export default ProfileBody