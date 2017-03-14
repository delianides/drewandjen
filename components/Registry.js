import React, { Component } from "react";
import Picture from "./Picture";

class Registry extends Component {
  render() {
    const {
      url,
      store,
    } = this.props;
    return (
      <div
        className="one-whole one-third@lap-and-up display-inline-block push-bottom@handheld floating__item"
      >
        <span>
          <a href={url}>
            <Picture
              className="background--fill ratio--square registry-logo"
              style={{
                backgroundImage: `url('${STATIC}/logos/${store}@2x.png')`,
                backgroundSize: "250px",
              }}
            />
          </a>
        </span>
      </div>
    );
  }
}

Registry.propTypes = {
  store: React.PropTypes.string,
  url: React.PropTypes.string,
};

export default Registry;
