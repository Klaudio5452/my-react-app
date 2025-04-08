import React, { useState } from "react";
import {
  Sparkles,
  Plane,
  Hotel,
  Briefcase,
  Globe2
} from "lucide-react";

export default function App() {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState(null);
  const [selectedHotel, setSelectedHotel] = useState(null); // State to track the selected hotel for modal
  const [modalOpen, setModalOpen] = useState(false); // State to manage the modal visibility

  const handleSearch = () => {
    if (!query) {
      alert("Please enter a travel request.");
      return;
    }

    setResponse({
      options: [
        {
          type: "Best Overall",
          passengers: 2,
          flight: {
            airline: "ITA Airways",
            flightNumber: "AZ123",
            from: "TIA",
            to: "FCO",
            departure: "May 5, 08:00",
            arrival: "May 5, 09:30",
            duration: "1h 30m",
            returnFlight: {
              flightNumber: "AZ456",
              departure: "May 12, 17:00",
              arrival: "May 12, 18:30",
              from: "FCO",
              to: "TIA",
              duration: "1h 30m",
            },
            bags: "1 checked, 1 carry-on",
            fare: "Economy Flex",
            services: ["Wi-Fi", "Meal", "Seat Selection"],
            fareConditions:
              "Full refund, seat selection included, 1 checked bag."
          },
          hotel: {
            name: "Hotel Eden",
            rating: 4.7,
            stars: 5,
            distance: "500m from center",
            location: "Rome, Via Ludovisi 49",
            room: "Deluxe Double Room",
            meal: "Breakfast included",
            image: "https://via.placeholder.com/400x200.png?text=Hotel+Eden",
            details:
              "Luxurious stay in the heart of Rome with spa and rooftop restaurant."
          },
          price: "€964",
        },
        {
          type: "Best Value",
          passengers: 2,
          flight: {
            airline: "Wizz Air",
            flightNumber: "W64321",
            from: "TIA",
            to: "CIA",
            departure: "May 5, 10:00",
            arrival: "May 5, 11:40",
            duration: "1h 40m",
            returnFlight: {
              flightNumber: "W64322",
              departure: "May 12, 13:00",
              arrival: "May 12, 14:40",
              from: "CIA",
              to: "TIA",
              duration: "1h 40m",
            },
            bags: "1 carry-on",
            fare: "Basic",
            services: ["Extra legroom"],
            fareConditions:
              "No refund, paid seat selection, carry-on only."
          },
          hotel: {
            name: "Roma Comfort Inn",
            rating: 4.2,
            stars: 4,
            distance: "1.2km from center",
            location: "Rome, Via Nazionale 15",
            room: "Standard Room",
            meal: "No meals included",
            image: "https://via.placeholder.com/400x200.png?text=Roma+Inn",
            details:
              "Comfortable stay with free Wi-Fi and close to metro."
          },
          price: "€620",
        },
      ],
    });
  };

  // Function to open the modal
  const openModal = (hotel) => {
    setSelectedHotel(hotel);
    setModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setModalOpen(false);
    setSelectedHotel(null);
  };

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#000", color: "#fff", padding: "2rem" }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto", textAlign: "center" }}>
        <h1 style={{ fontSize: "3rem", color: "#60a5fa", fontWeight: "bold", marginBottom: "0.5rem" }}>ATAI</h1>
        <p style={{ color: "#93c5fd", fontStyle: "italic", marginBottom: "2rem" }}>
          "Welcome, traveler. I am ATAI, your intelligent travel assistant."
        </p>

        <div style={{ display: "flex", justifyContent: "flex-end", gap: "1rem", marginBottom: "1rem" }}>
          <button style={{ border: "1px solid #60a5fa", color: "#93c5fd", background: "none", padding: "0.5rem 1rem", borderRadius: "6px" }}>
            <Briefcase size={14} style={{ display: "inline", marginRight: "4px" }} /> Corporate Filter
          </button>
          <button style={{ border: "1px solid #60a5fa", color: "#93c5fd", background: "none", padding: "0.5rem 1rem", borderRadius: "6px" }}>
            <Globe2 size={14} style={{ display: "inline", marginRight: "4px" }} /> Save / Share / Demo Mode
          </button>
        </div>

        <div style={{ background: "#1e293b", border: "1px solid #3b82f6", borderRadius: "1rem", padding: "2rem", marginBottom: "2rem" }}>
          <textarea
            placeholder="Type your travel request here like a command console..."
            style={{ width: "100%", height: "100px", padding: "1rem", background: "#000", color: "#60a5fa", borderColor: "#2563eb", marginBottom: "1rem", borderRadius: "8px" }}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button
            onClick={handleSearch}
            style={{ width: "100%", backgroundColor: "#2563eb", color: "#fff", padding: "1rem", borderRadius: "8px", fontWeight: "bold", cursor: "pointer" }}
          >
            <Sparkles size={18} style={{ display: "inline", marginRight: "8px" }} /> Activate ATAI
          </button>
        </div>

        {response && (
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
            {response.options.map((option, index) => (
              <div key={index} style={{ backgroundColor: "#1e293b", border: "1px solid #60a5fa", borderRadius: "1rem", padding: "1.5rem", textAlign: "left" }}>
                <h2 style={{ color: "#93c5fd", fontSize: "1.25rem", fontWeight: "bold", marginBottom: "0.5rem" }}>{option.type}</h2>
                <p style={{ fontSize: "0.9rem", color: "#9ca3af" }}>Passengers: {option.passengers}</p>

                <div style={{ marginTop: "1rem", marginBottom: "1rem" }}>
                  <h3 style={{ color: "#fff", fontWeight: "600", marginBottom: "0.5rem" }}><Plane size={18} /> Flight Details</h3>
                  <p style={{ fontSize: "0.9rem", color: "#e5e7eb" }}>
                    {option.flight.airline} {option.flight.flightNumber}: {option.flight.from} → {option.flight.to}
                  </p>
                  <p style={{ fontSize: "0.8rem", color: "#9ca3af" }}>
                    Outbound: {option.flight.departure} – {option.flight.arrival} ({option.flight.duration})
                  </p>
                  <p style={{ fontSize: "0.8rem", color: "#e5e7eb" }}>
                    {option.flight.airline} {option.flight.returnFlight.flightNumber}: {option.flight.returnFlight.from} → {option.flight.returnFlight.to}
                  </p>
                  <p style={{ fontSize: "0.8rem", color: "#9ca3af" }}>
                    Return: {option.flight.returnFlight.departure} – {option.flight.returnFlight.arrival} ({option.flight.returnFlight.duration})
                  </p>
                  <p style={{ fontSize: "0.8rem", color: "#9ca3af" }}>Baggage: {option.flight.bags}</p>
                  <p style={{ fontSize: "0.8rem", color: "#9ca3af" }}>
                    Fare: <span title={option.flight.fareConditions} style={{ textDecoration: "underline", cursor: "help", color: "#60a5fa" }}>{option.flight.fare}</span>
                  </p>
                  <p style={{ fontSize: "0.8rem", color: "#9ca3af" }}>Services: {option.flight.services.join(", ") || "None"}</p>
                </div>

                <div style={{ marginBottom: "1rem" }}>
                  <h3 style={{ color: "#fff", fontWeight: "600", marginBottom: "0.5rem" }}><Hotel size={18} /> Hotel</h3>
                  <img src={option.hotel.image} alt="Hotel" style={{ width: "100%", height: "auto", borderRadius: "10px" }} />
                  <p style={{ fontSize: "0.9rem", color: "#e5e7eb" }}><strong>{option.hotel.name}</strong></p>
                  <p style={{ fontSize: "0.8rem", color: "#9ca3af" }}>Rating: {option.hotel.rating} ★ | {option.hotel.stars} stars</p>
                  <p style={{ fontSize: "0.8rem", color: "#9ca3af" }}>Location: {option.hotel.location}</p>
                  <p style={{ fontSize: "0.8rem", color: "#9ca3af" }}>Room: {option.hotel.room} | Meal: {option.hotel.meal}</p>
                  <p style={{ fontSize: "0.8rem", color: "#e5e7eb" }}>Distance: {option.hotel.distance}</p>
                  <p style={{ fontSize: "0.8rem", color: "#9ca3af" }}>{option.hotel.details}</p>
                </div>

                <div style={{ marginTop: "2rem", textAlign: "center" }}>
                  <p style={{ fontSize: "1.25rem", color: "#60a5fa" }}>Total Price: {option.price}</p>
                  <button
                    onClick={() => openModal(option.hotel)}
                    style={{ backgroundColor: "#60a5fa", color: "#fff", padding: "1rem 2rem", borderRadius: "10px", fontWeight: "bold" }}
                  >
                    View More
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Modal to show hotel details */}
        {modalOpen && selectedHotel && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(0, 0, 0, 0.7)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 1000,
            }}
            onClick={closeModal}
          >
            <div
              style={{
                backgroundColor: "#1e293b",
                color: "#fff",
                padding: "2rem",
                borderRadius: "10px",
                width: "80%",
                maxWidth: "600px",
                position: "relative",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "1rem" }}>{selectedHotel.name}</h2>
              <p style={{ marginBottom: "1rem" }}>{selectedHotel.details}</p>
              <img
                src={selectedHotel.image}
                alt={selectedHotel.name}
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "8px",
                  marginBottom: "1rem",
                }}
              />
              <p style={{ fontSize: "0.9rem" }}>
                <strong>Rating:</strong> {selectedHotel.rating} ★ | {selectedHotel.stars} stars
              </p>
              <p style={{ fontSize: "0.9rem" }}>
                <strong>Location:</strong> {selectedHotel.location}
              </p>
              <p style={{ fontSize: "0.9rem" }}>
                <strong>Room:</strong> {selectedHotel.room} | <strong>Meal:</strong> {selectedHotel.meal}
              </p>
              <button
                onClick={closeModal}
                style={{
                  backgroundColor: "#60a5fa",
                  color: "#fff",
                  padding: "0.5rem 1.5rem",
                  borderRadius: "8px",
                  fontWeight: "bold",
                  marginTop: "1rem",
                  display: "block",
                  width: "100%",
                  cursor: "pointer",
                }}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
