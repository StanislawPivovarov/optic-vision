'use client'

import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/Header/Header";

import glasses from '@/assets/photo_2024-05-15_19-49-33 copy.png'
import talk from '@/assets/Two-women-talking-at-table copy.jpg'
import lottieanim from '@/assets/Animation - 1715797166607.json'
import Lottie from "lottie-react";
import { Button, Col, Row, Tabs } from "antd";
import { FaGlasses } from "react-icons/fa";
import { GiProcessor } from "react-icons/gi";
import { MdPhonelinkSetup } from "react-icons/md";
import { FaFeather } from "react-icons/fa";
import { RxAngle } from "react-icons/rx";
import { MdAudiotrack } from "react-icons/md";
import { FaBatteryHalf } from "react-icons/fa";
import { MdCamera } from "react-icons/md";
import { FaUsersViewfinder } from "react-icons/fa6";

import phone from '@/assets/—Pngtree—mobile phone png smartphone camera_6067590 copy.png'
import translate from '@/assets/HCxmwHZLkzHMR93Sd9ULuA.jpg'
import datchiki from '@/assets/photo_2024-05-15_19-49-32 (2).jpg'
import focus from '@/assets/1280x800_camera-lens-shutter-focus-macro.jpg'
import lenses from '@/assets/65948.jpg'
import sound from '@/assets/field_image_5_4.jpg'
import frames from '@/assets/medium-frames.png'

import nav from '@/assets/augmented-reality-glasses-678x446.jpeg'
import camera from '@/assets/fff.jpg'

