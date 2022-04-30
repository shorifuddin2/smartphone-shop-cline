import React from 'react';
import {
    Routes,
    Route,
    Outlet,
    Link,
    useMatch,
    useResolvedPath,
  } from "react-router-dom";

const CustomLink = ({ children, to, ...props }) => {
    let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });
    return (
        <Link
        style={{color: match ? "orange" : "black" }}
        to={to}
        {...props}>
        {children}
      </Link>
    );
};

export default CustomLink;