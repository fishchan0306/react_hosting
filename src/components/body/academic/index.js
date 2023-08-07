import React from "react";
import "./academic.css";
import Separaqtor from "../../common/separator";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";

function Academic() {
  return (
    <div className="academic">
      <Separaqtor />
      <label className="section-title">ACADEMIC</label>
      <Timeline position="alternate">
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            <div className="timelineOpp"> 2019 - 2021 </div>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot variant="outlined" color="success" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <div className="timeline-text">
              Bachelor of Science (Honours) in <br />
              Data Science and Business Intelligence, <br />
              Minor in Marketing
              <div className="sub">The Hang Seng University of Hong Kong</div>
            </div>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            <div className="timelineOpp"> 2017 - 2019 </div>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot variant="outlined" color="info" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <div className="timeline-text">
                Higher Diploma in <br />
                Data Science and Analytics
                <div className="sub">Hong Kong Institute of Vocational Education (Tsing Yi)</div>
            </div>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
}

export default Academic;