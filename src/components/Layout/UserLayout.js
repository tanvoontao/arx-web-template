import DarkModeBtn from '@/components/Button/DarkModeBtn'
import NavBar from '@/components/NavBar/NavBar'
import Footer from '@/components/Footer/Footer'

const UserLayout = ({ children }) => {
    return (
        <>
            <NavBar />
            <DarkModeBtn />
            {children}
            <Footer />
        </>
    )
}

export default UserLayout