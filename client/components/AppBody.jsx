let Transition = React.addons.CSSTransitionGroup;

AppBody = React.createClass({
  getInitialState() {
    return {
      transitionType: ""
    }
  },
  setTransitionType(newTransitionType) {
    this.setState({
      transitionType: newTransitionType
    })
  },
  render() {
    var key = window.location.pathname;
    return (
      <div className="ionic-body">
        <div className="bar bar-header bar-light">
          <ReactRouter.Link className="button button-icon icon ion-gear-a" to="settings"></ReactRouter.Link>
          <ReactRouter.Link className="h1 title" to="home">App Name</ReactRouter.Link>
          <ReactRouter.Link className="button button-icon icon ion-heart" to="other"></ReactRouter.Link>
        </div>

          <div className="view">
            <div className="scroll-content ionic-scroll">
              <div className="content overflow-scroll has-header">
                <Transition component="div" className="route-wrapper" transitionName={this.state.transitionType}>
                    <ReactRouter.RouteHandler setTransitionType={this.setTransitionType} key={key} />
                </Transition>
              </div>
            </div>
          </div>
      </div>
    )
  }
})
