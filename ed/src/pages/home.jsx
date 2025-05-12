import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import emotion1 from "../assets/emotion1.png"
import emotion2 from "../assets/emotion2.png"
import emotion3 from "../assets/emotion3.png"
import emotion4 from "../assets/emotion4.png"
import emotion5 from "../assets/emotion5.png"
import "../App.css"

const emotionMap = {
    1: emotion1,
    2: emotion2,
    3: emotion3,
    4: emotion4,
    5: emotion5,
}

function Home() {
    const [diaries, setDiaries] = useState([])
    const [sortOrder, setSortOrder] = useState("latest")
    const [currentMonth, setCurrentMonth] = useState(new Date())

    const navigate = useNavigate()

    const handleEdit = () => {
        navigate("/Edit")
    }

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem("diaries")) || []
        const filtered = saved.filter((d) => {
        const dMonth = new Date(d.date).getMonth()
        const dYear = new Date(d.date).getFullYear()
        return (
            dMonth === currentMonth.getMonth() &&
            dYear === currentMonth.getFullYear()
        )
    })

    const sorted = [...filtered].sort((a, b) =>
        sortOrder === "latest"
            ? new Date(b.date) - new Date(a.date)
            : new Date(a.date) - new Date(b.date)
    )
    setDiaries(sorted)
}, [sortOrder, currentMonth])

    const moveMonth = (d) => {
        const newMonth = new Date(currentMonth)
        newMonth.setMonth(currentMonth.getMonth() + d)
        setCurrentMonth(newMonth)
    }

    const formatMonth = (date) =>
        `${date.getFullYear()}년 ${date.getMonth() + 1}월`

    return (
        <div className="Home">
        <header className="home-header">
            <button onClick={() => moveMonth(-1)} className="arrow-button">←</button>
            <h2>{formatMonth(currentMonth)}</h2>
            <button onClick={() => moveMonth(1)} className="arrow-button">→</button>
        </header>

        <div className="home-controls">
            <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="sort-dropdown"
            >
            <option value="latest">최신순</option>
            <option value="oldest">오래된 순</option>
            </select>
            <button
            onClick={() => navigate("/new")}
            className="new-entry-button"
            >
            새 일기 적기
            </button>
        </div>

        {
            diaries.map((d) => (
            <div key={d.id} className="diary-card">
                <img src={emotionMap[d.emotion]} alt="emotion" />
                <div className="card-content">
                <h4>{d.date}</h4>
                <p>{d.content}</p>
                <button onClick={() => navigate(`/edit/${d.id}`)}>수정하기</button>
                </div>
            </div>
            ))
        }
        </div>
    )
}

export default Home
