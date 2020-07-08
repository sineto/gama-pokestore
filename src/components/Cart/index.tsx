import React from 'react';
import clsx from 'clsx';
import { FaRegCheckCircle } from 'react-icons/fa';
import {
	Drawer,
	Divider,
	ListItem,
	makeStyles
} from '@material-ui/core';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import CartItem from '../CartItem';
import { FormatPrice } from '../../Utils';


import {
	CartList,
	Actions,
	Price,
	PriceTitle,
	PriceValue,
	Buttons,
	ButtonCheckout,
	DContent,
	TextConfirm,
	EmptyCart
} from './style';
import './style.scss';

const useStyles = makeStyles({
  list: {
    width: 350,
  },
  fullList: {
    width: 'auto',
  },
});

const Cart: React.FC<{
	open: any,
	toggleDrawer: any,
	pokemonCart: any[],
	pushToCart: any,
	cleanCart: any
}> = ({
	open,
	toggleDrawer,
	pokemonCart,
	pushToCart,
	cleanCart
}) => {
 const [openModal, setOpenModal] = React.useState(false);

  const handleClickOpen = () => {
    setOpenModal(true);
		cleanCart();
  };

  const handleClose = () => {
    setOpenModal(false);
  };

	const totalPrice = pokemonCart
		.map(item => item.price * item.qnt)
		.reduce((acc, next) => acc + next, 0);

	const classes = useStyles();
	const list = (anchor: string) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role='presentation'
      onKeyDown={toggleDrawer(false)}
    >
			<CartList>
				{
					pokemonCart.length !== 0 
					? pokemonCart.map((item) => {
							return (
								<ListItem>
									<CartItem
										pokemon={item}
										pushToCart={pushToCart}
									/>
								</ListItem>
							)
						})
						: (
							<EmptyCart>
								<h1>Empty cart</h1>
							</EmptyCart>
						)
				}
      </CartList>
			<Divider />
			<Actions>
				<Price>
					<PriceTitle>Total</PriceTitle>
					<PriceValue>{FormatPrice(totalPrice)}</PriceValue>
				</Price>
				<Buttons>
					<ButtonCheckout onClick={handleClickOpen}>
						<FaRegCheckCircle
							size={25}
							style={{ marginRight: '10px' }}
						/>
						Checkout
					</ButtonCheckout>
					<Dialog
						open={openModal}
						onClose={handleClose}
						aria-labelledby="alert-dialog-title"
						aria-describedby="alert-dialog-description"
					>
						<DContent>
							<div className="circle-loader">
								<div className="checkmark draw"></div>
							</div>
							<TextConfirm>
								Thank You for shopping with us!
							</TextConfirm>
						</DContent>
						<DialogActions>
							<Button onClick={handleClose} color="primary" autoFocus>
								OK
							</Button>
						</DialogActions>
					</Dialog>
				</Buttons>
			</Actions>
    </div>
  );

	return (
		<>
			<Drawer
				anchor={'right'}
				open={open}
				onClose={toggleDrawer(false)}>
				{list('right')}
			</Drawer>
		</>
	);
};

export default Cart;
