import React, { Component } from "react";
import { ProductsContext } from "./productsContext";
import {
  Card,
  CardMedia,
  CardActions,
  Typography,
  IconButton,
  CardActionArea,
  Dialog,
  CardHeader,
  Button,
  Hidden,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import ShoppingIcon from "@material-ui/icons/ShoppingCart";

import "./css/producthome.css";

class Home2 extends Component {
  state = { array: [], isopen: false, activeProductDetails: "" };

  closeDialog = () => {
    this.setState({ isopen: false });
  };
  showDialog = (object) => {
    this.setState({ activeProductDetails: object });
    this.setState({ isopen: true });
  };
  render() {
    const { activeProductDetails } = this.state;
    return (
      <React.Fragment>
        <div className="title">Our Products</div>
        <div className="wrapper">
          <ProductsContext.Consumer>
            {(object) => {
              return object["array"].map((e, index) => (
                <Link to={`/details/${e.id}`}>
                  <Card className="product-card">
                    <CardMedia
                      className="card-media"
                      style={{
                        width: "100%",
                        height: "70%",
                        margin: "10px auto",
                      }}
                    >
                      <img
                        className="product-img"
                        syle={{ margin: "0px auto" }}
                        src={require(`./${e.img}`)}
                      />
                      {!e["inCart"] && (
                        <div
                          onClick={(event) => {
                            object.addtoCart(index);
                            this.showDialog(e);
                            object.setbadgeContent();
                            event.preventDefault();
                          }}
                          className="product-cart-icon"
                        >
                          <ShoppingIcon style={{ color: "white" }} />
                        </div>
                      )}
                      {e["inCart"] && (
                        <div className="product-cart-icon incart">In Cart</div>
                      )}
                    </CardMedia>
                    <CardActions>
                      <Typography
                        variant="body2"
                        style={{
                          position: "absolute",
                          left: "10px",
                          bottom: "10px",
                        }}
                      >
                        {e.title}
                      </Typography>
                      <Typography
                        style={{
                          position: "absolute",
                          right: "10px",
                          bottom: "10px",
                          fontWeight: "bold",
                        }}
                      >
                        ${e.price}
                      </Typography>
                    </CardActions>
                  </Card>
                </Link>
              ));
            }}
          </ProductsContext.Consumer>
        </div>
        <Hidden xsDown>
          {this.state.activeProductDetails !== "" && (
            <Dialog
              className="dialog-box"
              open={this.state.isopen}
              aria-labelledby="simple-dialog-title"
            >
              <Card className="dialog-card">
                <CardHeader
                  title={
                    <Typography variant="h6">Item Added to Cart</Typography>
                  }
                />
                <CardMedia
                  className="dialog-image"
                  image={require("./" + this.state.activeProductDetails.img)}
                />
                <CardActionArea>
                  <Typography variant="h6">
                    {this.state.activeProductDetails.title}
                  </Typography>
                  <Typography variant="subtitle2" disabled>
                    Price: ${activeProductDetails.price}
                  </Typography>
                </CardActionArea>
                <CardActions
                  style={{
                    margin: "0px auto",
                    maxWidth: "250px",
                    textAlign: "center",
                  }}
                >
                  <Button
                    variant="outlined"
                    size="small"
                    color="secondary"
                    onClick={this.closeDialog}
                  >
                    Continue shopping
                  </Button>
                  <Link to="my-cart">
                    <Button variant="contained" size="small" color="primary">
                      Go to Cart
                    </Button>
                  </Link>
                </CardActions>
              </Card>
            </Dialog>
          )}
        </Hidden>
      </React.Fragment>
    );
  }
}

export default Home2;
