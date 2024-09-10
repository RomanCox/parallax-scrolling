import { ReactLenis, useLenis } from "lenis/react";

import { classNames, Mods } from "./shared/lib";

import Dungeon from "./assets/images/dungeon.jpg";
import { layers } from "./shared/constants/layers.ts";
import { scrollOptions } from "./shared/constants/scrollOptions.ts";

import cls from "./App.module.scss";

export const App = () => {
    useLenis(({ scroll }) => {
        document.documentElement.style.setProperty("--scrollTop", `${scroll}px`);
    });

    const layerItemMods = (id: number): Mods => {
        switch (id) {
            case 1:
                return { [cls.layerItem__base]: true }
            case 2:
                return { [cls.layerItem__middle]: true }
            case 3:
                return { [cls.layerItem__front]: true }
            default:
                return {}
        }
    };

    return (
        <ReactLenis root options={scrollOptions}>
            <header className={cls.header}>
                <div className={cls.layers}>
                    <div className={cls.titleLayer}>
                        <div className={cls.caption}>Welcome to Parallax</div>
                        <h1>Fairy forest</h1>
                    </div>
                    {layers.map(layer => (
                        <img
                            key={layer.id}
                            className={classNames(cls.layerItem, layerItemMods(layer.id))}
                            src={layer.image}
                            alt={layer.description}
                        />
                    ))}
                </div>
            </header>
            <article className={cls.article}>
                <img
                    className={cls.articleImage}
                    src={Dungeon}
                    alt={"Dungeon image"}
                />
                <div className={cls.articleContent}>
                    <h2 className={cls.articleTitle}>To be continued</h2>
                    <p className={cls.text}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab alias amet animi architecto at
                        aut blanditiis corporis deleniti eligendi fugiat illo impedit, maiores minima nam odit quo
                        reprehenderit sapiente voluptate voluptates!
                    </p>
                </div>
                <div className={cls.copyRight}>© Created by Roman Cox</div>
            </article>
        </ReactLenis>
    )
};
