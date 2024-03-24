import React from 'react'
import logoSvg from "../../assets/img/logo/logo.svg"
import { APP_NAME } from '../../constants/strings'

export default function Logo() {
    return (
        <img src={logoSvg} alt={APP_NAME} />
    )
}
