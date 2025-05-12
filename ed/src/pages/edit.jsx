import { useParams, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import emotion1 from "../assets/emotion1.png"
import emotion2 from "../assets/emotion2.png"
import emotion3 from "../assets/emotion3.png"
import emotion4 from "../assets/emotion4.png"
import emotion5 from "../assets/emotion5.png"
import "../App.css"

const emotionList = [
    { id: 1, img: emotion1, name: "완전 좋음" },
    { id: 2, img: emotion2, name: "좋음" },
    { id: 3, img: emotion3, name: "그저 그럼" },
    { id: 4, img: emotion4, name: "나쁨" },
    { id: 5, img: emotion5, name: "최악" },
]

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
        } else {
        navigate("/")
        }
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
        <div className="New">
        <h2>일기 수정하기</h2>

        <section className="input-section">
            <h3>날짜</h3>
            <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            />
        </section>

        <section className="input-section">
            <h3>감정 선택</h3>
            <div className="emotion-list">
            {emotionList.map((emo) => (
                <div
                key={emo.id}
                className={`emotion-item ${
                    selectedEmotion === emo.id ? "selected" : ""
                }`}
                onClick={() => setSelectedEmotion(emo.id)}
                >
                <img src={emo.img} alt={emo.name} />
                <span>{emo.name}</span>
                </div>
            ))}
            </div>
        </section>

        <section className="input-section">
            <h3>일기 내용</h3>
            <textarea
            placeholder="내용을 수정하세요"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            />
        </section>

        <section className="button-section">
            <button onClick={() => navigate(-1)}>취소</button>
            <button onClick={handleEdit}>수정하기</button>
            <button onClick={handleDelete} className="delete-button">삭제하기</button>
        </section>
        </div>
    )
}

export default Edit
