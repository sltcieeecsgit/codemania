import EventTemplate from "@/components/event-template";

export default function VirtualDatathonPage() {
    return (
        <EventTemplate
            title="Virtual Datathon"
            tagline="Compete Online. Prove Your Skills. Earn Your Spot."
            intro="The Virtual Datathon is the official qualifier phase for Codemania v6.0. Teams will solve timed, data-centric problems to qualify for the 12-hour physical finale."
            status="Scheduled"
            date="February 21"
            takeaways={[
                {
                    title: "Format",
                    description: "Online competition within a fixed time window."
                },
                {
                    title: "Problem Statements",
                    description: "Realistic, data-driven challenges with clear evaluation metrics."
                },
                {
                    title: "Evaluation Criteria",
                    description: "Accuracy, efficiency, and overall scoring."
                },
                {
                    title: "Advancement",
                    description: "Top 40 teams progress to the Grand Finale."
                }
            ]}
        />
    );
}
