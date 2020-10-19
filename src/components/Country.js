import React from 'react'
import worldMap from '../images/worldMap.PNG';

export default function Country({ statsCountry, flagCountry, visibleCountry }) {
const updateTime = new Date(statsCountry.updated * 1000).toLocaleTimeString()
    
    
    let infoElement;
    let photoFlag;
    
    if(flagCountry) {
        
        photoFlag = <img style={{width:'350px', height:'185px'}} src={flagCountry.flag} alt='country flag' />;
        infoElement = (
        
                <>
                    <h3 >Name: <span>{statsCountry.country}</span></h3>
                    <h3>Country: <span>{statsCountry.continent}</span></h3>
                    {/* <h3>Location: Latitude: <span>{statsCountry.countryInfo.lat}</span> Longitude:<span>{statsCountry.countryInfo.long}</span></h3> */}
                    <h3>Population: <span>{statsCountry.population}</span></h3>
                    <h3>Amount of tests: <span>{statsCountry.tests}</span></h3>
                    <h3>Active cases: <span>{statsCountry.active}</span></h3>
                    <h3>Time to new update: <span>{updateTime}</span></h3>
                </>)
        } else {
            photoFlag = <img style={{width:'350px', height:'185px'}} src={worldMap} alt='world map' />;
            infoElement = (
            <>
                <h3 >Name: <span>Whole the World</span></h3>
                <h3>Population: <span>{statsCountry.population}</span></h3>
                <h3>Affected countries: <span>{statsCountry.affectedCountries}</span></h3>
                <h3>Amount of tests: <span>{statsCountry.tests}</span></h3>
                <h3>Active cases: <span>{statsCountry.active}</span></h3>
                <h3>Time to new update: <span>{updateTime}</span></h3>
             </>)
        }


    return (
       
            
            <div className='country' style={{display:`${visibleCountry}`}}>
            <div className='country__flagDescribe'>
                <h2>{photoFlag}</h2>
                
                <div className='country__box4 box country__mainInfo' >
                    {infoElement}
                </div>
            </div>
            
            <div className='country__infoBox'>
                <div className='country__boxes'>
                    
                    <div className='country__box1 box' >
                        <p>Today Cases</p>
                        <p>{statsCountry.todayCases}</p>
                    </div>
                    <div className='country__box2 box'>
                        <p>Today Recovered</p>
                        <p>{statsCountry.todayRecovered}</p>
                    </div>
                    <div className='country__box3 box'>
                        <p>Today Deaths</p>
                        <p>{statsCountry.todayDeaths}</p>
                    </div>
                </div>
            </div> 
        </div>
   
           

        
    )
}

