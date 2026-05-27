import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

interface CalendarEvent {
  date: string;
  artistName: string;
  status: 'booked' | 'available' | 'pending';
}

interface CalendarViewProps {
  events: CalendarEvent[];
  availableDates: string[];
}

export function CalendarView({ events, availableDates }: CalendarViewProps) {
  const [currentDate, setCurrentDate] = useState(new Date(2026, 3, 1)); // April 2026

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    return new Date(year, month, 1).getDay();
  };

  const previousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const monthName = currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  const daysInMonth = getDaysInMonth(currentDate);
  const firstDay = getFirstDayOfMonth(currentDate);

  const getDateString = (day: number) => {
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const dayStr = String(day).padStart(2, '0');
    return `${year}-${month}-${dayStr}`;
  };

  const getEventForDate = (day: number) => {
    const dateStr = getDateString(day);
    return events.find(e => e.date === dateStr);
  };

  const isAvailable = (day: number) => {
    const dateStr = getDateString(day);
    return availableDates.includes(dateStr);
  };

  const isPast = (day: number) => {
    const dateStr = getDateString(day);
    const date = new Date(dateStr);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today;
  };

  const days = [];
  
  // Empty cells for days before the first day of the month
  for (let i = 0; i < firstDay; i++) {
    days.push(<div key={`empty-${i}`} className="aspect-square"></div>);
  }

  // Days of the month
  for (let day = 1; day <= daysInMonth; day++) {
    const event = getEventForDate(day);
    const available = isAvailable(day);
    const past = isPast(day);

    days.push(
      <div
        key={day}
        className={`aspect-square p-2 rounded-lg border transition-all ${
          past
            ? 'bg-[#0a0a0f] border-gray-800 text-gray-700'
            : event?.status === 'booked'
            ? 'bg-green-500/10 border-green-500/30 hover:border-green-500/50'
            : event?.status === 'pending'
            ? 'bg-yellow-500/10 border-yellow-500/30 hover:border-yellow-500/50'
            : available
            ? 'bg-purple-500/10 border-purple-500/20 hover:border-purple-500/40'
            : 'bg-[#0a0a0f] border-gray-800/50'
        } ${!past && (event || available) ? 'cursor-pointer' : ''}`}
      >
        <div className="h-full flex flex-col">
          <span
            className={`text-sm mb-1 ${
              past
                ? 'text-gray-700'
                : event?.status === 'booked'
                ? 'text-green-400'
                : event?.status === 'pending'
                ? 'text-yellow-400'
                : available
                ? 'text-purple-400'
                : 'text-gray-500'
            }`}
          >
            {day}
          </span>
          {event && !past && (
            <div className="flex-1 min-h-0">
              <p className="text-xs text-white truncate">{event.artistName}</p>
              <span
                className={`text-xs ${
                  event.status === 'booked' ? 'text-green-400' : 'text-yellow-400'
                }`}
              >
                {event.status === 'booked' ? '✓ Booked' : '⏳ Pending'}
              </span>
            </div>
          )}
          {!event && available && !past && (
            <span className="text-xs text-purple-400">Available</span>
          )}
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Calendar Header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl text-white">{monthName}</h3>
        <div className="flex items-center gap-2">
          <button
            onClick={previousMonth}
            className="p-2 rounded-lg bg-[#0a0a0f] border border-purple-500/20 hover:border-purple-500/40 text-gray-400 hover:text-white transition-all"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={nextMonth}
            className="p-2 rounded-lg bg-[#0a0a0f] border border-purple-500/20 hover:border-purple-500/40 text-gray-400 hover:text-white transition-all"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-2 mb-2">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
          <div key={day} className="text-center text-sm text-gray-500 py-2">
            {day}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-2">{days}</div>

      {/* Legend */}
      <div className="flex items-center gap-6 mt-6 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-green-500/20 border border-green-500/30"></div>
          <span className="text-gray-400">Booked</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-yellow-500/20 border border-yellow-500/30"></div>
          <span className="text-gray-400">Pending</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-purple-500/20 border border-purple-500/30"></div>
          <span className="text-gray-400">Available</span>
        </div>
      </div>
    </div>
  );
}
