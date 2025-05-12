import { useState } from "react"
import { useNavigate } from "react-router-dom"
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

    const handleback = () => {
    navigate(-1)
}

return (
    <>
    <button onClick={handleback}>뒤로가기</button>
    <div className="New">
        <h2>새 일기 적기</h2>

        <section className="input-section">
            <h3>오늘 날짜</h3>
            <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
            />
        </section>

        <section className="input-section">
            <h3>오늘의 감정</h3>
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
            <h3>오늘의 일기</h3>
            <textarea
            placeholder="오늘은 어땠나요?"
            value={content}
            onChange={(e) => setContent(e.target.value)}
        />
        </section>

            <section className="button-section">
            <button onClick={() => navigate(-1)}>취소</button>
            <button onClick={handleSave}>저장</button>
        </section>
        </div>
        </>
    )
}

export default New
