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

const mocks = { user, orders, shippingAddresses, paymentCards };

export default mocks;
