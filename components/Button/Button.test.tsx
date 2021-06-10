import { shallow } from "enzyme";
import { Button } from "./Button";

describe("Button", () => {
  it("Renders", () => {
    const button = shallow(<Button>Text</Button>);
    expect(button).toMatchSnapshot();
  });
});
