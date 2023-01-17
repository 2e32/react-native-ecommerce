import keys from './keys';

const user = {
  firstName: 'Kristin',
  lastName: 'Watson',
  email: 'bruno203@gmail.com',
  avatar: 'https://www.allaccess.com/assets/img/editorial/raw/ki/kirstenwatson2021.jpg',
};

const orders = [
  {
    id: 1,
    number: 238562312,
    date: '20/03/2020',
    quantity: 3,
    total: 150,
    status: { id: 3, key: keys.orderStatus.CANCELED, title: 'Canceled' },
  },
  {
    id: 2,
    number: 238562313,
    date: '17/05/2020',
    quantity: 2,
    total: 30,
    status: { id: 2, key: keys.orderStatus.DELIVERED, title: 'Delivered' },
  },
  {
    id: 3,
    number: 238562314,
    date: '09/11/2022',
    quantity: 5,
    total: 1230,
    status: { id: 1, key: keys.orderStatus.PROCESSING, title: 'Processing' },
  },
];

const shippingAddresses = [
  {
    id: 1,
    active: true,
    recipient: 'Bruno Fernandes',
    fullAddress: '25 rue Robert Latouche, Nice, 06200, Côte D’azur, France',
  },
  {
    id: 2,
    active: false,
    recipient: 'Bruno Fernandes',
    fullAddress: '25 rue Robert Latouche, Nice, 06200, Côte D’azur, France',
  },
  {
    id: 3,
    active: false,
    recipient: 'Bruno Fernandes',
    fullAddress: '25 rue Robert Latouche, Nice, 06200, Côte D’azur, France',
  },
];

const paymentCards = [
  {
    id: 1,
    issuingNetwork: 'VISA',
    number: '1111-1111-1111-1234',
    cardHolder: 'Jennyfer Doe',
    expiry: new Date(2023, 5, 1),
    active: true,
  },
  {
    id: 2,
    issuingNetwork: 'MasterCard',
    number: '2222-2222-2222-6789',
    cardHolder: 'Jennyfer Doe',
    expiry: new Date(2023, 1, 1),
    active: false,
  },
];

