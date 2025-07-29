import ReactCountryFlag from 'react-country-flag'
import languageCodes from '../../utils/languageCodes'
import { lazy } from 'react'

function FlagComponent({ movieLanguage }) {

    const langCodeConverted = languageCodes.find((language) => language.code === movieLanguage);

    return (
        < ReactCountryFlag countryCode={langCodeConverted?.country} svg />
    )
}

export default FlagComponent