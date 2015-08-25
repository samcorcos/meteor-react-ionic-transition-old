Settings = React.createClass({
  componentWillMount() {
    this.props.setTransitionType("rightIn")
  },
  render() {
    return (
        <h1>Settings</h1>
    )
  }
});
