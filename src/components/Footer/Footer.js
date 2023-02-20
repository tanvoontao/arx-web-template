import Link from "next/link"

const Footer = () => {

    const company = "ARX MEDIA SDN BHD"
    const currentYear = new Date().getFullYear();
    const links = [
        {
            heading: "ABOUT US",
            lists: [
                { text: "Spot on Us", url: "" },
                { text: "Mission & Vision", url: "" },
                { text: "", url: "" },
            ]
        },
        {
            heading: "",
            lists: [
                { text: "", url: "" },
                { text: "", url: "" },
            ]
        },
        {
            heading: "Follow us on",
            lists: [
                { icon: "", url: "" },
                { icon: "", url: "" },
            ]
        },
        {
            heading: "Get in Touch",
            lists: [
                { icon: "", text: "+6014-703 7598", url: "" },
                { icon: "", text: "admin@arxmedia.co", url: "" },
                { icon: "", text: "P12C-1-3 & P12C-2-3, Second Floor, Trinity Hub, 93250 Kuching, Sarawak", url: "" },
            ]
        }
    ]

    return (
        <footer>
            <p>Footer</p>
            <hr />
            <p>Copyrights &copy; {currentYear} {company}. All Rights Reserved. </p>
        </footer>
    )
}


export default Footer