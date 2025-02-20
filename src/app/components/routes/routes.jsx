import React from "react";
import { Routes, Route } from "react-router-dom";
// import NotFoundPage404 from './NotFoundPage404';

export const RouteMaker = (props) => {
  const { routes } = props;

  return (
    <Routes>
      {Object.keys(routes).map((key) => {
        const ComponentOrChildren = routes[key];

        // Check if the route has children (indicated by the presence of a 'default' component)
        if (ComponentOrChildren.default) {
          const routesChildren = ComponentOrChildren;
          const routePath = key; // You can adjust this logic if needed

          return (
            <Route key={key} path={routePath} element={routesChildren.default}>
              {Object.keys(routesChildren)
                .filter((k) => k !== "default")
                .map((childKey) => (
                  <Route
                    key={childKey}
                    path={childKey}
                    element={routesChildren[childKey]}
                  />
                ))}
            </Route>
          );
        }

        // Handle simple routes without children
        return <Route key={key} path={key} element={ComponentOrChildren} />;
      })}

      {/* Fallback route for unmatched paths */}
      {/* <Route path="*" element={<NotFoundPage404 />} /> */}
    </Routes>
  );
};
