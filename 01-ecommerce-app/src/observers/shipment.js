export default class Shipment {
  update({ id, description }) {
    console.log(
      "Shipment: The payment with the following data was successful: ",
      id,
      description
    );
  }
}
