"use client";
import React, { useState } from "react";
import Link from 'next/link';

export default function AttendanceTable() {
  // State to store rows. Initially, include one permanent row.
  const [rows, setRows] = useState([
    {
      id: Date.now(), // initial fixed row
      statuses: ["", "", "", "", "", ""],
    },
  ]);

  // State for dark mode toggle
  const [darkMode, setDarkMode] = useState(false);
  // State for the dark mode accent color (used for header text when dark mode is on)
  const [bgAccent, setBgAccent] = useState("#000000");
  // State to toggle the visibility of the color picker panel
  const [showColorPicker, setShowColorPicker] = useState(false);

  // Function to add a new row (defaults to empty statuses)
  const addRow = () => {
    const newRow = {
      id: Date.now(),
      statuses: ["", "", "", "", "", ""],
    };
    setRows([...rows, newRow]);
  };

  // Function to add 5 new rows at once
  const add5Rows = () => {
    const newRows = [];
    for (let i = 0; i < 5; i++) {
      newRows.push({
        id: Date.now() + i,
        statuses: ["", "", "", "", "", ""],
      });
    }
    setRows([...rows, ...newRows]);
  };

  // Function to clear all rows except the first one
  const clearAll = () => {
    if (rows.length > 0) {
      setRows([rows[0]]);
    }
  };

  // Function to delete a row (first row is permanent)
  const deleteRow = (id, idx) => {
    if (idx === 0) return;
    setRows(rows.filter((row, index) => index !== idx));
  };

  // Function to update a particular cell with value "P" or "A"
  const updateStatus = (rowId, index, value) => {
    setRows(
      rows.map((row) => {
        if (row.id === rowId) {
          const newStatuses = [...row.statuses];
          newStatuses[index] = value;
          return { ...row, statuses: newStatuses };
        }
        return row;
      })
    );
  };

  // Calculate percentage of "P" in the 6 classes
  const calculatePercentage = (statuses) => {
    const presentCount = statuses.filter((s) => s === "P").length;
    return ((presentCount / statuses.length) * 100).toFixed(0) + "%";
  };

  // Toggle dark mode state.
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      setShowColorPicker(false);
    }
  };

  // Container classes and style based on dark mode.
  const containerClasses = darkMode
    ? "p-4 text-white transition-colors duration-300"
    : "p-4 bg-white text-gray-800 transition-colors duration-300";
  const containerStyle = darkMode ? { backgroundColor: bgAccent } : {};

  // Helper for table header cell classes
  const thClasses = "border p-2";

  return (
    <div className={containerClasses} style={containerStyle}>
      <div className="flex flex-wrap justify-between items-center mb-4 gap-2">
        <h2 className="text-xl font-bold">Attendance Table</h2>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={addRow}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
          >
            Add Row
          </button>
          <button
            onClick={add5Rows}
            className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 transition"
          >
            Add 5 Row
          </button>
          <button
            onClick={clearAll}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
          >
            Clear All
          </button>
          {/* Dark Mode Toggle Icon */}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-gray-700 hover:bg-gray-800 transition"
          >
            {darkMode ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 4.354a1 1 0 011 1v1.292a1 1 0 01-2 0V5.354a1 1 0 011-1zm5.657 2.343a1 1 0 010 1.414l-.915.915a1 1 0 11-1.414-1.414l.915-.915a1 1 0 011.414 0zM19.646 11a1 1 0 010 2h-1.292a1 1 0 010-2h1.292zM17.07 16.07a1 1 0 01-1.414 0l-.915-.915a1 1 0 011.414-1.414l.915.915a1 1 0 010 1.414zM12 16.354a1 1 0 011 1v1.292a1 1 0 01-2 0v-1.292a1 1 0 011-1zm-5.657-1.657a1 1 0 01.707.293l.915.915a1 1 0 11-1.414 1.414l-.915-.915a1 1 0 010-1.414 1 1 0 01.707-.293zM4.354 13a1 1 0 010-2h1.292a1 1 0 010 2H4.354zM6.93 8.93a1 1 0 011.414-1.414l.915.915a1 1 0 11-1.414 1.414l-.915-.915zM12 8a4 4 0 100 8 4 4 0 000-8z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-300"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z" />
              </svg>
            )}
          </button>
          {/* Palette Icon to toggle the color picker panel */}
          {darkMode && (
            <button
              onClick={() => setShowColorPicker(!showColorPicker)}
              className="p-2 rounded-full bg-gray-700 hover:bg-gray-800 transition"
            >
              🎨
            </button>
          )}
        </div>
      </div>

      {/* Show color picker panel if dark mode is on and toggled */}
      {darkMode && showColorPicker && (
        <div className="mb-4">
          <label htmlFor="colorPicker" className="sr-only">
            Choose Accent Color
          </label>
          <input
            id="colorPicker"
            type="color"
            value={bgAccent}
            onChange={(e) => setBgAccent(e.target.value)}
            className="w-10 h-10 p-0 border-none bg-transparent cursor-pointer"
          />
        </div>
      )}

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead className="bg-gray-200 sticky top-0 z-10">
            <tr>
              <th className={thClasses} style={{ color: darkMode ? bgAccent : undefined }}>
                No
              </th>
              <th className={thClasses} style={{ color: darkMode ? bgAccent : undefined }}>
                Class 1
              </th>
              <th className={thClasses} style={{ color: darkMode ? bgAccent : undefined }}>
                Class 2
              </th>
              <th className={thClasses} style={{ color: darkMode ? bgAccent : undefined }}>
                Class 3
              </th>
              <th className={thClasses} style={{ color: darkMode ? bgAccent : undefined }}>
                Class 4
              </th>
              <th className={thClasses} style={{ color: darkMode ? bgAccent : undefined }}>
                Class 5
              </th>
              <th className={thClasses} style={{ color: darkMode ? bgAccent : undefined }}>
                Class 6
              </th>
              <th className={thClasses} style={{ color: darkMode ? bgAccent : undefined }}>
                Percentage
              </th>
              <th className={thClasses} style={{ color: darkMode ? bgAccent : undefined }}>
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, idx) => (
              <tr key={row.id} className="text-center">
                <td className="border p-2">{idx + 1}</td>
                {row.statuses.map((status, index) => (
                  <td key={index} className="border p-2">
                    {status === "" ? (
                      <div className="flex justify-center space-x-2">
                        <button
                          onClick={() => updateStatus(row.id, index, "P")}
                          className="px-2 py-1 border rounded transition bg-blue-500 text-white hover:bg-blue-600"
                        >
                          P
                        </button>
                        <button
                          onClick={() => updateStatus(row.id, index, "A")}
                          className="px-2 py-1 border rounded transition bg-red-500 text-white hover:bg-red-600"
                        >
                          A
                        </button>
                      </div>
                    ) : (
                      <button
                        className={`px-2 py-1 border rounded transition ${
                          status === "P" ? "bg-blue-500 text-white" : "bg-red-500 text-white"
                        }`}
                      >
                        {status}
                      </button>
                    )}
                  </td>
                ))}
                <td className="border p-2">{calculatePercentage(row.statuses)}</td>
                <td className="border p-2">
                  {idx !== 0 && (
                    <button onClick={() => deleteRow(row.id, idx)} className="transition hover:scale-110">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-gray-600 hover:text-red-500 transition"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5-4h4a1 1 0 011 1v2H9V4a1 1 0 011-1z"
                        />
                      </svg>
                    </button>
                  )}
                </td>
              </tr>
            ))}
            {rows.length === 0 && (
              <tr>
                <td className="border p-2 text-center" colSpan="9">
                  No rows added.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// Helper for table header cell classes
const thClasses = "border p-2";

// Calculate percentage helper function
function calculatePercentage(statuses) {
  const presentCount = statuses.filter((s) => s === "P").length;
  return ((presentCount / statuses.length) * 100).toFixed(0) + "%";
}
