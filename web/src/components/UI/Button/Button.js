import React from 'react'

import './Button.css'

const UIButton = ({
  children,
  componet: Componet,
  theme,
  className,
  ...restProps
}) => {
  return (
    <Componet
      className={`ui-button ui-button--${theme} ${className}`}
      {...restProps}
    >
      {children}
    </Componet>
  )
}

UIButton.defaultProps = {
  className: '',
  componet: 'a',
  theme: 'bordered-blue',
}

export default UIButton
