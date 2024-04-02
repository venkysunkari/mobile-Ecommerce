import React, { Component } from "react";
import { AppBar, Toolbar, Button, Badge, Hidden } from "@material-ui/core";
import ShoppingIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";
import { ProductsContext } from "./productsContext";

class AppNav extends Component {
  state = {};
  render() {
    return (
      <AppBar
        position="sticky"
        style={{ display: "flex", background: "white", marginBottom: "10px" }}
      >
        <Toolbar>
          <Link to="/">
            <Button size="small">Products</Button>
          </Link>
          <Link to="/my-cart">
            <ProductsContext.Consumer>
              {(object) => {
                if (object["badgecontent"] === 0) {
                  return (
                    <React.Fragment>
                      <Hidden xsDown>
                        <Button
                          style={{
                            position: "absolute",
                            right: "20px",
                            top: "50%",
                            transform: "translateY(-50%)",
                          }}
                          variant="outlined"
                          size="small"
                          color="primary"
                          startIcon={<ShoppingIcon />}
                        >
                          My cart
                        </Button>
                      </Hidden>
                      <Hidden smUp>
                        <Button
                          style={{
                            position: "absolute",
                            right: "20px",
                            top: "50%",
                            transform: "translateY(-50%)",
                          }}
                          size="small"
                          color="primary"
                        >
                          <ShoppingIcon />
                        </Button>
                      </Hidden>
                    </React.Fragment>
                  );
                } else {
                  return (
                    <Badge
                      style={{
                        position: "absolute",
                        right: "20px",
                        top: "50%",
                        transform: "translateY(-50%)",
                      }}
                      badgeContent={object["badgecontent"]}
                      color="secondary"
                    >
                      <Hidden smDown>
                        <Button
                          variant="outlined"
                          size="small"
                          color="primary"
                          startIcon={<ShoppingIcon />}
                        >
                          {" "}
                          My cart
                        </Button>
                      </Hidden>
                      <Hidden smUp>
                        <ShoppingIcon />
                      </Hidden>
                    </Badge>
                  );
                }
              }}
            </ProductsContext.Consumer>
          </Link>
        </Toolbar>
      </AppBar>
    );
  }
}

export default AppNav;
