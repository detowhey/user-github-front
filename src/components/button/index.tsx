import React from 'react'

interface Props {
  type?: "button" | "submit" | undefined,
  onClick: () => void,
  buttonName?: React.ReactNode
}

export default function Button({ onClick, type, buttonName}: Props) {
  return (
    <button
      onClick={onClick}
      type={type}>
      {buttonName}
    </button>)
}
