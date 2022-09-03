import styled from 'styled-components';
import { formatCurrency } from '../functions/secondaryFunction';

const List = styled.ul`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`; 

const Item = styled.li`
    position: relative;
    width: 400px;
    height: 155px;
    background-image: ${({ img }) => `url(${img})`};
    background-position: center;
    background-size: cover;
    margin-top: 30px;
    margin-right: 30px;
    padding: 15px;
    font-size: 25px;
    color: white;
    z-index: 1;
    transition: box-shadow .4s;
    &:after {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        background-color: black;
        opacity: 60%;
        z-index: -1;
    }

    &:hover {
        cursor: pointer;
        
        box-shadow: inset 0 0 50px 30px black;
        &:after {
            opacity: 0;
        }
    }
`;

export const ListItem = ({ itemList, setOpenItem }) => (
    <List>
        {itemList.map(item => (
            <Item 
                key={item.id}
                img ={item.img}
                onClick={() => setOpenItem(item)}
            >
                <p>{item.name}</p>
                <p>{formatCurrency(item.price)}</p>
            </Item>
        ))}
    </List>
);