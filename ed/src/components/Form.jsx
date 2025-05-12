import EmotionPicker from "../components/Emotion"

function Form({
  date,
  setDate,
  content,
  setContent,
  selectedEmotion,
  setSelectedEmotion,
  onSave,
  onCancel,
  isEdit = false,
  onDelete,
}) {
  return (
    <div className="New">
      <h2>{isEdit ? "일기 수정하기" : "새 일기 적기"}</h2>

      <section className="input-section">
        <h3>날짜</h3>
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      </section>

      <section className="input-section">
        <h3>감정 선택</h3>
        <EmotionPicker selected={selectedEmotion} onSelect={setSelectedEmotion} />
      </section>

      <section className="input-section">
        <h3>일기 내용</h3>
        <textarea
          placeholder="내용을 입력하세요"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </section>

      <section className="button-section">
        <button onClick={onCancel}>취소</button>
        <button onClick={onSave}>{isEdit ? "수정하기" : "저장"}</button>
        {isEdit && <button onClick={onDelete} className="delete-button">삭제하기</button>}
      </section>
    </div>
  )
}

export default Form
