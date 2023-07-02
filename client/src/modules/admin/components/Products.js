import React, { useEffect, useMemo } from "react";
import { actions as sliceActions } from "../slice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { fetchProductList } from "../actions";
import { Filter1Rounded, ViewInArOutlined } from "@mui/icons-material";
import { STATE_REDUCER_KEY, TABLE_COLUMN, productColList } from "../constants";
import CustomListMenu from "../../../common/components/CustomListMenu";
import { REACT_TABLE_COMMON_OPTIONS } from "../../common/constants";
import CustomReactTable from "../../../common/components/CustomTable";


const Products = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { productList = [], requestInProgress = false } = useSelector(state => state[STATE_REDUCER_KEY].productList);

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
        if (item[1]) {
            customActions.push({ title: "Edit", icon: <ViewInArOutlined fontSize="small" />, handleClick: () => navigate(`${row._id}/edit`) });
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
            columnOrder: productColList
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
                data={productList}
                columns={columns}
                options={options}
                enableRowVirtualization={false}
                enableCustomTableFilter={true}
                title={"Product List"}
            />
        </>

    );
};

export default Products;
