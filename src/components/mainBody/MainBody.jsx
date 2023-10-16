import React from 'react';
import StyleOne from '../styleOne/StyleOne';
import StyleTwo from '../styleTwo/StyleTwo';
import Widget from '../widget/Widget';
import { Sports, Technology } from '../../category';
import './mainBody.css';

const MainBody = () => {
	return (
		<div className='mainBody'>
			<div className='mainBodyWrapper'>
				<div className='item'>
					<StyleOne {...Sports} />
				</div>
				<div className='item'>
					<StyleTwo  {...Technology}/>
				</div>
				<div className='item'>
					<Widget />
				</div>
			</div>
		</div>
	);
};

export default MainBody;
