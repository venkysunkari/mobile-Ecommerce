import React, { Component, createContext } from "react";

export const ProductsContext = createContext();

export class Products extends Component {
  state = {
    products: [
      {
        id: 1,
        title: "Google Pixel - Black",
        img: "img/product-1.png",
        price: 130,
        company: "GOOGLE",
        info:
          "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
        inCart: false,
        count: 0,
        total: 0,
      },
      {
        id: 2,
        title: "Samsung S7",
        img: "img/product-2.png",
        price: 160,
        company: "SAMSUNG",
        info:
          "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
        inCart: false,
        count: 0,
        total: 0,
      },
      {
        id: 3,
        title: "HTC 10 - Black",
        img: "img/product-3.png",
        price: 190,
        company: "htc",
        info:
          "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
        inCart: false,
        count: 0,
        total: 0,
      },
      {
        id: 4,
        title: "HTC 10 - White",
        img: "img/product-4.png",
        price: 180,
        company: "htc",
        info:
          "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
        inCart: false,
        count: 0,
        total: 0,
      },
      {
        id: 5,
        title: "HTC Desire 626s",
        img: "img/product-5.png",
        price: 240,
        company: "htc",
        info:
          "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
        inCart: false,
        count: 0,
        total: 0,
      },
      {
        id: 6,
        title: "Vintage Iphone",
        img: "img/product-6.png",
        price: 170,
        company: "apple",
        info:
          "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
        inCart: false,
        count: 0,
        total: 0,
      },
      {
        id: 7,
        title: "Iphone 7",
        img: "img/product-7.png",
        price: 300,
        company: "apple",
        info:
          "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
        inCart: false,
        count: 0,
        total: 0,
      },
      {
        id: 8,
        title: "Smashed Iphone",
        img: "img/product-8.png",
        price: 80,
        company: "apple",
        info:
          "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
        inCart: false,
        count: 0,
        total: 0,
      },
    ],
    badgecontent: 0,
    totalprice: "",
  };

  componentDidMount = () => {
    this.totalPrice();
  };
  totalPrice = () => {
    var products = this.state.products;
    var totalprice = 0;
    products.filter((e) => {
      if (e["inCart"]) {
        totalprice += e["count"] * e["price"];
      }
    });

    this.setState({ totalprice });
  };
  addtoCart = (index) => {
    var products = this.state.products;
    products.filter(function (e, iter) {
      if (iter == index) {
        e["inCart"] = true;
        e["count"]++;
      }
    });
    this.setState({ products });
    this.totalPrice();
  };
  removefromCart = (index) => {
    var products = this.state.products;
    products.filter((e, iter) => {
      if (iter == index) {
        e["inCart"] = false;
        this.setState({ badgecontent: this.state.badgecontent - 1 });
      }
    });
    this.setState({ products });
    this.totalPrice();
  };
  setbadgeContent = (value) => {
    if (value == 0) {
      alert("hh");
    } else {
      this.setState({ badgecontent: this.state.badgecontent + 1 });
    }
  };
  handleQuantity = (index, type) => {
    var products = this.state.products;
    products.filter(function (e, iter) {
      if (iter == index) {
        if (type == "incr") {
          e["count"]++;
        } else {
          e["count"]--;
        }
      }
    });
    this.setState({ products });
    this.totalPrice();
  };
  clearCart = () => {
    this.setState({ badgecontent: 0 });
    var products = this.state.products;
    products.filter((e, iter) => {
      e["inCart"] = false;
    });
    this.setState({ products });
  };

  render() {
    return (
      <ProductsContext.Provider
        value={{
          array: this.state.products,
          addtoCart: this.addtoCart,
          removefromCart: this.removefromCart,
          setbadgeContent: this.setbadgeContent,
          badgecontent: this.state.badgecontent,
          handleQuantity: this.handleQuantity,
          clearCart: this.clearCart,
          totalprice: this.state.totalprice,
        }}
      >
        {this.props.children}
      </ProductsContext.Provider>
    );
  }
}
