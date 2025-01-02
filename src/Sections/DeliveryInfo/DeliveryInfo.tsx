import React from 'react';
import Link from 'next/link';
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

const DeliveryInfo = () => {
  return (
    <section className="delivery-info">
      <div className="delivery-info__breadcrumb">
        <Link href="/">
          Главная
        </Link>
        {" / "}
        <Link href="/Delivery">
          Доставка
        </Link>
      </div>
      <h1 className="delivery-info__title">Доставка</h1>
      <div className="delivery-info__columns">
        <div className="delivery-info__intro">
          <p>
            Мы стремимся сделать процесс покупки максимально удобным для наших клиентов, поэтому предлагаем несколько вариантов доставки товара:
          </p>
        </div>
        <ol className="delivery-info__list">
          <li className="delivery-info__item">
            <strong>Курьерская доставка.</strong> Если вы живёте в городе, где у нас есть представительство, вы можете забрать товар самостоятельно или заказать доставку на дом. Стоимость и сроки доставки зависят от расстояния и веса товара.
          </li>
          <li className="delivery-info__item">
            <strong>Самовывоз.</strong> Если вы предпочитаете забрать товар самостоятельно, вы можете приехать в наш магазин и забрать его в удобное для вас время. Обратите внимание, что самовывоз возможен не для всех товаров.
          </li>
          <li className="delivery-info__item">
            <strong>Доставка в пункт выдачи.</strong> Вы можете забрать товар в одном из наших пунктов выдачи. Это удобно, если вы живёте не в городе, где у нас есть представительство, или предпочитаете не заказывать доставку на дом.
          </li>
          <li className="delivery-info__item">
            <strong>Доставка до подъезда.</strong> Для некоторых товаров мы предлагаем услугу доставки до подъезда. Это удобно, если вы не можете забрать товар самостоятельно, но не хотите заказывать курьерскую доставку.
          </li>
        </ol>
        <div className="delivery-info__note">
          <p>
            Обратите внимание, что некоторые товары могут иметь ограничения по доставке. Например, мы не доставляем товары, которые запрещены к пересылке по почте или курьерской службой. Также мы не можем гарантировать доставку крупногабаритных или нестандартных товаров.
          </p>
          <p>
            Пожалуйста, учитывайте, что сроки и стоимость доставки могут меняться в зависимости от различных факторов, таких как расстояние, вес товара и выбранный способ доставки. Пожалуйста, свяжитесь с нами, чтобы узнать актуальную информацию о доставке.
          </p>
        </div>
      </div>
      <div className="delivery-map">
        {/*<p className="delivery-map__text">Карта пунктов выдачи СДЭК</p>*/}
        <YMaps>
          <Map
            defaultState={{ center: [55.76, 37.64], zoom: 10 }}
            className="delivery-map__container"
          >
            <Placemark
              geometry={[55.76, 37.64]}
              properties={{ hintContent: "Пункт выдачи СДЭК" }}
            />
          </Map>
        </YMaps>
      </div>
    </section>
  );
};

export default DeliveryInfo;
