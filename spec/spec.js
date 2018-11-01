import React from "react";
import { mount, shallow } from "enzyme";
import App from "../client/src/components/App";
import ProductDetails from "../client/src/components/ProductDetails";

describe("App component", () => {
  it("should render correctly", () => {
    expect(shallow(<App />)).toMatchSnapshot();
  });
  it("it should render ProductDetails component", () => {
    const wrapper = mount(<App />);
    expect(wrapper.children(ProductDetails).length).toEqual(1);
  });
  it("state should contain products property", () => {
    const wrapper = mount(<App />);
    const state = wrapper.state().products;
    expect(state).toHaveLength(0);
  });
});

// describe("ProductDetails component", () => {
//   it("should render correctly", () => {
//     const wrapper = shallow(<ProductDetails />);
//     expect(wrapper.exists()).toBe(true);
//   });h
// })
