import mercadopago from "mercadopago"

const preference ={
  "items": [
    {
      "title": "Donation",
      "quantity": 1,
      "currency_id": "ARS",
      "unit_price": 1000
    }
  ],
  "back_urls": {},
 
}

mercadopago.preferences
  .create(preference)
  .then(function (response) {
    // En esta instancia deberás asignar el valor dentro de response.body.id por el ID de preferencia solicitado en el siguiente paso
  })
  .catch(function (error) {
    console.log(error);
  });
