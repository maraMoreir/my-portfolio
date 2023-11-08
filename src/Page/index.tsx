import { FC } from "react"
import { Banner } from "../Components/Banner"
import { Container } from "./style"
import { NavBar } from "../Components/NavBar"
import { Footer } from "../Components/Footer"


export const Page:FC = () => {
    return (
        <Container>
            <NavBar/>
            <Banner/>
            <Footer/>
        </Container>
    )
}