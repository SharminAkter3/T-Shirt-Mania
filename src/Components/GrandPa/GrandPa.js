import React, { createContext, useState } from 'react';
import Father from '../Father/Father';
import Aunty from '../Uncle/Aunty/Aunty';
import Uncle from '../Uncle/Uncle';
import './Grandpa.css'

export const RingContext = createContext('Gold Ring');
export const MoneyContext = createContext(444);

const GrandPa = () => {
    const [house, setHouse] = useState(1);
    const [money, setMoney] = useState(444);
    // const ring = 'diamond ring'
    return (
        <RingContext.Provider value={[house, setHouse]}>
            <MoneyContext.Provider value={[money, setMoney]}>
                <div className='grandpa'>
                    <h2>GrandPa</h2>
                    <section className='flex'>
                        <Father house={house}></Father>
                        <Uncle house={house}></Uncle>
                        <Aunty house={house}></Aunty>
                    </section>
                </div>
            </MoneyContext.Provider>
        </RingContext.Provider>
    );
};

export default GrandPa;