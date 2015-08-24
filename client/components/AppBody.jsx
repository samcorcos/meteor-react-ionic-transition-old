let Transition = React.addons.CSSTransitionGroup;

AppBody = React.createClass({
  render() {
    var key = window.location.pathname;
    return (
      <div className="ionic-body">
        <div className="bar bar-header bar-light">
          <ReactRouter.Link className="button button-icon icon ion-gear-a" to={"/settings"}></ReactRouter.Link>
          <ReactRouter.Link className="h1 title" to={"/"}>App Name</ReactRouter.Link>
          <ReactRouter.Link className="button button-icon icon ion-heart" to={"/other"}></ReactRouter.Link>
        </div>

          <div className="view">
            <div className="scroll-content ionic-scroll">
              <div className="content overflow-scroll has-header">
                <Transition transitionName="leftIn">
                  <ReactRouter.RouteHandler key={key} />
                </Transition>
              </div>
            </div>
          </div>
      </div>
    )
  }
})
