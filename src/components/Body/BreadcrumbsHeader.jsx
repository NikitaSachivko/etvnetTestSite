import * as React from 'react'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Link from '@mui/material/Link'

const BreadcrumbsHeader = () => {

    return (
        <Breadcrumbs aria-label="breadcrumb" >
            <Link underline="hover" sx={{ color: "#FFFFFF" }} href="/">
                Личный кабинет /
            </Link>
        </Breadcrumbs>
    )
}



export default BreadcrumbsHeader