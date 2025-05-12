import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Form from "../components/Form"
import "../App.css"

function New() {
    const navigate = useNavigate()
    const [selectedEmotion, setSelectedEmotion] = useState(3)
    const [date, setDate] = useState(new Date().toISOString().slice(0, 10))
    const [content, setContent] = useState("")

    const handleSave = () => {
    const newDiary = {
        id: Date.now(),
        date,
        emotion: selectedEmotion,
        content,
    }
    const existingDiaries = JSON.parse(localStorage.getItem("diaries")) || []
    existingDiaries.push(newDiary)
    localStorage.setItem("diaries", JSON.stringify(existingDiaries))
    navigate("/")
}

return (
    <Form
        date={date}
        setDate={setDate}
        content={content}
        setContent={setContent}
        selectedEmotion={selectedEmotion}
        setSelectedEmotion={setSelectedEmotion}
        onSave={handleSave}
        onCancel={() => navigate(-1)}
    />)
}

export default New