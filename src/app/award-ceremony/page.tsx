import EventTemplate from "@/components/event-template";

export default function AwardCeremonyPage() {
    return (
        <EventTemplate
            title="Award Ceremony"
            tagline="Celebrate Achievement. Honor Excellence."
            intro="The Codemania v6.0 Award Ceremony recognizes the top-performing teams and celebrates their achievements. Winners will be awarded cash prizes, certificates, and recognition for their outstanding data-driven solutions."
            status="Scheduled"
            date="March 1"
            takeaways={[
                {
                    title: "Award Distribution",
                    description: "Winner, Runner-Up, and 2nd Runner-Up prizes will be announced."
                },
                {
                    title: "Certificates",
                    description: "All finalist teams receive participation certificates."
                },
                {
                    title: "Special Recognition",
                    description: "Exceptional solutions may be highlighted across official Codemania platforms."
                },
                {
                    title: "Closing Remarks",
                    description: "Event summary and acknowledgments from the organizing committee."
                }
            ]}
        />
    );
}
