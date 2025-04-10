import { Character } from '../types/character';

export const characters: Character[] = [
  // House Stark - The North
  {
    id: 'ned-stark',
    name: 'Eddard Stark',
    title: 'Lord of Winterfell, Warden of the North',
    house: 'Stark',
    description: 'The honorable head of House Stark, known for his unwavering sense of justice and duty.',
    imageUrl: 'https://i.pinimg.com/736x/5b/aa/1f/5baa1f79d08f3add2173c36fd0a1644e.jpg',
    allegiances: ['House Stark', 'Robert Baratheon']
  },
  // House Targaryen - Former rulers
  {
    id: 'daenerys',
    name: 'Daenerys Targaryen',
    title: 'Mother of Dragons, Khaleesi of the Great Grass Sea',
    house: 'Targaryen',
    imageUrl: 'https://i.pinimg.com/736x/ae/aa/9e/aeaa9e4b47d8d2309a70c4e403650d0d.jpg',
    description: 'The last surviving member of the original Targaryen dynasty, seeking to reclaim the Iron Throne.',
    allegiances: ['House Targaryen', 'Dothraki', 'Unsullied']
  },
  // House Lannister - The Westerlands
  {
    id: 'tyrion',
    name: 'Tyrion Lannister',
    title: 'Hand of the Queen',
    house: 'Lannister',
    imageUrl: 'https://i.pinimg.com/736x/5f/51/37/5f5137d762bcbfdf31c6842c73f99603.jpg',
    description: 'The youngest Lannister sibling, known for his wit, intelligence, and political acumen.',
    allegiances: ['House Lannister', 'Daenerys Targaryen']
  },
  // House Tyrell - The Reach
  {
    id: 'margaery',
    name: 'Margaery Tyrell',
    title: 'Queen of the Seven Kingdoms',
    house: 'Tyrell',
    imageUrl: 'https://i.pinimg.com/236x/7d/27/5b/7d275b47b7b31314c087c57b9a2cbb77.jpg',
    description: 'The ambitious and charming rose of Highgarden, skilled in court politics.',
    allegiances: ['House Tyrell', 'House Baratheon']
  },
  // House Martell - Dorne
  {
    id: 'oberyn',
    name: 'Oberyn Martell',
    title: 'The Red Viper of Dorne',
    house: 'Martell',
    imageUrl: 'https://i.pinimg.com/236x/f1/d9/64/f1d9645a22a9075c8496836fd7446064.jpg',
    description: 'A skilled warrior and prince of Dorne, seeking revenge for his sister\'s death.',
    allegiances: ['House Martell']
  },
  // House Greyjoy - Iron Islands
  {
    id: 'theon',
    name: 'Theon Greyjoy',
    title: 'Prince of the Iron Islands',
    house: 'Greyjoy',
    imageUrl: 'https://i.pinimg.com/474x/99/70/6e/99706e9e48dd8dccc92b7f7ec731719d.jpg',
    description: 'The conflicted heir to the Iron Islands, struggling with identity and loyalty.',
    allegiances: ['House Greyjoy', 'House Stark']
  },
  // House Arryn - The Vale
  {
    id: 'lysa',
    name: 'Lysa Arryn',
    title: 'Lady Regent of the Vale',
    house: 'Arryn',
    imageUrl: 'https://i.pinimg.com/736x/eb/dd/79/ebdd79bb166153317cede3b252b8bd87.jpg',
    description: 'The overprotective ruler of the Vale and widow of Jon Arryn.',
    allegiances: ['House Arryn', 'House Tully']
  },
  // House Tully - The Riverlands
  {
    id: 'catelyn',
    name: 'Catelyn Stark',
    title: 'Lady of Winterfell',
    house: 'Tully',
    imageUrl: 'https://i.pinimg.com/474x/14/e8/0f/14e80fba3d172a6f252b04a0475e02ef.jpg',
    description: 'Born a Tully, married to Ned Stark, fiercely protective of her family.',
    allegiances: ['House Stark', 'House Tully']
  },
  // House Baratheon - The Stormlands
  {
    id: 'robert',
    name: 'Robert Baratheon',
    title: 'King of the Seven Kingdoms',
    house: 'Baratheon',
    imageUrl: 'https://i.pinimg.com/736x/d3/9a/5b/d39a5b61b86035de250809b44224911e.jpg',
    description: 'The first Baratheon king, who won his crown through rebellion.',
    allegiances: ['House Baratheon']
  },
  {
    id: 'jaehaerys-i',
    name: 'Jaehaerys I Targaryen',
    title: 'The Conciliator, The Old King',
    house: 'Targaryen',
    imageUrl: 'https://i.pinimg.com/474x/7e/82/42/7e82424f801b762487c1ed9a1c8175c3.jpg',
    description: 'The longest-reigning Targaryen king who brought peace and prosperity to the Seven Kingdoms. Known for his wisdom and the many reforms he implemented during his 55-year reign.Most coolest Targaryen king of all time!!!!!!!',
    allegiances: ['House Targaryen']
  },
  {
    id: 'daella',
    name: 'Daella Targaryen',
    title: 'Princess of Dragonstone',
    house: 'Targaryen',
    imageUrl: 'https://i.pinimg.com/736x/fe/e1/20/fee120a3c8e09d34d8af9e753fc7bf99.jpg',
    description: 'A gentle and timid princess, daughter of King Jaehaerys I and Queen Alysanne. Known for her kind heart and fear of dragons despite her Targaryen blood.',
    allegiances: ['House Targaryen', 'House Arryn']
  }
];

export const getCharacterById = (id: string): Character | undefined => {
  return characters.find(character => character.id === id);
};