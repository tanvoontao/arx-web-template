// https://github.com/michalsnik/aos/issues/574
// https://micku7zu.github.io/vanilla-tilt.js/
// https://codesandbox.io/s/n5ptm?file=/src/index.js


import Metatags from '@/components/Metatags/Metatags'
import UserLayout from '@/components/Layout/UserLayout';
import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';

export default function Home() {
    const [showElement, setShowElement] = useState(false);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setShowElement(true);
        }, 1); // set delay for 1 ms
        return () => clearTimeout(timeoutId);
    }, []);


    return (
        <>
            <Metatags />

            <UserLayout>

                <Button variant="contained">Contained</Button>


                {showElement && <main>
                    <div
                        data-aos="fade-right"
                        className="bg-white dark:bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
                        <h3 className="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">Writes Upside-Down</h3>
                        <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
                            The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.
                        </p>
                    </div>
                </main>}


            </UserLayout>
        </>
    )
}
