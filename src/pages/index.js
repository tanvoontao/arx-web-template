// https://github.com/michalsnik/aos/issues/574
// https://micku7zu.github.io/vanilla-tilt.js/
// https://codesandbox.io/s/n5ptm?file=/src/index.js


import Metatags from '@/components/Metatags/Metatags'
import UserLayout from '@/components/Layout/UserLayout';
import Button from '@mui/material/Button';

export default function Home() {


    return (
        <>
            <Metatags />

            <UserLayout>

                <Button variant="contained">test</Button>


                

            </UserLayout>
        </>
    )
}
