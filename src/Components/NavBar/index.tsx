import { FC, Fragment } from "react";
import { Container, Text, CustomLink} from "./style";


export const NavBar:FC = () => {
    return (
        <Fragment>
            <Container>
                <Text>
                    <CustomLink to="#">Sobre</CustomLink> 
                    <CustomLink to="#">Habilidades</CustomLink>
                    <CustomLink to="#">Projetos</CustomLink>
                    <CustomLink to="#">Contato</CustomLink> 
                </Text>
            </Container>
       
        </Fragment>
    )
}