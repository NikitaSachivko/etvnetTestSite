import Switch from '@mui/material/Switch'
import { styled } from '@mui/material/styles'

const AntSwitchCustom = styled(Switch)(({ theme }) => ({
    width: 60,
    height: 30,
    flexShrink: 0,
    padding: 0,
    display: 'flex',
    '&:active': {
        '& .MuiSwitch-thumb': {
            width: 30,
        },
        '& .MuiSwitch-switchBase.Mui-checked': {
            transform: 'translateX(30px)',
        },
    },
    '& .MuiSwitch-switchBase': {
        padding: 3,
        '&.Mui-checked': {
            transform: 'translateX(30px)',
            color: '#fff',
            '& + .MuiSwitch-track': {
                opacity: 1,
                backgroundColor: theme.palette.mode === 'dark' ? '#177ddc' : '#1890ff',
            },
        },
    },
    '& .MuiSwitch-thumb': {
        boxShadow: '0 4px 8px 0 rgb(0 35 11 / 20%)',
        width: 24,
        height: 24,
        borderRadius: 12,
        transition: theme.transitions.create(['width'], {
            duration: 200,
        }),
    },
    '& .MuiSwitch-track': {
        borderRadius: 30 / 2,
        opacity: 1,
        backgroundColor:
            theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : 'rgba(0,0,0,.25)',
        boxSizing: 'border-box',
    },
}))

const AntSwitch = () => {
    return <AntSwitchCustom defaultChecked inputProps={{ 'aria-label': 'ant design' }} />
}


export default AntSwitch