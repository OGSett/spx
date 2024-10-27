import logo from '../assets/shared/logo.svg'
import closer from '../assets/shared/icon-close.svg'
import iconB from '../assets/shared/icon-hamburger.svg'
import { useLocation } from 'react-router-dom';

const Home = ({burgerDiv, setBurgerDiv}) => {

    const location = useLocation()
    const currentPath = location.pathname
    console.log(currentPath)

    const handleBurger = () => {
        if (burgerDiv) {
            setBurgerDiv(false)
        } else {
            setBurgerDiv(true)
        }
    }


    return ( 
        <div className='HomeWrapper'>
            <div className="NavBarsection">
                <img src={logo} className='logo' alt="" />
                <img src={iconB} onClick={handleBurger} className='burger' alt="" />
                {burgerDiv ? (
                    <div className='ss'>
                    <img src={closer} onClick={handleBurger} alt="/" />
                    <div className='amobwar'>
                        <a href="/">
                            <div className='taggMob'>
                                <span className='navNumMob'>01</span>
                                <span className='gotoMob'>home</span>
                            </div>
                        </a>
                        <a href="/destination">
                            <div className='taggMob'>
                                <span className='navNumMob'>02</span>
                                <span className='gotoMob'>destination</span>
                            </div>
                        </a>
                        <a href="/crew">
                            <div className='taggMob'>
                                <span className='navNumMob'>03</span>
                                <span className='gotoMob'>crew</span>
                            </div>
                        </a>
                        <a href="/tech">
                            <div className='taggMob'>
                                <span className='navNumMob'>04</span>
                                <span className='gotoMob'>technology</span>
                            </div>
                        </a>
                    </div>
                </div>
                ): ''}
                {/* <span className='line'></span> */}
                <div className='navwrapper '>
                    <a href="/" className={currentPath === '/' ? 'active' : ''}>
                        <div className='tagg '>
                            <span className='navNum'>01</span>
                            <span className='goto'>home</span>
                        </div>
                    </a>
                    <a href="/destination" className={currentPath === '/destination' ? 'active' : ''}>
                        <div className='tagg'>
                            <span className='navNum'>02</span>
                            <span className='goto'>destination</span>
                        </div>
                    </a>
                    <a href="/crew" className={currentPath === '/crew' ? 'active' : ''}>
                        <div className='tagg'>
                            <span className='navNum'>03</span>
                            <span className='goto'>crew</span>
                        </div>
                    </a>
                    <a href="/tech" className={currentPath === '/tech' ? 'active' : ''}>
                        <div className='tagg'>
                            <span className='navNum'>04</span>
                            <span className='goto'>technology</span>
                        </div>
                    </a>
                </div>
            </div>
            <div className='homeContent'>
                <div className="HomeArticle">
                    <div className='homeInfo'>
                        <span className='homeSpan1'>SO, YOU WANT TO TRAVEL TO</span>
                        <span className='space'>space</span>
                        
                        <p>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
                    </div>
                </div>
                <div className='circledes'>
                    <div className='circledesinside'>
                        <span>explore</span>
                    </div>
                </div>
                <div className='circle'>
                    <span>EXPLORE</span>
                </div>
            </div>
        </div>
     );
}
 
export default Home;