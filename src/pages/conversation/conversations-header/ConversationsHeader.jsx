import { Add, Delete } from "@mui/icons-material";
import {
	Button,
	FormControl,
	MenuItem,
	OutlinedInput,
	Select,
} from "@mui/material";
import React from "react";

export default function ConversationsHeader() {
	return (
		<div
			style={{
				display: "flex",
				justifyContent: "space-between",
				marginBottom: "30px",
			}}
		>
			<Button color="secondary" variant="contained" endIcon={<Add />}>
				Add Feedback
			</Button>
			<div>
				<Button
					variant="outlined"
					startIcon={<Delete />}
					sx={{
						marginRight: "30px",
						borderColor: (theme) => theme.palette.text.disabled,
						color: (theme) => theme.palette.primary.dark,
					}}
				></Button>
				<FormControl sx={{ width: "300px" }}>
					<Select
						displayEmpty
						input={<OutlinedInput />}
						sx={{
							height: "35px",
							width: "300px",
							fontSize: "16px",
							fontWeight: 700,
						}}
					>
						<MenuItem value="" disabled>
							<em>Sorted by most recent</em>
						</MenuItem>
					</Select>
				</FormControl>
			</div>
		</div>
	);
}
