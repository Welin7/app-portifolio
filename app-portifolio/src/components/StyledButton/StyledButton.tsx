import styled from "@emotion/styled"
import React, { ReactNode } from "react"

interface ButtonProps {
    children: ReactNode
}

const ButtonStyled: React.FC<ButtonProps> = ({ children }) => {

    const StyledButton = styled("button")(() => ({
        backgroundColor: "transparent",
        borderColor: "#f5f5f5",
        borderRadius: "3px",
        padding: "5px 15px",
        width: "100%",
        color: "#f5f5f5",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
        '&:hover': {
            backgroundColor: "#4f8e3e"
        }
    }))
    return (
        <>
            <StyledButton>{children}</StyledButton>
        </>
    )
}

export default ButtonStyled