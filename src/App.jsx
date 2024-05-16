import { useState } from 'react'
import Speech from 'react-speech'
import './App.css'

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
    <>
      <h1>한글 40자</h1>
      {koreanFortySounds.map((sound, index) => (
        <Speech
          textAsButton
          key={index}
          text={sound} 
          lang="ko-KR"
          // male voice
          voice="Google 한국의"
        />
      ))}
      {/* random sentence */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          marginTop: '20px',      
          justifyContent: 'center',
        }}
      >
        <div className="speech-container">
          <h2>Random Sentence</h2>
          <Speech
            textAsButton
            text={koreanRandomSentences[index].kor}
            lang="ko-KR"
            voice="Google 한국의"
          />
          <button
            style={{
              marginTop: '10px',
              padding: '5px 10px',
              fontSize: '16px',
              cursor: 'pointer',
              height: "40px",
              backgroundColor: "lightblue",
            }}
            onClick={() => setIndex((index + 1) % koreanRandomSentences.length)}
          >
            {koreanRandomSentences[index].eng} (Next)
          </button>
        </div>
      </div>
      
    </>
  )
}

export default App
