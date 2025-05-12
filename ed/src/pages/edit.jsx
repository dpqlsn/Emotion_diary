import { useParams, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import Form from "../components/Form"
import "../App.css"

function Edit() {
    const { id } = useParams()
    const navigate = useNavigate()
    const [selectedEmotion, setSelectedEmotion] = useState(3)
    const [date, setDate] = useState("")
    const [content, setContent] = useState("")

    useEffect(() => {
    const diaries = JSON.parse(localStorage.getItem("diaries")) || []
    const target = diaries.find((d) => d.id === parseInt(id))
    if (target) {
        setDate(target.date)
        setContent(target.content)
        setSelectedEmotion(target.emotion)
    } else navigate("/")
}, [id, navigate])

    const handleEdit = () => {
    const diaries = JSON.parse(localStorage.getItem("diaries")) || []
    const updated = diaries.map((d) =>
        d.id === parseInt(id)
            ? { ...d, date, content, emotion: selectedEmotion }
            : d
    )
    localStorage.setItem("diaries", JSON.stringify(updated))
    alert("수정 완료")
    navigate("/")
}

    const handleDelete = () => {
        if (!window.confirm("정말 삭제하시겠습니까?")) return
        const diaries = JSON.parse(localStorage.getItem("diaries")) || []
        const filtered = diaries.filter((d) => d.id !== parseInt(id))
        localStorage.setItem("diaries", JSON.stringify(filtered))
        alert("삭제 완료")
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
        onSave={handleEdit}
        onCancel={() => navigate(-1)}
        isEdit={true}
        onDelete={handleDelete}
    />
)}

export default Edit