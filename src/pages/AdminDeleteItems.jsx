import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ItemRow from '../components/admin-components/AdminItemRow';
import styled from 'styled-components';
import swal from 'sweetalert';
import { Navbar, Title, Item, Logo, StatWrapper } from './AdminHome';
import { Link } from 'react-router-dom';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: #06243b;
`;
const Wrapper = styled.div`
	background-color: white;
	width: 50%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	border-radius: 5px;
  margin: 30px;
  padding: 40px;
`;
const Button = styled.button`
	background: red;
	border: 0px;
	padding: 10px;
	font-size: 18px;
	color: white;
	margin-bottom: 20px;
	width: 100%;
`;
const Table = styled.table`
	border: 1px solid black;
	border-collapse: collapse;
	background: white;
	width: 100%;
`;
const Thead = styled.thead`
	font-size: 17px;
	padding: 20px;
`;
const Tbody = styled.tbody``;
const Input = styled.input`
	height: 18px;
	width: 18px;
`;
const Th = styled.th`
	border-bottom: 1px solid black;
	padding: 18px;
	background: rgb(180, 180, 180);
`;
function DeleteItem() {
	const [stateItem, setItemState] = useState([]);

	useEffect(() => {
		getItem();
	}, []);

	const getItem = () => {
		axios
			.get('/api/items')
			.then((data) => {
				let item = data.data;
				setItemState(
					item.map((d) => {
						return {
							select: false,
							id: d._id,
							name: d.Name,
							brand: d.Brand,
							gender: d.Gender,
						};
					})
				);
			})
			.catch((err) => alert(err));
	};

	const deleteItemByIds = () => {
		let arrayids = [];
		stateItem.forEach((d) => {
			if (d.select) {
				arrayids.push(d.id);
			}
		});
		if (arrayids.length > 0) {
			swal({
				title: 'Are you sure?',
				text: 'These items will be completely deleted from the database!',
				icon: 'warning',
				buttons: true,
				dangerMode: true,
			}).then((willDelete) => {
				if (willDelete) {
					axios
						.delete(`/api/items/${arrayids}`)
						.then((data) => {
							getItem();
						})
						.catch((err) => alert(err));
				}
			});
		} else {
			swal({
				title: 'Warning',
				text: 'You haven not selected any item!',
				icon: 'warning',
			});
		}
	};

	return (
		<Container>
			<Navbar>
				<Title>
					<Link style={{ textDecoration: 'none' }} to="/">
						<Logo>BKP.</Logo>
					</Link>
				</Title>
				<Title />
				<StatWrapper>
					<Link
						style={{ textDecoration: 'none' }}
						to="/admin/dashboard">
						<Item>Home</Item>
					</Link>
					<Link style={{ textDecoration: 'none' }} to="/">
						<Item>Items</Item>
					</Link>
					<Link
						style={{ textDecoration: 'none' }}
						to="/admin/dashboard/delete/items">
						<Item>Delete Items</Item>
					</Link>
					<Item>Logout</Item>
				</StatWrapper>
			</Navbar>
			<Wrapper>
				<Button
					className="btn btn-danger btn-sm m-2"
					onClick={() => {
						deleteItemByIds();
					}}>
					Delete Item
				</Button>
				<Table>
					<Thead>
						<tr>
							<Th>
								<Input
									type="checkbox"
									onChange={(e) => {
										let value = e.target.checked;
										setItemState(
											stateItem.map((d) => {
												d.select = value;
												return d;
											})
										);
									}}
								/>
							</Th>
							<Th scope="col">Brand</Th>
							<Th scope="col">Gender</Th>
							<Th scope="col">Name</Th>
						</tr>
					</Thead>
					<Tbody>
						<ItemRow
							stateItem={stateItem}
							setItemState={setItemState}
						/>
					</Tbody>
				</Table>
			</Wrapper>
		</Container>
	);
}

export default DeleteItem;
