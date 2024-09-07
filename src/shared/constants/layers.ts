import Layer1 from "../../assets/images/layer-base.png";
import Layer2 from "../../assets/images/layer-middle.png";
import Layer3 from "../../assets/images/layer-front.png";

interface ILayer {
    id: number,
    image: string,
    description: string,
}

export const layers: Array<ILayer> = [
    {
        id: 1,
        image: Layer1,
        description: "Distant forest image",
    },
    {
        id: 2,
        image: Layer2,
        description: "Mid-far forest image",
    },
    {
        id: 3,
        image: Layer3,
        description: "Nearest forest image",
    },
]