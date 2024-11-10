import {Box} from "@mui/material";
import {DataGrid, GridColDef} from "@mui/x-data-grid";

function TableCustomMui() {

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
    );
}

export default TableCustomMui;