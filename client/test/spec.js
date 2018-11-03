/**
 * @jest-environment jsdom
 */
// import React from "react";
// import { mount, shallow } from "enzyme";
// import axios from "axios";
// import MockAdapter from "axios-mock-adapter";
// import App from "../src/components/App";
// import ProductDetails from "../src/components/ProductDetails";

// describe("App component", () => {
//   it("should render correctly", () => {
//     expect(shallow(<App />)).toMatchSnapshot();
//   });
//   it("it should render ProductDetails component", () => {
//     const wrapper = mount(<App />);
//     expect(wrapper.children(ProductDetails).length).toEqual(1);
//   });
//   it("state should contain product property", () => {
//     const wrapper = mount(<App />);
//     const state = wrapper.state().product;
//     expect(state).toHaveLength(0);
//   });
// });

// describe("componentDidMount function", () => {
//   const wrapper = shallow(<App />);
//   const spy = jest.spyOn(App.prototype, "componentDidMount");
//   const mockData = [
//     {
//       id: 0,
//       name: "Tent",
//       rating: 3.5,
//       reviewCount: 32,
//       itemNum: 0,
//       price: 356,
//       color: "Gray"
//     }
//   ];
//   beforeEach(() => {
//     const mock = new MockAdapter(axios);
//     mock.onGet("http://localhost:3001/data/0").reply(200, mockData);
//     wrapper.update();
//   });
//   it("should be invoked", () => {
//     expect(spy).toHaveBeenCalled();
//   });
//   // it("sets the state property product", () => {
//   //   expect(wrapper.state().product).toEqual(mockData)
//   // })
// });
