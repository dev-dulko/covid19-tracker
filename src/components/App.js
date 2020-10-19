import React, { useState, useEffect } from 'react';
import '../scss/App.scss';
import Header from './Header';
import Chart from './Chart';
import Country from './Country';
import DropDown from './DropdDown';

export default function App() {

  const [countries, setCountries] = useState([]) // przytrzymuje kraje z api
  const [nameCountry, setNameCountry] = useState('Select Country') // ustawia nazwę w select
  const [statsCountry, setStatsCountry] = useState(null);
  // const [errorHeader, setErrorHeader] = useState('')
  const [flagCountry, setFlagCountry] = useState({}) 
  const [chartData, setChartData] = useState({});
  const [visibleChart, setVisibleChart] = useState('none');
  const [visibleCountry, setVisibleCountry] = useState('none')
  

//dostęp do danych o krajach z api
  useEffect( () => {
    const takesCountries = () => {
      fetch('https://disease.sh/v3/covid-19/countries')
      .then( response => {
          if(response.ok) {
              return response
          } 
              const message = `An error has occured : ${response.status}`;
              // setErrorHeader(message)
              throw Error(message)
      })
      .then( response => response.json())
      .then( data => {
        setCountries(data);

      })
      .catch(error => console.log(error.message))
  }

  takesCountries();
  },[])

    // pobiera nazwę i wyświetla nazwę w select
    const handleChangeCountry = (event) => {
      const selectedCountry = event.target.value;
      if(selectedCountry === 'Select Country') {
        setVisibleCountry('none');
        // return setStatsCountry('')
        setStatsCountry('')
        
      } else {
        setVisibleCountry('inline');
        setNameCountry(selectedCountry)
        // pobieramy dane wybranego kraju
        const selectCountry = selectedCountry === 'World' ? 'https://disease.sh/v3/covid-19/all' : `https://disease.sh/v3/covid-19/countries/${selectedCountry}`
        fetch(selectCountry)
        .then( res => res.json())
        .then( data => {
          console.log(data)
           setStatsCountry(data);
           setFlagCountry(data.countryInfo)
        })
      }
  }

  //pobranie danych od początku i wrzucenie na wykres
  const getHistoricalData = (event) => {
    const countryName = event.target.value
    
    let days = [];
    let cases = [];
    let recovered = [];
    let deaths = [];

    const wordStats = countryName === 'Select Country' ? null : countryName === 'World' ? 'https://disease.sh/v3/covid-19/historical/all?lastdays=all' : `https://disease.sh/v3/covid-19/historical/${countryName}?lastdays=all`
    if(countryName === 'Select Country'){
      setVisibleChart('none')
      setChartData({})
      setNameCountry(countryName)
    } else {
      setVisibleChart('block')
      fetch(wordStats)
      .then( res => res.json() )
      .then( data => {
          if(wordStats === 'https://disease.sh/v3/covid-19/historical/all?lastdays=all') {
            setVisibleCountry('inline')
            const keyDays = Object.keys(data.cases);
            const valCases = Object.values(data.cases);
            const recCases = Object.values(data.recovered);
            const deadCases = Object.values(data.deaths);
  
            for(const keysObj of keyDays){
              days.push(keysObj)
            } 
            
            for(const casesObj of valCases){
              cases.push(casesObj)
            } 
            for(const recObj of recCases){
              recovered.push(recObj)
            } 
            for(const deadObj of deadCases){
              deaths.push(deadObj)
            } 
  
          } else {
            const keyDays = Object.keys(data.timeline.cases);
            const valCases = Object.values(data.timeline.cases);
            const recCases = Object.values(data.timeline.recovered);
            const deadCases = Object.values(data.timeline.deaths);
            
          
            for(const keysObj of keyDays){
              days.push(keysObj)
            } 
            
            for(const casesObj of valCases){
              cases.push(casesObj)
            } 
            for(const recObj of recCases){
              recovered.push(recObj)
            } 
            for(const deadObj of deadCases){
              deaths.push(deadObj)
            } 
          }
        
          // ładowanie danych na wykres
          setChartData({
          labels: days,
          datasets: [
            {
              label: 'cases',
              data: cases,
              borderColor: [
                'blue'
              ]
            },
            {
              label: 'recovered',
              data: recovered,
              borderColor: [
                'green'
              ]
            },
            {
              label: 'deaths',
              data: deaths,
              borderColor: [
                'red'
              ]
            },
          ]
        })
      })
      .catch(err => console.log("ERROR?",err))  
  };

  }
  


  return (
    
    <div className='app'>
      <div className='app__header'>
          <Header />
          <DropDown dataCountries={countries} nameCountry={nameCountry} handleChangeCountry={handleChangeCountry} handleHistoricalData={getHistoricalData}/>
      </div>
      <div className='app__country'>
          {statsCountry&&<Country statsCountry={statsCountry} flagCountry={flagCountry} visibleCountry={visibleCountry} />   }  
      </div>
      <div>
        {statsCountry&&<Chart  visibleChart={visibleChart} chartData={chartData}/>}
      </div>
    </div>
  );
}
