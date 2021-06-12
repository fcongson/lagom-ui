import { shallow } from "enzyme";
import { Button } from "./Button";

describe("Button", () => {
  it("Renders", () => {
    const button = shallow(<Button>Text</Button>);
    expect(button).toMatchSnapshot();
  });
  it("Renders primary", () => {
    const button = shallow(<Button primary>Text</Button>);
    expect(button).toMatchSnapshot();
  });
  it("Renders secondary", () => {
    const button = shallow(<Button primary={false}>Text</Button>);
    expect(button).toMatchSnapshot();
  });
});
