import { FC, Fragment } from "react";
import { Container, Text, CustomLink} from "./style";


export const NavBar:FC = () => {
    return (
        <Fragment>
            <Container>
                <Text>
                    <CustomLink to="/">Início</CustomLink> 
                    <CustomLink to="/about">Sobre</CustomLink> 
                    <CustomLink to="/skills">Habilidades</CustomLink>
                    <CustomLink to="/projects">Projetos</CustomLink>
                    <CustomLink to="/contact">Contato</CustomLink> 
                </Text>
            </Container>
       
        </Fragment>
    )
}