export const categories = [
  {
    id: 1,
    name: 'Стройматериалы',
    icon: 'warehouse',
    subcategories: [
      {
        id: 11,
        name: 'Стеновые и фасадные материалы',
        subcategories: [
          { id: 111, name: 'Кирпич' },
          { 
            id: 112, 
            name: 'Строительные блоки',
            items: [
              'Газобетонные блоки',
              'Керамзитобетонные блоки',
              'Фундаментные блоки (ФБС)'
            ]
          },
          {
            id: 113,
            name: 'Пазогребневые плиты',
            items: ['Комплектующие для пазогребневых плит']
          },
          {
            id: 114,
            name: 'Фасадные панели',
            items: [
              'Гибкие фасадные панели',
              'Фасадные облицовочные панели',
              'Комплектующие для фасадных панелей'
            ]
          },
          {
            id: 115,
            name: 'Сайдинг',
            items: [
              'Сайдинг корабельный брус',
              'Сайдинг блок-хаус',
              'Сайдинг брус',
              'Комплектующие для сайдинга',
              'Софиты и ветровая доска',
              'Фиброцементный сайдинг'
            ]
          },
          { id: 116, name: 'Искусственный камень' },
          { id: 117, name: 'Профнастил стеновой' },
          { id: 118, name: 'Фасадная клинкерная плитка' }
        ]
      },
      {
        id: 12,
        name: 'Кровля, водосточные системы',
        subcategories: [
          {
            id: 121,
            name: 'Водосточные системы и отливы',
            items: [
              'Водосточная система металлическая 125/90',
              'Водосточная система пластиковая 120/80',
              'Водосточная система пластиковая 120/85',
              'Водосточная система пластиковая 140/100',
              'Водосточные желоба',
              'Водосточные трубы',
              'Водосточные воронки и заглушки',
              'Водосточные колена',
              'Кронштейны и соединители водосточного желоба',
              'Хомуты и муфты водосточной трубы',
              'Отливы'
            ]
          },
          {
            id: 122,
            name: 'Металлочерепица',
            items: [
              'Металлочерепица',
              'Доборные элементы для кровли из металлочерепицы',
              'Саморезы для металлочерепицы'
            ]
          },
          {
            id: 123,
            name: 'Гибкая черепица',
            items: [
              'Гибкая черепица',
              'Комплектующие для гибкой черепицы'
            ]
          }
        ]
      },
      {
        id: 13,
        name: 'Теплоизоляция и шумоизоляция',
        subcategories: [
          {
            id: 131,
            name: 'Теплоизоляция',
            items: [
              'Минеральная вата',
              'Экструдированный пенополистирол',
              'Пенополистирол',
              'Теплоизоляционные PIR-плиты',
              'Отражающая изоляция',
              'Напыляемая теплоизоляция',
              'Утепление каркасных конструкций',
              'Утепление для фундамента',
              'Утепление в системе Вентилируемый фасад',
              'Утепление в системе Штукатурный фасад',
              'Утепление в системе Плоская кровля',
              'Межвенцовые утеплители',
              'Утепление бани и сауны',
              'Утепление полов и перекрытий',
              'Плиты МДВП',
              'Клей для теплоизоляции',
              'Крепеж для теплоизоляции'
            ]
          },
          {
            id: 132,
            name: 'Шумоизоляция и виброизоляция',
            items: [
              'Плиты шумоизоляционные',
              'Панели звукоизоляционные',
              'Маты звукоизоляционные',
              'Рулонная шумоизоляция',
              'Мембраны звукоизоляционные',
              'Звукоизоляционные листовые материалы',
              'Звукоизоляция для стен',
              'Звукоизоляция для пола',
              'Звукоизоляция для потолка',
              'Комплектующие для шумоизоляции'
            ]
          }
        ]
      },
      {
        id: 14,
        name: 'Сухие строительные смеси',
        subcategories: [
          {
            id: 141,
            name: 'Штукатурки',
            items: [
              'Готовые штукатурки',
              'Сухие штукатурки'
            ]
          },
          {
            id: 142,
            name: 'Шпаклевки',
            items: [
              'Сухие шпаклевки',
              'Готовые шпаклевки'
            ]
          },
          {
            id: 143,
            name: 'Ровнители для пола',
            items: [
              'Цементные и гипсоцементные ровнители',
              'Эпоксидные и полиуретановые полы'
            ]
          }
        ]
      },
      {
        id: 15,
        name: 'Пиломатериалы и отделка деревом',
        subcategories: [
          {
            id: 151,
            name: 'Доски',
            items: [
              'Доска строительная',
              'Полок для бани и сауны',
              'Палубная доска',
              'Шпунтованная доска'
            ]
          },
          {
            id: 152,
            name: 'Брус и брусок',
            items: [
              'Брус строительный',
              'Брус клееный',
              'Брусок'
            ]
          },
          {
            id: 153,
            name: 'Вагонка и панели',
            items: [
              'Вагонка штиль',
              'Евровагонка',
              'Имитация бревна',
              'Имитация бруса',
              'Планкен',
              'Блок-хаус'
            ]
          }
        ]
      },
      {
        id: 16,
        name: 'Гидроизоляция',
        subcategories: [
          {
            id: 161,
            name: 'Рулонная гидроизоляция',
            items: [
              'Рубероид',
              'Гидроизол',
              'Техноэласт',
              'Унифлекс'
            ]
          },
          {
            id: 162,
            name: 'Обмазочная гидроизоляция',
            items: [
              'Цементная гидроизоляция',
              'Полимерная гидроизоляция',
              'Битумная гидроизоляция'
            ]
          }
        ]
      }
    ]
  },
  {
    id: 2,
    name: 'Инструмент',
    icon: 'tools',
    subcategories: [
      {
        id: 21,
        name: 'Ручной инструмент',
        subcategories: [
          {
            id: 211,
            name: 'Зажимные инструменты',
            items: [
              'Тиски',
              'Струбцины',
              'Зажимы',
              'Клещи'
            ]
          },
          {
            id: 212,
            name: 'Режущий инструмент',
            items: [
              'Ножовки',
              'Стамески',
              'Ножницы по металлу',
              'Болторезы',
              'Плиткорезы ручные'
            ]
          }
        ]
      },
      {
        id: 22,
        name: 'Электроинструмент',
        subcategories: [
          {
            id: 221,
            name: 'Дрели и шуруповерты',
            items: [
              'Дрели электрические',
              'Шуруповерты аккумуляторные',
              'Дрели-шуруповерты',
              'Дрели ударные'
            ]
          },
          {
            id: 222,
            name: 'Пилы электрические',
            items: [
              'Циркулярные пилы',
              'Торцовочные пилы',
              'Сабельные пилы',
              'Лобзики электрические',
              'Цепные пилы'
            ]
          }
        ]
      },
      {
        id: 23,
        name: 'Малярный инструмент',
        subcategories: [
          {
            id: 231,
            name: 'Кисти и валики',
            items: [
              'Кисти малярные',
              'Валики малярные',
              'Валики игольчатые',
              'Мини-валики'
            ]
          },
          {
            id: 232,
            name: 'Вспомогательный инструмент',
            items: [
              'Ванночки для краски',
              'Удлинители для валиков',
              'Шпатели малярные',
              'Малярные ленты'
            ]
          }
        ]
      },
      {
        id: 24,
        name: 'Измерительный инструмент',
        subcategories: [
          {
            id: 241,
            name: 'Уровни и правила',
            items: [
              'Уровни пузырьковые',
              'Уровни лазерные',
              'Правила строительные',
              'Отвесы'
            ]
          },
          {
            id: 242,
            name: 'Измерительные приборы',
            items: [
              'Рулетки',
              'Дальномеры',
              'Угломеры',
              'Штангенциркули'
            ]
          }
        ]
      }
    ]
  },
  {
    id: 3,
    name: 'Электрика',
    icon: 'flash',
    subcategories: [
      {
        id: 31,
        name: 'Розетки и выключатели',
        subcategories: [
          {
            id: 311,
            name: 'Розетки',
            items: [
              'Штепсельные розетки',
              'Компьютерные розетки',
              'Розетки USB',
              'Телевизионные розетки',
              'Телефонные розетки'
            ]
          },
          {
            id: 312,
            name: 'Выключатели',
            items: [
              'Одноклавишные',
              'Двухклавишные',
              'Проходные',
              'Диммеры',
              'Сенсорные'
            ]
          }
        ]
      },
      {
        id: 32,
        name: 'Кабель и провод',
        subcategories: [
          {
            id: 321,
            name: 'Силовой кабель',
            items: [
              'Кабель ВВГ',
              'Кабель NYM',
              'Кабель АВВГ',
              'Провод ПВС'
            ]
          },
          {
            id: 322,
            name: 'Слаботочный кабель',
            items: [
              'Витая пара',
              'Телефонный кабель',
              'Коаксиальный кабель',
              'Сигнальный кабель'
            ]
          }
        ]
      },
      {
        id: 33,
        name: 'Щитовое оборудование',
        subcategories: [
          {
            id: 331,
            name: 'Автоматические выключатели',
            items: [
              'Однополюсные',
              'Двухполюсные',
              'Трехполюсные',
              'Дифференциальные автоматы'
            ]
          },
          {
            id: 332,
            name: 'Щиты и боксы',
            items: [
              'Щиты металлические',
              'Щиты пластиковые',
              'Боксы под автоматы',
              'Щиты учета'
            ]
          }
        ]
      }
    ]
  },
  {
    id: 4,
    name: 'Металлопрокат',
    icon: 'industry',
    subcategories: [
      {
        id: 41,
        name: 'Сортовой прокат',
        subcategories: [
          {
            id: 411,
            name: 'Арматура',
            items: [
              'Арматура А240',
              'Арматура А400',
              'Арматура А500',
              'Композитная арматура'
            ]
          },
          {
            id: 412,
            name: 'Профильные трубы',
            items: [
              'Профильная труба квадратная',
              'Профильная труба прямоугольная',
              'Профильная труба овальная'
            ]
          }
        ]
      },
      {
        id: 42,
        name: 'Листовой прокат',
        subcategories: [
          {
            id: 421,
            name: 'Листы стальные',
            items: [
              'Лист горячекатаный',
              'Лист холоднокатаный',
              'Лист оцинкованный',
              'Лист рифленый'
            ]
          },
          {
            id: 422,
            name: 'Профнастил',
            items: [
              'Профнастил С8',
              'Профнастил С20',
              'Профнастил НС35',
              'Профнастил Н60'
            ]
          }
        ]
      },
      {
        id: 43,
        name: 'Трубный прокат',
        subcategories: [
          {
            id: 431,
            name: 'Трубы водогазопроводные',
            items: [
              'Труба ВГП черная',
              'Труба ВГП оцинкованная',
              'Фитинги для труб ВГП'
            ]
          },
          {
            id: 432,
            name: 'Трубы электросварные',
            items: [
              'Труба электросварная круглая',
              'Труба электросварная профильная',
              'Отводы для электросварных труб'
            ]
          }
        ]
      }
    ]
  }
]; 