"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import UserProfile from "../components/UserProfile";
import Link from "next/link";
import Button from "../components/Button";

export default function MembershipPage() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const router = useRouter();

  useEffect(() => {
    const verifyAuth = async () => {
      try {
        const response = await fetch("/api/auth/verify", {
          credentials: "include",
        });

        if (!response.ok) {
          throw new Error("Authentication failed");
        }

        const data = await response.json();
        setUserData(data.user);
      } catch (err) {
        setError(err.message);
        router.push("/login");
      } finally {
        setLoading(false);
      }
    };

    verifyAuth();
  }, [router]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-red-50 border-l-4 border-red-500 p-4 max-w-md">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg
                className="h-5 w-5 text-red-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-red-700">{error}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 flex justify-between items-baseline flex-wrap gap-2">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">
              Welcome to Your Membership Dashboard
            </h2>
            <p className="mt-2 text-lg text-gray-600">
              Here are your membership details
            </p>
          </div>
          <div className="mt-6">
            <Link href="/members">
              <Button
                text="View Members"
                bgColor="var(--primary)"
                color="var(--color-white)"
                hoverBgColor="var(--secondary)"
                hoverTextColor="var(--color-black)"
              />
            </Link>
          </div>
        </div>

        {userData && <UserProfile user={userData} />}
      </div>
    </div>
  );
}
