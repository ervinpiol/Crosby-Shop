import Lily from "../assets/plants/lily.jpg";
import PencilPlant from "../assets/plants/pencil_plant.jpg";
import Alocasia from "../assets/plants/alocasia.jpg";
import Snake from "../assets/plants/snake.jpg";
import Orchid from "../assets/plants/orchid.jpg";
import PinkCalathea from "../assets/plants/pink_calathea.jpg";
import MaidenHair from "../assets/plants/maiden_hair.jpg";
import Cactus from "../assets/plants/cactus.jpg";
import Fern from "../assets/plants/fern.jpg";
import Palm from "../assets/plants/palm.jpg";

import LilyHover from "../assets/plants/hover_img/lily_hover.jpg";
import PencilPlantHover from "../assets/plants/hover_img/pencil_plant_hover.jpg";
import AlocasiaHover from "../assets/plants/hover_img/alocasia_hover.jpg";
import SnakeHover from "../assets/plants/hover_img/snake_hover.jpg";
import OrchidHover from "../assets/plants/hover_img/orchid_hover.jpg";
import PinkCalatheaHover from "../assets/plants/hover_img/pink_calathea_hover.jpg";
import MaidenHairHover from "../assets/plants/hover_img/maiden_hair_hover.jpg";
import CactusHover from "../assets/plants/hover_img/cactus_hover.jpg";
import FernHover from "../assets/plants/hover_img/fern_hover.jpg";
import PalmHover from "../assets/plants/hover_img/palm_hover.jpg";
import GiftCard from "../assets/giftcard/giftcard.jpg";

export const shopItems = [
  {
    image: Lily,
    name: "Lily",
    price: { small: 20, medium: 40, large: 50 },
    hoverImage: LilyHover,
  },
  {
    image: PencilPlant,
    name: "Pencil Plant",
    price: { small: 12, medium: 40, large: 50 },
    hoverImage: PencilPlantHover,
  },
  {
    image: Alocasia,
    name: "Alocasia",
    price: { small: 15, medium: 30, large: 50 },
    hoverImage: AlocasiaHover,
  },
  {
    image: Snake,
    name: "Snake",
    price: { small: 12, medium: 30, large: 50 },
    isSoldOut: true,
    hoverImage: SnakeHover,
  },
  {
    image: Orchid,
    name: "Orchid",
    price: { small: 30, medium: 50, large: 80 },
    hoverImage: OrchidHover,
  },
  {
    image: PinkCalathea,
    name: "Pink Calathea",
    price: { small: 20, medium: 40, large: 45 },
    isSale: true,
    hoverImage: PinkCalatheaHover,
  },
  {
    image: MaidenHair,
    name: "Maiden Hair",
    price: { small: 10, medium: 25, large: 40 },
    hoverImage: MaidenHairHover,
  },
  {
    image: Cactus,
    name: "Cactus",
    price: { small: 30, medium: 50, large: 100 },
    hoverImage: CactusHover,
  },
  {
    image: Fern,
    name: "Fern",
    price: { small: 20, medium: 40, large: 50 },
    hoverImage: FernHover,
  },
  {
    image: Palm,
    name: "Palm",
    price: { small: 20, medium: 40, large: 50 },
    hoverImage: PalmHover,
  },
  {
    image: GiftCard,
    name: "Gift Card",
    price: { small: 25, medium: 50, large: 75, xl: 100 },
  },
];
