import { shallow } from "enzyme";
import { LinkButton } from "./LinkButton";

describe("LinkButton", () => {
  it("Renders", () => {
    const linkButton = shallow(<LinkButton href="#">Text</LinkButton>);
    expect(linkButton).toMatchSnapshot();
  });
});
