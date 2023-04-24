import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import styled from "styled-components";
import "./home.css";

const Container = styled.div`
  width: 1000px;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  position: relative;
  gap: 20px;
`;
const DotBox = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const CalendarDot = styled.div`
  margin-top: 5px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #f87171;
`;

const CalendarForm = () => {
  const [value, onChange] = useState(new Date());
  const dateArr = ["2022. 12. 10."];
  return (
    <Container>
      <Calendar
        id="main-inner-calendar"
        onChange={onChange}
        value={value}
        formatDay={(locale, date) =>
          //xx일 -> xx 으로 format 변경
          new Date(date).toLocaleDateString("en-us", {
            day: "2-digit",
          })
        }
        tileContent={({ date, view }) => {
          //
          const exist = dateArr.find(
            (oneDate) =>
              oneDate ===
              String(
                new Date(date).toLocaleDateString("ko", {
                  year: "numeric",
                  month: "2-digit",
                  day: "2-digit",
                })
              )
          );
          return (
            <>
              <DotBox>{exist && <CalendarDot />}</DotBox>
              {/* //날짜 밑에 표시 */}
            </>
          );
        }}
      />
    </Container>
  );
};
export default CalendarForm;
