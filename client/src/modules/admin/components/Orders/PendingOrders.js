import React, { useEffect, useMemo } from "react";
import { actions as sliceActions } from "../../slice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { deleteProd, fetchProductList } from "../../actions";
import { AddCircleOutline, Delete, Edit, ViewCarousel } from "@mui/icons-material";
import { STATE_REDUCER_KEY, ORDERS_TABLE_COLUMN, pendingOrderColList } from "../../constants";
import CustomListMenu from "../../../../common/components/CustomListMenu";
import { REACT_TABLE_COMMON_OPTIONS } from "../../../common/constants";
import CustomReactTable from "../../../../common/components/CustomTable";


const PendingOrders = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { data: orders = [], requestInProgress = false } = useSelector(state => state[STATE_REDUCER_KEY].pendingOrdersList);

    // eslint-disable-next-line no-unused-vars
    const columns = useMemo(
        () => ORDERS_TABLE_COLUMN,
        []
    );
    const actions = (row) => {
        let item = [1, 2];
        let customActions = [];

        if (item[1]) {
            customActions.push({ title: "Approve", icon: <ViewCarousel fontSize="small" />, handleClick: () => navigate(`${row.original._id}/view`) });
        }
        if (item[1]) {
            customActions.push({ title: "Decline", icon: <Edit fontSize="small" />, handleClick: () => navigate(`${row.original._id}/edit`) });
        }
        if (item[1]) {
            customActions.push({
                title: "Delete", icon: <Delete fontSize="small" />,
                handleClick: () => dispatch(deleteProd(row.original._id))
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


    toolBarActions.push({
        title: "Create", icon: <AddCircleOutline fontSize="large" />, handleClick: () => navigate("../products/create")
    });


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
        dispatch(fetchProductList());
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
                title={"Pending Status"}
            />
        </>

    );
};

export default PendingOrders;
