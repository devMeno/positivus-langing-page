import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import NewSection from "@/components/newSection";
import ServicesCard from "@/components/servicesCard";
import {Separator} from "@/components/ui/separator";
import CaseStudies from "@/components/caseStudies";
export default function Home() {
    return (
        <>
            <Navbar />
            <NewSection
                title='Services'
                description_1='At our digital marketing agency, we offer a range of services to '
                description_2='help businesses grow and succeed online. These services include:'
            />
            <div className={'grid grid-cols-1 lg:grid-cols-2 gap-8'}>
                <ServicesCard />
                <ServicesCard />
                <ServicesCard />
                <ServicesCard />
                <ServicesCard />
                <ServicesCard />
            </div>
            <NewSection
                title='Services'
                description_1='At our digital marketing agency, we offer a range of services to '
                description_2='help businesses grow and succeed online. These services include:'
            />
            <CaseStudies />
            <NewSection
                title='Services'
                description_1='At our digital marketing agency, we offer a range of services to '
                description_2='help businesses grow and succeed online. These services include:'
            />
            <Footer />
        </>
    );
}
