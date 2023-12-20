import React from "react";
import "./PStyles.css";

const PNotesContent = ({ note }) => {
	return (
		<div className="p_notes_content_body">

			<div className="p_notes_content_details">
				<p>{note.content}</p>
			</div>
			<div className="p_notes_content_date_time">
				<div className="p_notes_content_date">{note.date}</div>
				<div className="p_notes_content_time">{note.time}</div>
			</div>
		</div>
	);
};

export default PNotesContent;