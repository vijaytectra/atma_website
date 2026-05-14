"use client";
import { useState } from "react";
import { format } from "date-fns";

export default function UserProfileForm({ user, onUpdate, isEditable }) {
  const [formData, setFormData] = useState({
    firstName: user.firstName,
    lastName: user.lastName,
    address: user.address,
    city: user.city,
    state: user.state,
    zip: user.zip,
    gender: user.gender,
    mobilePhone: user.mobilePhone,
    officePhone: user.officePhone || "",
    email: user.email,
    dateOfBirth: format(new Date(user.dateOfBirth), "yyyy-MM-dd"),
    gradYear: user.gradYear,
    residencyInstitution: user.residencyInstitution || "",
    fellowshipInstitution: user.fellowshipInstitution || "",
    primarySpeciality: user.primarySpeciality,
    trainingLevel: user.trainingLevel,
    isYoungPhysicianUnder40: user.isYoungPhysicianUnder40 || false,
    anticipatedCompletion: user.anticipatedCompletion || "",
    completionSpeciality: user.completionSpeciality || "",
    membershipType: user.membershipType,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(formData);
  };

  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <form onSubmit={handleSubmit}>
        <div className="px-4 py-5 sm:px-6 bg-gray-50 flex justify-between items-center flex-wrap gap-2">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Personal Information
          </h3>
          {isEditable && (
            <div className="mt-2 flex justify-end">
              <button
                type="submit"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium shadow-sm !text-white bg-primary hover:bg-secondary hover:!text-gray-900 transition-all duration-200"
              >
                Save Changes
              </button>
            </div>
          )}
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
          <dl className="sm:divide-y sm:divide-gray-200">
            {/* Personal Information Section */}
            <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Full name</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {isEditable ? (
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                      required
                    />
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                      required
                    />
                  </div>
                ) : (
                  `${user.firstName} ${user.lastName}`
                )}
              </dd>
            </div>

            <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Email address
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {isEditable ? (
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                    required
                  />
                ) : (
                  user.email
                )}
              </dd>
            </div>

            <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Address</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {isEditable ? (
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                    required
                  />
                ) : (
                  user.address
                )}
              </dd>
            </div>

            <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                City/State/Zip
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {isEditable ? (
                  <div className="grid grid-cols-3 gap-4">
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                      required
                    />
                    <input
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                      required
                    />
                    <input
                      type="text"
                      name="zip"
                      value={formData.zip}
                      onChange={handleChange}
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                      required
                    />
                  </div>
                ) : (
                  `${user.city}, ${user.state} ${user.zip}`
                )}
              </dd>
            </div>

            <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Gender</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {isEditable ? (
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                    required
                  >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                ) : (
                  user.gender
                )}
              </dd>
            </div>

            <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Contact Numbers
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {isEditable ? (
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="tel"
                      name="mobilePhone"
                      value={formData.mobilePhone}
                      onChange={handleChange}
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                      required
                      placeholder="Mobile Phone"
                    />
                    <input
                      type="tel"
                      name="officePhone"
                      value={formData.officePhone}
                      onChange={handleChange}
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                      placeholder="Office Phone (optional)"
                    />
                  </div>
                ) : (
                  <>
                    Mobile: {user.mobilePhone}
                    {user.officePhone && ` | Office: ${user.officePhone}`}
                  </>
                )}
              </dd>
            </div>

            <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Date of Birth
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {isEditable ? (
                  <input
                    type="date"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                    required
                  />
                ) : (
                  format(new Date(user.dateOfBirth), "MMMM d, yyyy")
                )}
              </dd>
            </div>

            {/* Education & Training Section */}
            <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Medical School Graduation Year
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {isEditable ? (
                  <input
                    type="number"
                    name="gradYear"
                    value={formData.gradYear}
                    onChange={handleChange}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                    required
                  />
                ) : (
                  user.gradYear
                )}
              </dd>
            </div>

            <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Primary Speciality
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {isEditable ? (
                  <input
                    type="text"
                    name="primarySpeciality"
                    value={formData.primarySpeciality}
                    onChange={handleChange}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                    required
                  />
                ) : (
                  user.primarySpeciality
                )}
              </dd>
            </div>

            <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Residency Institution
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {isEditable ? (
                  <input
                    type="text"
                    name="residencyInstitution"
                    value={formData.residencyInstitution}
                    onChange={handleChange}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  />
                ) : (
                  user.residencyInstitution || "N/A"
                )}
              </dd>
            </div>

            <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Fellowship Institution
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {isEditable ? (
                  <input
                    type="text"
                    name="fellowshipInstitution"
                    value={formData.fellowshipInstitution}
                    onChange={handleChange}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  />
                ) : (
                  user.fellowshipInstitution || "N/A"
                )}
              </dd>
            </div>

            {/* Training Level Section */}
            <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Training Level
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {isEditable ? (
                  <select
                    name="trainingLevel"
                    value={formData.trainingLevel}
                    onChange={handleChange}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                    required
                  >
                    <option value="">Select Training Level</option>
                    <option value="Attending">Attending</option>
                    <option value="Young Physician">Young Physician</option>
                    <option value="Fellow">Fellow</option>
                    <option value="Resident">Resident</option>
                    <option value="Medical Student">Medical Student</option>
                  </select>
                ) : (
                  user.trainingLevel
                )}
              </dd>
            </div>

            {formData.trainingLevel === "Young Physician" && (
              <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Under 40</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  {isEditable ? (
                    <input
                      type="checkbox"
                      name="isYoungPhysicianUnder40"
                      checked={formData.isYoungPhysicianUnder40}
                      onChange={handleChange}
                      className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                  ) : user.isYoungPhysicianUnder40 ? (
                    "Yes"
                  ) : (
                    "No"
                  )}
                </dd>
              </div>
            )}

            {(formData.trainingLevel === "Medical Student" ||
              formData.trainingLevel === "Resident" ||
              formData.trainingLevel === "Fellow") && (
              <>
                <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Anticipated Completion Year
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                    {isEditable ? (
                      <input
                        type="number"
                        name="anticipatedCompletion"
                        value={formData.anticipatedCompletion}
                        onChange={handleChange}
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                      />
                    ) : (
                      user.anticipatedCompletion || "N/A"
                    )}
                  </dd>
                </div>
                {(formData.trainingLevel === "Resident" ||
                  formData.trainingLevel === "Fellow") && (
                  <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                      Completion Speciality
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                      {isEditable ? (
                        <input
                          type="text"
                          name="completionSpeciality"
                          value={formData.completionSpeciality}
                          onChange={handleChange}
                          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                        />
                      ) : (
                        user.completionSpeciality || "N/A"
                      )}
                    </dd>
                  </div>
                )}
              </>
            )}

            {/* Membership Information */}
            <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Membership Type
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {isEditable ? (
                  <select
                    name="membershipType"
                    value={formData.membershipType}
                    onChange={handleChange}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                    required
                  >
                    <option value="">Select Membership Type</option>
                    <option value="lifetime">Lifetime Membership</option>
                    <option value="medicalStudent">Medical Student</option>
                    <option value="alliedHealth">Allied Health</option>
                  </select>
                ) : (
                  formData.membershipType.replace(/([A-Z])/g, " $1").trim()
                )}
              </dd>
            </div>
          </dl>
        </div>
      </form>
    </div>
  );
}
