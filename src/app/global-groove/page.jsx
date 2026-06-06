"use client";
import React, { useState } from "react";
import "./global-groove.css";

const GlobalGrooveDeletion = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [reason, setReason] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const email = e.target.email.value;
    const selectedReason = e.target.reason.value;
    const otherReason = e.target.otherReason ? e.target.otherReason.value : "";

    const finalReason = selectedReason === "Other" ? `Other: ${otherReason}` : selectedReason;

    const data = {
      email: email,
      subject: "Global Groove - Account Deletion Request",
      message: `User ${email} has requested account deletion.\nReason: ${finalReason}`,
    };

    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    try {
      const response = await fetch(endpoint, options);
      if (response.status === 200) {
        setEmailSubmitted(true);
      } else {
        alert("Failed to send request. Please try again later.");
      }
    } catch (error) {
      console.error("Error sending deletion request:", error);
      alert("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen flex-col bg-[#121212] font-sans">
      <div className="flex-grow flex items-center justify-center py-10 px-6">
        <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Side - App Info */}
          <div className="space-y-8 animate-fadeIn">
            <div className="space-y-4">
              <h1 className="text-5xl font-extrabold text-[#69fff8] tracking-tight">
                Global Groove
              </h1>
              <p className="text-xl text-[#ADB7BE] font-medium">
                The Ultimate Radio Player Experience
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="ngInfoCard p-6 rounded-3xl bg-[#121212] shadow-[6px_6px_12px_#0b0b0b,-6px_6px_12px_#191919]">
                <h3 className="text-[#69fff8] font-bold mb-2">Tech Stack</h3>
                <ul className="text-sm text-[#ADB7BE] space-y-1">
                  <li>• Flutter & Dart</li>
                  <li>• Firebase Auth</li>
                  <li>• RadioBrowser API</li>
                </ul>
              </div>
              <div className="ngInfoCard p-6 rounded-3xl bg-[#121212] shadow-[6px_6px_12px_#0b0b0b,-6px_6px_12px_#191919]">
                <h3 className="text-[#69fff8] font-bold mb-2">Features</h3>
                <ul className="text-sm text-[#ADB7BE] space-y-1">
                  <li>• 43,000+ Stations</li>
                  <li>• Neumorphic Design</li>
                  <li>• One-Tap Google Login</li>
                </ul>
              </div>
            </div>

            <div className="pt-4">
              <a
                href="https://play.google.com/store/apps/details?id=com.devwizards.global_groove"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-[#121212] text-white rounded-2xl shadow-[6px_6px_12px_#0b0b0b,-6px_-6px_12px_#191919] hover:shadow-[4px_4px_8px_#0b0b0b,-4px_-4px_8px_#191919] transition-all group"
              >
                <span className="mr-3 font-bold">View on Play Store</span>
                <svg className="w-5 h-5 text-[#69fff8] group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="ngCard animate-slideIn">
            {emailSubmitted ? (
              <div className="ngSuccessMessage">
                <h2 className="ngSuccessTitle">Request Received</h2>
                <p className="ngSuccessText">
                  We&apos;ve received your request to delete your Global Groove account and associated data.
                  Your request will be processed within 30 days.
                </p>
              </div>
            ) : (
              <>
                <h2 className="ngTitle text-3xl">Data Deletion</h2>
                <p className="ngSubtitle">
                  Request removal of your account and all associated data from our servers.
                </p>
                <form onSubmit={handleSubmit}>
                  <div className="ngFormGroup">
                    <label htmlFor="email" className="ngLabel">Registered Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="your-google-account@email.com"
                      className="ngInput"
                    />
                  </div>

                  <div className="ngFormGroup">
                    <label htmlFor="reason" className="ngLabel">Reason for Deletion</label>
                    <div style={{ position: 'relative' }}>
                      <select
                        id="reason"
                        name="reason"
                        required
                        className="ngSelect"
                        value={reason}
                        onChange={(e) => setReason(e.target.value)}
                      >
                        <option value="" disabled>Select a reason</option>
                        <option value="Privacy concerns">Privacy concerns</option>
                        <option value="No longer using the app">No longer using the app</option>
                        <option value="Too many notifications">Too many notifications</option>
                        <option value="Found a better alternative">Found a better alternative</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  {reason === "Other" && (
                    <div className="ngFormGroup">
                      <label htmlFor="otherReason" className="ngLabel">Please specify</label>
                      <textarea
                        id="otherReason"
                        name="otherReason"
                        required
                        placeholder="Tell us more..."
                        className="ngTextarea"
                        rows={3}
                      />
                    </div>
                  )}

                  <button
                    type="submit"
                    className="ngButton"
                    disabled={loading}
                  >
                    {loading ? "Processing..." : "Confirm Deletion"}
                  </button>
                </form>
                <p className="mt-8 text-center text-[#4b4b4b] text-[10px] uppercase tracking-widest">
                  This action is irreversible
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default GlobalGrooveDeletion;
