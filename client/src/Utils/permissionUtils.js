import * as _ from "lodash";

export const routePermission = (user = {}, routes = []) => {
    let newRoutes = _.cloneDeep(routes[0]);
    let newChildren = [];
    const { isAdmin = false } = user;
    routes[0].children.map((child = []) => {
        if (isAdmin && _.get(child, "path") === "admin") {
            newChildren.push(child);
        }
        if (!isAdmin && _.get(child, "path") !== "admin") {
            newChildren.push(child);
        }
    });
    _.set(newRoutes, "children", newChildren);
    return [newRoutes, routes[1]];
};
