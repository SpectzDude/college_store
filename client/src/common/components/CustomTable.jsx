import MaterialReactTable from "material-react-table";
import { useEffect, useRef, useState } from "react";
import LoadingCustomOverlay from "./LoadingOverLay";
import { Box, Grid, IconButton, Paper, TablePagination, Tooltip, Typography } from "@mui/material";

const CustomReactTable = ({ data, columns, options, title = "", enableRowVirtualization = false }) => {
    const virtualizerInstanceRef = useRef(null);
    const [sorting, setSorting] = useState([]);
    const { pageSize, count = 1, page = 0, state, enableCustomPagination = true,
        customPagination: {
            handleChangePage,
            handleChangeRowsPerPage,
            rowsPerPageOptions = []
        } = {},
        toolBarActions = [],
        enableFilters = false, displayColumnDefOptions, getCanMultiSelect, handleRowSelection, requestInProgress = false, ...rest } = options;

    useEffect(() => {
        if (virtualizerInstanceRef.current) {
            virtualizerInstanceRef.current.scrollToIndex(0);
        }
    }, [sorting]);
    return (
        <LoadingCustomOverlay active={requestInProgress} >
            <Paper sx={{ m: 2 }}>
                <Grid sx={{ display: "flex", justifyContent: "space-between", paddingBottom: "10px" }}>
                    <Grid>
                        <Typography sx={{ fontSize: "17px", paddingTop: "15px", fontWeight: 800 }} > {title} </Typography>
                    </Grid>
                    {
                        toolBarActions.length > 0 && <Box sx={{ marginLeft: 2 }}>
                            {toolBarActions && toolBarActions.map((element) => {
                                if (element.key === "customFilter") {
                                    return <Tooltip key={element.title} title={element.title} >
                                        <IconButton
                                        >
                                            {element?.icon}
                                        </IconButton>
                                    </Tooltip>;
                                }
                                if (element.key === "download") {
                                    return <Tooltip key={element?.title} title={element.title || ""} onClick={element.handleClick}>
                                        <IconButton
                                        >
                                            {element?.component}
                                        </IconButton>
                                    </Tooltip>;
                                }
                                return <Tooltip key={element?.title} title={element.title || ""} onClick={element.handleClick}>
                                    <IconButton
                                    >
                                        {element?.icon}
                                    </IconButton>
                                </Tooltip>;
                            })}
                        </Box>
                    }
                </Grid>
                <MaterialReactTable
                    initialState={{ density: "comfortable", showHideColumnFilters: "false" }}
                    columns={columns}
                    data={data}
                    state={state}
                    enableFilters={enableFilters}
                    enableRowVirtualization={enableRowVirtualization}
                    virtualizerInstanceRef={enableRowVirtualization && virtualizerInstanceRef}
                    virtualizerProps={{ overscan: 25 }}
                    muiTableContainerProps={{ sx: { maxHeight: "600px" } }}
                    onSortingChange={setSorting}
                    displayColumnDefOptions={displayColumnDefOptions}
                    getCanMultiSelect={getCanMultiSelect}
                    enableColumnFilter={enableFilters ? true : false}
                    onRowSelectionChange={handleRowSelection}
                    enableBottomToolbar={false}
                    enableStickyFooter={false}
                    muiTablePaperProps={{
                        elevation: 0,
                        sx: {
                            borderRadius: "0",
                            border: "none"
                        }
                    }
                    }
                    muiTableBodyCellProps={{
                        sx: {
                            fontSize: "12px",
                            fontFamily: "Franklin Gothic Book"

                        }
                    }}
                    muiTopToolbarProps={{
                        sx: {
                            display: "block",
                            flexDirection: "column",
                            backgroundColor: "white"
                        }
                    }}
                    muiTableHeadCellProps={{
                        sx: {
                            fontSize: "14px",
                            fontWeight: 700,
                            py: 3
                        }
                    }}

                    {...rest}
                />
                {enableCustomPagination && <Grid sx={{ padding: "20px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <TablePagination
                        component="div"
                        count={count}
                        page={page}
                        onPageChange={handleChangePage}
                        rowsPerPage={pageSize}
                        rowsPerPageOptions={rowsPerPageOptions}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </Grid>}
            </Paper>
        </LoadingCustomOverlay >
    );
};

export default CustomReactTable;