const chairs = [
  {
    id: 1,
    name: 'BERGMUND',
    summary: 'Bar stool with backrest, 24 3/8 "',
    description:
      'Bar stools in the BERGMUND series offer cushiony comfort and many cover options, like this one in an elegant gray. After engaging meals and after-dinner chit-chat, it’s good to know it’s washable.',
    image:
      'https://www.ikea.com/us/en/images/products/bergmund-bar-stool-with-backrest-black-gunnared-medium-gray__0926400_pe789189_s5.jpg',
    price: 130,
    raiting: 4.9,
    reviews: 15,
  },
  {
    id: 2,
    name: 'STIG',
    summary: 'Bar stool with backrest, black/black, 24 3/4 "',
    description:
      'This comfy bar stool/counter stool is the perfect height for lazy breakfasts, casual meals or snacks at the counter or kitchen island. Made of easy-care materials so occasional spills are easy to wipe off.',
    image:
      'https://www.ikea.com/us/en/images/products/stig-bar-stool-with-backrest-black-black__0948110_pe798867_s5.jpg',
    price: 24.99,
    raiting: 4,
    reviews: 41,
  },
  {
    id: 3,
    name: 'INGOLF',
    summary: 'Bar stool with backrest, white, 24 3/4 "',
    description:
      'Why not have the same style throughout your home? INGOLF series looks just as nice in the kitchen and dining room as in the bedroom or hallway. The solid wood construction holds up well.',
    image:
      'https://www.ikea.com/us/en/images/products/ingolf-bar-stool-with-backrest-white__0728062_pe736035_s5.jpg',
    price: 95,
    raiting: 4.2,
    reviews: 243,
  },
  {
    id: 4,
    name: 'GLENN',
    summary: 'Bar stool, white/chrome plated, 26 "',
    description:
      "A comfortable bar stool with clean lines in white and chrome. If you have several you can stack them – handy when it's time to sweep the floor or if you just want some more floor space.",
    image:
      'https://www.ikea.com/us/en/images/products/glenn-bar-stool-white-chrome-plated__0728083_pe736048_s5.jpg',
    price: 105,
    raiting: 4.6,
    reviews: 69,
  },
  {
    id: 5,
    name: 'EKEDALEN',
    summary: 'Bar stool with backrest, dark brown/Orrsta light gray, 24 3/8 "',
    description:
      'Big, bigger, biggest - our super comfy EKEDALEN chairs keep the conversation going until you ask the guests to leave. Available in 3 heights for a perfect match with EKEDALEN bar table or dining table.',
    image:
      'https://www.ikea.com/us/en/images/products/ekedalen-bar-stool-with-backrest-dark-brown-orrsta-light-gray__0657893_pe710024_s5.jpg',
    price: 90,
    raiting: 4.4,
    reviews: 34,
  },
  {
    id: 6,
    name: 'NORDVIKEN',
    summary: 'Bar stool with backrest, white, 24 3/8 "',
    description:
      'NORDVIKEN counter-height stool with a deepening in the seat and curved backrest will keep you comfortably seated for long conversations at the kitchen island. The look is easy to combine in any kitchen.',
    image:
      'https://www.ikea.com/us/en/images/products/nordviken-bar-stool-with-backrest-white__0714174_pe729957_s5.jpg',
    price: 95,
    raiting: 4.4,
    reviews: 34,
  },
  {
    id: 7,
    name: 'VOLFGANG',
    summary: 'Bar stool with backrest, chrome plated/Gunnared medium gray, 26 3/8 "',
    description:
      'A soft, padded seat with restful flexibility – that’s how it feels when you sit down for a nice long meal in VOLFGANG bar stool or dining chair – both are just as comfortable.',
    image:
      'https://www.ikea.com/us/en/images/products/nordviken-bar-stool-with-backrest-white__0714174_pe729957_s5.jpg',
    price: 140,
    raiting: 4.3,
    reviews: 7,
  },
  {
    id: 8,
    name: 'BERGMUND',
    summary: 'Bar stool with backrest, black/Glose black, 24 3/8 "',
    description:
      'Bar stools in the BERGMUND series offer cushiony comfort and many cover options, like this one in stylish black leather.',
    image:
      'https://www.ikea.com/us/en/images/products/bergmund-bar-stool-with-backrest-black-glose-black__0928322_pe789788_s5.jpg',
    price: 200,
    raiting: 4.7,
    reviews: 6,
  },
  {
    id: 9,
    name: 'NILSOLLE',
    summary: 'Bar stool, birch, 29 "',
    description: 'Easy to move thanks to the hole in the seat.',
    image:
      'https://www.ikea.com/us/en/images/products/nilsolle-bar-stool-birch__45919_pe142507_s5.jpg',
    price: 80,
    raiting: 3.5,
    reviews: 6,
  },
  {
    id: 10,
    name: 'HANSOLLE',
    summary: 'Bar stool, black-brown, 26 "',
    description:
      'Sit back and enjoy your dinner at the bar table. With an upholstered seat and back, this stool provides extra nice seating comfort.',
    image:
      'https://www.ikea.com/us/en/images/products/hansolle-bar-stool-black-brown__0987269_pe817486_s5.jpg',
    price: 170,
    raiting: 5,
    reviews: 5,
  },
];

