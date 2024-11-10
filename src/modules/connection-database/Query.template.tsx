import TabContextCustomMui from "./components/TabContextCustomMui.tsx";
import {Box} from "@mui/material";
import React, {useState} from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {TabCustomProps} from "./components/TypeCustomProps.ts";
import AddCircleIcon from "@mui/icons-material/AddCircle";


// Khoi tao cac tab ban dau
let dataPropsTabPannelCustomMuis: { value: string | number, content: string }[] = [
    {
        value: 1,
        content: "Nội dung 1"
    },
    {
        value: 100,
        content: "ADD-TAB"
    }]
// console.log(dataPropsTabPannelCustomMuis);

let dataPropsTabCustomMuis: TabCustomProps[] = []

let currentValue :number = 1


function getIndexToValue(arr: any[], value ):number{
    for (const index in arr) {
        if(arr[index].value == value) return  Number(index);
    }
    return -1;
}


function QueryTemplate() {
    // Cac State va function
    // State, function cho TabList
    const [value, setValue] = useState<string | number>(1);
    const handleChange = (event: React.SyntheticEvent, newValue: string | number) => {
        console.log("Gia tri so là: ", dataPropsTabCustomMuis)
        console.log("Gia tri so là: ", dataPropsTabPannelCustomMuis)
        if (newValue == 100) {
            console.log('Duong Gia Tai' + currentValue);
            currentValue = currentValue + 1
            dataPropsTabCustomMuis = [
                ...dataPropsTabCustomMuis.slice(0, dataPropsTabCustomMuis.length - 1),

                {
                    value: currentValue,
                    isCheckPositionIcon: 'end',
                    sx: {color: 'white'},
                    icon: <KeyboardArrowDownIcon id="demo-customized-button" onClick={handleClick}/>
                },

                dataPropsTabCustomMuis[dataPropsTabCustomMuis.length - 1]
            ]

            dataPropsTabPannelCustomMuis = [
                ...dataPropsTabPannelCustomMuis.slice(0, dataPropsTabPannelCustomMuis.length - 1),
                {
                    value: currentValue,
                    content: `Nội dung ${currentValue}`
                },
                dataPropsTabPannelCustomMuis[dataPropsTabPannelCustomMuis.length - 1]
            ]

            console.log(dataPropsTabPannelCustomMuis);
            console.log(dataPropsTabCustomMuis);

            console.log("dkdkđlkdl "+currentValue)

            setValue(currentValue);
        } else {
            console.log("Kieu:" + typeof(newValue))
            setValue(newValue)
        }

    };

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        console.log("close close")
        setAnchorEl(null);
    };

    const handleDelete = (event: React.MouseEvent<HTMLElement>) => {
        if(dataPropsTabCustomMuis.length > 2){
            let valueNextWhenDelete = value
            if(dataPropsTabPannelCustomMuis[0].value != valueNextWhenDelete)
            {
                valueNextWhenDelete = dataPropsTabPannelCustomMuis[getIndexToValue(dataPropsTabPannelCustomMuis, value) - 1].value
            }
            else if (dataPropsTabPannelCustomMuis[0].value == valueNextWhenDelete)
                valueNextWhenDelete = dataPropsTabPannelCustomMuis[getIndexToValue(dataPropsTabPannelCustomMuis, value) + 1].value ;

            dataPropsTabPannelCustomMuis = dataPropsTabPannelCustomMuis
                .filter((item) => item.value != value)

            console.log(dataPropsTabPannelCustomMuis)

            dataPropsTabCustomMuis = dataPropsTabCustomMuis
                .filter((item) => item.value != value)

            console.log(dataPropsTabCustomMuis)

            // setValue(valueNextWhenDelete)
        }
        // handleClose();
    }

    if (currentValue == 1) {
        dataPropsTabCustomMuis = [
            {
                value: 1,
                isCheckPositionIcon: 'end',
                sx: {color: 'white'},
                icon: <KeyboardArrowDownIcon id="demo-customized-button" onClick={handleClick}/>
            },
            {
                value: 100,
                sx: {
                    color: 'green',
                    minWidth: 'auto',
                    '&.Mui-root': {
                        color: 'red',
                        fontWeight: 'bold',
                    }
                },
                icon: <AddCircleIcon/>
            }
        ]

    }


    // console.log(dataPropsTabCustomMuis);


    // Dinh nghia cac style css
    // Style css cho TabList


    return (
        <Box sx={{width: '100%', typography: 'body1', bgcolor: '#d4cfcf', fontWeight: '700'}}>
            <TabContextCustomMui value={value} handleChange={handleChange}
                                 dataPropsTabPannelCustomMuis={dataPropsTabPannelCustomMuis}
                                 dataPropsTabCustomMuis={dataPropsTabCustomMuis}
                                 anchorEl = {anchorEl}
                                 handleClose = {handleClose}
                                 handleDelete={handleDelete}
            />
        </Box>
    );
}

export default QueryTemplate;