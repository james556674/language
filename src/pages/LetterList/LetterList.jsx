// import { useState } from "react"
import { Button } from "@/components/ui/button"

export function ButtonDemo() {
  return <Button>Button</Button>
}


const Main = () => {
  // const [index, setIndex] = useState(0)
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
        height: "calc(100vh - 70px)",
        display: "flex",
        flexDirection: "column",
        maxWidth: "100%",
        padding: "50px",
        marginTop: "70px",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          fontSize: "2rem",
          marginBottom: "20px",
          color: "#CA8787",
          fontWeight: 500,
        }}
      >
        Korean Speech Synthesis
      </h1>
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
          <Button
            style={{
              fontSize: "1rem",
            }}
            key={sound}
            className="speech-button"
            variant="secondary"
            onClick={() => {
              let utterance = new SpeechSynthesisUtterance(sound);
              // speak korean
              utterance.lang = "ko-KR";
              speechSynthesis.speak(utterance);

            }}
          >
            {sound}
          </Button>
        ))}
      </div>

      {/* random sentence */}
      {/* <div
        style={{
          display: "flex",
          alignItems: "center",
          marginTop: "20px",
          justifyContent: "center",
        }}
      >
        <div>
          <h2>Random Sentence</h2>
          <Button
            className="speech-button"
            style={{
              marginRight: "10px",
              marginTop: "10px",
            
            }}
            variant="secondary"
            onClick={() => {
              let utterance = new SpeechSynthesisUtterance(koreanRandomSentences[index].kor);
              // speak korean
              utterance.lang = "ko-KR";
              speechSynthesis.speak(utterance);
            }}
          >
            {koreanRandomSentences[index].kor}
          </Button>
          <Button
            variant="secondary"
            onClick={() => setIndex((index + 1) % koreanRandomSentences.length)}
          >
            {koreanRandomSentences[index].eng} (Next) &gt;
          </Button>
        </div>
      </div> */}

    </div>
  )
}

export default Main