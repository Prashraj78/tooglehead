import React, { useState, useEffect } from 'react';

const Stats = () => {

    const initialStats = {
        lorem1: 0,
        lorem2: 0,
        lorem3: 0,
        lorem4: 0,
    };

   
    const [stats, setStats] = useState(initialStats);

        useEffect(() => { 
        const finalStats = {
            lorem1: 123, 
            lorem2: 456, 
            lorem3: 789, 
            lorem4: 101,
        };

        const speedMultiplier = 200; 
        
        const increment = {};
        for (const key in finalStats) {
            if (finalStats.hasOwnProperty(key)) {
                increment[key] = Math.ceil(finalStats[key] / speedMultiplier);
            }
        }

        const updateStats = () => {
            setStats((prevStats) => {
                const newStats = { ...prevStats };
                let hasChanged = false;

                for (const key in finalStats) {
                    if (finalStats.hasOwnProperty(key)) {
                        if (newStats[key] < finalStats[key]) {
                            newStats[key] += increment[key];
                            if (newStats[key] >= finalStats[key]) {
                                newStats[key] = finalStats[key];
                            }
                            hasChanged = true;
                        }
                    }
                }

               
                if (hasChanged) {
                    return newStats;
                }

                
                return prevStats;
            });
        };

       
        const interval = setInterval(updateStats, 16); 
        
        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <div className='mt-24 my-6 py-12 bg-[#F6F6F6] '>
            <div className='flex flex-col lg:flex-row lg:space-x-4 mx-6 sm:mx-16'>
                {Object.keys(initialStats).map((key, index) => (
                    <div className='lg:w-1/4' key={index}>
                        <p className='text-[#12406F] text-base'>Lorem ipsum</p>
                        <p className='text-[#12406F] my-2 text-4xl font-semibold'>{stats[key]}+</p>
                        <p className='text-[#12406F] font-semibold'>Lorem ipsum</p>
                        <p className='text-[#12406F] text-sm'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Stats;