export default function Home() {

  const dataForTabs = [

    {
      id: 1,
      name: 'Перевод',
      paragraph: 'Функция перевода (перевод с помощью жеста или тапа на панель)',
      img: translate
    },
    {
      id: 2,
      name: 'Фокус и zoom',
      paragraph: 'Очки  могут настраивать фокус и приближать/отдалять текст',
      img: focus
    },
    {
      id: 3,
      name: 'Датчики',
      paragraph: 'Слева и справа - датчик надевания. Также, на дужках есть тач-сенсоры. Ещё есть гироскоп с акселерометром. При этом в очках есть система, которая уменьшает утечку звука. ',
      img: datchiki
    },
    {
      id: 4,
      name: 'Размер',
      paragraph: 'У очков регулируемый размер.',
      img: frames
    },
    {
      id: 5,
      name: 'Линзы',
      paragraph: 'Есть линзы-хамелеоны, которые темнеют на солнце',
      img: lenses
    },
    {
      id: 6,
      name: 'Звук',
      paragraph: 'Звук идет вот из специальных узких отверстий снизу. А такие же верхние преназначены для низких частот, которые отвечают за мощность звука. Если отверстия закрыть, низкие пропадают. До конца непонятно откуда идет звук. Он будто висит в воздухе. И это новое прикольное ощущение. Также классно, что при этом хорошо слышно окружение. То есть ты как бы одновременно в двух звуковых пространствах.',
      img: sound
    }
  ]

  return (
    <main className={styles.main}>
      <Header />
      <div className={styles.startBlock}>
        <h1 className={styles.slogan}>Живи без барьеров</h1>
        <Image className={styles.main_image} src={glasses} alt="glasses" />
        <Lottie className={styles.scroll} animationData={lottieanim} loop={true} />;
      </div>

      <div className={styles.startBlock}>
        <h1></h1>
        <Row align={'middle'}>
          <Col span={12}>
            <p className={styles.talk_text} style={{ color: "#fff" }}>
              В современном социуме часто приходится контактировать с людьми из разных стран как офлайн, так и онлайн. Наше умное смарт-устройство решает проблему языкового барьера и значительно упрощает процесс коммуникации с иностранцами. Отличие от существующих сервисов для перевода состоит в скорости распознавания иностранного языка и вывода переведенного текста либо через очки, либо через наушники.
            </p>
          </Col>
          <Col span={12}>
            <Image className={styles.talk} src={talk} alt="talk" />
          </Col>
        </Row>
      </div>

      <div className={styles.startBlock}>
        <h1 className={styles.subheader}>Об OpticVision</h1>
        <Row align={'middle'}>
          <Col span={12}>
            <Image className={styles.talk} src={talk} alt="talk" />
          </Col>
          <Col span={12}>
            <div className={styles.content_features}>
              <FaGlasses className={styles.feature_icon} />
              <p>Особенность: AR функция, встроенный искусственный интеллект.</p>
            </div>
            <div className={styles.content_features}>
              <GiProcessor className={styles.feature_icon} />
              <p>Процессор: Snapdragon XR1, 64 ГБ / RAM 8 ГБ</p>
            </div>
            <div className={styles.content_features}>
              <MdPhonelinkSetup className={styles.feature_icon} />

              <p>Совместимость: Android, iOS</p>
            </div>
            <div className={styles.content_features}>
              <FaFeather className={styles.feature_icon} />
              <p>Вес: 52г.</p>
            </div>
            <div className={styles.content_features}>
              <FaUsersViewfinder className={styles.feature_icon} />

              <p>Угол зрения: 13 градусов</p>
            </div>
            <div className={styles.content_features}>
              <MdAudiotrack className={styles.feature_icon} />

              <p>Аудиосистема: Монодинамик, 3 микрофона</p>
            </div>
            <div className={styles.content_features}>
              <FaBatteryHalf className={styles.feature_icon} />

              <p>Автономный режим: 8-12 часов</p>
            </div>
            <div className={styles.content_features}>
              <MdCamera className={styles.feature_icon} />

              <p>Камера: 16 МП</p>
            </div>
          </Col>
        </Row>
      </div>
      <div className={styles.startBlock}>

        <Row align={'middle'}>
          <Col span={12}>
            <h1 className={styles.subheader}>Первый запуск</h1>

            <p className={styles.talk_text}>
              При первом запуске устройства необходимо подключить его к смартфону, на котором должно быть установлено специальное приложение для очков. В этом приложении нужно будет выбрать основной язык пользователя, на который будут переводиться все надписи и речь, пройти калибровку устройства.  Также в приложении на смартфоне можно отслеживать уровень заряда, просматривать сделанные фото, регулировать маршруты, регулировать различные настройки.
            </p>
          </Col>
          <Col span={12}>
            <Image className={styles.phone} src={phone} alt="phone" />
          </Col>
        </Row>
      </div>

      <div className={styles.startBlock}>
        <h1 className={styles.subheader}>Технологии</h1>

        <Row align={'middle'} justify={'center'}>
          <Col span={22}>
            <Tabs
              defaultActiveKey="2"
              centered
              size="large"
              items={dataForTabs.map((data) => {
                return {
                  label: `${data.name}`,
                  key: data.id,
                  children: <Row style={{marginTop: 50}} justify={'center'} align={'middle'}>
                    <Col xs={24} lg={12}>
                      <h1 className={styles.tab_content_text}>{data.paragraph}</h1>
                    </Col>
                    <Col xs={24} lg={12}>
                      <Image className={styles.image_tabs} src={data.img} alt="" />
                    </Col>
                  </Row>
                };
              })}
            />
          </Col>
        </Row>
      </div>

      <div className={styles.full}>
        <Row align={'middle'} justify={'center'} style={{ position: 'relative' }}>
          <p className={styles.nav_text}>Также, данные очки будут очень полезны туристам. Очки помогут не только понимать иностранную речь и письменность в незнакомых местах, но и не сбиться с маршрута. Благодаря GPS технологии туристы всегда будут знать свое местоположение и маршрут, что позволит им легко ориентироваться в любой ситуации.</p>
          <Image src={nav} alt="nav" className={styles.nav} />
        </Row>
      </div>

      <div className={styles.startBlock}>
        <h1 className={styles.subheader}>Камера</h1>

        <Row align={'middle'} justify={'center'} style={{ position: 'relative' }}>
          <Col span={12}>
            <h1>Благодаря встроенной камере пользователи получают возможность делать фото захватываемого изображения, а также копировать выделенный устройством текст. Далее полученные фото и тексты можно выводить на смартфон</h1>
          </Col>
          <Col span={12}>
              <Image src={camera} alt="camera"/>
          </Col>
        </Row>
      </div>

      <div className={styles.startBlock}>
      <h1 className={styles.subheader}></h1>

        <Row align={'middle'} justify={'center'} style={{ position: 'relative' }}>
          <Col span={10}>
          <div className={styles.buy}>
            <h1>OpticVision</h1>
            <Image src={glasses} alt="glasses"/>
            <h1>57990₽</h1>
            <Button>Купить</Button>
          </div>
          </Col>

        </Row>
      </div>
    </main>
  );
}
