import React from "react";
import "./DStyles.css";

const DNotesContent = ({ note }) => {
	return (
		<div className="d_notes_content_note">
			<div className="d_notes_content_details">
				<p>{note.content}</p>
			</div>
			<div className="d_notes_content_date_time_details">
				<div className="d_notes_content_date">{note.date}</div>
				<div className="d_notes_content_time">{note.time}</div>
			</div>
		</div>
	);
};

export default DNotesContent;
