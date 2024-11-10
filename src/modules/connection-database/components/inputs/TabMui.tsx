import {alpha, Box, Button, Menu, MenuProps, styled, Tab, TextField} from "@mui/material";
import TabList from '@mui/lab/TabList';
import React, {useState} from "react";
import {TabContext, TabPanel} from "@mui/lab";
import {DataGrid, GridColDef} from "@mui/x-data-grid";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import PolicyIcon from '@mui/icons-material/Policy';
import MenuItem from '@mui/material/MenuItem';
import EditIcon from '@mui/icons-material/Edit';
import Divider from '@mui/material/Divider';
import ArchiveIcon from '@mui/icons-material/Archive';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


function TabMui() {

    // Menu
    const StyledMenu = styled((props: MenuProps) => (
        <Menu
            elevation={0}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            {...props}
        />
    ))(({ theme }) => ({
        '& .MuiPaper-root': {
            borderRadius: 6,
            marginTop: theme.spacing(1),
            minWidth: 180,
            color: 'rgb(55, 65, 81)',
            boxShadow:
                'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
            '& .MuiMenu-list': {
                padding: '4px 0',
            },
            '& .MuiMenuItem-root': {
                '& .MuiSvgIcon-root': {
                    fontSize: 18,
                    color: theme.palette.text.secondary,
                    marginRight: theme.spacing(1.5),
                },
                '&:active': {
                    backgroundColor: alpha(
                        theme.palette.primary.main,
                        theme.palette.action.selectedOpacity,
                    ),
                },
            },
            ...theme.applyStyles('dark', {
                color: theme.palette.grey[300],
            }),
        },
    }));

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        console.log(event.currentTarget);
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    // End Menu



    const [value, setValue] = useState('1');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    const columns: GridColDef<(typeof rows)[number]>[] = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'firstName',
            headerName: 'First name',
            headerClassName: 'super-app-theme--header',
            flex: 1,
            editable: true,
        },
        {
            field: 'lastName',
            headerName: 'Last name',
            headerClassName: 'super-app-theme--header',
            flex: 1,
            editable: true,
        },
        {
            field: 'age',
            headerName: 'Age',
            type: 'number',
            headerClassName: 'super-app-theme--header',
            flex: 1,
            editable: true,
            headerAlign: 'left'
        },
        {
            field: 'fullName',
            headerName: 'Full name',
            headerClassName: 'super-app-theme--header',
            description: 'This column has a value getter and is not sortable.',
            sortable: true,
            flex: 1,
            valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
        },
    ];

    const rows = [
        { id: 1, lastName: 'Snow', firstName: 'Jon', age: 14 },
        { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 31 },
        { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 31 },
        { id: 4, lastName: 'Stark', firstName: 'Arya', age: 11 },
        { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
        { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
        { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
        { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
        { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    ];


    return (
        <Box sx={{width: '100%', typography: 'body1', bgcolor: '#d4cfcf', fontWeight: '700'}}>
            <TabContext value={value}>
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
                        <Tab label="Query-1" value="1" iconPosition="end"
                             icon={<KeyboardArrowDownIcon id="demo-customized-button" onClick={handleClick}/>}
                             sx={{color: 'white'}}/>

                        <Tab label="Query-2" value="2" iconPosition="end"
                             icon={<KeyboardArrowDownIcon id="demo-customized-button" onClick={handleClick}/>}
                             sx={{color: 'white'}}/>

                        <StyledMenu
                            id="demo-customized-menu"
                            MenuListProps={{
                                'aria-labelledby': 'demo-customized-button',
                            }}
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleClose} disableRipple>
                                <EditIcon/>
                                Edit
                            </MenuItem>
                            <MenuItem onClick={handleClose} disableRipple>
                                <FileCopyIcon/>
                                Duplicate
                            </MenuItem>
                            <Divider sx={{my: 0.5}}/>
                            <MenuItem onClick={handleClose} disableRipple>
                                <ArchiveIcon/>
                                Archive
                            </MenuItem>
                            <MenuItem onClick={handleClose} disableRipple>
                                <MoreHorizIcon/>
                                More
                            </MenuItem>
                        </StyledMenu>

                        <Tab icon={<AddCircleIcon/>} value="3"
                             sx={{
                                 color: 'green',
                                 minWidth: 'auto',
                                 '&.Mui-root': {
                                     color: 'red',
                                     fontWeight: 'bold',
                                 }
                             }}
                        />
                    </TabList>
                </Box>
                <TabPanel value="1">
                    <Box sx={{display: 'flex', flexWrap: 'wrap', bgcolor: 'white'}}>
                        <TextField
                            id="outlined-required"
                            multiline
                            rows={6}
                            label="Only Select"
                            defaultValue="Hello World"
                            sx={{width: '100%'}}
                        />
                    </Box>
                    <Button variant="contained" startIcon={<PolicyIcon/>}
                            sx={{bgcolor: 'red', mt: 2, fontWeight: '900', color: 'white'}}>
                        GET DATA
                    </Button>

                    <Box sx={{height: 500, width: '100%', mt: 2}}>
                        <DataGrid
                            rows={rows}
                            columns={columns}
                            disableAutosize={true}
                            initialState={{
                                pagination: {
                                    paginationModel: {
                                        pageSize: 8,
                                    },
                                },
                            }}

                            getRowClassName={(params) =>
                                params.indexRelativeToCurrentPage % 2 === 0 ? 'even-row' : 'odd-row'
                            }

                            sx={{
                                '& .MuiDataGrid-cell': {
                                    textAlign: 'left', // Căn chữ về bên trái trong ô
                                },
                                '& .even-row': {
                                    backgroundColor: '#ece9ec',
                                },
                                '& .odd-row': {
                                    backgroundColor: '#ffffff', // Màu nền cho các dòng lẻ
                                },
                                '& .hover': {
                                    backgroundColor: '#c1f0f6',
                                },
                                '& .MuiDataGrid-columnHeaders': {
                                    color: '#d32f2f',
                                    fontWeight: 'bold !important'
                                },
                                '& .MuiDataGrid-columnHeaderTitle': {
                                    fontWeight: '900 !important',
                                },
                                '& .super-app-theme--header': {
                                    backgroundColor: 'white',
                                },
                            }}

                            pageSizeOptions={[8]}
                            checkboxSelection
                            disableRowSelectionOnClick
                        />
                    </Box>

                </TabPanel>
                <TabPanel value="2"></TabPanel>
            </TabContext>
        </Box>
    );
}

export default TabMui;