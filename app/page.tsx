import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { NavigationMenu } from "@/components/navigation-menu"
import { InstituteInfo } from "@/components/institute-info"
import { AdmissionProcess } from "@/components/admission-process"
import { CurriculumSection } from "@/components/curriculum-section"
import { ProfileSection } from "@/components/profile-section"
import { LabsSection } from "@/components/labs-section"
import { StudentLifeSection } from "@/components/student-life-section"
import { ScholarshipsSection } from "@/components/scholarships-section"
import { AlliancesSection } from "@/components/alliances-section"
import { ProjectsSection } from "@/components/projects-section"
import { CertificationsSection } from "@/components/certifications-section"
import { BenefitsSection } from "@/components/benefits-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ContactForm } from "@/components/contact-form"
import { FaqSection } from "@/components/faq-section"
import { MediaSection } from "@/components/media-section"
import { FloatingWhatsApp } from "@/components/floating-whatsapp"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <NavigationMenu />
      <main className="flex-1">
        <HeroSection />
        <InstituteInfo />
        <AdmissionProcess />
        <CurriculumSection />
        <ProfileSection />
        <LabsSection />
        <StudentLifeSection />
        <ScholarshipsSection />
        <AlliancesSection />
        <ProjectsSection />
        <CertificationsSection />
        <BenefitsSection />
        <TestimonialsSection />
        <ContactForm />
        <FaqSection />
        <MediaSection />
        <FloatingWhatsApp />
      </main>
      <Footer />
    </div>
  )
}
