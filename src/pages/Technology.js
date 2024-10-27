import logo from '../assets/shared/logo.svg'
import closer from '../assets/shared/icon-close.svg'
import iconB from '../assets/shared/icon-hamburger.svg'
import { useLocation } from 'react-router-dom';


import { useEffect, useState } from 'react'

const TechPage = ({burgerDiv, setBurgerDiv}) => {

    const location = useLocation()
    const currentPath = location.pathname
    console.log(currentPath)
    const [data, setData] = useState(null)
    const [currentIndex, setCurrentIndex] = useState(0)
    
    useEffect(() => {
        fetch('./data.json')
        .then((response) => response.json())
        .then((jsonData) => setData(jsonData))
        .catch((error) => console.error('Error fetching the data:', error))
    }, []) 
    
    function handleBurger() {
        setBurgerDiv(!burgerDiv)
    }
    
    const updateToTech1 = () => {
        setCurrentIndex(0)
    }
    const updateToTech2 = () => {
        setCurrentIndex(1)
    }
    const updateToTech3 = () => {
        setCurrentIndex(2)
    }

    if (!data) {
        return <div>Loading...</div>  
    }
    
    const currentTechnology = data.technology[currentIndex]
    console.log(currentTechnology)
    
    return (
        <div className="techWrpper">
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
            <div className='techArticle'>
                <div className='title'>
                    <span className='npick'>03</span>
                    <span className='pick'>SPACE LAUNCH 101</span>
                </div>
                <div className='imgtech'>
                    <img className='hide    ' src={currentTechnology.images.landscape} alt="" />
                    <img className='hidemob' src={currentTechnology.images.portrait} alt="" />
                </div>
                <div className='tech-content'>
                    <div className='techHolder'>
                        <div className={currentIndex === 0 ?'techDotActive' : 'techDot'} onClick={updateToTech1}>1</div>
                        <div className={currentIndex === 1 ?'techDotActive' : 'techDot'} onClick={updateToTech2}>2</div>
                        <div className={currentIndex === 2 ?'techDotActive' : 'techDot'} onClick={updateToTech3}>3</div>
                    </div>
                    <div className='techbio'>
                        <span className='term'>THE TERMINOLOGY…</span>
                        <span className='padname'>{currentTechnology.name}</span>
                        <p className='ttt'>{currentTechnology.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TechPage;
