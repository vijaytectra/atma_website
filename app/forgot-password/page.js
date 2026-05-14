"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Styles from "../register/RegsiterForm.module.css";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [step, setStep] = useState(1); // 1 = email entry, 2 = password reset
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmitEmail = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("/api/check-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      if (response.ok) {
        setStep(2); // Move to password reset step
        alert("Email verified. Please set your new password.");
      } else {
        alert(data.error || "Email not found in our system");
      }
    } catch (error) {
      alert("Failed to verify email");
    } finally {
      setIsLoading(false);
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    if (newPassword.length < 8) {
      alert("Password must be at least 8 characters");
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("/api/reset-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, newPassword }),
      });

      const data = await response.json();
      if (response.ok) {
        alert("Password changed successfully!");
        router.push("/login");
      } else {
        alert(data.error || "Failed to reset password");
      }
    } catch (error) {
      alert("Failed to connect to server");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={`${Styles.registerForm} bg-gray-200 rounded-lg shadow-md`}>
      <div className="container">
        <div className="mb-8">
          <h3 className="text-3xl font-bold text-gray-800 mb-2">
            {step === 1 ? "Forgot Password" : "Reset Password"}
          </h3>
          <p className="text-gray-600">
            {step === 1
              ? "Enter your email to reset your password"
              : "Enter your new password"}
          </p>
        </div>

        <form
          onSubmit={step === 1 ? handleSubmitEmail : handleResetPassword}
          className="space-y-6"
        >
          <div className="space-y-4 p-6 2xl:p-10 bg-gray-50 rounded-lg">
            {step === 1 ? (
              <div>
                <label
                  className={`${Styles.label} block text-sm font-medium text-gray-700`}
                >
                  Email Address<span className="text-[#dc1d46]">*</span>
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`${Styles.input} mt-1 block w-full rounded-md border-gray-300 shadow-sm border`}
                  required
                />
              </div>
            ) : (
              <>
                <div>
                  <label
                    className={`${Styles.label} block text-sm font-medium text-gray-700`}
                  >
                    New Password<span className="text-[#dc1d46]">*</span>
                  </label>
                  <input
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className={`${Styles.input} mt-1 block w-full rounded-md border-gray-300 shadow-sm border`}
                    required
                    minLength="8"
                  />
                </div>

                <div>
                  <label
                    className={`${Styles.label} block text-sm font-medium text-gray-700`}
                  >
                    Confirm New Password
                    <span className="text-[#dc1d46]">*</span>
                  </label>
                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className={`${Styles.input} mt-1 block w-full rounded-md border-gray-300 shadow-sm border`}
                    required
                    minLength="8"
                  />
                </div>
              </>
            )}

            <div className="flex items-center justify-between">
              <button
                type="submit"
                disabled={isLoading}
                className="px-6 py-3 bg-[#dc1d46] !text-white hover:bg-[#f6f5f1] hover:!text-black disabled:opacity-50"
              >
                {isLoading
                  ? step === 1
                    ? "Checking..."
                    : "Resetting..."
                  : step === 1
                  ? "Continue"
                  : "Reset Password"}
              </button>

              <Link
                href="/login"
                className="text-sm text-[#dc1d46] hover:underline"
              >
                Back to Login
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
