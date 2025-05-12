import emotion1 from "../assets/emotion1.png"
import emotion2 from "../assets/emotion2.png"
import emotion3 from "../assets/emotion3.png"
import emotion4 from "../assets/emotion4.png"
import emotion5 from "../assets/emotion5.png"
import "../App.css"

function Emotion({ selected, onSelect }) {
    const emotionList = [
        { id: 1, img: emotion1, name: "완전 좋음" },
        { id: 2, img: emotion2, name: "좋음" },
        { id: 3, img: emotion3, name: "그저 그럼" },
        { id: 4, img: emotion4, name: "나쁨" },
        { id: 5, img: emotion5, name: "최악" },
    ]

return (
        <div className="emotion-list">
        {emotionList.map((emo) => (
            <div
            key={emo.id}
            className={`emotion-item ${selected === emo.id ? "selected" : ""}`}
            onClick={() => onSelect(emo.id)}
            >
            <img src={emo.img} alt={emo.name} />
            <span>{emo.name}</span>
            </div>
        ))}
        </div>
    )
}

export default Emotion