import { useState } from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

const TabsNavigation = ({ pages = [] }) => {
    const [value, setValue] = useState(0)
    const theme = useTheme()
    const isMobile = useMediaQuery(
        theme.breakpoints.down("sm")
    )

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    return (
        <Tabs

            value={value}
            onChange={handleChange}
            TabIndicatorProps={{
                style: {
                    backgroundColor: '#F71735'
                }
            }}
            textColor="inherit"
            variant="scrollable"
            scrollButtons="auto"
        >
            {
                pages.map((item, index) => (
                    <Tab
                        key={index}
                        label={item}
                        sx={{

                            textTransform: 'none',
                            fontSize: isMobile ? '16px' : '18px',
                        }}
                    />
                ))
            }
        </Tabs >
    )

}

export default TabsNavigation