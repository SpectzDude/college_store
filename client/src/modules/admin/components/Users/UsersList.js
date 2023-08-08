import React, { useEffect, useMemo } from "react";
import { actions as sliceActions } from "../../slice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { deleteUser, fetchUserList, handleApprove, handleBlock, handleReject, handleUnBlock } from "../../actions";
import { AddCircleOutline, Approval, Cancel, Delete, Lock, LockOpen } from "@mui/icons-material";
import { STATE_REDUCER_KEY, TABLE_COLUMN_USER, userColumnOrder } from "../../constants";
import CustomListMenu from "../../../../common/components/CustomListMenu";
import { REACT_TABLE_COMMON_OPTIONS } from "../../../common/constants";
import CustomReactTable from "../../../../common/components/CustomTable";


const Users = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { data: usersList = [], requestInProgress = false } = useSelector(state => state[STATE_REDUCER_KEY].usersList);

    // eslint-disable-next-line no-unused-vars
    const columns = useMemo(
        () => TABLE_COLUMN_USER,
        []
    );
    const actions = (row) => {
        let item = [1, 2];
        let customActions = [];

        if (!row.original.approvedStatus) {
            customActions.push({ title: "Approve", icon: <Approval fontSize="small" />, handleClick: () => dispatch(handleApprove(row.original._id)) });
        }
        if (row.original.approvedStatus) {
            customActions.push({ title: "Decline", icon: <Cancel fontSize="small" />, handleClick: () => dispatch(handleReject(row.original._id)) });
        }

        if (row.original.user.status) {
            customActions.push({ title: "Block", icon: <Lock fontSize="small" />, handleClick: () => dispatch(handleBlock(row.original.user._id)) });
        }
        if (!row.original.user.status) {
            customActions.push({ title: "UnBlock", icon: <LockOpen fontSize="small" />, handleClick: () => dispatch(handleUnBlock(row.original.user._id)) });
        }
        if (item[1]) {
            customActions.push({
                title: "Delete", icon: <Delete fontSize="small" />,
                handleClick: () => dispatch(deleteUser(row.original._id))
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
            columnOrder: userColumnOrder
        },
        customPagination: {
            handleChangePage
        },
        displayColumnDefOptions,
        handleRowSelection,
        toolBarActions: toolBarActions
    };

    useEffect(() => {
        dispatch(fetchUserList());
        return (() => {
            dispatch(sliceActions.clearAll());
        }
        );
    }, []);
    return (
        <>
            <CustomReactTable
                data={usersList}
                columns={columns}
                options={options}
                enableRowVirtualization={false}
                enableCustomTableFilter={true}
                title={"Users List"}
            />
        </>

    );
};

export default Users;
