// Components
import AssignmentContainer from "@/components/AssignmentContainer"

export default function Assignment() {
    return (
        <div className="bg-[#a5b194] h-screen pt-8 p-24">
            <header className="text-center text-6xl font-bold">Upcoming Assignments</header>
            <AssignmentContainer />
        </div>
    )
}