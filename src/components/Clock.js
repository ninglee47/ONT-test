import React, { useEffect, useState } from 'react'
import Digits from './Digits'
import { Box, Center, HStack, Text } from '@chakra-ui/react'

const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']; 

const Clock = () => {
    const [hour, setHour] = useState(0);
    const [minute, setMinute] = useState(0);
    const [second, setSecond] = useState(0);
    const [day, setDay] = useState(0);
    const [date, setDate] = useState(0);
    const [month, setMonth] = useState('');
    const [year, setYear] = useState(0);

    const updateTime = () => {
        const date = new Date();
        let hour = date.getHours();

        setHour(hour);
        setMinute(date.getMinutes());
        setSecond(date.getSeconds());
        setDay(date.getDay());
    }

    const getDate = () => {
        const date = new Date();
        setDate(date.getDate());
        setMonth(date.getMonth() + 1);
        setYear(date.getFullYear())
    }

    useEffect(()=> {
        updateTime();
        getDate();

        const interval = setInterval(()=> {
            updateTime();
        }, 1000);

        return ()=>clearInterval(interval);
    }, []);

    return (
        <>
          <Box >
            
            <Text fontSize={{ base: '20px', md: '40px', lg: '40px' }} marginTop={130}>
              {days[day]}
            </Text>
            
            <Center>
              <HStack fontSize={{ base: '50px', md: '100px', lg: '200px' }}>
                <Digits value={hour}/>
                <Box marginRight={3}>:</Box> 
                <Digits value={minute} />
                <Box marginRight={3}>:</Box> 
                <Digits value={second} /> 
              </HStack> 
            </Center>

            <Text fontSize={{ base: '20px', md: '40px', lg: '40px' }} marginTop={30}>
              {date}/ {month}/ {year}
            </Text>

          </Box>
        </>
    )
}

export default Clock;