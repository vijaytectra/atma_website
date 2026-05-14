"use client";

import { useEffect, useRef } from "react";

const PayPalButton = ({ amount, onSuccess, onError }) => {
  const paypalRef = useRef();

  useEffect(() => {
    const clientId = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID;
    if (!clientId) {
      console.error("PayPal Client ID is missing.");
      onError("PayPal Client ID is missing.");
      return;
    } else {
      console.log("PayPal Client ID:", clientId);
    }

    const script = document.createElement("script");
    script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}&currency=USD`;
    script.async = true;

    script.onload = () => {
      if (window.paypal && paypalRef.current) {
        window.paypal
          .Buttons({
            createOrder: (data, actions) => {
              return actions.order.create({
                purchase_units: [{ amount: { value: amount || "1.00" } }],
              });
            },
            onApprove: (data, actions) => {
              return actions.order.capture().then(() => {
                if (onSuccess) onSuccess();
              });
            },
            onError: (err) => {
              console.error("PayPal Button error:", err);
              if (onError) onError(err);
            },
          })
          .render(paypalRef.current);
      } else {
        console.error("PayPal SDK did not load as expected.");
        if (onError) onError("PayPal SDK did not load.");
      }
    };

    script.onerror = (error) => {
      console.error("Failed to load PayPal SDK:", error);
      if (onError) onError("Failed to load PayPal SDK.");
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [amount, onSuccess, onError]);

  return <div ref={paypalRef} id="paypal-button-container"></div>;
};

export default PayPalButton;
