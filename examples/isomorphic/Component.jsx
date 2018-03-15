var React = require("react");
var Experiment = require("../../lib/Experiment");
var Variant = require("../../lib/Variant");

const component = (props) => {
  return <div>
    <Experiment ref="experiment" name="My Example" userIdentifier={props.userIdentifier}>
      <Variant name="A">
        <div>Section A</div>
      </Variant>
      <Variant name="B">
        <div>Section B</div>
      </Variant>
    </Experiment>
  </div>;
};

component.propTypes = {
  userIdentifier: React.PropTypes.string.isRequired
}

module.exports = component
