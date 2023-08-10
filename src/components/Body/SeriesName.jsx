import Typography from '@mui/material/Typography'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles'

const SeriesName = () => {

    const theme = useTheme()
    const isMobile = useMediaQuery(
        theme.breakpoints.down("sm")
    )

    return (
        <Typography
            sx={{
                fontFamily: 'Manrope',
                fontSize: isMobile ? '24px' : '32px', // Adjust font size based on isMobile
                fontStyle: 'normal',
                fontWeight: 500,
                lineHeight: 'normal',
                whiteSpace: isMobile ? 'nowrap' : 'normal', // Prevent word breaks on mobile
            }}
            variant="h2"
        >
            <span style={{ color: '#FFF', fontFeatureSettings: "'clig' off, 'liga' off" }}>
                Привет,
            </span>
            {' '}
            <span style={{ color: '#ABA8B2', fontFeatureSettings: "'clig' off, 'liga' off" }}>
                Вася П.
            </span>
        </Typography>

    )
}

export default SeriesName