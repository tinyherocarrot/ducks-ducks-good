// @flow
import React, { Component } from "react"
import styled from "styled-components"

type Props = { 
    label: string
};

type State = {
  focus: boolean,
  filled: boolean
};

class Input extends Component<Props, State> {
  state = {
    focus: false,
    filled: false
  }

  onInputFocus = () => {
    this.setState({
      focus: true
    })
  }

  onInputBlur = () => {
    this.setState({
      focus: false
    })
  }

  onInputChange = e: any => {
    this.setState({
      filled: Boolean(e.target.value)
    })
  }

  render() {
    const { label } = this.props
    return (
      <InputContainer>
        <Input
          type="text"
          id="lastname"
          onFocus={this.onInputFocus}
          onBlur={this.onInputBlur}
          onChange={e => this.onInputChange(e)}
        />

        <Label
          for="lastname"
          filled={this.state.filled}
          focus={this.state.focus}>
          {label}
        </Label>
      </InputContainer>
    )
  }
}

const theme = {
  textColor: "lightslategrey"
}

const InputContainer = styled.div`
  position: relative;
  width: 200px;
  height: 50px;
  margin: 8px 0;
  display: block;

  &:hover {
    cursor: text;
  }
`

const Label = styled.label`
  color: ${theme.textColor};
  z-index: 30;
  position: absolute;

  font-size: ${props => (props.focus || props.filled ? "12px" : "16px")};
  top: ${props => (props.focus || props.filled ? "0px" : "18px")};

  transition-property: font-size, top;
  transition-duration: 0.3s;
  transition-timing-function: ease-in-out;
`

const Input = styled.input`
  border: none;
  width: 100%;
  border-bottom: 1px ${theme.textColor} solid;
  background: transparent;
  z-index: 31;
  position: absolute;
  bottom: 0;
  font-size: 14px;
  line-height: 20px;
  padding-bottom: 8px;
`

export default Input
