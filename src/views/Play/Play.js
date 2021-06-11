import React, { useState, useEffect } from "react";
import "assets/styles/scss/views/playStyle.scss";
import { quizData } from "data/quizData";

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
    finalResult: "",
  };

  onSelectAnswer = (selectedAnswer) => {
    const questionData = this.state.questionData;

    const index = this.state.index;

    const answerList = this.state.answerList;

    const answerCount = this.state.answerCount;

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

    questionData[index].selectedAnswer = selectedAnswer;

    this.setState({ questionData, answerCount, answerList });

    if (index < 9) {
      this.setState({ index: index + 1 });
    } else {
      this.getResult();
      this.setState({ index: index + 1 });
    }
  };

  getResult = () => {
    const answerCount = this.state.answerCount;
    const answerList = this.state.answerList;
    const result = this.state.result;
    let tempResult = "";
    if (answerCount.A >= 9) {
      tempResult = `You are ${result.MAGGIE}`;
    } else if (answerCount.B >= 8) {
      tempResult = `You are ${result.WEST}`;
    } else if (answerCount.C === 6) {
      tempResult = `You are ${result.RALEIGH}`;
    } else if (answerCount.A === 5 || answerCount.A === 4) {
      tempResult = `You are ${result.BRADY}`;
    } else if (answerCount.B === 7) {
      tempResult = `You are ${result.GUNNER}`;
    } else if (answerCount.C === 4) {
      tempResult = `You are ${result.WILLA}`;
    } else if (answerCount.A === 6) {
      tempResult = `You are ${result.RILEY}`;
    } else if (answerCount.C === 3) {
      tempResult = `You are ${result.NASH}`;
    } else if (answerCount.A === 8 || answerCount.A === 7) {
      tempResult = `You are ${result.TALLULAH}`;
    } else if (answerCount.B === 6) {
      tempResult = `You are ${result.RYKER}`;
    } else if (answerCount.A === 4 || answerCount.A === 5) {
      tempResult = `You are ${result.AURORA}`;
    } else if (answerCount.B === 4 || answerCount.B === 5) {
      if (answerList[4] === "B") {
        tempResult = `You are ${result.ASA}`;
      } else if (answerList[4] === "C") {
        tempResult = `You are ${result.HUNTER}`;
      }
    } else {
      tempResult = "You are a alien";
    }
    this.setState({ finalResult: tempResult });
  };

  render() {
    const questionData = this.state.questionData;

    const index = this.state.index;

    return (
      <div className="play-container">
        {this.state.index < 10 ? (
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
        ) : (
          <div className="play-modal-container">
            <span className="question-text">{this.state.finalResult}</span>
          </div>
        )}
      </div>
    );
  }
}
