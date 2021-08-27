import React from "react"
import { IntlContextConsumer, changeLocale } from "gatsby-plugin-react-intl"

const languageName = {
  en: "English",
  ru: "Русский",
}

const Language = () => {
  return (
    <div>
      <IntlContextConsumer>
        {({ languages, language: currentLocale }) =>
          languages.map(language => (
            <button
              className={
                "px-1 " +
                (currentLocale === language
                  ? " text-pink-500 cursor-default"
                  : "cursor-pointer")
              }
              key={language}
              onClick={() => changeLocale(language)}
              style={{
                color: currentLocale === language ? `pink` : `black`,
              }}
            >
              {languageName[language]}
            </button>
          ))
        }
      </IntlContextConsumer>
    </div>
  )
}

export default Language
