import styled from 'styled-components';
import logoImg from '../../image/logo.svg';
import signImg from '../../image/sign.svg'

const NavBarStyled = styled.header `
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 25px;
    background-color: #299B01;
    color: white;
`;

const Logo = styled.div`
    display: flex;
    align-items: center;
`;

const H1 = styled.h1`
    font-size: 24px;
    margin-left: 15px;
`;

const ImgLogo = styled.img`
    width: 50px;
`;

const SignButton = styled.button`
    display: inline-block;
    background-color: inherit;
    outline: 0;
    border: 0;

    text-transform: uppercase;
    font-size: 16px;
    font-family: Roboto, Arial, sans-serif;
    color: white;
    transition: color .2s;
    :hover {
        color: #ffeb00;
    }
`;

const User = styled.div`
    display: flex;
    align-items: center;
    text-align: center;
`;

const UserImg = styled.img`
    border-radius: 100px;
`;
const LogOut = styled.span`
    font-size: 20px;
    font-weight: 700px;
    cursor: pointer;
    margin-right: 30px;
`;

const Figure = styled.figure`
    margin: 0 30px;
`;


export const NavBar = ({ authentication, logIn, logOut}) => (
    <NavBarStyled>
        <Logo>
            <ImgLogo src={logoImg} alt="logo"/>
            <H1>MrDonald's</H1>
        </Logo>
        {authentication ? 
        <User>
            <Figure>
                <UserImg src={authentication.photoURL} alt={authentication.displayName} width="40px" height="40px"/>
                <figcaption>{authentication.displayName}</figcaption>
            </Figure>
            <LogOut title="Выйти" onClick={logOut}>X</LogOut>
        </User> :
        <SignButton onClick={logIn}>
            <Figure>
                <img src={signImg} alt="logo"/>
                <figcaption>Войти</figcaption>
            </Figure>
        </SignButton>}
    </NavBarStyled>
);