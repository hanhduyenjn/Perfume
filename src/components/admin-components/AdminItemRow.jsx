import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
const TR = styled.tr``;
const TD = styled.td`
	margin: 20px;
	padding: 20px;
	text-align: center;
	border-bottom: 1px solid #ddd;
`;
const Input = styled.input`
	height: 18px;
	width: 18px;
`;
function ItemRow(props) {
	console.log(props.stateItem);
	return props.stateItem.map((d) => (
		<TR key={d.id}>
			<TD>
				<Input
					type="checkbox"
					checked={d.select}
					onChange={(e) => {
						let value = e.target.checked;
						props.setItemState(
							props.stateItem.map((sd) => {
								if (sd.id === d.id) {
									sd.select = value;
								}
								return sd;
							})
						);
					}}
				/>
			</TD>
			<TD>{d.brand}</TD>
			<TD>{d.gender}</TD>
			<TD>{d.name}</TD>
		</TR>
	));
}

export default ItemRow;
