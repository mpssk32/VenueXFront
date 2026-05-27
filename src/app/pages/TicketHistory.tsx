import { useState } from "react";
import { QrCode, Download, Share2, MapPin, Calendar, Clock, Ticket, ChevronDown } from "lucide-react";

export function TicketHistory() {
  const [activeTab, setActiveTab] = useState<"upcoming" | "past">("upcoming");
  const [expandedTicket, setExpandedTicket] = useState<number | null>(null);

  const tickets = {
    upcoming: [
      {
        id: 1,
        artist: "The Midnight",
        venue: "The Wiltern",
        location: "Los Angeles, CA",
        date: "Jun 15, 2026",
        time: "8:00 PM",
        ticketType: "VIP",
        section: "Floor A",
        seat: "Row 5, Seat 12-13",
        orderNumber: "TMN-2026-001234",
        ticketCount: 2,
        qrCode: "QR-TMN-001234",
      },
      {
        id: 2,
        artist: "ODESZA",
        venue: "Hollywood Bowl",
        location: "Los Angeles, CA",
        date: "Jul 22, 2026",
        time: "7:30 PM",
        ticketType: "General Admission",
        section: "GA Floor",
        seat: "Standing",
        orderNumber: "ODZ-2026-005678",
        ticketCount: 4,
        qrCode: "QR-ODZ-005678",
      },
    ],
    past: [
      {
        id: 3,
        artist: "Rufus Du Sol",
        venue: "Red Rocks Amphitheatre",
        location: "Morrison, CO",
        date: "May 10, 2026",
        time: "8:00 PM",
        ticketType: "Reserved Seating",
        section: "Section 1",
        seat: "Row 15, Seat 8-9",
        orderNumber: "RDS-2026-009876",
        ticketCount: 2,
        qrCode: "QR-RDS-009876",
      },
    ],
  };

  const currentTickets = tickets[activeTab];

  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      {/* Header */}
      <div className="relative overflow-hidden bg-gradient-to-b from-purple-900/20 to-[#0a0a0f] pt-8 pb-24">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjOGI1Y2Y2IiBzdHJva2Utb3BhY2l0eT0iLjEiLz48L2c+PC9zdmc+')] opacity-20" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <Ticket className="w-8 h-8 text-purple-400" />
            <h1 className="text-3xl text-white">My Tickets</h1>
          </div>
          <p className="text-gray-400">View and manage your concert tickets</p>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-16 pb-16">
        {/* Tabs */}
        <div className="inline-flex rounded-2xl bg-[#13131a]/80 backdrop-blur-xl border border-purple-500/20 p-1 mb-8">
          <button
            onClick={() => setActiveTab("upcoming")}
            className={`px-6 py-3 rounded-xl transition-all ${
              activeTab === "upcoming"
                ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Upcoming ({tickets.upcoming.length})
          </button>
          <button
            onClick={() => setActiveTab("past")}
            className={`px-6 py-3 rounded-xl transition-all ${
              activeTab === "past"
                ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Past Events ({tickets.past.length})
          </button>
        </div>

        {/* Tickets Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {currentTickets.map((ticket) => (
            <div
              key={ticket.id}
              className="relative rounded-2xl bg-[#13131a]/80 backdrop-blur-xl border border-purple-500/20 overflow-hidden group hover:border-purple-500/40 transition-all"
            >
              {/* Glow effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-opacity" />

              <div className="relative">
                {/* Ticket Header */}
                <div className="p-6 border-b border-purple-500/10">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl text-white mb-2">{ticket.artist}</h3>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm text-gray-400">
                          <MapPin className="w-4 h-4" />
                          <span>{ticket.venue}, {ticket.location}</span>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-gray-400">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <span>{ticket.date}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            <span>{ticket.time}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="px-3 py-1.5 rounded-lg bg-purple-500/20 border border-purple-500/30 text-sm text-purple-300 whitespace-nowrap">
                      {ticket.ticketType}
                    </div>
                  </div>

                  {/* Ticket Details */}
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs text-gray-500 mb-1">Section & Seat</div>
                      <div className="text-sm text-white">{ticket.section} - {ticket.seat}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-gray-500 mb-1">Quantity</div>
                      <div className="text-sm text-white">{ticket.ticketCount} {ticket.ticketCount === 1 ? 'ticket' : 'tickets'}</div>
                    </div>
                  </div>
                </div>

                {/* Expand/Collapse Button */}
                <button
                  onClick={() => setExpandedTicket(expandedTicket === ticket.id ? null : ticket.id)}
                  className="w-full py-3 px-6 flex items-center justify-between text-purple-400 hover:text-purple-300 transition-colors"
                >
                  <span className="text-sm">
                    {expandedTicket === ticket.id ? "Hide" : "Show"} QR Code & Details
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform ${
                      expandedTicket === ticket.id ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Expanded Content */}
                {expandedTicket === ticket.id && (
                  <div className="p-6 pt-0 space-y-6">
                    {/* QR Code */}
                    <div className="flex flex-col items-center p-6 rounded-xl bg-white">
                      <div className="w-48 h-48 bg-gradient-to-br from-purple-100 to-blue-100 rounded-xl flex items-center justify-center mb-4">
                        <QrCode className="w-40 h-40 text-purple-900" />
                      </div>
                      <div className="text-center">
                        <div className="text-xs text-gray-600 mb-1">Ticket Code</div>
                        <div className="text-sm font-mono text-gray-900">{ticket.qrCode}</div>
                      </div>
                    </div>

                    {/* Order Details */}
                    <div className="p-4 rounded-xl bg-[#0a0a0f]/50 border border-purple-500/10">
                      <div className="text-xs text-gray-500 mb-2">Order Number</div>
                      <div className="text-sm text-white font-mono">{ticket.orderNumber}</div>
                    </div>

                    {/* Actions */}
                    <div className="grid grid-cols-2 gap-3">
                      <button className="flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white transition-all">
                        <Download className="w-4 h-4" />
                        <span>Download</span>
                      </button>
                      <button className="flex items-center justify-center gap-2 py-3 rounded-xl bg-[#0a0a0f]/50 border border-purple-500/30 hover:border-purple-500/50 text-white transition-all">
                        <Share2 className="w-4 h-4" />
                        <span>Share</span>
                      </button>
                    </div>

                    {/* Notice */}
                    {activeTab === "upcoming" && (
                      <div className="p-4 rounded-xl bg-purple-500/10 border border-purple-500/20">
                        <p className="text-xs text-gray-400 text-center">
                          Present this QR code at the venue entrance for admission
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {currentTickets.length === 0 && (
          <div className="text-center py-16">
            <Ticket className="w-16 h-16 mx-auto mb-4 text-gray-600" />
            <h3 className="text-xl text-gray-400 mb-2">No {activeTab} tickets</h3>
            <p className="text-gray-500 mb-6">
              {activeTab === "upcoming"
                ? "You don't have any upcoming concerts"
                : "You haven't attended any concerts yet"}
            </p>
            {activeTab === "upcoming" && (
              <a
                href="/concerts"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white transition-all"
              >
                Browse Concerts
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
