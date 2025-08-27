import {
  FailureViewBgContainer,
  FailureViewContentContainer,
  FailureViewImage,
  FailureViewHeading,
  FailureViewDescription,
  FailureViewButton,
} from './styledComponents'

import NxtwatchContext from '../../context/NxtwatchContext'

const FailureView = ({onRetry}) => (
  <NxtwatchContext.Consumer>
    {({themeColor}) => (
      <FailureViewBgContainer themecolor={themeColor}>
        <FailureViewContentContainer>
          <FailureViewImage
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
            alt="failure view"
          />
          <FailureViewHeading themecolor={themeColor}>
            Oops! Something Went Wrong
          </FailureViewHeading>
          <FailureViewDescription themecolor={themeColor}>
            We are having some trouble to complete your request. Please try
            again.
          </FailureViewDescription>
          <FailureViewButton
            type="button"
            themecolor={themeColor}
            onClick={onRetry}
          >
            Retry
          </FailureViewButton>
        </FailureViewContentContainer>
      </FailureViewBgContainer>
    )}
  </NxtwatchContext.Consumer>
)

export default FailureView
