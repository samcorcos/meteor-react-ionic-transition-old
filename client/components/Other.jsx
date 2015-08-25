Other = React.createClass({
  componentWillMount() {
    this.props.setTransitionType("rightIn")
  },
  componentDidUnmount() {
    this.props.setTransitionType("leftIn")
  },
  render() {
    return (
      <div className="route-wrapper other-route">
        <h1>Other</h1>
      </div>
    )
  }
});
