import React, {Component} from 'react';
import PhotoGallery from './../PhotoGallery';
import {CSSTransition} from 'react-transition-group';
import './index.scss';
//import {falls} from './../../images';


const photoArray=[
{
	url:'https://farm2.staticflickr.com/1941/30966269678_4f70457672_h.jpg',
	caption:'Ocean Bridge'
},

	{
		url:'https://farm2.staticflickr.com/1962/43024858210_98d4432a4e_k.jpg',
	caption:'Sunrise on the beach'
},
{
	url:'https://farm2.staticflickr.com/1913/43029288260_b4149a67e1_k.jpg',
	caption:'Road'
},{
	url:'https://farm6.staticflickr.com/5609/15556384292_7ea5846c29_h.jpg',
	caption:'Mountain Valley'
},
{
	url:'https://farm7.staticflickr.com/6112/6316942540_c76991e464_b.jpg',
	caption:'Floral Park'
},
{
	url:'https://farm8.staticflickr.com/7011/6778201787_f85a5960b3_b.jpg',
	caption:'Blue Mountain'
},
{
	url:'https://farm4.staticflickr.com/3094/2638517689_50e3b09b84_z.jpg',
	caption:'Raising view'
}];

class App extends Component {
	render() {
return (
		<div className="container"> 
		<h1 className="container__header">Photo Gallery</h1>
		

		<PhotoGallery photos={photoArray} />
		</div> 
	   );
	}
}

export default App;