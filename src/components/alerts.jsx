import React from 'react';

const Alerts = ({ alerts }) => {
  return (
    <div style={styles.alertsContainer}>
      <h2>Inventory Alerts</h2>
      {alerts.length > 0 ? (
        <ul style={styles.alertList}>
          {alerts.map((alert, index) => (
            <li key={index} style={styles.alertItem}>
              {alert.message}
            </li>
          ))}
        </ul>
      ) : (
        <p style={styles.noAlerts}>No alerts at the moment</p>
      )}
    </div>
  );
};

const styles = {
  alertsContainer: {
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
    width: '300px',
  },
  alertList: {
    listStyleType: 'none',
    paddingLeft: 0,
  },
  alertItem: {
    margin: '10px 0',
    padding: '10px',
    borderRadius: '4px',
    backgroundColor: '#ffcccc',
    color: '#a94442',
  },
  noAlerts: {
    color: '#888',
  },
};

export default Alerts;
