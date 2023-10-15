/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';
import { useEffect, useState } from 'react';
import './backToTop.scss';
const BackToTop = () => {
    const [backToTop, setBackToTop] = useState(false);
    const scrollup = () => {
			window.scrollTo({
				top: 0,
				behavior: 'smooth',
			});
		};

	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (window.scrollY > 100) {
				setBackToTop(true);
			} else {
				setBackToTop(false);
			}
		});
		
    });
    
    return <div className='backToTop'>

        {backToTop && (
            <button className='backToTopbtn' onClick={scrollup}>^
            </button>
        )}
        
    </div>
};

export default BackToTop;
