import {
    Button,
    ButtonGroup,
    Checkbox,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    Slider,
} from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

export function BasicSelect() {
    const [age, setAge] = React.useState("");

    const handleChange = (event) => {
        setAge(event.target.value);
    };
}
const Container = styled.div`
    height: 80%;
    width: 95%;
    display: flex;
    flex-direction: row;
    padding: 40px;
`;
const FilterPanel = styled.div`
    border: 0.5px solid lightgrey;
    padding: 10px;
    width: 300px;
`;
const Display = styled.div`
    flex: 3;
    margin-left: 30px;
    margin-right: 50px;
    border: 0.1px solid lightgrey;
    display: flex;
    align-items: center;
    justify-content: center;
    ${mobile({ flex: 2, justifyContent: "center" })}
`;
const Title = styled.div`
    font: 22px bold;
`;
const Content = styled.div`
    font: 18px;
    display: flex;
    align-items: center;
    margin-left: 10px;
`;

const ProductDisplay = () => {
    return (
        <Container>
            <FilterPanel>
                <Title>SORT BY</Title>
                <Title>Price Range</Title>
                <Slider
                    size="small"
                    defaultValue={500}
                    aria-label="Small"
                    valueLabelDisplay="auto"
                    min={10}
                    max={1000}
                />

                <Title>Brand</Title>
                <Content>
                    <Checkbox></Checkbox>
                    Gucci{" "}
                </Content>
                <Content>
                    <Checkbox></Checkbox>
                    Dior{" "}
                </Content>
                <Content>
                    <Checkbox></Checkbox>
                    CK{" "}
                </Content>
                <Content>
                    <Checkbox></Checkbox>
                    Burberry{" "}
                </Content>
                <Content>
                    <Checkbox></Checkbox>
                    Versace{" "}
                </Content>
                <Title>
                    Release Year:
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label"></InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={2021}
                            label="Age"
                        >
                            <MenuItem value={2021}>2021</MenuItem>
                            <MenuItem value={2020}>2020</MenuItem>
                            <MenuItem value={2019}>2019</MenuItem>
                            <MenuItem value={2018}>2018</MenuItem>
                        </Select>
                    </FormControl>
                </Title>
            </FilterPanel>
            <Display>âsasas</Display>
        </Container>
    );
};

export default ProductDisplay;
