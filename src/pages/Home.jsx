import css from './Home.module.css';

const Home = () => {
    return (
        <div className={css.HomeContainer}>
            <div className={css.TitlePosition}>
    <h2 className={css.TitleOne}>Welcome!</h2>
    <h3 className={css.TitleTwo}>This is your phonebook</h3>
    </div>
    </div>
    )
}

export default Home;
