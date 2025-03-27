import { expect, describe, test, jest } from "@jest/globals";
import Payment from "../src/events/payment.js";
import Marketing from "../src/observers/marketing.js";
import Shipment from "../src/observers/shipment.js";
import PaymentSubject from "../src/subjects/paymentSubject.js";

describe("Test suite for Observation Pattern", () => {
  test("#PaymentSubject notify observers", () => {
    const subject = new PaymentSubject();
    const observer = {
      update: jest.fn(),
    };
    const data = "hello world";
    subject.subscribe(observer);
    subject.notify(data);
    expect(observer.update).toHaveBeenCalledWith(data);
  });

  test("#PaymentSubject should not notify unsubscribed observers", () => {
    const subject = new PaymentSubject();
    const observer = {
      update: jest.fn(),
    };
    const data = "hello world";
    subject.subscribe(observer);
    subject.unsubscribe(observer);
    subject.notify(data);

    expect(observer.update).not.toHaveBeenCalled();
  });

  test("#Payment should notify PaymentSubject after a credit card payment", () => {
    const subject = new PaymentSubject();
    const payment = new Payment(subject);

    const paymentSubjectNotifySpy = jest.spyOn(subject, "notify");
    payment.creditCard(100);
    expect(paymentSubjectNotifySpy).toHaveBeenCalledWith(100);
  });
  test("#All should notify subscribers after a credit card payment", () => {
    const subject = new PaymentSubject();
    const payment = new Payment(subject);
    const marketing = new Marketing();
    const shipment = new Shipment();
    subject.subscribe(marketing);
    subject.subscribe(shipment);
    const marketingNotifySpy = jest.spyOn(marketing, "update");
    const shipmentNotifySpy = jest.spyOn(shipment, "update");
    payment.creditCard(100);
    expect(marketingNotifySpy).toHaveBeenCalledWith(100);
    expect(shipmentNotifySpy).toHaveBeenCalledWith(100);
  });
});