const armchairs = [
  {
    id: 11,
    name: 'STRANDMON',
    summary: 'Wing chair, Nordvalla dark grey',
    description:
      'Bringing new life to an old favourite. We first introduced this chair in the 1950’s. Some 60 years later we brought it back into the range with the same craftsmanship, comfort and appearance. Enjoy!',
    image:
      'https://www.ikea.com/gb/en/images/products/strandmon-wing-chair-nordvalla-dark-grey__0325432_pe517964_s5.jpg',
    price: 229,
    raiting: 4.7,
    reviews: 196,
  },
  {
    id: 12,
    name: 'EKENÄSET',
    summary: 'Armchair, Kilanda light beige',
    description:
      'EKENÄSET armchair adds a stylish retro vibe to the room that’s inspired by 1950s Scandinavian design. The classic look goes anywhere in the home – and gives you sturdy and robust seating for many years.',
    image:
      'https://www.ikea.com/gb/en/images/products/ekenaeset-armchair-kilanda-light-beige__1109687_pe870153_s5.jpg',
    price: 199,
    raiting: 4.8,
    reviews: 24,
  },
  {
    id: 13,
    name: 'POÄNG',
    summary: 'Armchair, oak veneer/Knisa light beige',
    description: 'Layer-glued bent oak gives comfortable resilience.',
    image:
      'https://www.ikea.com/gb/en/images/products/poaeng-armchair-oak-veneer-knisa-light-beige__0571595_pe666981_s5.jpg',
    price: 80,
    raiting: 4.7,
    reviews: 23,
  },
  {
    id: 14,
    name: 'NOLMYRA',
    summary: 'Easy chair, birch veneer/grey',
    description:
      'NOLMYRA easy chair re-imagines comfort with mesh fabric stretched over the frame, making the need for foam unnecessary. The result is an elegantly engineered lounge chair at a low price.',
    image:
      'https://www.ikea.com/gb/en/images/products/nolmyra-easy-chair-birch-veneer-grey__0152020_pe310348_s5.jpg',
    price: 50,
    raiting: 3.4,
    reviews: 14,
  },
  {
    id: 15,
    name: 'EKENÄSET ',
    summary: 'Armchair, Jonsbyn black',
    description:
      'EKENÄSET armchair adds a stylish retro vibe to the room that’s inspired by 1950s Scandinavian design. The classic look goes anywhere in the home – and gives you sturdy and robust seating for many years.',
    image:
      'https://www.ikea.com/gb/en/images/products/ekenaeset-armchair-jonsbyn-black__1109680_pe870147_s5.jpg',
    price: 250,
    raiting: null,
    reviews: null,
  },
];

const tables = [
  {
    id: 16,
    name: 'RÖNNINGE',
    summary: 'Bar table, birch, 29 1/2x29 1/2 "',
    description:
      'A stable construction in solid wood and hardwood veneer that makes each table unique, with varying grain patterns and natural color shifts that are part of the charm of wood.',
    image:
      'https://www.ikea.com/us/en/images/products/roenninge-bar-table-birch__1044552_pe842223_s5.jpg',
    price: 279,
    raiting: 5,
    reviews: 1,
  },
  {
    id: 17,
    name: 'TOMMARYD',
    summary: 'Table, white, 51 1/8x27 1/2 "',
    description:
      'This table suits both homes and businesses demanding everyday strength and durability. Easy to place in a kitchen, dining room, café or meeting room. The clean design combines well with many styles.',
    image:
      'https://www.ikea.com/us/en/images/products/tommaryd-table-white-stained-oak-veneer-anthracite__0898690_pe782584_s5.jpg',
    price: 279,
    raiting: 5,
    reviews: 10,
  },
  {
    id: 18,
    name: 'LAGKAPTEN / ALEX',
    summary: 'Desk, white, 55 1/8x23 5/8 "',
    description:
      'Limited space doesn’t mean you have to say no to studying or working from home. This desk takes up little floor space yet still has two drawer units where you can store papers and other items.',
    image:
      'https://www.ikea.com/us/en/images/products/lagkapten-alex-desk-white__1022432_pe832720_s5.jpg?',
    price: 259,
    raiting: 4.6,
    reviews: 95,
  },
];

const beds = [
  {
    id: 19,
    name: 'KLEPPSTAD',
    summary: 'Bed frame, white/Vissle beige, Full/Double',
    description:
      'KLEPPSTAD has a stylish and modern design with a metal bed frame and a cozy textile headboard. Easy to both buy and take home since it’s sold as two compact packages. So practical and ',
    image:
      'https://www.ikea.com/us/en/images/products/kleppstad-bed-frame-white-vissle-beige__1035340_pe840527_s5.jpg?',
    price: 169,
    raiting: 4.6,
    reviews: 36,
  },
];

const isPopular = (product) => product?.reviews >= 20 && product?.raiting >= 4.5;

const popular = chairs.concat(armchairs).concat(tables).concat(beds).filter(isPopular);

const mocks = {
  user,
  orders,
  shippingAddresses,
  paymentCards,
  products: { popular, chairs, armchairs, tables, beds },
};

export default mocks;
