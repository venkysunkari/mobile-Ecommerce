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
  CardContent,
  Grid,
  Paper,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import ShoppingIcon from "@material-ui/icons/ShoppingCart";
import "./css/details.css";
class Details extends Component {
  state = {};
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <ProductsContext.Consumer>
          {(object) => {
            return object.array.map((e, index) => {
              if (e["id"] == this.props.match.params.id) {
                return (
                  <Paper
                    elevation={0}
                    style={{ padding: "4px" }}
                    className="details-card"
                  >
                    <Grid
                      container
                      spacing={1}
                      justify="center"
                      alignItems="center"
                    >
                      <Grid item xs={12} sm={6}>
                        <img
                          src={require("./" + e["img"])}
                          className="detail-product-image"
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Typography variant="h5">
                          {" "}
                          Model : {e["title"]}
                        </Typography>
                        <Typography variant="body1">
                          Made by :{" "}
                          <span style={{ textTransform: "uppercase" }}>
                            {e["company"]}
                          </span>
                        </Typography>
                        <Typography variant="body1">
                          price:{" "}
                          <span style={{ fontWeight: "bold" }}>
                            {" "}
                            ${e["price"]}
                          </span>
                        </Typography>
                        <Typography
                          variant="body2"
                          style={{ margin: "10px 0" }}
                        >
                          {e["info"]}
                        </Typography>
                        <Link to="/">
                          <Button
                            variant="outlined"
                            size="small"
                            color="primary"
                          >
                            Back to Products
                          </Button>
                        </Link>
                        <Button
                          variant="outlined"
                          size="small"
                          disabled={e["inCart"]}
                          onClick={() => {
                            object.addtoCart(index);
                            object.setbadgeContent();
                          }}
                          color="secondary"
                        >
                          {e["inCart"] ? "In Cart" : "Add to cart"}
                        </Button>
                      </Grid>
                    </Grid>
                  </Paper>
                );
              }
            });
          }}
        </ProductsContext.Consumer>
      </React.Fragment>
    );
  }
}

export default Details;
