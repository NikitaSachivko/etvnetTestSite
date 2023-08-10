import React, { useState } from "react"
import {
    Drawer,
    IconButton,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Box
} from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"

const DrawerComp = ({ pages }) => {
    const [openDrawer, setOpenDrawer] = useState(false)

    return (
        <React.Fragment>
            <Drawer
                anchor="left"
                open={openDrawer}
                onClose={() => setOpenDrawer(false)}
            >
                <List>
                    {pages.map((page, index) => (
                        <ListItemButton key={index}>
                            <ListItemIcon>
                                <ListItemText>{page}</ListItemText>
                            </ListItemIcon>
                        </ListItemButton>
                    ))}
                </List>
            </Drawer>
            <IconButton
                sx={{ color: "white", marginLeft: "auto" }}
                onClick={() => setOpenDrawer(!openDrawer)}
            >
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: "#373741",
                        borderRadius: "50%",
                        padding: "8px",
                    }}
                >
                    <MenuIcon color="white" />
                </IconButton>
            </IconButton>
        </React.Fragment>
    )
}

export default DrawerComp