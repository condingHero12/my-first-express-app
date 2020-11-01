// // const stripe = stripe(
// //   'pk_test_51HZr4TDbCjxMDnj25LdvNeNg8OhRRkH2FOaube26VUNRdSDhJfzJlSnEW2yyhErxDxJUsIkgZlXn5jzjB6bF6YT300qzecwEnd'
// // );

// // import axios from 'axios';
// // import { showAlert } from './alerts.js';

// // export const bookTour = async tourId => {
// //   try {
// //     //1/ get the checkout session from api
// //     const session = await axios(
// //       `http://127.0.0.1:3000/api/v1/bookings/checkout-session/${tourId}`
// //     );

// //     //2 create checkout form  + charse credit card

// //     await stripe.redirectToCheckout({
// //       sessionId: session.data.session.id
// //     });
// //   } catch (err) {
// //     console.log(err);
// //     showAlert('error', err);
// //   }
// // };

/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';
const stripe = Stripe(
  'pk_test_51HZr4TDbCjxMDnj25LdvNeNg8OhRRkH2FOaube26VUNRdSDhJfzJlSnEW2yyhErxDxJUsIkgZlXn5jzjB6bF6YT300qzecwEnd'
);

export const bookTour = async tourId => {
  try {
    // 1) Get checkout session from API
    const session = await axios(
      `http://127.0.0.1:3000/api/v1/bookings/checkout-session/${tourId}`
    );
    console.log(session);

    // 2) Create checkout form + chanre credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id
    });
  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
};
