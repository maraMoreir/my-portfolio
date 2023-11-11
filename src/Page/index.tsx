import { FC } from "react"
import { About } from "../Components/About"
import { Container } from "./style"
import { NavBar } from "../Components/NavBar"
import { Footer } from "../Components/Footer"


export const Page:FC = () => {
    return (
        <Container>
            <NavBar/>
            <About/>
            <Footer/>
        </Container>
    )
}