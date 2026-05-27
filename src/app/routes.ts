import { createBrowserRouter } from "react-router";
import { Home } from "./pages/Home";
import { ConcertList } from "./pages/ConcertList";
import { ConcertDetails } from "./pages/ConcertDetails";
import { ArtistDashboard } from "./pages/ArtistDashboard";
import { VenueAdminDashboard } from "./pages/VenueAdminDashboard";
import { VenueAdmin } from "./pages/VenueAdmin";
import { PlatformAdmin } from "./pages/PlatformAdmin";
import { ArtistVenueChat } from "./pages/ArtistVenueChat";
import { SupportChat } from "./pages/SupportChat";
import { ComponentShowcase } from "./pages/ComponentShowcase";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { ForgotPassword } from "./pages/ForgotPassword";
import { UserDashboard } from "./pages/UserDashboard";
import { TicketHistory } from "./pages/TicketHistory";
import { FavoriteConcerts } from "./pages/FavoriteConcerts";
import { Settings } from "./pages/Settings";
import { Checkout } from "./pages/Checkout";
import { Layout } from "./components/Layout";

export const router = createBrowserRouter([
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/register",
    Component: Register,
  },
  {
    path: "/forgot-password",
    Component: ForgotPassword,
  },
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "concerts", Component: ConcertList },
      { path: "concerts/:id", Component: ConcertDetails },
      { path: "dashboard", Component: UserDashboard },
      { path: "tickets", Component: TicketHistory },
      { path: "favorites", Component: FavoriteConcerts },
      { path: "settings", Component: Settings },
      { path: "checkout", Component: Checkout },
      { path: "artist-dashboard", Component: ArtistDashboard },
      { path: "venue-dashboard", Component: VenueAdminDashboard },
      { path: "venue-admin", Component: VenueAdmin },
      { path: "chat/artist-venue", Component: ArtistVenueChat },
      { path: "chat/support", Component: SupportChat },
      { path: "components", Component: ComponentShowcase },
    ],
  },
  {
    path: "/admin",
    Component: PlatformAdmin,
  },
]);