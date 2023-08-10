import React from 'react'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import Image from 'next/image' // Replace with the actual path to your Image component
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

const MainProfile = ({ name, iconName, description }) => {
    const theme = useTheme()
    const isMobile = useMediaQuery(
        theme.breakpoints.down("sm")
    )

    return (
        <Card
            sx={{
                width: isMobile ? '135%' : 250,
                height: isMobile ? 200 : 280,
                flexShrink: 0,
                backgroundColor: '#171721',
                borderRadius: '10px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '20px',
            }}
        >
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <div
                    style={{
                        width: '70px',
                        height: '70px',
                        backgroundColor: '#0075FF',
                        borderRadius: '50%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginBottom: '10px',
                    }}
                >
                    <Image src={iconName} height={50} width={50} alt={'etvnet'} />
                </div>
                <Typography
                    sx={{
                        color: '#ABA8B2',
                        textAlign: 'center',
                        fontFeatureSettings: "'clig' off, 'liga' off",
                        fontFamily: 'Manrope',
                        fontSize: isMobile ? '18px' : '24px',
                        fontStyle: 'normal',
                        fontWeight: 500,
                        lineHeight: 'normal',
                    }}
                >
                    {name}
                </Typography>
            </div>
            <Typography
                sx={{
                    color: '#0075FF',
                    textAlign: 'center',
                    fontFeatureSettings: "'clig' off, 'liga' off",
                    fontFamily: 'Manrope',
                    fontSize: '18px',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    lineHeight: 'normal',
                    padding: '15px'
                }}
            >
                {description}
            </Typography>
        </Card>
    )
}

export default MainProfile
