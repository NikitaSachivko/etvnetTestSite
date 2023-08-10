import React from 'react'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import Image from 'next/image' // Replace with the actual path to your Image component
import Button from '@mui/material/Button'
import CrossIcon from '../../../public/cross.svg'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

const SecondaryProfile = ({ name, iconName, description }) => {
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
                        backgroundColor: '#9B51E0',
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
            <Button
                variant="outlined"
                sx={{
                    borderColor: "#F71735",
                    borderWidth: '1px',
                    color: '#FFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center', // Center horizontally
                    textAlign: 'center',
                    padding: isMobile ? '20px' : "15px", // Add padding for spacing around content
                    height: isMobile ? '10px' : '55px',
                    width: "100%"
                }}
            >
                <span style={{ marginRight: '10px', textTransform: 'none', color: '#F71735' }}>
                    Удалить профиль
                </span>
                <Image src={CrossIcon} height={21} width={19} alt={'etvnet'} />
            </Button>
        </Card>
    )
}

export default SecondaryProfile
