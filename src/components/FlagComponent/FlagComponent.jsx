import ReactCountryFlag from 'react-country-flag'
import languageCodes from '../../utils/languageCodes'
import { lazy } from 'react'

function FlagComponent({ movieLanguage, size }) {

    const langCodeConverted = languageCodes.find((language) => language.code === movieLanguage);

    return (
        < ReactCountryFlag
            style={{
                fontSize: `${size}px`,
                lineHeight: `${size}px`
            }}
            countryCode={langCodeConverted?.country}
            svg
        />
    )
}

export default FlagComponent