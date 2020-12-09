import React, {useEffect} from 'react';
import './App.css';
import ScriptTag from 'react-script-tag';
import {Helmet} from 'react-helmet';
import {connectMetaMask} from 'utils/ConnectMetamask';
import {MainState} from 'store/types';
import { useSelector } from 'react-redux';

const App: React.FC = () => {

  interface AddressState {
    address: string;
  }

  const address = useSelector((state: MainState) => state.address);
  // const address = useSelector(selectAddress);
  let test;
  useEffect(() => {
    connectMetaMask();
  },[]);
  return (
    <div className='App'>
      <Helmet>
        <link rel='stylesheet' href='http://mono.flatheme.net/assets/plugins/bootstrap/bootstrap.min.css'/>
        <link rel='stylesheet' href='http://mono.flatheme.net/assets/css/theme.min.css' />
      </Helmet>
      <ScriptTag type='text/javascript' src='http://mono.flatheme.net/assets/plugins/jquery.min.js' />
      <ScriptTag type='text/javascript' src='http://mono.flatheme.net/assets/plugins/plugins.js' />
      <ScriptTag type='text/javascript' src='http://mono.flatheme.net/assets/js/functions.min.js' />

      <body>
        <div className='purchasenow'>
			    <a className='button-circle button-circle-sm button-circle-dark' href='#' target='_blank'><i className='ti-shopping-cart'></i></a>
		    </div>
        <div className='header absolute-light sticky-autohide'>
			    <div className='container'>
            <div className='header-logo'>
              <h3><a href='http://mono.flatheme.net/'>Hodl</a></h3>
            </div>
            <div className='header-menu'>
            <h3>Hello {address} </h3>
            </div>
            <button className='header-toggle'>
              <span>Address: </span>
            </button>
		    	</div>
		    </div>

        <div className='section-xl bg-image parallax' data-bg-src='http://mono.flatheme.net/assets/images/portfolio-classic-bg.jpg'>
          <div className='bg-black-02'>
            <div className='container text-center'>
              <div className='row'>
                <div className='col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2'>
                  <h1 className='font-weight-light'>HOLD!</h1>
                  <p className='text-white-08'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                </div>
              </div>
            </div>
          </div>
		    </div>

        <div className='scrolltotop'>
			<a className='button-circle button-circle-sm button-circle-dark' href='#'><i className='ti-arrow-up'></i></a>
		</div>
		<div className='section'>
			<div className='container'>
				<div className='filter filter-style-3 text-center'>
					<ul>
						<li className='active' data-filter='*'>All</li>
						<li data-filter='.category-1'>First</li>
						<li data-filter='.category-2'>Second</li>
						<li data-filter='.category-3'>Third</li>
					</ul>
				</div>
				<div className='row portfolio-wrapper spacing-10 border-radius-025'>

					<div className='col-12 col-md-6 col-lg-4 portfolio-item category-1'>
						<div className='portfolio-box'>
							<div className='portfolio-img'>
								<img src='http://mono.flatheme.net/assets/images/portfolio-classic-1.jpg' alt='' />
							</div>
							<a href='#'></a>
              {/* <!-- Portfolio Single link --> */}
							<div className='portfolio-title'>
								<div>
									<h5 className='font-weight-normal'>Project Title</h5>
									<span>Category</span>
								</div>
							</div>
						</div>
					</div>
          <div className='col-12 col-md-6 col-lg-4 portfolio-item category-1'>
          <div className='portfolio-box'>
							<div className='portfolio-img'>
								<img src='http://mono.flatheme.net/assets/images/portfolio-classic-2.jpg' alt=''/>
							</div>
							<a href='#'></a>
							<div className='portfolio-title'>
								<div>
									<h5 className='font-weight-normal'>Project Title</h5>
									<span>Category</span>
								</div>
							</div>
						</div>
          </div>
				</div>
        {/* <!-- end row/portfolio-wrapper --> */}
			</div>
      {/* <!-- end container --> */}
		</div>

      </body>
    </div>
  );
};

export default App;
