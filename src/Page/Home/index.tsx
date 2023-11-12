import { FC } from "react"
import { Container } from "./style"
import { NavBar } from "../../Components/NavBar"
import { Footer } from "../../Components/Footer"


export const Home:FC = () => {
    return (
        <Container>
            <NavBar/>
            <Footer/>
        </Container>
    )
}