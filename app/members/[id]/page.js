"use client";
import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import UserProfileForm from "../../components/UserProfileForm";
import Link from "next/link";

export default function MemberDetailPage() {
  const [member, setMember] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [isCurrentUser, setIsCurrentUser] = useState(false);
  const router = useRouter();
  const params = useParams();

  useEffect(() => {
    const fetchMember = async () => {
      try {
        // First verify current user
        const authResponse = await fetch("/api/auth/verify", {
          credentials: "include",
        });

        if (!authResponse.ok) {
          const authError = await authResponse.json();
          throw new Error(authError.error || "Authentication failed");
        }

        const authData = await authResponse.json();
        setIsCurrentUser(authData.user._id === params.id);

        // Then fetch member data
        const response = await fetch(`/api/members/${params.id}`, {
          credentials: "include",
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || "Failed to fetch member");
        }

        const data = await response.json();
        setMember(data.member);
      } catch (err) {
        console.error("Fetch error:", err);
        setError(err.message);
        if (err.message.includes("Authentication")) {
          router.push("/login");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchMember();
  }, [params.id, router]);

  const handleUpdate = async (updatedData) => {
    try {
      const response = await fetch(`/api/members/${params.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedData),
        credentials: "include",
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to update member");
      }

      const data = await response.json();
      setMember(data.member);
      alert("Profile updated successfully!");
    } catch (err) {
      console.error("Update error:", err);
      setError(err.message);
    }
  };

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
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 flex justify-between items-center flex-wrap gap-2">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">
              {isCurrentUser ? "Your Profile" : "Member Details"}
            </h2>
            <p className="mt-2 text-lg text-gray-600">
              {isCurrentUser
                ? "View and edit your profile"
                : "View member information"}
            </p>
          </div>
          <div>
            <Link href={`/members`}>
              <button
                type="submit"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium shadow-sm !text-gray-900 bg-secondary hover:bg-primary hover:!text-white transition-all duration-200"
              >
                View Members
              </button>
            </Link>
          </div>
        </div>

        {member && (
          <UserProfileForm
            user={member}
            onUpdate={handleUpdate}
            isEditable={isCurrentUser}
          />
        )}
      </div>
    </div>
  );
}
