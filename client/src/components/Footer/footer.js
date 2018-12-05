import React, {Component} from 'react';

class Footer extends Component{

componentDidMount(){

}

  render(){
    return(
      <div className="primary-footer">
      <div className="intro-credits">

        <div className="intro-credits-text">
          Music by
          <a href="#" target="_blank">
             Pertrubator
          </a>
        </div>
          <div className="intro-social">
            <a href="#" target="_blank"><i className="fab fa-twitter"></i></a>
            <a href="#" target="_blank"><i className="fab fa-instagram"></i></a>
            <a href="#" target="_blank"><i className="fab fa-github"></i></a>
            <a href="#" target="_blank"><i className="fab fa-twitch"></i></a>
            <a href="#" target="_blank"><i className="fab fa-discord"></i></a>
          </div>

            <div className="fullscreen-container">
              <p id="btnFullscreen" className="fullscreen">FULLSCREEN</p>
            </div>

            <div className="equaliser-container">
              <ol className="equaliser-column">
                <li className="colour-bar"></li>
              </ol>
              <ol className="equaliser-column">
                <li className="colour-bar"></li>
              </ol>
              <ol className="equaliser-column">
                <li className="colour-bar"></li>
              </ol>
              <ol className="equaliser-column">
                <li className="colour-bar"></li>
              </ol>
              <ol className="equaliser-column">
                <li className="colour-bar"></li>
              </ol>
            </div>
          </div>
      </div>
    )
  }
}

export default Footer;
