import styled from 'styled-components';
import { ButtonCheckout } from '../Style/ButtonCheckout';
import { CountItem } from './CountItem';
import { useCount } from '../Hooks/useCount';
import { totalPriceItems } from '../functions/secondaryFunction';
import { formatCurrency } from '../functions/secondaryFunction';
import { Toppings } from './Toppings';
import { Choices } from './Choices';
import { useToppings } from '../Hooks/useToppings';
import { useChoises } from '../Hooks/useChoices';

const Overlay = styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    z-index: 20;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
`;

const Modal = styled.div`
    margin-top: 80px;
    background-color: #fff;
    width: 600px;
    height: 600px;
`;

const Banner = styled.div`
    width: 100%;
    height: 200px;
    background-image: url(${ ({ img }) => img});
    background-size: cover;
    background-position: center;
`;

const Content = styled.section`
    padding: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: calc(100% - 200px);
`;

const ProductHeader = styled.header`
    display: flex;
    width: 100%;
    justify-content: space-between;
    font-family: Pacifico, cursive;
    font-size: 30px;
`;

const TotalPriceItem = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const ModalItem = ({ openItem, setOpenItem, orders, setOrders }) => {
    const counter = useCount(openItem.count);
    const toppings = useToppings(openItem);
    const choices = useChoises();
    const isEdit = openItem.index > -1;

    const closeModal = (e) => {
       if (e.target.id === 'overlay') {
           setOpenItem(null);
       } 
    };

    const order = {
        ...openItem,
        count: counter.count,
        topping: toppings.toppings,
        choice: choices.choice,
    };

    const editOrder = () => {
        const newOrders = [...orders];
        newOrders[openItem.index] = order;
        setOrders(newOrders);
        setOpenItem(null);
    };

    const addToOrder = () => {
        setOrders([...orders, order]);
        setOpenItem(null);
    };

    return (
        <Overlay id="overlay" onClick={closeModal}>
            <Modal>
                <Banner img={openItem.img} />
                <Content>
                    <ProductHeader>
                        <p>{openItem.name}</p>
                        <p>{formatCurrency(openItem.price)}</p>
                    </ProductHeader>
                    <CountItem {...counter} />
                    {openItem.toppings && <Toppings {...toppings} />}
                    {openItem.choices && <Choices {...choices} openItem={openItem} />}
                    <TotalPriceItem>
                        <span>Цена:</span>
                        <span>{formatCurrency( totalPriceItems(order) )}</span>
                    </TotalPriceItem>
                    <ButtonCheckout 
                        onClick={isEdit ? editOrder :  addToOrder}
                        disabled={order.choices && !order.choice}
                    >
                        {isEdit ? 'Редактировать' : 'Добавить'}
                    </ButtonCheckout>
                </Content>
            </Modal>
        </Overlay>
    )
};