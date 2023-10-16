/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

import { MdFavoriteBorder, MdFlashOn, MdStarBorder, MdVisibility, MdWhatshot } from 'react-icons/md'
import './hotlinks.css';
const Hotlinks = () => {
  return (
		<div className='hotLinks'>
			<div className='hotLinksWrapper'>
				<div className='item'>
					<a>
						<MdStarBorder style={{ fontSize: '30px' }} />
						<span>Featured News</span>
					</a>
				</div>
				<div className='item'>
					<a>
						<MdFavoriteBorder style={{ fontSize: '30px' }} />
						<span>Mais Popular</span>
					</a>
				</div>
				<div className='item'>
					<a>
						<MdWhatshot style={{ fontSize: '30px' }} />
						<span>Hot News</span>
					</a>
				</div>
				<div className='item'>
					<a>
						<MdFlashOn style={{ fontSize: '30px' }} />
						<span>Mais recentes</span>
					</a>
				</div>
				<div className='item'>
					<a>
						<MdVisibility style={{ fontSize: '30px' }} />
						<span>Mais Vistas</span>
					</a>
				</div>
          </div>

          <div className="news-ticker">
              <div className="container">
                  <div className="title">
                      <h2>Novas actualizações</h2>
                      <span>Update 10 minutos atrás</span>
                  </div>
              </div>
          </div>

		</div>
	);
}

export default Hotlinks