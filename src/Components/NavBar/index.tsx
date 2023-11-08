import { FC, Fragment } from "react";
import { Container, Text, CustomLink, Img, Image} from "./style";
import discoVoador from '../../assets/discoVoador.png';

export const NavBar:FC = () => {
    return (
        <Fragment>
            <Container>
        <Text>
          <CustomLink to="#">Habilidades</CustomLink> {/* Link para Habilidades */}
          <CustomLink to="#">Projetos</CustomLink> {/* Link para Projetos */}
          <CustomLink to="#">Contato</CustomLink> {/* Link para Vamos nos conectar? */}
        </Text>
      </Container>
        
            <Image>
                <Img src={discoVoador} />
            </Image>
        </Fragment>
    )
}