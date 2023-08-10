import React from 'react'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import Image from 'next/image' // Replace with the actual path to your Image component
import AddProfileSvg from '../../../public/addProfile.svg'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

const AddProfile = () => {
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
                backgroundColor: '#23222A',
                border: '1px solid #35373D', // Set border width and color
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
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '70px',
                    height: '70px',
                    borderRadius: '50%',
                    marginBottom: '10px',
                    margin: 'auto', // Center horizontally
                }}
            >
                <Image src={AddProfileSvg} height={50} width={50} alt={'etvnet'} />
            </div>
            <Typography
                sx={{
                    color: '#FFF',
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
                Добавить профиль
            </Typography>
        </Card >


    )
}

export default AddProfile
