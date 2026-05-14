"use client";
import { useState, useEffect, useRef } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useRouter } from "next/navigation";
import Button from "../components/Button";
import Styles from "../register/RegsiterForm.module.css";
import Link from "next/link";

export default function DonationForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    amount: "",
    isRecurring: false,
    recurringFrequency: "monthly",
    agreeTerms: false,
  });

  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [formValid, setFormValid] = useState(false);
  const [showPaymentOptions, setShowPaymentOptions] = useState(false);
  const [paypalReady, setPaypalReady] = useState(false);
  const router = useRouter();
  const successMessageRef = useRef(null);

  const suggestedAmounts = [50, 100, 250, 500, 1000];

  // Validate form
  useEffect(() => {
    const isValid =
      formData.firstName &&
      formData.lastName &&
      formData.email &&
      formData.amount &&
      !isNaN(parseFloat(formData.amount)) &&
      parseFloat(formData.amount) > 0 &&
      formData.agreeTerms;

    setFormValid(isValid);
  }, [formData]);

  useEffect(() => {
    if (paymentSuccess && successMessageRef.current) {
      successMessageRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [paymentSuccess]);
  // Initialize PayPal when showing payment options
  useEffect(() => {
    if (showPaymentOptions) {
      setPaypalReady(true);
    }
  }, [showPaymentOptions]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSuggestedAmount = (amount) => {
    setFormData((prev) => ({
      ...prev,
      amount: amount.toString(),
    }));
  };

  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: formData.amount,
            currency_code: "USD",
          },
          description: `ATMA Charitable Donation`,
        },
      ],
    });
  };

  const onApprove = async (data, actions) => {
    try {
      const details = await actions.order.capture();

      // Store donation in database and send emails
      const response = await fetch("/api/donations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          transactionId: details.id,
          paymentStatus: "completed",
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to process donation");
      }

      setPaymentSuccess(true);
    } catch (error) {
      console.error("Payment processing failed:", error);
      alert("There was an error processing your donation. Please try again.");
      setShowPaymentOptions(false);
    }
  };

  if (paymentSuccess) {
    return (
      <div
        ref={successMessageRef}
        className="max-w-md min-h-auto mx-auto mt-10 px-8 py-20 bg-green-50 rounded-lg shadow-md text-center"
      >
        <h2 className="text-2xl font-bold text-green-700 mb-4">
          Donation Successful!
        </h2>
        <p className="text-gray-700 mb-4">
          Thank you for your generous donation of ${formData.amount} to ATMA. A
          receipt has been sent to your email.
        </p>
        <div className="mt-6">
          <Link href="/">
            <Button
              text="Return to ATMA Website"
              onClick={() => router.push("/")}
              bgColor="var(--secondary)"
              color="var(--color-white)"
            />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={`-mt-10 md:-mt-28`}>
      <div className="container">
        <form className=" bg-white shadow-lg relative z-1">
          {/* Donor Information Section */}
          <div className="space-y-4 p-6 2xl:p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  className={`${Styles.label} block text-sm font-medium text-gray-700`}
                >
                  First Name<span className="text-[#dc1d46]">*</span>
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className={`${Styles.input} mt-1 block w-full rounded-md border-gray-300 shadow-sm border`}
                  required
                />
              </div>

              <div>
                <label
                  className={`${Styles.label} block text-sm font-medium text-gray-700`}
                >
                  Last Name<span className="text-[#dc1d46]">*</span>
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className={`${Styles.input} mt-1 block w-full rounded-md border-gray-300 shadow-sm border`}
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  className={`${Styles.label} block text-sm font-medium text-gray-700`}
                >
                  Email<span className="text-[#dc1d46]">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`${Styles.input} mt-1 block w-full rounded-md border-gray-300 shadow-sm border`}
                  required
                />
              </div>

              <div>
                <label
                  className={`${Styles.label} block text-sm font-medium text-gray-700`}
                >
                  Phone<span className="text-[#dc1d46]">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`${Styles.input} mt-1 block w-full rounded-md border-gray-300 shadow-sm border`}
                  required
                />
              </div>
            </div>

            <div>
              <label
                className={`${Styles.label} block text-sm font-medium text-gray-700`}
              >
                Address
              </label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className={`${Styles.input} mt-1 block w-full rounded-md border-gray-300 shadow-sm border`}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label
                  className={`${Styles.label} block text-sm font-medium text-gray-700`}
                >
                  City
                </label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className={`${Styles.input} mt-1 block w-full rounded-md border-gray-300 shadow-sm border`}
                />
              </div>

              <div>
                <label
                  className={`${Styles.label} block text-sm font-medium text-gray-700`}
                >
                  State
                </label>
                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  className={`${Styles.input} mt-1 block w-full rounded-md border-gray-300 shadow-sm border`}
                />
              </div>

              <div>
                <label
                  className={`${Styles.label} block text-sm font-medium text-gray-700`}
                >
                  Zip Code
                </label>
                <input
                  type="text"
                  name="zip"
                  value={formData.zip}
                  onChange={handleChange}
                  className={`${Styles.input} mt-1 block w-full rounded-md border-gray-300 shadow-sm border`}
                />
              </div>
            </div>
          </div>

          {/* Donation Details Section */}
          <div className="space-y-4 p-6 2xl:p-10">
            <h3 className="text-xl font-semibold text-gray-800 border-b pb-2">
              Donation Details
            </h3>

            <div className="mt-4">
              <label
                className={`${Styles.label} block text-sm font-medium text-gray-700 mb-2`}
              >
                Donation Amount (USD)<span className="text-[#dc1d46]">*</span>
              </label>

              <div className="flex flex-wrap gap-2 mb-4">
                {suggestedAmounts.map((amount) => (
                  <button
                    key={amount}
                    type="button"
                    onClick={() => handleSuggestedAmount(amount)}
                    className={`px-4 py-2 rounded-md border ${
                      formData.amount === amount.toString()
                        ? "bg-[#dc1d46] !text-white border-[#dc1d46]"
                        : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                    }`}
                  >
                    ${amount}
                  </button>
                ))}
              </div>

              <div className="relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-1 flex items-center pointer-events-none">
                  <span className="text-gray-500 sm:text-sm">$</span>
                </div>
                <input
                  type="text"
                  name="amount"
                  value={formData.amount}
                  onChange={handleChange}
                  className={`${Styles.input} block w-full pl-16 pr-12 py-2 border-gray-300 rounded-md`}
                  placeholder="0.00"
                  required
                />
                <div className="absolute inset-y-0 right-0 flex items-center">
                  <span className="text-gray-500 sm:text-sm pr-3">USD</span>
                </div>
              </div>
            </div>

            <div className="mt-4">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="isRecurring"
                  id="isRecurring"
                  checked={formData.isRecurring}
                  onChange={handleChange}
                  className={`${Styles.circle} h-4 w-4 text-[#dc1d46] focus:ring-[#dc1d46] border-gray-300`}
                />
                <label
                  htmlFor="isRecurring"
                  className={`${Styles.label} ml-2 block text-sm text-gray-700`}
                >
                  Make this a recurring donation
                </label>
              </div>

              {formData.isRecurring && (
                <div className="mt-2 ml-6">
                  <label
                    className={`${Styles.label} block text-sm font-medium text-gray-700 mb-1`}
                  >
                    Frequency
                  </label>
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center">
                      <input
                        type="radio"
                        name="recurringFrequency"
                        id="frequency-monthly"
                        value="monthly"
                        checked={formData.recurringFrequency === "monthly"}
                        onChange={handleChange}
                        className={`${Styles.circle} h-4 w-4 text-[#dc1d46] focus:ring-[#dc1d46] border-gray-300`}
                      />
                      <label
                        htmlFor="frequency-monthly"
                        className={`${Styles.label} ml-2 block text-sm text-gray-700`}
                      >
                        Monthly
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        name="recurringFrequency"
                        id="frequency-quarterly"
                        value="quarterly"
                        checked={formData.recurringFrequency === "quarterly"}
                        onChange={handleChange}
                        className={`${Styles.circle} h-4 w-4 text-[#dc1d46] focus:ring-[#dc1d46] border-gray-300`}
                      />
                      <label
                        htmlFor="frequency-quarterly"
                        className={`${Styles.label} ml-2 block text-sm text-gray-700`}
                      >
                        Quarterly
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        name="recurringFrequency"
                        id="frequency-yearly"
                        value="yearly"
                        checked={formData.recurringFrequency === "yearly"}
                        onChange={handleChange}
                        className={`${Styles.circle} h-4 w-4 text-[#dc1d46] focus:ring-[#dc1d46] border-gray-300`}
                      />
                      <label
                        htmlFor="frequency-yearly"
                        className={`${Styles.label} ml-2 block text-sm text-gray-700`}
                      >
                        Yearly
                      </label>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Terms and Conditions */}
          <div className="p-6 2xl:p-10">
            <div className="flex items-start">
              <div className="flex items-center mt-2">
                <input
                  type="checkbox"
                  name="agreeTerms"
                  id="agreeTerms"
                  checked={formData.agreeTerms}
                  onChange={handleChange}
                  className={`${Styles.circle} text-[#dc1d46] focus:ring-[#dc1d46] border-gray-300 rounded`}
                  required
                />
              </div>
              <label
                htmlFor="agreeTerms"
                className={`${Styles.label} ml-3 block text-sm text-gray-700`}
              >
                I understand that my donation to the American Tamil Medical
                Association (ATMA) is tax-deductible to the extent allowed by
                law. ATMA is a 501(c)(3) nonprofit organization. No goods or
                services were provided in exchange for this contribution. I
                authorize ATMA to use my contact information to send updates
                about their work (I may unsubscribe at any time).
              </label>
            </div>
          </div>

          {/* Payment Section */}
          <div className="p-6 2xl:p-10 bg-white border-t border-gray-200">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Payment
            </h3>
            <p className="text-lg font-medium mb-4">
              Donation Amount: ${formData.amount || "0.00"}
            </p>

            {!showPaymentOptions ? (
              <div className="text-left">
                <button
                  type="button"
                  onClick={() => {
                    if (!formValid) {
                      alert(
                        "Please fill all required fields before proceeding to payment"
                      );
                      return;
                    }
                    setShowPaymentOptions(true);
                  }}
                  className="px-6 py-3 bg-[#dc1d46] !text-white hover:bg-[#f6f5f1] hover:!text-black"
                >
                  Proceed to Payment
                </button>
              </div>
            ) : (
              <div className="max-w-md mx-auto">
                {paypalReady && (
                  <PayPalScriptProvider
                    options={{
                      "client-id": process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID,
                      currency: "USD",
                      intent: "capture",
                      "data-sdk-integration-source": "integrationbuilder_sc",
                      components: "buttons,funding-eligibility",
                    }}
                  >
                    <PayPalButtons
                      style={{
                        layout: "vertical",
                        color: "gold",
                        shape: "rect",
                        label: "paypal",
                        height: 48,
                      }}
                      createOrder={createOrder}
                      onApprove={onApprove}
                      onError={(err) => {
                        console.error("PayPal Error:", err);
                        setShowPaymentOptions(false);
                      }}
                      onCancel={() => {
                        console.log("Payment cancelled by user");
                        setShowPaymentOptions(false);
                      }}
                      forceReRender={[formData.amount]}
                    />
                  </PayPalScriptProvider>
                )}
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
