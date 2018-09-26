import React, {Component} from 'react';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import './index.scss';

class LightBox extends React.Component {
  constructor(props) {
  	super(props);
  	this.state={
  		selectedPhoto: props.selectedPhoto,
  		loading: true,
      showLightBox: true,
  	};
    this.clickOverlay = this.clickOverlay.bind(this);
    this.prev=this.prev.bind(this);
    this.next=this.next.bind(this);


  }
  componentWillReceiveProps(props) {
    this.setState({showLightBox: true,
      selectedPhoto:props.selectedPhoto,
    });

  }
  clickOverlay() {
    this.setState({showLightBox: false,
    });
  }
  prev() {
    const selectedPhoto=this.state.selectedPhoto-1;
    this.setState({
      selectedPhoto,
    });
  }
  next() {
     const selectedPhoto=this.state.selectedPhoto+1;
    this.setState({
      selectedPhoto,
    });
  }

  

  render() {
    return (
      
      <div>
      {this.state.showLightBox ?
        <div>
      <div className="overlay" onClick={this.clickOverlay}></div>
      <div className="lightbox">

      {this.state.selectedPhoto >=1 ?
      <a className="prev" onClick={this.prev}>Previous</a> : undefined }
      <TransitionGroup className="LightBox">
          <CSSTransition
        key={this.state.selectedPhoto}
    timeout={500}
    classNames="fade"
    ><div>
    <div>
      <h1 className="imageCaption">{this.props.photos[this.state.selectedPhoto].caption}</h1></div>
        <img className="imagePanel" src={this.props.photos[this.state.selectedPhoto].url} />
        </div>
        </CSSTransition>
        </TransitionGroup>
        
        {this.state.selectedPhoto < this.props.photos.length-1 ?
        <a className="next" onClick={this.next}>Next</a> : undefined }
      </div></div> : undefined }
      </div> 
    );
  }
}

export default LightBox;