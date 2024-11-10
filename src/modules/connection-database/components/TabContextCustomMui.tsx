import {TabContext} from "@mui/lab";
import TablListCustomMui from "./TablListCustomMui.tsx";
import TabPanelCustomMui from "./TabPanelCustomMui.tsx";
import {TabCustomProps} from "./TypeCustomProps.ts";

function TabContextCustomMui({value, handleChange, dataPropsTabCustomMuis, dataPropsTabPannelCustomMuis,
                                 anchorEl, handleClose, handleDelete}:
                                 {
                                     value:string | number,
                                     handleChange: (event: React.SyntheticEvent, newValue: string | number) => void,
                                     dataPropsTabCustomMuis: TabCustomProps[],
                                     dataPropsTabPannelCustomMuis: {value:string|number, content:string}[],
                                     anchorEl: null | HTMLElement,
                                     handleClose: void
                                     handleDelete?: void
                                 }
) {

    return (
        <TabContext value={value}>
            <TablListCustomMui handleChange={handleChange}
                               dataPropsTabCustomMuis = {dataPropsTabCustomMuis}
                                anchorEl={anchorEl} handleClose={handleClose} handleDelete={handleDelete}
            />
            {
                dataPropsTabPannelCustomMuis.map(
                    (data, index) =>
                        <TabPanelCustomMui value={data.value} content={data.content} key={index}/>
                )
            }
        </TabContext>
    );
}

export default TabContextCustomMui;