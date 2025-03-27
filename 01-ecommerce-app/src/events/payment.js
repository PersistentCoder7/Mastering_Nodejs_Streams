export default class Payment {
    constructor(subject) {
        this.paymentSubject = subject;
    }

    creditCard(paymentData) {
        console.log("Payment: Credit card payment was successful: ", paymentData);
        this.paymentSubject.notify(paymentData);
    }
}
