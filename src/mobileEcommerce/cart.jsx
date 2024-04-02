import React, { Component } from "react";
import { ProductsContext } from "./productsContext";
import "./css/cart.css";
import {
  IconButton,
  Typography,
  Paper,
  CardActions,
  Button,
  ButtonGroup,
  Hidden,
  Grid,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

class Cart extends Component {
  state = {};

  componentDidMount = () => {};

  render() {
    return (
      <div className="container">
        <Hidden xsDown>
          <ProductsContext.Consumer>
            {(object) => {
              if (object["badgecontent"] == 0) {
                return (
                  <Typography variant="h6" color="secondary">
                    Sorry, No Items in Your Cart
                  </Typography>
                );
              } else {
                return (
                  <React.Fragment>
                    <TableContainer component={Paper}>
                      <Table
                        aria-label="simple table"
                        style={{ width: "100%" }}
                      >
                        <TableHead>
                          <TableRow style={{ fontWeight: "bold" }}>
                            <TableCell>PRODUCTS</TableCell>
                            <TableCell align="right">Name of product</TableCell>
                            <TableCell align="right">Price</TableCell>
                            <TableCell align="right">Quantity</TableCell>
                            <TableCell align="right">Remove</TableCell>
                            <TableCell align="right">Total</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {object.array.map((e, index) => {
                            if (e["inCart"] == true) {
                              return (
                                <TableRow>
                                  <TableCell component="th" scope="row">
                                    <img
                                      src={require("./" + e["img"])}
                                      style={{
                                        maxWidth: "100px",
                                        height: "60px",
                                        objectFit: "cover",
                                      }}
                                    />
                                  </TableCell>
                                  <TableCell align="right">
                                    {e["title"]}
                                  </TableCell>
                                  <TableCell align="right">
                                    ${e["price"]}
                                  </TableCell>
                                  <TableCell align="right">
                                    <ButtonGroup size="small" align="right">
                                      <Button
                                        disabled={
                                          e["count"] == 1 ? true : false
                                        }
                                        onClick={() =>
                                          object.handleQuantity(index, "decr")
                                        }
                                        style={{
                                          margin: "2px",
                                        }}
                                      >
                                        -
                                      </Button>
                                      <Button
                                        size="small"
                                        style={{
                                          margin: "2px",
                                        }}
                                      >
                                        {e["count"]}
                                      </Button>
                                      <Button
                                        size="small"
                                        style={{
                                          margin: "2px",
                                        }}
                                        onClick={() =>
                                          object.handleQuantity(index, "incr")
                                        }
                                      >
                                        +
                                      </Button>
                                    </ButtonGroup>
                                  </TableCell>
                                  <TableCell align="right">
                                    <IconButton
                                      onClick={() =>
                                        object.removefromCart(index)
                                      }
                                    >
                                      <DeleteIcon />
                                    </IconButton>
                                  </TableCell>
                                  <TableCell align="right">
                                    <Typography
                                      variant="subtitle1"
                                      style={{ fontWeight: "bold" }}
                                    >
                                      Item Price:${e["price"] * e["count"]}
                                    </Typography>
                                  </TableCell>
                                </TableRow>
                              );
                            }
                          })}
                        </TableBody>
                      </Table>
                    </TableContainer>
                    <Button
                      color="secondary"
                      variant="outlined"
                      size="small"
                      style={{
                        marginLeft: "auto",
                        marginTop: "10px",
                      }}
                      onClick={object.clearCart}
                    >
                      CLEAR CART
                    </Button>
                    <div
                      style={{
                        position: "relative",
                        marginLeft: "auto",

                        width: "200px",
                      }}
                    >
                      <Typography variant="h6" align="left">
                        Sub Total : ${object["totalprice"]}
                      </Typography>
                      <Typography variant="h6" align="center">
                        TAX: $6.3
                      </Typography>
                      <Typography variant="h6" align="center">
                        Total: ${object["totalprice"] + 6.3}
                      </Typography>
                    </div>
                  </React.Fragment>
                );
              }
            }}
          </ProductsContext.Consumer>
        </Hidden>
        <Hidden smUp>
          <ProductsContext.Consumer>
            {(object) => {
              if (object["badgecontent"] == 0) {
                return (
                  <Typography variant="h6" color="secondary">
                    Sorry, No Items in Your Cart
                  </Typography>
                );
              } else {
                return (
                  <>
                    {object.array.map((e, index) => {
                      if (e["inCart"] == true) {
                        return (
                          <Paper style={{ marginTop: "4px" }}>
                            <Grid
                              container
                              direction="column"
                              spacing={1}
                              alignItems="center"
                            >
                              <Grid item container xs={12}>
                                <Grid
                                  item
                                  xs={9}
                                  justify="center"
                                  alignItems="center"
                                >
                                  <img
                                    src={require("./" + e["img"])}
                                    style={{
                                      maxWidth: "100%",
                                      height: "150px",
                                      objectFit: "cover",
                                      marginLeft: "auto",
                                    }}
                                  />
                                </Grid>
                                <Grid
                                  item
                                  container
                                  xs={3}
                                  direction="column"
                                  justify="space-between"
                                  alignItems="center"
                                >
                                  <Grid item>
                                    <IconButton
                                      onClick={() =>
                                        object.removefromCart(index)
                                      }
                                    >
                                      <DeleteIcon />
                                    </IconButton>
                                  </Grid>
                                  <Grid item>
                                    <Typography
                                      variant="body1"
                                      color="textSecondary"
                                    >
                                      ${e["price"]}
                                    </Typography>
                                  </Grid>
                                </Grid>
                              </Grid>
                              <Grid
                                item
                                container
                                style={{ paddingLeft: "30px" }}
                                direction="column"
                                xs={12}
                                alignItems="flex-start"
                              >
                                <Grid item>
                                  <Typography>{e["title"]}</Typography>
                                </Grid>

                                <Grid
                                  item
                                  container
                                  spacing={2}
                                  alignItems="center"
                                >
                                  <Grid item>
                                    <Typography>Quantity</Typography>
                                  </Grid>
                                  <Grid item>
                                    <ButtonGroup
                                      size="small"
                                      style={{
                                        width: "20px",
                                        background: "red",
                                      }}
                                    >
                                      <Button
                                        disabled={
                                          e["count"] == 1 ? true : false
                                        }
                                        onClick={() =>
                                          object.handleQuantity(index, "decr")
                                        }
                                        style={{
                                          fontSize: "0.1rem",
                                          width: "2px",
                                          background: "yellow",
                                        }}
                                      >
                                        -
                                      </Button>

                                      <Button size="small" style={{}}>
                                        {e["count"]}
                                      </Button>

                                      <Button
                                        size="small"
                                        style={{}}
                                        onClick={() =>
                                          object.handleQuantity(index, "incr")
                                        }
                                      >
                                        +
                                      </Button>
                                    </ButtonGroup>
                                  </Grid>
                                </Grid>
                                <Grid item>
                                  <Typography variant="subtitle1">
                                    <span style={{ fontWeight: "bold" }}>
                                      Total: ${e["price"] * e["count"]}
                                    </span>
                                  </Typography>
                                </Grid>
                              </Grid>
                            </Grid>
                          </Paper>
                        );
                      }
                    })}

                    <div style={{ marginTop: "10px", paddingRight: "30px" }}>
                      <Typography align="right">
                        Sub Total : ${object["totalprice"]}
                      </Typography>
                      <Typography align="right">TAX: $6.3</Typography>
                      <Typography align="right">
                        Total: ${object["totalprice"] + 6.3}
                      </Typography>
                    </div>
                    <Grid
                      container
                      justify="flex-end"
                      style={{ paddingRight: "30px" }}
                    >
                      <Grid item>
                        <Button
                          color="secondary"
                          variant="contained"
                          style={{
                            marginLeft: "auto",
                            marginRight: "1px",
                            marginTop: "10px",
                            fontSize: "0.7rem",
                            padding: "2px 6px",
                          }}
                          onClick={object.clearCart}
                        >
                          CLEAR CART
                        </Button>
                      </Grid>
                    </Grid>
                  </>
                );
              }
            }}
          </ProductsContext.Consumer>
        </Hidden>
      </div>
    );
  }
}

export default Cart;
