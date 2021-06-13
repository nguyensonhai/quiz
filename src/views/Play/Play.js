import React from "react";
import "assets/styles/scss/views/playStyle.scss";
import { quizData } from "data/quizData";
import { characterData } from "data/characterData";
import sample from "assets/videos/ball.mp4";

export default class Play extends React.Component {
  state = {
    questionData: quizData,
    index: 0,
    answerList: [],
    answerCount: {
      A: 0,
      B: 0,
      C: 0,
    },
    result: {
      MAGGIE: "Maggie",
      WEST: "West",
      RALEIGH: "Raleigh",
      BRADY: "Brady",
      GUNNER: "Gunner",
      WILLA: "Willa",
      RILEY: "Riley",
      NASH: "Nash",
      TALLULAH: "Tallulah",
      RYKER: "Ryker",
      AURORA: "Aurora",
      ASA: "Asa",
      HUNTER: "Hunter",
    },
    finalResult: {},
    isResultVisible: false,
  };

  onSelectAnswer = (selectedAnswer) => {
    const questionData = this.state.questionData;

    const index = this.state.index;

    const answerList = this.state.answerList;

    const answerCount = this.state.answerCount;

    let tempResult;

    if (index < questionData.length) {
      answerList.push(selectedAnswer);
      switch (selectedAnswer) {
        case "A":
          answerCount.A = answerCount.A + 1;
          break;
        case "B":
          answerCount.B = answerCount.B + 1;
          break;
        case "C":
          answerCount.C = answerCount.C + 1;
          break;
        default:
          break;
      }
      this.setState({ answerCount, answerList });
    }

    questionData[index].selectedAnswer = selectedAnswer;
    this.setState({ questionData });

    if (index < questionData.length - 2) {
      this.setState({ index: index + 1 });
    } else {
      tempResult = this.getResult();
      this.setState({ finalResult: tempResult });
    }
    if (index === questionData.length - 2) {
      if (tempResult.name === characterData.BRADY.name) {
        this.setState({ index: index + 1 });
      } else {
        this.setState({ index: index + 2 });
        setTimeout(() => {
          this.setState({ isResultVisible: true });
        }, 1500);
      }
    }
    console.log("🚀 ~ file: Play.js ~ line 86 ~ Play ~ answerList", answerList);
    if (index === questionData.length - 1) {
      if (answerList[questionData.length - 1] === "A") {
        this.setState({ finalResult: characterData.BRADY });
      } else {
        this.setState({ finalResult: characterData.AURORA });
      }
      this.setState({ index: index + 1 });
      setTimeout(() => {
        this.setState({ isResultVisible: true });
      }, 1500);
    }
  };

  getResult = () => {
    const answerCount = this.state.answerCount;
    const answerList = this.state.answerList;
    let tempResult = null;
    if (answerCount.A >= 9) {
      tempResult = characterData.MAGGIE;
    } else if (answerCount.B >= 8) {
      tempResult = characterData.WEST;
    } else if (answerCount.C === 6) {
      tempResult = characterData.RALEIGH;
    } else if (answerCount.A === 5 || answerCount.A === 4) {
      tempResult = characterData.BRADY;
    } else if (answerCount.B === 7) {
      tempResult = characterData.GUNNER;
    } else if (answerCount.C === 4) {
      tempResult = characterData.WILLA;
    } else if (answerCount.A === 6) {
      tempResult = characterData.RILEY;
    } else if (answerCount.C === 3) {
      tempResult = characterData.NASH;
    } else if (answerCount.A === 8 || answerCount.A === 7) {
      tempResult = characterData.TALLULAH;
    } else if (answerCount.B === 6) {
      tempResult = characterData.RYKER;
    } else if (answerCount.B === 4 || answerCount.B === 5) {
      if (answerList[4] === "B") {
        tempResult = characterData.ASA;
      } else if (answerList[4] === "C") {
        tempResult = characterData.HUNTER;
      }
    } else {
      tempResult = characterData.MYSTERIOUS;
    }
    return tempResult;
  };

  render() {
    const finalResult = this.state.finalResult;

    const questionData = this.state.questionData;

    const index = this.state.index;

    return (
      <div className="play-container">
        {this.state.index < questionData.length ? (
          <div className="play-modal-container">
            <span className="question-text">
              {index + 1}. {questionData[index].text}
            </span>

            <div
              onClick={() => {
                this.onSelectAnswer("A");
              }}
              className="answer-button"
            >
              <span className="answer-text">
                A. {questionData[index].answers[0].text}
              </span>
            </div>

            <div
              onClick={() => {
                this.onSelectAnswer("B");
              }}
              className="answer-button"
            >
              <span className="answer-text">
                B. {questionData[index].answers[1].text}
              </span>
            </div>

            {questionData[index].answers[2].text != null && (
              <div
                onClick={() => {
                  this.onSelectAnswer("C");
                }}
                className="answer-button"
              >
                <span className="answer-text">
                  C. {questionData[index].answers[2].text}
                </span>
              </div>
            )}
          </div>
        ) : this.state.isResultVisible ? (
          <div className="play-modal-container">
            <div className="character-info-container">
              <img src={finalResult?.img} className="characterImg" alt="" />
              <div className="character-text-container">
                <div className="character-name-container">
                  <span className="character-name">
                    Bạn là {finalResult?.name}
                  </span>
                </div>
                <p className="character-description-text">
                  {finalResult?.description}
                </p>
              </div>
            </div>
            <a href="/" className="button-restart">
              Thử lại
            </a>
          </div>
        ) : (
          <div div className="play-modal-container">
            <video className="videoResult" autoPlay loop muted>
              <source src={sample} type="video/mp4" />
            </video>
          </div>
        )}
      </div>
    );
  }
}
