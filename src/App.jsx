import { useState } from "react"
import "./App.css"
import { Button } from "@/components/ui/button"


function App() {
  const [index, setIndex] = useState(0)
  const koreanFortySounds = [
    "ㅏ",
    "ㅑ",
    "ㅓ",
    "ㅕ",
    "ㅗ",
    "ㅛ",
    "ㅜ",
    "ㅠ",
    "ㅡ",
    "ㅣ",
    "ㅐ",
    "ㅒ",
    "ㅔ",
    "ㅖ",
    "ㅘ",
    "ㅙ",
    "ㅚ",
    "ㅝ",
    "ㅞ",
    "ㅟ",
    "ㅢ",
  ]
  const koreanRandomSentences = [
    {
      kor: "안녕하세요",
      eng: "Hello",
    },
    {
      kor: "반갑습니다",
      eng: "Nice to meet you",
    },
    {
      kor: "감사합니다",
      eng: "Thank you",
    },
    {
      kor: "미안합니다",
      eng: "I'm sorry",
    },
    {
      kor: "사랑합니다",
      eng: "I love you",
    },
    {
      kor: "잘자요",
      eng: "Good night",
    },
    {
      kor: "안녕히가세요",
      eng: "Goodbye",
    },
    {
      kor: "죄송합니다",
      eng: "Excuse me",
    },
    {
      kor: "괜찮아요",
      eng: "It's okay",
    },
    {
      kor: "고마워요",
      eng: "Thank you",
    },
  ]


  return (
    <div
      className="mobile-container"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        maxWidth: "100%",
      }}
    >
      <Button>Secondary</Button>
      <h1>한글 40자</h1>
      <div
        className="grid-container"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          gap: "10px",
          marginTop: "20px",
        }}
      >
        {koreanFortySounds.map((sound) => (
          <button
            key={sound}
            className="speech-button"
            style={{
              padding: "5px 10px",
              fontSize: "16px",
              cursor: "pointer",
              height: "40px",
              backgroundColor: "#dcdcdc",
            }}
            onClick={() => {
              let utterance = new SpeechSynthesisUtterance(sound);
              // speak korean
              utterance.lang = "ko-KR";
              speechSynthesis.speak(utterance);
            
            }}
          >
            {sound}
          </button>
        ))}
      </div>
      
      {/* random sentence */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginTop: "20px",      
          justifyContent: "center",
        }}
      >
        <div className="speech-container">
          <h2>Random Sentence</h2>
          <button
            className="speech-button"
            style={{
              padding: "5px 10px",
              fontSize: "16px",
              cursor: "pointer",
              height: "40px",
              backgroundColor: "#dcdcdc",
              marginRight: "10px",
            }}
            onClick={() => {
              let utterance = new SpeechSynthesisUtterance(koreanRandomSentences[index].kor);
              // speak korean
              utterance.lang = "ko-KR";
              speechSynthesis.speak(utterance);
            }}
          >
            {koreanRandomSentences[index].kor}
          </button>
          <button
            style={{
              marginTop: "10px",
              padding: "5px 10px",
              fontSize: "16px",
              cursor: "pointer",
              height: "40px",
              backgroundColor: "lightblue",
            }}
            onClick={() => setIndex((index + 1) % koreanRandomSentences.length)}
          >
            {koreanRandomSentences[index].eng} (Next) &gt;
          </button>
        </div>
      </div>
      
    </div>
  )
}

export default App
