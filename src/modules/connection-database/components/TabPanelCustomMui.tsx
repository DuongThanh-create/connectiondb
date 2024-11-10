
import {TabPanel, TabPanelProps} from "@mui/lab";

// function TabPanelCustomMui({value,content}:{value:string, content:string}) {
//     return (
//         <TabPanel value={value}>`Hello World - ${content}`</TabPanel>
//     );
// }

const TabPanelCustomMui: React.FC<TabPanelProps> = (props) => {

    console.log("TabPanelCustomMui-render: " + props.value)
    return (
        <TabPanel
            {...props}
            value={props.value}
        >
            `Hello World - ${props.content}`
        </TabPanel>

    );
};


export default TabPanelCustomMui;