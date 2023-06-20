import {Component} from 'react'

import {
  EditableTextInputBgContainer,
  Heading,
  EditableTextInputButton,
  Image,
} from './StyledComponents'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

class MultiLanguageGreetings extends Component {
  state = {
    isEditableEnglish: false,
    isEditableTamil: false,
    isEditableTelugu: false,
    text: 'English',
  }

  onClickButtonEnglish = () => {
    this.setState(prevState => ({
      isEditableEnglish: !prevState.isEditableEnglish,
      isEditableTamil: false,
      isEditableTelugu: false,
      text: 'English',
    }))
  }

  onClickButtonTamil = () => {
    this.setState(prevState => ({
      isEditableTamil: !prevState.isEditableTamil,
      isEditableEnglish: false,
      isEditableTelugu: false,
      text: 'Tamil',
    }))
  }

  onClickButtonTelugu = () => {
    this.setState(prevState => ({
      isEditableTelugu: !prevState.isEditableTelugu,
      isEditableTamil: false,
      isEditableEnglish: false,
      text: 'Telugu',
    }))
  }

  render() {
    const {
      isEditableEnglish,
      isEditableTamil,
      isEditableTelugu,
      text,
    } = this.state

    const bgColorEnglish = isEditableEnglish ? '#db1c48' : 'transparent'

    const textColorEnglish = isEditableEnglish ? '#ffffff' : '#db1c48'

    const bgColorTamil = isEditableTamil ? '#db1c48' : 'transparent'

    const textColorTamil = isEditableTamil ? '#ffffff' : '#db1c48'

    const bgColorTelugu = isEditableTelugu ? '#db1c48' : 'transparent'

    const textColorTelugu = isEditableTelugu ? '#ffffff' : '#db1c48'

    const renderImageView = () => {
      if (text === 'English') {
        languageGreetingsList.map(each => (
          <Image src={each.imageUrl} alt={each.imageAltText} />
        ))
      }
    }

    return (
      <>
        <EditableTextInputBgContainer>
          <Heading>Multilingual Greetings</Heading>
          <div>
            <EditableTextInputButton
              type="button"
              onClick={this.onClickButtonEnglish}
              bgColor={bgColorEnglish}
              textColor={textColorEnglish}
            >
              English
            </EditableTextInputButton>
            <EditableTextInputButton
              type="button"
              onClick={this.onClickButtonTamil}
              bgColor={bgColorTamil}
              textColor={textColorTamil}
            >
              Tamil
            </EditableTextInputButton>
            <EditableTextInputButton
              type="button"
              onClick={this.onClickButtonTelugu}
              bgColor={bgColorTelugu}
              textColor={textColorTelugu}
            >
              Telugu
            </EditableTextInputButton>
          </div>

          <ul>{renderImageView()}</ul>
        </EditableTextInputBgContainer>
      </>
    )
  }
}

export default MultiLanguageGreetings
