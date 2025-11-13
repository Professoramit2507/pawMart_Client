import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import jsPDF from "jspdf";

const MyBids = () => {
  const { user } = useContext(AuthContext);
  const [bids, setBids] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetch(`https://pawmartserver.vercel.app/bids?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => setBids(data))
        .catch((err) => console.error(err));
    }
  }, [user?.email]);

  const handleDownloadPDF = () => {
    if (!bids.length) {
      alert("No bids available to generate PDF!");
      return;
    }

    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text("My Bids Report", 14, 20);
    doc.setFontSize(6);
    doc.text(`User: ${user?.displayName || user?.email}`, 14, 20);
    doc.text(`Date: ${new Date().toLocaleDateString()}`, 14, 20);

  
    const headers = ["Product Name", "Buyer Name", "Price", "Quantity", "Address", "Date", "Phone"];
    const startY = 45;
    const colWidth = [45, 35, 20, 20, 30, 20, 20]; // column widths

    
    let x = 14;
    let y = startY;
    doc.setFont(undefined, "bold");
    headers.forEach((header, i) => {
      doc.text(header, x, y);
      x += colWidth[i];
    });

   
    y += 7;
    doc.setFont(undefined, "normal");
    bids.forEach((bid) => {
      x = 14;
      const row = [
        bid.Product_name,
        bid.Buyer_name,
        `$${bid.Price}`,
        bid.Quantity.toString(),
        bid.Address,
        bid.Date,
        bid.Phone,
      ];
      row.forEach((cell, i) => {
        doc.text(cell.toString(), x, y);
        x += colWidth[i];
      });
      y += 7;
      if (y > 280) {
        doc.addPage();
        y = 20;
      }
    });

    doc.save("My_Bids_Report.pdf");
  };

  return (
    <div>
      <h2 className="text-center p-10 text-2xl font-semibold">
        My Bids: <span className="text-purple-600">{bids.length}</span>
      </h2>

      <div className="text-center mb-6">
        <button
          onClick={handleDownloadPDF}
          className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition"
        >
          📄 Download PDF Report
        </button>
      </div>

      <div className="overflow-x-auto w-11/12 mx-auto p-6 bg-white shadow rounded-md">
        <table className="table w-full">
          <thead>
            <tr className="bg-gray-100">
              <th>Product Name</th>
              <th>Buyer Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Address</th>
              <th>Date</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {bids.map((bid) => (
              <tr key={bid._id} className="hover:bg-gray-50">
                <td>{bid.Product_name}</td>
                <td>{bid.Buyer_name}</td>
                <td>${bid.Price}</td>
                <td>{bid.Quantity}</td>
                <td>{bid.Address}</td>
                <td>{bid.Date}</td>
                <td>{bid.Phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBids;
