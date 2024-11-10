import {Tab} from "@mui/material";
import {TabCustomProps} from "./TypeCustomProps.ts";

// function TabCustomMui({value}:{value:string}) {
//     console.log("tetstst: " + value)
//     return (
//         <Tab label={`Query-${value}`} value={value} iconPosition="end"
//              icon={<KeyboardArrowDownIcon id="demo-customized-button"/>}
//              sx={{color: 'white'}}/>
//     );
// }

const TabCustomMui: React.FC<TabCustomProps> = ({isCheckPositionIcon,...props}) => {

    console.log("TabCustomMui-render: " + props.value)
    return (
        <Tab
            {...props}
            label={props.value != 'add' && `Query-${props.value}`} value={props.value}
            iconPosition={isCheckPositionIcon == 'end' ? 'end' :'start'}/>
    );
};


export default TabCustomMui;