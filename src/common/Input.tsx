import React, { DetailedHTMLProps } from 'react'

interface Props extends HtmlInputProps {
  label: string
}

type HtmlInputProps = DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>

const Input: React.FunctionComponent<Props> = props => {
  const { label, ...inputProps } = props

  return (
    <fieldset>
      <label>
        <span>{label}</span>
        <input {...inputProps} />
      </label>
    </fieldset>
  )
}

export default Input
