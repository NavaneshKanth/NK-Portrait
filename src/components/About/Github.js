import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px", marginTop: "50px" }}> {/* Added marginTop */}
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      <GitHubCalendar
        username="navaneshkanth" // replace this with your actual GitHub username
        blockSize={15}
        blockMargin={5}
        color="#facc15" // Yellow color matching your portfolio theme
        fontSize={16}
        // Responsive adjustments for GitHubCalendar
        // You might want to consider adding `theme` prop for better dark mode visibility
        // or a simpler `style` prop for overall width control if it's too wide
      />
    </Row>
  );
}

export default Github;