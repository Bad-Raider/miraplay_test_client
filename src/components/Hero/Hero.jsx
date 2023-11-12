import css from './Hero.module.css';
import img from '../../images/hero.png';

const Hero = () => {
    return (
        <div className={css.Wraper}>
            <div className={css.WraperInfo}>
                <h1 className={css.Title}>
                    Спробуй гру{' '}
                    <span className={css.Span}>DIABLO IMMORTAL</span>на ультрах
                </h1>
                <p>
                    Даруємо{' '}
                    <span className={css.Span}>30 хвилин гри безкоштовно</span>{' '}
                    після реєстрації на нашому сервісі
                </p>
                <button className={css.Button}>Почати гру</button>
            </div>
            <img className={css.Img} src={img} alt="" />
        </div>
    );
};

export default Hero;
