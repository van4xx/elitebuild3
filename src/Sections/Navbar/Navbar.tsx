import React, { useState, useRef, useEffect } from "react";
import { CiLocationOn } from "react-icons/ci";
import { IoSearchSharp } from "react-icons/io5";
import { MdMenu } from "react-icons/md";
import Link from 'next/link';
import CatalogComponent from '../CatalogComponent/CatalogComponent';
import { useRouter } from "next/router";
import CitySelector from "@/src/Components/CitySelector/CitySelector";
import ServicesDropdown from "@/src/Components/ServicesDropdown/ServicesDropdown";
import LeaveRequestForm from "@/src/Components/LeaveRequestForm/LeaveRequestForm2";
import { IoClose } from "react-icons/io5";
import { FaBars } from "react-icons/fa";
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isCatalogOpen, setIsCatalogOpen] = useState(false);
  const catalogRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const toggleCatalog = () => {
    setIsCatalogOpen((prev) => !prev);
  };

  // Выбор города
  const [selectedCity, setSelectedCity] = useState("Выбрать город");

  const handleCitySelect = (city: string) => {
    setSelectedCity(city);
  };

  //поиск
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    if (searchQuery.trim()) {
      router.push(`/Subcategory3?query=${encodeURIComponent(searchQuery)}`);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  //меню сервисов
  const servicesDropdownRef = useRef<HTMLDivElement>(null);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

  const toggleServicesDropdown = () => {
    setIsServicesDropdownOpen((prev) => !prev);
  };

  //отправить заявку 
  const [isLeaveRequestFormOpen, setIsLeaveRequestFormOpen] = useState(false);
  const leaveRequestFormRef = useRef<HTMLDivElement>(null);

  const toggleLeaveRequestForm = () => {
    setIsLeaveRequestFormOpen((prev) => !prev);
  };

  // Мобильное меню
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    document.body.style.overflow = !isMobileMenuOpen ? 'hidden' : 'auto';
  };

  // Обработчики кликов вне элементов
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Для каталога
      if (
        catalogRef.current &&
        !catalogRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsCatalogOpen(false);
      }

      // Для сервисов
      if (
        servicesDropdownRef.current &&
        !servicesDropdownRef.current.contains(event.target as Node)
      ) {
        setIsServicesDropdownOpen(false);
      }

      // Для формы заявки
      if (
        leaveRequestFormRef.current &&
        !leaveRequestFormRef.current.contains(event.target as Node)
      ) {
        setIsLeaveRequestFormOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.navbar__container}>
          <div className={styles.navbar_middle__logo_mobile}>
            <Link href="/">
              <img src="/images/logo.png" alt="Логотип ПрестижСтрой" />
            </Link>
          </div>      

          {/* Верхний блок */}
          <div className={styles.navbar_top}>
            <CitySelector 
              onCitySelect={handleCitySelect}
              selectedCity={selectedCity}
            />

            <a href="tel:+79009999999" className={styles.navbar_top__phone}>
              +7 (900) 999-99-99
            </a>

            <button className={styles.navbar_top__request} onClick={toggleLeaveRequestForm}>
              <span className={styles.navbar_top__request_text}>Оставить заявку</span>
            </button>
          </div>

          {/* Средний блок */}
          <div className={styles.navbar_middle}>
            <div className={styles.navbar_middle__logo}>
              <Link href="/">
                <img src="/images/logo.png" alt="Логотип ПрестижСтрой" />
              </Link>
            </div>
            <div className={styles.navbar_middle__catalog} ref={catalogRef}>
              <button
                ref={buttonRef}
                onClick={toggleCatalog}
                className={styles.navbar_middle__catalog_button}
              >
                <MdMenu className={styles.navbar_middle__catalog_icon} />
                <span className={styles.navbar_middle__catalog_text}>Каталог</span>
              </button>
              {isCatalogOpen && (
                <div className={styles.navbar_middle__catalog_dropdown}>
                  <CatalogComponent />
                </div>
              )}
            </div>

            <div className={styles.navbar_middle__search}>
              <input
                type="text"
                placeholder="Поиск"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                className={styles.navbar_middle__search_input}
              />
              <button onClick={handleSearch} className={styles.navbar_middle__search_button}>
                <IoSearchSharp className={styles.navbar_middle__search_icon} />
              </button>
            </div>

            <nav className={styles.navbar_middle__nav}>
              <div className={styles.navbar_middle__services} ref={servicesDropdownRef}>
                <button onClick={toggleServicesDropdown} className={styles.navbar_middle__services_button}>
                  Сервисы
                </button>
                {isServicesDropdownOpen && (
                  <div className={styles.navbar_middle__services_dropdown}>
                    <ServicesDropdown />
                  </div>
                )}
              </div>

              <Link href="/Comparison" className={styles.navbar_middle__comparison}>
                <div className={styles.navbar_middle__icon_wrapper}>
                  <img src="/images/сравнение.svg" alt="Сравнение" className={styles.navbar_middle__icon} />
                  <p className={styles.navbar_middle__icon_text}>Сравнение</p>
                </div>
              </Link>

              <Link href="/Favorites" className={styles.navbar_middle__favorites}>          
                <div className={styles.navbar_middle__icon_wrapper}>
                  <img src="/images/отложенные.svg" alt="Отложенные" className={styles.navbar_middle__icon} />
                  <p className={styles.navbar_middle__icon_text}>Отложенные</p>
                </div>
              </Link>

              <Link href="/Cart" className={styles.navbar_middle__cart}>
                <div className={styles.navbar_middle__icon_wrapper}>
                  <img src="/images/корзина.svg" alt="Корзина" className={styles.navbar_middle__icon} />
                  <p className={styles.navbar_middle__icon_text}>Корзина</p>
                </div>
              </Link>
            </nav>
          </div>

          {/* Нижний блок */}
          <nav className={styles.navbar_bottom}>
            <Link href="/" className={styles.navbar_link}>Главная</Link>
            <Link href="/AboutCompany/" className={styles.navbar_link}>О компании</Link>
            <Link href="/ForCustomers/" className={styles.navbar_link}>Для клиентов</Link>
            <Link href="/Contacts/" className={styles.navbar_link}>Контакты</Link>
          </nav>
        
          <div className={styles.navbar_line}></div>
        </div>
      </div>

      {/* Мобильное меню */}
      <div className={`${styles.navbar__mobile_menu} ${isMobileMenuOpen ? styles.active : ''}`}>
        <div className={styles.navbar__mobile_links}>
          {/* Основные разделы */}
          <Link href="/" className={styles.navbar__mobile_link} onClick={toggleMobileMenu}>
            Главная
          </Link>
          <Link href="/catalog" className={styles.navbar__mobile_link} onClick={toggleMobileMenu}>
            Каталог
          </Link>
          <Link href="/AboutCompany" className={styles.navbar__mobile_link} onClick={toggleMobileMenu}>
            О компании
          </Link>
          <Link href="/ForCustomers" className={styles.navbar__mobile_link} onClick={toggleMobileMenu}>
            Для клиентов
          </Link>
          <Link href="/Contacts" className={styles.navbar__mobile_link} onClick={toggleMobileMenu}>
            Контакты
          </Link>

          {/* Сервисы */}
          <div className={styles.navbar__mobile_section}>
            <h3 className={styles.navbar__mobile_section_title}>Сервисы</h3>
            <Link href="/services/delivery" className={styles.navbar__mobile_link} onClick={toggleMobileMenu}>
              Доставка
            </Link>
            <Link href="/services/installation" className={styles.navbar__mobile_link} onClick={toggleMobileMenu}>
              Монтаж
            </Link>
            <Link href="/services/return" className={styles.navbar__mobile_link} onClick={toggleMobileMenu}>
              Возврат
            </Link>
          </div>
        </div>

        {/* Действия пользователя */}
        <div className={styles.navbar__mobile_actions}>
          <Link href="/Cart" className={styles.navbar__mobile_action} onClick={toggleMobileMenu}>
            <img src="/images/корзина.svg" alt="Корзина" />
            <span>Корзина</span>
          </Link>
          <Link href="/Favorites" className={styles.navbar__mobile_action} onClick={toggleMobileMenu}>
            <img src="/images/отложенные.svg" alt="Избранное" />
            <span>Избранное</span>
          </Link>
          <Link href="/Comparison" className={styles.navbar__mobile_action} onClick={toggleMobileMenu}>
            <img src="/images/сравнение.svg" alt="Сравнение" />
            <span>Сравнение</span>
          </Link>
        </div>

        {/* Контактная информация */}
        <div className={styles.navbar__mobile_contacts}>
          <div className={styles.navbar__mobile_phone}>
            <a href="tel:+79009999999">+7 (900) 999-99-99</a>
          </div>
          <button className={styles.navbar__mobile_request} onClick={() => {
            toggleMobileMenu();
            toggleLeaveRequestForm();
          }}>
            Оставить заявку
          </button>
          <div 
            className={styles.navbar__mobile_location} 
            onClick={() => {
              toggleMobileMenu();
              setIsMobileCitySelectorOpen(true);
            }}
          >
            <CiLocationOn className={styles.icon_location} />
            <span>{selectedCity}</span>
          </div>
        </div>
      </div>

      {/* Затемнение фона */}
      <div 
        className={`${styles.navbar__overlay} ${isMobileMenuOpen ? styles.active : ''}`} 
        onClick={toggleMobileMenu}
      ></div>

      {/* Кнопка бургер-меню */}
      <button className={styles.navbar__burger_menu} onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? <IoClose className={styles.navbar__burger_icon} /> : <FaBars className={styles.navbar__burger_icon} />}
      </button>

      {/* Модальное окно формы заявки */}
      {isLeaveRequestFormOpen && (
        <>
          <div className="modal-overlay" onClick={() => setIsLeaveRequestFormOpen(false)}></div>
          <div className="navbar-leave-request-form" ref={leaveRequestFormRef}>
            <LeaveRequestForm />
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;