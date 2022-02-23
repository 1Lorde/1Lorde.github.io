import React, { useContext, useEffect, useState } from 'react'
import ReactCodeInput from 'react-verification-code-input'

import { CButton, CCard, CCardBody, CCol, CContainer, CForm, CRow } from '@coreui/react'
import { UserContext, UserStatus } from '../../../helpers/user'
import { useHistory } from 'react-router-dom'
import { store } from 'react-notifications-component'
import { danger, success } from '../../../helpers/notifications'
import { changePasswordOtp, loginOtp, resetPasswordOtp } from '../../../api/api_auth'
import { useTranslation } from 'react-i18next'

const InputOtp = () => {
  const { t } = useTranslation()
  const { userState } = useContext(UserContext)
  const history = useHistory()
  const [otp, setOtp] = useState('')
  const [isLoading, setIsLoading] = useState()

  useEffect(
    () => {
      console.log(userState)
      if (
        userState &&
        Object.keys(userState).length === 0 &&
        Object.getPrototypeOf(userState) === Object.prototype
      ) {
        history.push('/login')
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  )

  function handleOtp(otp) {
    setIsLoading(true)
    if (userState.status === UserStatus.WAITING_FOR_OTP) {
      changePasswordOtp(otp)
        .then((data) => {
          console.log(data)
          store.addNotification(success(data.message))
          setIsLoading(false)
          history.push('/profile')
        })
        .catch(() => {
          store.addNotification(danger('Invalid OTP code'))
          setIsLoading(false)
        })
    } else if (userState.status === UserStatus.TRY_TO_LOGIN) {
      loginOtp(userState.temp_token, otp)
        .then((data) => {
          console.log(data)
          store.addNotification(success(t('notifications.welcome_back')))
          setIsLoading(false)
          history.push('/profile')
        })
        .catch(() => {
          store.addNotification(danger('Invalid OTP code'))
          setIsLoading(false)
        })
    } else if (userState.status === UserStatus.RESET_PASS) {
      resetPasswordOtp(userState.temp_token, otp)
        .then((data) => {
          if (data.ok === true) {
            console.log(data)
            store.addNotification(success(data.message))
            setIsLoading(false)
            history.push('/profile')
          } else {
            store.addNotification(danger(data.message))
            setIsLoading(false)
          }
        })
        .catch(() => {
          store.addNotification(danger('Invalid OTP code'))
          setIsLoading(false)
        })
    }
  }

  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol xl={4}>
            <CCard className="p-4">
              <CCardBody>
                <CForm>
                  <h2>{t('input_otp')}</h2>
                  <br />
                  <CRow>
                    <CCol className="d-flex justify-content-center">
                      <ReactCodeInput
                        loading={isLoading}
                        autoFocus={true}
                        fieldWidth={40}
                        value={otp}
                        onChange={(e) => setOtp(e)}
                      />
                    </CCol>
                  </CRow>
                  <br />
                  <CRow>
                    <CCol className="d-flex justify-content-end">
                      <CButton color="primary" className="px-4" onClick={(e) => handleOtp(otp)}>
                        {t('submit')}
                      </CButton>
                    </CCol>
                  </CRow>
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default InputOtp
