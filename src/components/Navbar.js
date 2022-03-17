import React from "react";

const Navbar = () => {
  return (
    <>
      <div style={navbarStyles.display}>
        <div style={navbarStyles.netflix}>Netflix</div>
        <list style={navbarStyles.listStyle}>
          <li style={navbarStyles.liStyle}>English</li>
          <li style={navbarStyles.liStyle}>Sign in</li>
        </list>
      </div>
      <div style={navbarStyles.bottomMargin}></div>
    </>
  );
};

const navbarStyles = {
  netflix: {
    fontSize: "2rem",
    color: "red",
  },
  listStyle: {
    display: "flex",
    flexDirection: "row",
    listStyleType: "none",
  },
  display: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    backgroundColor: "black",
    marginBottom: "1px solid red",
  },

  font: {
    color: "red",
    listStyleType: "none",
    marginLeft: "40px",
    fontSize: "2rem",
  },
  bgcolor: {
    backgroundColor: "black",
  },
  liStyle: {
    marginLeft: "40px",
    fontSize: "1.5rem",
    color: "red",
  },
  bottomMargin: {
    width: "100%",
    backgroundColor: "red",
    height: "1px",
  },
};

export default Navbar;
