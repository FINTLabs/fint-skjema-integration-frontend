import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import {withRouter} from "react-router-dom";
import {useEffect, useState} from "react";
import {IEvent} from "./types/Event";
import EventRepository from "./repository/EventRepository";
import {addId} from "../util/JsonUtil";
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    IconButton,
    Typography
} from "@mui/material";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import moment from "moment";
import {DataGrid, GridCellParams, GridColumns, GridToolbar} from "@mui/x-data-grid";
import {gridLocaleNoNB} from "../util/locale/gridLocaleNoNB";
import { useTranslation } from 'react-i18next';
import {stringReplace} from "../util/StringUtil";

function Log() {
    const {t} = useTranslation('translations', {keyPrefix: 'pages.log'})
    const [allEvents, setAllEvents] = useState<IEvent[]>([]);
    const [selectedRow, setSelectedRow] = useState<IEvent>();
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {setOpen(true);};
    const handleClose = () => {setOpen(false);};

    const columns: GridColumns = [
        { field: 'id', hide: true, type: 'string', headerName: 'id', flex: 0.5 },
        { field: 'details', headerName: 'Detaljer', flex: 0.2, sortable: false, filterable: false,
            renderCell: (params) => ( <CustomDialogToggle row={params.row} />)},
        { field: 'type', type: 'string', headerName: 'Type', flex: 0.5 },
        { field: 'timestamp', type: 'string', headerName: 'Tidspunkt', flex: 1,
            valueGetter: (params) => moment(params.row.timestamp as string).format('DD/MM/YY HH:mm')},
        { field: 'sourceApplicationIntegrationId', type: 'string', headerName: 'Skjema', flex: 1,
            valueGetter: (params) => params.row.instanceFlowHeaders.sourceApplicationIntegrationId}
    ];


    useEffect(()=> {
        getAllEvents();
    }, []);

    const getAllEvents = () => {
        EventRepository.getEvents()
            .then((response) => {
                let data = response.data;
                console.log(data)
                if (data) {
                    data.forEach(addId(0, 'name'))
                    data.forEach((event: any) =>
                        event.errors.forEach(addId(0, 'errorCode'))
                    );
                    setAllEvents(data);
                }
            })
            .catch(e => console.error('Error: ', e))
    }

    return (
        <Box sx={{ width: 1, height: 900 }}>
            {/*TODO: remove header*/}
            <Typography>{t('header')} (NB! UNDER UTVIKLING, KUN DEMO, IKKE REELLE DATA) </Typography>
            <AlertDialog row={selectedRow}/>
            <DataGrid
                columns={columns}
                density='compact'
                localeText={gridLocaleNoNB}
                rows={allEvents}
                components={{
                    Toolbar: GridToolbar,
                }}
                rowThreshold={0}
                initialState={{
                    filter: {
                        filterModel: {
                            items: [
                                {
                                    columnField: 'sourceApplicationIntegrationId',
                                    operatorValue: 'contains'
                                },
                            ],
                        },
                    },
                }}
            />
        </Box>
    );

    function CustomDialogToggle(props: GridCellParams["row"]) {
        const hasErrors: boolean = props.row.errors.length > 0;
        return (
            <>
                {hasErrors &&
                    <IconButton
                        id={props.row.id}
                        size="small"
                        onClick={() => {
                            setSelectedRow(props.row);
                            handleClickOpen()}}
                        tabIndex={-1}>
                        <OpenInNewIcon id={props.row.id + `-icon`} fontSize="inherit"/>
                    </IconButton>
                }
            </>
        );
    }

    function AlertDialog(props: any) {
        return (
            <div>
                <Dialog
                    open={open}
                    fullWidth={true}
                    maxWidth={"lg"}
                    onClose={handleClose}
                >
                    <DialogContent>
                        {selectedRow &&
                            <Stack id={props.row.type+ `-panel`} sx={{ py: 2, boxSizing: 'border-box', height: '350px', minWidth: '900px' }} direction="column">
                                <Stack direction="column" sx={{ height: 1 }}>
                                    <DataGrid
                                        density="compact"
                                        columns={[
                                            { field: 'errorMessage', headerName: t('table.columns.errorMessage'), type: 'string', flex: 2,
                                                //TODO: 01/09-22 fix translation file with corresponding error codes
                                                valueGetter: (params) => {
                                                    console.log(stringReplace(t(params.row.errorCode), [
                                                        (params.row.args.mappingField || ""),
                                                        (params.row.args.configurationField || ""),
                                                        (params.row.args.instanceField || ""),
                                                        (params.row.args.status || "")
                                                        ]
                                                    ))
                                                    return (stringReplace(t(params.row.errorCode), [
                                                        (params.row.args.mappingField || ""),
                                                        (params.row.args.configurationField || ""),
                                                        (params.row.args.instanceField || ""),
                                                        (params.row.args.status || "")
                                                    ]))
                                                }
                                            },
                                            { field: 'args.mappingField', headerName: "Mappingfelt", type: 'string', flex: 1, hide: true,
                                                valueGetter: (params) => `${(params.row.args.mappingField || "")}`
                                            },
                                            { field: 'args.configurationField', headerName: "Konfigurasjonsfelt", type: 'string', flex: 1, hide: true,
                                                valueGetter: (params) => `${ (params.row.args.configurationField || "")}`
                                            },
                                            { field: 'args.instanceField', headerName: "Instansfelt", type: 'string', flex: 1, hide: true,
                                                valueGetter: (params) => `${(params.row.args.instanceField || "")}`
                                            },
                                            { field: 'args.status', headerName: "Status", type: 'string', flex: 1, hide: true,
                                                valueGetter: (params) => `${params.row.args.status ? t(params.row.args.status) : ""}`
                                            }
                                        ]}
                                        rows={props.row.errors}
                                        sx={{ flex: 1 }}
                                        hideFooter
                                    />
                                </Stack>
                            </Stack>}
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} autoFocus>{t('button.close')}</Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}

export default withRouter(Log);
