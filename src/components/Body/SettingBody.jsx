import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import Stack from '@mui/material/Stack'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import AntSwitch from '../Additional/AntSwitch'
import Select from '../Additional/Select'

import {
    Divider
} from "@mui/material"

const ProfileBody = () => {
    const theme = useTheme()
    const isMobile = useMediaQuery(
        theme.breakpoints.down("sm")
    )



    return (
        <Box sx={{ marginTop: "100px" }}>
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
                Настройки
            </Typography>
            <Divider sx={{
                backgroundColor: '#35373D',
                marginTop: isMobile ? '10px' : '20px',
                marginBottom: isMobile ? '40px' : '40px'
            }} />
            <List sx={{ width: '100%', maxWidth: 500 }}>
                <ListItem sx={{ marginBottom: '10px' }} disableGutters>
                    <Grid container alignItems="center" justifyContent="space-between">
                        <Grid item xs sx={{ marginRight: isMobile ? '10px' : '0px' }}>
                            <Typography
                                sx={{
                                    color: '#ABA8B2',
                                    fontFeatureSettings: "'clig' off, 'liga' off",
                                    fontFamily: 'Manrope',
                                    fontSize: '18px',
                                    fontStyle: 'normal',
                                    fontWeight: 500,
                                    lineHeight: isMobile ? '1.5' : 'normal',
                                    whiteSpace: isMobile ? 'normal' : 'nowrap',
                                }}
                            >
                                Запускать видео в новом окне
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Stack
                                direction="row"
                                spacing={1}
                                sx={{ color: "#FFF" }}
                            >
                                <Typography sx={{ fontSize: "20px" }}>Да</Typography>
                                <AntSwitch />
                            </Stack>
                        </Grid>
                    </Grid>
                </ListItem>
                <ListItem sx={{ marginBottom: '10px', alignItems: 'center' }} disableGutters>
                    <Grid container alignItems="center" justifyContent="space-between">
                        <Grid item xs sx={{ marginRight: isMobile ? '10px' : '0px' }}>
                            <Typography
                                sx={{
                                    color: '#ABA8B2',
                                    fontFeatureSettings: "'clig' off, 'liga' off",
                                    fontFamily: 'Manrope',
                                    fontSize: '18px',
                                    fontStyle: 'normal',
                                    fontWeight: 500,
                                    lineHeight: 'normal',
                                }}
                            >
                                Качество вещания для архива
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Stack
                                direction="row"
                                spacing={1}
                                sx={{ color: "#FFF" }}
                            >
                                <Select options={['HD', '1080', '720']} />
                            </Stack>
                        </Grid>
                    </Grid>
                </ListItem>
                <ListItem sx={{ marginBottom: '10px', alignItems: 'center' }} disableGutters>
                    <Grid container alignItems="center" justifyContent="space-between">
                        <Grid item xs sx={{ marginRight: isMobile ? '10px' : '0px' }}>
                            <Typography
                                sx={{
                                    color: '#ABA8B2',
                                    fontFeatureSettings: "'clig' off, 'liga' off",
                                    fontFamily: 'Manrope',
                                    fontSize: '18px',
                                    fontStyle: 'normal',
                                    fontWeight: 500,
                                    lineHeight: 'normal',
                                }}
                            >
                                Качество вещания для прямого эфира
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Stack
                                direction="row"
                                spacing={1}
                                sx={{ color: "#FFF" }}
                            >
                                <Select options={['Высокое', 'Среднее']} />
                            </Stack>
                        </Grid>
                    </Grid>
                </ListItem>

            </List>


        </Box >
    )
}

export default ProfileBody