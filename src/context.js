import React, { Component } from "react";
//import items from './data';
import Client from "./Contentful";

const FlowerContext = React.createContext();

class FlowerProvider extends Component {
  state = {
    flowers: [],
    sortedFlowers: [],
    featuredFlowers: [],
    loading: true,
    type: "all",
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    available: false
  };

  getData = async () => {
    try {
      let response = await Client.getEntries({
        content_type: "flowerProject"
      });

      let flowers = this.formatData(response.items);
      let featuredFlowers = flowers.filter(flower => flower.featured === true);

      let maxPrice = Math.max(...flowers.map(item => item.price));
      let maxSize = Math.max(...flowers.map(item => item.size));

      this.setState({
        flowers,
        featuredFlowers,
        sortedFlowers: flowers,
        loading: false,
        maxPrice,
        maxSize
      });
      console.log(flowers);
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.getData();
  }

  formatData(items) {
    let tempItems = items.map(item => {
      let id = item.sys.id;
      let images =
        item.fields.images &&
        item.fields.images.map(image => image.fields.file.url);
      let flower = { ...item.fields, images, id };
      return flower;
    });
    return tempItems;
  }

  getFlower = slug => {
    let tempFlowers = [...this.state.flowers];
    const flower = tempFlowers.find(flower => flower.slug === slug);
    return flower;
  };

  handleChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = event.target.name;
    this.setState(
      {
        [name]: value
      },
      this.filterFlowers
    );
  };

  filterFlowers = () => {
    let { flowers, type, price, available } = this.state;

    let tempFlowers = [...flowers];

    price = parseInt(price);

    if (type !== "все") {
      tempFlowers = tempFlowers.filter(flower => flower.type === type);
    }

    tempFlowers = tempFlowers.filter(flower => flower.price <= price);

    if (available) {
      tempFlowers.filter(flower => flower.available === true);
    }

    this.setState({
      sortedFlowers: tempFlowers
    });
  };

  render() {
    return (
      <FlowerContext.Provider
        value={{
          ...this.state,
          getFlower: this.getFlower,
          handleChange: this.handleChange
        }}
      >
        {this.props.children}
      </FlowerContext.Provider>
    );
  }
}

const FlowerConsumer = FlowerContext.Consumer;

export function withFlowerConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <FlowerConsumer>
        {value => <Component {...props} context={value} />}
      </FlowerConsumer>
    );
  };
}

export { FlowerProvider, FlowerConsumer, FlowerContext };
