import React, { Component } from "react";
import Picture from "../Util/Picture";

class Registry extends Component {
  render() {
    const {
      url,
      alt,
      store,
      classes,
    } = this.props;
    return (
      <div className={classes}>
        <span>
          <a href={url}>
            <Picture
              className="background--fill ratio--square registry-logo"
              style={{
                backgroundImage: `url('${STATIC}/logos/${store}@2x.png')`,
              }}
            />
          </a>
        </span>
      </div>
    );
  }
}

Registry.propTypes = {
  url: React.PropTypes.string,
  alt: React.PropTypes.string,
  store: React.PropTypes.string,
  classes: React.PropTypes.string,
};

export default Registry;
