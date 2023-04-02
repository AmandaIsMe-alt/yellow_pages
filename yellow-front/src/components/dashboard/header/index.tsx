import Logo from "../../logo";
import HeaderContainer from "./style";

const Header = () => {

  return (
    <>
        <HeaderContainer>
            <div className="content">
                <Logo/>
                <p>Organize seus contatos</p>
            </div>
        </HeaderContainer>
    </>
  );
};

export default Header;
