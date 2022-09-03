import styled, { keyframes } from 'styled-components';
import { ListItem } from './ListItem';
import { Banner } from './Banner';
import { useFetch } from '../Hooks/useFetch';

const SectionMenu = styled.section`
    padding: 30px
`;

const MenuStyled = styled.main`
    background-color: #ccc;
    margin-top: 80px;
    margin-left: 400px;
`;

const animation = keyframes`
    0% {
        transform: scale(0);
    }
    100% {
        transform: scale(1);
        opacity: 0;
    }
`;

const Loading = styled.div`
    width: 8em;
    height: 8em;
    margin: auto;
    background-color: #299B01;
    border-radius: 100%;
    animation: ${animation} 1s infinite ease-in-out;
`;

const Error = styled.div`
    width: 50px;
    margin: 0 auto 30px;
    height: 5px;
    background: #299B01;
    transform: rotate(-45deg);

    &:after {
        content: '';
        display: block;
        width: 50px;
        height: 5px;
        background: #299B01;
        transform: rotate(90deg);
    }
`;

const ErrorText = styled.p`
    text-align: center;
`;

export const Menu = ({ setOpenItem }) => {
    const res = useFetch();

    const dbMenu = res.response;

    return (
        <MenuStyled>
            <Banner/>
            {res.response ? 
                <>
                    <SectionMenu>
                        <h2>Бургеры</h2>
                        <ListItem 
                            itemList={dbMenu.burger}
                            setOpenItem={setOpenItem}
                        />
                    </SectionMenu>

                    <SectionMenu>
                        <h2>Закуски / Напитки</h2>
                        <ListItem 
                            itemList={dbMenu.other} 
                            setOpenItem={setOpenItem}
                        />
                    </SectionMenu>
                </> : res.error ? 
                <SectionMenu>
                    <Error />
                    <ErrorText>Sorry, we will fix it soon...</ErrorText>
                </SectionMenu> :

                <SectionMenu>
                    <Loading />
                </SectionMenu>
            }
        </MenuStyled>
    );
};