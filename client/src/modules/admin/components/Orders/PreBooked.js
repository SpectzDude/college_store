import React, { useEffect, useMemo } from "react";
import { actions as sliceActions } from "../../slice";
import { useDispatch, useSelector } from "react-redux";
import { approveOrder, deleteOrder, fetchPreBookedOrder } from "../../actions";
import { Delete, ViewCarousel } from "@mui/icons-material";
import { STATE_REDUCER_KEY, ORDERS_TABLE_COLUMN, pendingOrderColList } from "../../constants";
import CustomListMenu from "../../../../common/components/CustomListMenu";
import { REACT_TABLE_COMMON_OPTIONS } from "../../../common/constants";
import CustomReactTable from "../../../../common/components/CustomTable";


const PreBooked = () => {
    const dispatch = useDispatch();
    const { data: orders = [], requestInProgress = false } = useSelector(state => state[STATE_REDUCER_KEY].pendingOrdersList);
    const handleDelete = (id) => {
        dispatch(deleteOrder(id));
    };
    const handleApprove = (id) => {
        dispatch(approveOrder(id));
    };

    // eslint-disable-next-line no-unused-vars
    const columns = useMemo(
        () => ORDERS_TABLE_COLUMN,
        []
    );
    const actions = (row) => {
        let item = [1, 2];
        let customActions = [];

        if (item[1]) {
            customActions.push({ title: "Approve", icon: <ViewCarousel fontSize="small" />, handleClick: () => handleApprove(row.original.id) });
        }
        if (item[1]) {
            customActions.push({
                title: "Delete", icon: <Delete fontSize="small" />, handleClick: () => handleDelete(row.original.id)
            });
        }
        return customActions;
    };

    const displayColumnDefOptions = {
        "mrt-row-actions": {
            Cell: ({ row }) => <CustomListMenu customActions={actions(row)} />

        }
    };

    const handleChangePage = () => {

    };
    const handleRowSelection = () => {

    };

    const toolBarActions = [];


    const options = {
        ...REACT_TABLE_COMMON_OPTIONS,
        enableRowSelection: false,
        requestInProgress: requestInProgress,
        enableCustomPagination: false,
        // pageSize: pageSize,
        // rowCount: pageSize,
        // count: totalCount,
        // page: pageIndex,
        enableFilters: true,
        state: {
            // pageIndex: pageIndex,
            // pageSize: pageSize,
            // rowSelection: rowSelectionState
        },
        initialState: {
            columnOrder: pendingOrderColList
        },
        customPagination: {
            handleChangePage
        },
        displayColumnDefOptions,
        handleRowSelection,
        toolBarActions: toolBarActions
    };

    useEffect(() => {
        dispatch(fetchPreBookedOrder());
        return (() => {
            dispatch(sliceActions.clearAll());
        }
        );
    }, []);
    return (
        <>
            <CustomReactTable
                data={orders}
                columns={columns}
                options={options}
                enableRowVirtualization={false}
                enableCustomTableFilter={true}
                title={"Pre Booked Orders"}
            />
        </>

    );
};

export default PreBooked;
