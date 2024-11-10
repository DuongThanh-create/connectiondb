import TabList from "@mui/lab/TabList";
import {alpha, Box, Menu, MenuProps, styled} from "@mui/material";
import TabCustomMui from "./TabCustomMui.tsx";
import {TabCustomProps} from "./TypeCustomProps.ts";
import MenuItem from "@mui/material/MenuItem";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from "@mui/icons-material/Edit";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import Divider from "@mui/material/Divider";
import ArchiveIcon from "@mui/icons-material/Archive";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import RefreshIcon from '@mui/icons-material/Refresh';
import React from "react";


function TablListCustomMui({handleChange, dataPropsTabCustomMuis, anchorEl, handleClose, handleDelete}: {
    handleChange: (event: React.SyntheticEvent, newValue: string |number) => void,
    dataPropsTabCustomMuis: TabCustomProps[],
    anchorEl: null | HTMLElement,
    handleClose: void,
    handleDelete?: void
}) {
    const open = Boolean(anchorEl);

    return (
        <Box sx={{borderBottom: 1, borderColor: 'divider', bgcolor: '#9f9999'}}>
            <TabList onChange={handleChange} aria-label="lab API tabs example" textColor="secondary"
                     sx={{
                         '& .MuiTab-root': {
                             fontWeight: '700',
                             '&.Mui-selected': {
                                 color: 'red', // Màu chữ khi Tab được chọn
                                 fontWeight: '700'
                             },
                         },
                     }}>
                {
                    dataPropsTabCustomMuis.map((item,index) =>
                        <TabCustomMui value={item.value} icon={item.icon} isCheckPositionIcon={item.isCheckPositionIcon} key = {index}
                                      sx={item.sx}/>
                    )
                }
                {/*<TabCustomMui value='1' icon={<KeyboardArrowDownIcon/>} isCheckPositionIcon={'end'}*/}
                {/*              sx={{color: 'white'}}/>*/}

                {/*<TabCustomMui value='2' icon={<KeyboardArrowDownIcon/>} isCheckPositionIcon={'end'}*/}
                {/*              sx={{color: 'white'}}/>*/}

                {/*<Tab label={`Query-1`} value='1' iconPosition="end"*/}
                {/*     icon={<KeyboardArrowDownIcon id="demo-customized-button"/>}*/}
                {/*     sx={{color: 'white'}}/>*/}

                {/*<Tab label={`Query-2`} value='2' iconPosition="end"*/}
                {/*     icon={<KeyboardArrowDownIcon id="demo-customized-button"/>}*/}
                {/*     sx={{color: 'white'}}/>*/}

                {/*<TabCustomMui icon={<AddCircleIcon/>} value='3'*/}
                {/*              sx={{*/}
                {/*                  color: 'green',*/}
                {/*                  minWidth: 'auto',*/}
                {/*                  '&.Mui-root': {*/}
                {/*                      color: 'red',*/}
                {/*                      fontWeight: 'bold',*/}
                {/*                  }*/}
                {/*              }}*/}
                {/*/>*/}

                <Menu
                    id="demo-customized-menu"
                    MenuListProps={{
                        'aria-labelledby': 'demo-customized-button',
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    elevation={0}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                >
                    <MenuItem onClick={handleDelete} disableRipple>
                        <DeleteIcon/>
                        Delete
                    </MenuItem>
                    <MenuItem onClick={handleClose} disableRipple>
                        <RefreshIcon/>
                        Refresh
                    </MenuItem>
                    {/*<MenuItem onClick={handleClose} disableRipple>*/}
                    {/*    <EditIcon/>*/}
                    {/*    Edit*/}
                    {/*</MenuItem>*/}
                    {/*<MenuItem onClick={handleClose} disableRipple>*/}
                    {/*    <FileCopyIcon/>*/}
                    {/*    Duplicate*/}
                    {/*</MenuItem>*/}
                    <Divider sx={{my: 0.5}}/>
                    {/*<MenuItem onClick={handleClose} disableRipple>*/}
                    {/*    <ArchiveIcon/>*/}
                    {/*    Archive*/}
                    {/*</MenuItem>*/}
                    <MenuItem onClick={handleClose} disableRipple>
                        <MoreHorizIcon/>
                        More
                    </MenuItem>
                </Menu>

            </TabList>
        </Box>
    );
}

export default TablListCustomMui;