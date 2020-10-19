import { MenuItem, Select, CardContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react'


const useStyles = makeStyles({
    Select: {
        borderBottom:'none',
        position: 'relative',
        width:'250px',
        height:'80px',
        textAlign:'center',
        lineHeight:'60px',
        background: '#404040',
        color: '#ffffff',
        fontWeight: '100',
        textTransform: 'uppercase',
        borderRadius: '6px',
        display: 'inline-block',
        transition: 'all 0.3s ease 0s',
        '&:hover': {
            borderBottom: 'none',
            color:' #404040',
            fontWeight: '700',
            letterSpacing: '3px',
            background: 'none',
            WebkitBoxShadow: '0px 5px 40px -10px rgba(0,0,0,0.57)',
            MozBoxShadow: '0px 5px 40px -10px rgba(0,0,0,0.57)',
            transition:'all 0.3s ease 0s',
        },
        '&:after': {
            content:'',
            borderBottom:'none',
            paddingRight:'6px'
        },
        '&:focus' : {
            padding: '0'
        }

    },
    CardContent: {
        textAlign: 'center',
    },
    MenuItemStyle: {
        '&:nth-child(2n)': {
        backgroundColor:'#d5c3b0',
        color: '#433e39',
        textShadow: '0.1em 0.1em 0.15em #d5c3b0',
        },
        '&:hover' : {
            backgroundColor:'red'
        }
    }
    
});

export default function DropdDown({ dataCountries, nameCountry, handleChangeCountry, handleHistoricalData }) {

const classess = useStyles();

    return (
        
        <CardContent className={classess.CardContent}>
            <Select className={classess.Select} value={nameCountry} onChange={(e) => {handleChangeCountry(e); handleHistoricalData(e)}}>
                <MenuItem value='Select Country'>Select Country</MenuItem>
                <MenuItem className={classess.MenuItemStyle} value='World'>World</MenuItem>
                {
                    dataCountries.map( country => (
                        <MenuItem className={classess.MenuItemStyle} value={country.country} key={country.country}>{country.country}</MenuItem>
                    ))
                }
        
            </Select>     
        </CardContent>

    )
}