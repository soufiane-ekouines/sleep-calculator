import * as React from 'react';
import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticTimePicker } from '@mui/x-date-pickers/StaticTimePicker';
import '../styles/Header.css';

const Header = () => {
    const [value, setValue] = React.useState(dayjs('2022-04-07'));
    // console.log(value);
    return (
      <div className='content'>
        <h1 className='Infotitle'>Sleep Calculator {value.$H} {value.$m} </h1>
        <h1 className='Info'>What time do you want to wake up?</h1>
        <div className='time'>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <StaticTimePicker
                ampm
                orientation="landscape"
                openTo="minutes"
                value={value}
                onChange={(newValue) => {
                setValue(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
            />
            </LocalizationProvider>
        </div>
        <h1 className='Info'>If you want to go bed Now..</h1>
        <button className='Calcul'>Wake-up time {value.$H+15}:{value.$m}</button>

      </div>
    );
};

export default Header;