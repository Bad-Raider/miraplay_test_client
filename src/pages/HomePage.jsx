import img from '../images/hero.png';

const HomePage = () => {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'flex-start',
                width: '1300px',
                height: '100%',
                padding: '0 24px 0',
                marginLeft: 'auto',
                marginRight: 'auto',
            }}
        >
            <div
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    alignContent: 'center',
                    justifyContent: 'flex-start',
                }}
            >
                <h1
                    style={{
                        display: 'flex',
                        fontSize: '48px',
                        fontWeight: 100,
                        lineHeight: '125%',
                        textTransform: 'uppercase',
                        flexWrap: 'wrap',
                        alignItems: 'center',
                        alignContent: 'center',
                        justifyContent: 'flex-start',
                        marginBottom: '40px',
                    }}
                >
                    Спробуй гру{' '}
                    <span style={{ fontWeight: 900 }}>DIABLO IMMORTAL</span>на
                    ультрах
                </h1>
                <p>
                    Даруємо{' '}
                    <span style={{ fontWeight: 900 }}>
                        30 хвилин гри безкоштовно
                    </span>{' '}
                    після реєстрації на нашому сервісі
                </p>
                <button
                    style={{
                        background: 'var(--main-green-color)',
                        border: 'none',
                        borderColor: 'var(--main-green-color)',
                        borderRadius: '10px',
                        boxShadow: '0 20px 40px rgba(63,156,20,.3)',
                        color: '#eaeaea',
                        cursor: 'pointer',
                        fontSize: '15px',
                        fontWeight: '800',
                        height: '78px',
                        lineHeight: '1.43',
                        marginLeft: '7px',
                        textAlign: 'center',
                        textTransform: 'uppercase',
                        WebkitTransform: 'skew(-10deg)',
                        transform: 'skew(-10deg)',
                        transition: 'all .2s ease-in-out',
                        width: '274px',
                        marginTop: '40px'
                    }}
                >
                    Почати гру
                </button>
            </div>
            <img src={img} alt="f" />
        </div>
    );
};

export default HomePage;
