import React, { useState, useEffect } from 'react';
import Layout from '@/src/Components/Layout/Layout';
import { getCartItems, removeFromCart, updateCartItemQuantity } from '@/services/cartHelpers';
import styles from '@/styles/Cart.module.css';
import { IoClose } from "react-icons/io5";
import { FiMinus, FiPlus } from "react-icons/fi";
import Link from 'next/link';
import Image from 'next/image';
import PaymentModal from '@/src/Components/PaymentModal/PaymentModal';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  useEffect(() => {
    const items = getCartItems();
    setCartItems(items);
    calculateTotal(items);
  }, []);

  const calculateTotal = (items) => {
    const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    setTotalPrice(total);
  };

  const handleQuantityChange = (itemId: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    
    const updatedItems = updateCartItemQuantity(itemId, newQuantity);
    setCartItems(updatedItems);
    calculateTotal(updatedItems);
  };

  const handleRemoveItem = (itemId: string) => {
    const updatedItems = removeFromCart(itemId);
    setCartItems(updatedItems);
    calculateTotal(updatedItems);
  };

  const handlePaymentSubmit = (formData: PaymentFormData) => {
    console.log('Order data:', formData);
    setIsPaymentModalOpen(false);
  };

  if (cartItems.length === 0) {
    return (
      <Layout>
        <div className={styles.cart__empty}>
          <h2>Корзина пуста</h2>
          <p>Добавьте товары для оформления заказа</p>
          <Link href="/catalog" className={styles.cart__continue_shopping}>
            Перейти к покупкам
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className={styles.cart}>
        <div className={styles.cart__container}>
          <h1 className={styles.cart__title}>Корзина</h1>
          
          <div className={styles.cart__content}>
            <div className={styles.cart__items}>
              {cartItems.map((item) => (
                <div key={item.id} className={styles.cart__item}>
                  <div className={styles.cart__item_image}>
                    <Image 
                      src={item.image || '/images/placeholder.jpg'} 
                      alt={item.name}
                      width={100}
                      height={100}
                      objectFit="cover"
                    />
                  </div>
                  
                  <div className={styles.cart__item_info}>
                    <h3 className={styles.cart__item_name}>{item.name}</h3>
                    <p className={styles.cart__item_price}>{item.price} ₽</p>
                  </div>

                  <div className={styles.cart__item_quantity}>
                    <button 
                      onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                      className={styles.cart__quantity_btn}
                    >
                      <FiMinus />
                    </button>
                    <span>{item.quantity}</span>
                    <button 
                      onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                      className={styles.cart__quantity_btn}
                    >
                      <FiPlus />
                    </button>
                  </div>

                  <div className={styles.cart__item_total}>
                    {item.price * item.quantity} ₽
                  </div>

                  <button 
                    onClick={() => handleRemoveItem(item.id)}
                    className={styles.cart__item_remove}
                  >
                    <IoClose />
                  </button>
                </div>
              ))}
            </div>

            <div className={styles.cart__summary}>
              <h2 className={styles.cart__summary_title}>Итого</h2>
              <div className={styles.cart__summary_row}>
                <span>Товары ({cartItems.length})</span>
                <span>{totalPrice} ₽</span>
              </div>
              <div className={styles.cart__summary_row}>
                <span>Доставка</span>
                <span>Бесплатно</span>
              </div>
              <div className={styles.cart__summary_total}>
                <span>К оплате</span>
                <span>{totalPrice} ₽</span>
              </div>
              <button 
                className={styles.cart__checkout}
                onClick={() => setIsPaymentModalOpen(true)}
              >
                Оформить заказ
              </button>
              <Link href="/catalog" className={styles.cart__continue_shopping}>
                Продолжить покупки
              </Link>
            </div>
          </div>
        </div>
      </div>
      <PaymentModal
        isOpen={isPaymentModalOpen}
        onClose={() => setIsPaymentModalOpen(false)}
        totalAmount={totalPrice}
        onSubmit={handlePaymentSubmit}
      />
    </Layout>
  );
};

export default Cart;

/*
http://localhost:3000/Cart
*/