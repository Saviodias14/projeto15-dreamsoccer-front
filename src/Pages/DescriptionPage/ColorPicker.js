import React from "react";
import styled from "styled-components";

export default function ColorPicker({ color, setColor }) {

    function handleChange(event) {
        setColor(event.target.value);
    }

    return (
        <Div>
            <label>Personalize seu lindo botão: </label>
            <input
                type="color"
                value={color}
                onChange={handleChange}
            />
        </Div>
    );
}

const Div = styled.div`
    margin-top: 20px;
`
