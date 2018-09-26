import React, {Component} from 'react';
import PropTypes from 'prop-types';
import LightBox from './../LightBox';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import './index.scss';

class PhotoGallery extends React.Component {
  constructor(props) {
  	super(props);
  	this.state={
  		selectedPhoto:'',
  		loading: true,
  	}
  	this.click=this.click.bind(this);
  }

  renderImage(photo,index) {
    return (
      <div>
        <img src={photo.url} key={index} onClick={() =>{this.click(index)}}/>
      </div>
    );
  }
  renderSpinner() {
  if (!this.state.loading) {
    // Render nothing if not loading
    return null;
  }
  return (
    <span className="spinner" />
  );
}

  click(index) {
  	
  	this.setState({
selectedPhoto:index,
  	});
  }

  render() {
    return (
      <div className="PhotoGallery__Panel">
      {this.renderSpinner()}

      <CSSTransition
		in={true}
		appear={true}
		timeout={500}
		classNames="fade"
		>
        <div className="grid">
          {this.props.photos.map((photo,index) => this.renderImage(photo,index))}
          
        </div>
        </CSSTransition>
        {this.state.selectedPhoto ?
        ( 
        	<CSSTransition
		in={true}
		appear={true}
		timeout={500}
		classNames="fade"
		>
        	<LightBox selectedPhoto={this.state.selectedPhoto} photos={this.props.photos} />
        	</CSSTransition> ) : undefined }
      </div>
    );
  }
}

export default PhotoGallery;