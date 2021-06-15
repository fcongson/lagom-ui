import { shallow } from "enzyme";
import { LinkButton } from "./LinkButton";

describe("LinkButton", () => {
  it("Renders", () => {
    const linkButton = shallow(<LinkButton to="#">Text</LinkButton>);
    expect(linkButton).toMatchSnapshot();
  });
  it("Renders primary", () => {
    const linkButton = shallow(
      <LinkButton to="#" primary>
        Text
      </LinkButton>
    );
    expect(linkButton).toMatchSnapshot();
  });
  it("Renders secondary", () => {
    const linkButton = shallow(
      <LinkButton to="#" primary={false}>
        Text
      </LinkButton>
    );
    expect(linkButton).toMatchSnapshot();
  });
});
