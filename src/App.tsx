import Dungeon from "./assets/images/dungeon.jpg";
import { layers } from "./shared/constants/layers.ts";

import cls from "./App.module.scss";

export const App = () => {
    return (
        <>
            <header className={cls.header}>
                <div className={cls.layers}>
                    <div className={cls.titleLayer}>
                        <div className={cls.caption}>Welcome to Parallax</div>
                        <h1>Fairy forest</h1>
                    </div>
                    {layers.map(layer => (
                        <img
                            key={layer.id}
                            className={cls.layerItem}
                            src={layer.image}
                            alt={layer.description}
                        />
                    ))}
                </div>
            </header>
            <main className={cls.main}>
                <article className={cls.article}>
                    <img
                        className={cls.articleImage}
                        src={Dungeon}
                        alt={"Dungeon image"}
                    />
                    <div className={cls.articleContent}>
                        <h2 className={cls.articleTitle}>To be continued</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab alias amet animi architecto at
                            aut blanditiis corporis deleniti eligendi fugiat illo impedit, maiores minima nam odit quo
                            reprehenderit sapiente voluptate voluptates!</p>
                    </div>
                    <div className={cls.copyRight}>© developed by Roman Cox</div>
                </article>
            </main>
        </>
)
};
