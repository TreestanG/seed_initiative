import { Route, Routes, useLocation } from "react-router-dom";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
import { AboutPage } from "@/pages/AboutPage";
import { FAQPage } from "@/pages/FAQPage";
import { GetInvolvedPage } from "@/pages/GetInvolvedPage";
import { HomePage } from "@/pages/HomePage";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { ProgramsPage } from "@/pages/ProgramsPage";
import { SponsorsPage } from "@/pages/SponsorsPage";
import { TeamPage } from "@/pages/TeamPage";
import { Announcement } from "./components/sections/Announcement";
export default function App() {
	const location = useLocation();

	return (
		<>
			<ScrollToTop path={location.pathname} />
			<Header />
			<main id="main-content">

				{<Announcement />}

				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/about" element={<AboutPage />} />
					<Route path="/team" element={<TeamPage />} />
					<Route path="/sponsors" element={<SponsorsPage />} />
					<Route path="/get-involved" element={<GetInvolvedPage />} />
					<Route path="/programs" element={<ProgramsPage />} />
					<Route path="/faq" element={<FAQPage />} />
					<Route path="*" element={<NotFoundPage />} />
				</Routes>
			</main>
			<Footer />
		</>
	);
}
