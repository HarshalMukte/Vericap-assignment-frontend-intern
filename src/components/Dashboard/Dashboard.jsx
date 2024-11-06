"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./dashboard.module.scss";
import SkeletonLoader from "../SkeletonLoader/SkeletonLoader";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const Dashboard = () => {
  const [userData, setUserData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [mounted, setMounted] = useState(false);

  // Data for Donut Chart
  const activeUsersCount = 6;
  const inactiveUsersCount = userData.length - activeUsersCount;
  const chartData = [
    { name: "Active Users", value: activeUsersCount },
    { name: "Inactive Users", value: inactiveUsersCount },
  ];
  const COLORS = ["#7a5dff", "#e0e0e0"];

  // Fetch data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setUserData(response.data);
        setLoading(false);
      } catch (err) {
        setError("Error fetching data, please try again");
        setLoading(false);
      }
    };
    fetchData();
    setMounted(true);
  }, []);

  // Filtered user data based on search term
  const filteredData = userData.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={styles.dashboard}>
      <div className={styles.header}>
        <h1>User Dashboard</h1>
        <p>Overview of user data and activity</p>
      </div>
      <div className={styles.summary}>
        <div className={styles.chartContainer}>
          <h3>User Activity</h3>
          {mounted && (
            <PieChart width={200} height={200}>
              <Pie
                data={chartData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                dataKey="value"
                paddingAngle={5}
              >
                {chartData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend verticalAlign="bottom" height={36} />
            </PieChart>
          )}
        </div>
        <div className={styles.metrics}>
          <h3>Summary</h3>
          <div>
            <p>Total Users</p>
            <span>{userData.length}</span>
          </div>
          <div>
            <p>Active Users</p>
            <span>
              {!error ? (activeUsersCount * 100) / userData.length : 0}%
            </span>
          </div>
          <div>
            <p>Inactive Users</p>
            <span>
              {!error ? (inactiveUsersCount * 100) / userData.length : 0}%
            </span>
          </div>
        </div>
      </div>

      <div className={styles.users}>
        <h3>Users</h3>
        <input
          type="text"
          placeholder="Search by name or email..."
          className={styles.searchInput}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          disabled={!!error} // Disable input if there is an error
        />
        {loading ? (
          <div className={styles.skeletonContainer}>
            <SkeletonLoader width="100%" height="40px" />
            <SkeletonLoader width="100%" height="40px" />
            <SkeletonLoader width="100%" height="40px" />
            <SkeletonLoader width="100%" height="40px" />
          </div>
        ) : error ? (
          <p className={styles.message}>{error}</p>
        ) : (
          <div>
            {filteredData.length === 0 ? (
              <p className={styles.message}>No matching results found.</p>
            ) : (
              <div className={styles.tableContainer}>
                <table className={styles.table}>
                  <thead>
                    <tr>
                      <th>Profile</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Company</th>
                      <th>Tags</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredData.map((user, index) => (
                      <tr key={user.id}>
                        {/* Random Image with Fallback */}
                        <td>
                          <img
                            src={`https://picsum.photos/seed/${user.id}/100/100`}
                            alt="User profile"
                            onError={(e) =>
                              (e.target.src = "/images/fallback-profile.png")
                            } // Fallback image
                            className={styles.profileImage}
                          />
                        </td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.company.name}</td>

                        {/* Random Pills/Tags */}
                        <td>
                          <span
                            className={
                              index < activeUsersCount
                                ? styles.activeTag
                                : styles.inactiveTag
                            }
                          >
                            {index < activeUsersCount ? "Active" : "Inactive"}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
