import React, { useEffect, useMemo } from "react";
import { actions as sliceActions } from "../slice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { fetchOrdersList } from "../actions";
import { Filter1Rounded, ViewInArOutlined } from "@mui/icons-material";
import { STATE_REDUCER_KEY, TABLE_COLUMN, orderList } from "../constants";
import CustomListMenu from "../../../common/components/CustomListMenu";
import { REACT_TABLE_COMMON_OPTIONS } from "../../common/constants";
import CustomReactTable from "../../../common/components/CustomTable";


const OrderList = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { data: orders = [], requestInProgress = false } = useSelector(state => state[STATE_REDUCER_KEY].orders);

    // eslint-disable-next-line no-unused-vars
    const columns = useMemo(
        () => TABLE_COLUMN,
        []
    );
    const actions = (row) => {
        let item = [1, 2];
        let customActions = [];

        if (item[1]) {
            customActions.push({ title: "View", icon: <ViewInArOutlined fontSize="small" />, handleClick: () => navigate(`${row._id}/view`) });
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
        title: "Filters", icon: <Filter1Rounded />
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
            columnOrder: orderList
        },
        customPagination: {
            handleChangePage
        },
        displayColumnDefOptions,
        handleRowSelection,
        toolBarActions: toolBarActions
    };

    useEffect(() => {
        dispatch(fetchOrdersList());
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
                title={"Orders List"}
            />
        </>

    );
};

export default OrderList;