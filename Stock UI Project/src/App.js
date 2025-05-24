import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    const fetchStocks = async () => {
      try {
        const response = await fetch('/evaluation-service/stocks', {
          headers: {
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzQ4MDY1MTA4LCJpYXQiOjE3NDgwNjQ4MDgsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjcxNmUxMmE5LWVmYzAtNDQ4OS1iZTVkLWIwYmU2ODBkMGQ1YyIsInN1YiI6ImtpcnV0aGl2YXJtYTU3QGdtYWlsLmNvbSJ9LCJlbWFpbCI6ImtpcnV0aGl2YXJtYTU3QGdtYWlsLmNvbSIsIm5hbWUiOiJraXJ1dGhpdmFybWEgcyIsInJvbGxObyI6IjkyNzYyMmJlYzEwMCIsImFjY2Vzc0NvZGUiOiJ3aGVRVXkiLCJjbGllbnRJRCI6IjcxNmUxMmE5LWVmYzAtNDQ4OS1iZTVkLWIwYmU2ODBkMGQ1YyIsImNsaWVudFNlY3JldCI6IlNLbU1DWlpCc05YTktqcEUifQ.MHgOd1yZKWZb4D1dFXBO5_fJamaxKxZwarNtTS2JNCo'
          }
        });
        const data = await response.json();
        if (data && data.stocks) {
          setStocks(data.stocks);
        } else {
          console.error('Error: Stocks data not found in API response');
        }
      } catch (error) {
        console.error('Error fetching stocks:', error);
      }
    };

    fetchStocks();
  }, []);

  return (
    <div className="App">
      <h1>Stock Prices</h1>
      <ul>
        {stocks.map((stock) => (
          <li key={stock}>{stock}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

