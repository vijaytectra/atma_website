"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { MdDeleteOutline } from "react-icons/md";

export default function MembersPage() {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [currentUserId, setCurrentUserId] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const authResponse = await fetch("/api/auth/verify", {
          credentials: "include",
        });

        if (!authResponse.ok) {
          const authError = await authResponse.json();
          throw new Error(authError.error || "Authentication failed");
        }

        const authData = await authResponse.json();
        setCurrentUserId(authData.user._id);

        const membersResponse = await fetch("/api/members", {
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!membersResponse.ok) {
          const membersError = await membersResponse.json();
          throw new Error(membersError.error || "Failed to fetch members");
        }

        const membersData = await membersResponse.json();
        setMembers(membersData.members);
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

    fetchMembers();
  }, [router]);

  const handleDelete = async (memberId) => {
    if (window.confirm("Are you sure you want to delete your account?")) {
      try {
        const response = await fetch(`/api/members/${memberId}`, {
          method: "DELETE",
          credentials: "include",
        });

        if (!response.ok) {
          throw new Error("Failed to delete member");
        }

        if (memberId === currentUserId) {
          router.push("/");
        } else {
          const membersResponse = await fetch("/api/members", {
            credentials: "include",
          });
          const membersData = await membersResponse.json();
          setMembers(membersData.members);
        }
      } catch (err) {
        setError(err.message);
      }
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
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">ATMA Members</h2>
          <p className="mt-2 text-lg text-gray-600">
            List of all registered members
          </p>
        </div>

        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="overflow-x-auto">
            <table className="min-w-[1700px] divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Email
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Contact
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Address
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Training Level
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Speciality
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Membership
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {members.map((member) => (
                  <tr
                    key={member._id}
                    className={`hover:bg-gray-50 ${
                      member._id === currentUserId ? "bg-blue-50" : ""
                    }`}
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="text-sm font-medium text-gray-900">
                          {member.firstName} {member.lastName}
                        </div>
                      </div>
                      <div className="text-sm text-gray-500">
                        {member.gender} •{" "}
                        {new Date(member.dateOfBirth).toLocaleDateString()}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {member.email}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <div>Mobile: {member.mobilePhone}</div>
                      {member.officePhone && (
                        <div>Office: {member.officePhone}</div>
                      )}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      <div>{member.address}</div>
                      <div>
                        {member.city}, {member.state} {member.zip}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {member.trainingLevel}
                      {member.trainingLevel === "Young Physician" &&
                        member.isYoungPhysicianUnder40 && (
                          <div className="text-xs text-gray-400">
                            (Under 40)
                          </div>
                        )}
                      {(member.trainingLevel === "Resident" ||
                        member.trainingLevel === "Fellow") && (
                        <div className="text-xs text-gray-400">
                          {member.anticipatedCompletion &&
                            `Completing ${member.anticipatedCompletion}`}
                        </div>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <div>{member.primarySpeciality}</div>
                      {member.completionSpeciality && (
                        <div className="text-xs text-gray-400">
                          Completing in: {member.completionSpeciality}
                        </div>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 capitalize">
                      {member.membershipType.replace(/([A-Z])/g, " $1").trim()}
                      <div className="text-xs text-gray-400">
                        Grad: {member.gradYear}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      {member._id === currentUserId ? (
                        <div className="flex space-x-2">
                          <Link
                            href={`/members/${member._id}`}
                            className="text-blue-600 hover:text-blue-900"
                          >
                            View/Edit
                          </Link>
                          <button
                            onClick={() => handleDelete(member._id)}
                            className="!text-red-600 hover:!text-red-900 flex items-center"
                          >
                            <MdDeleteOutline /> Delete
                          </button>
                        </div>
                      ) : (
                        <span className="text-gray-400">View Only</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
