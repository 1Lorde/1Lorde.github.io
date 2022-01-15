import React, { useContext, useEffect, useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCardImage,
  CCol,
  CContainer,
  CForm,
  CFormFeedback,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CFormTextarea,
  CRow,
} from '@coreui/react'

import avatar from '../../../assets/images/avatar_placeholder.png'
import { useHistory, useParams } from 'react-router-dom'
import { store } from 'react-notifications-component'
import { danger, success } from '../../../helpers/notifications'
import { getNasabah, updateNasabah } from '../../../api/api_nasabah'
import Loader from '../../../components/Loader'
import { createNotification } from '../../../api/api_notification'
import { Services } from '../../../helpers/notification_types'
import { UserContext } from '../../../helpers/user'
import { useTranslation } from 'react-i18next'

const NasabahDetail = () => {
  const { t } = useTranslation()
  const { userState } = useContext(UserContext)
  const history = useHistory()
  let { id } = useParams()
  const [nasabah, setNasabah] = useState({})
  const [hasLoaded, setHasLoaded] = useState()
  const [validated, setValidated] = useState(false)

  function handleUpdate(event) {
    event.preventDefault()

    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.stopPropagation()
    }
    setValidated(true)

    if (form.checkValidity()) {
      console.log(nasabah)
      updateNasabah(nasabah.id, nasabah).then((data) => {
        if (data.ok) {
          createNotification(userState.user.wa_number, Services.nasabahEdit, nasabah.name).then(
            (resp) => {
              console.log('Notification created: ' + resp.id)
            },
          )
          store.addNotification(success(t('notifications.nasabah_update', { name: nasabah.name })))
          history.push('/nasabah')
        } else {
          if (data.message) {
            console.log(data)
            store.addNotification(danger(data.message))
          } else {
            console.log(data)
            store.addNotification(danger(data.error))
          }
        }
      })
    }
  }

  useEffect(
    () => {
      getNasabah(id).then((data) => {
        if (data.ok) {
          setNasabah(data.nasabah)
          setHasLoaded(true)
        } else {
          if (data.message) {
            console.log(data)
            store.addNotification(danger(data.message))
          } else {
            console.log(data)
            store.addNotification(danger(data.error))
          }
        }
      })
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  )

  return hasLoaded ? (
    <CContainer>
      <CRow xs={{ cols: 1 }} md={{ cols: 2 }}>
        <CCol className="mb-5">
          <CCard>
            <CCardImage orientation="top" src={avatar} />
            <CCardBody>
              <CForm noValidate validated={validated} onSubmit={handleUpdate}>
                <div className="mb-3">
                  <CFormLabel htmlFor="name">{t('name')}</CFormLabel>
                  <CFormInput
                    type="text"
                    id="name"
                    required
                    placeholder={t('no_data')}
                    value={nasabah.name}
                    onChange={(e) => {
                      setNasabah((nasabah) => ({ ...nasabah, name: e.target.value }))
                    }}
                  />
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="ktp">{t('ktp')}</CFormLabel>
                  <CFormInput
                    type="text"
                    id="ktp"
                    placeholder={t('no_data')}
                    value={nasabah.ktp_id}
                    onChange={(e) => {
                      setNasabah((nasabah) => ({
                        ...nasabah,
                        ktp_id: e.target.value,
                      }))
                    }}
                  />
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="wa">{t('whatsapp')}</CFormLabel>
                  <CFormInput
                    type="text"
                    id="wa"
                    placeholder={t('no_data')}
                    defaultValue={nasabah.wa_number}
                    onChange={(e) => {
                      setNasabah((nasabah) => ({
                        ...nasabah,
                        wa_number: e.target.value,
                      }))
                    }}
                  />
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="address">{t('address')}</CFormLabel>
                  <CFormInput
                    type="text"
                    id="address"
                    placeholder={t('no_data')}
                    defaultValue={nasabah.address}
                    onChange={(e) => {
                      setNasabah((nasabah) => ({
                        ...nasabah,
                        address: e.target.value,
                      }))
                    }}
                  />
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="group">{t('group')}</CFormLabel>
                  <CFormInput
                    type="text"
                    id="group"
                    placeholder={t('no_data')}
                    defaultValue={nasabah.group}
                    onChange={(e) => {
                      setNasabah((nasabah) => ({
                        ...nasabah,
                        group: e.target.value,
                      }))
                    }}
                  />
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="status">{t('status')}</CFormLabel>
                  <CFormSelect
                    id="status"
                    value={nasabah.active}
                    onChange={(e) => {
                      setNasabah((nasabah) => ({ ...nasabah, active: e.target.value }))
                    }}
                  >
                    <option value="true">{t('active')}</option>
                    <option value="false">{t('inactive')}</option>
                  </CFormSelect>
                </div>
                <hr />
                <div className="mb-3">
                  <CFormLabel htmlFor="reason">{t('reason')}</CFormLabel>
                  <CFormInput
                    type="text"
                    id="reason"
                    required
                    onChange={(e) => {
                      setNasabah((nasabah) => ({
                        ...nasabah,
                        reason: e.target.value,
                      }))
                    }}
                  />
                  <CFormFeedback invalid>{t('invalid_reason')}</CFormFeedback>
                </div>
                <div className="d-flex justify-content-end">
                  <CButton color="primary" type="submit">
                    {t('edit')}
                  </CButton>
                </div>
              </CForm>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol>
          <CCard>
            <CCardHeader component="h4" className="p-3">
              {t('account_info')}
            </CCardHeader>
            <CCardBody>
              <CForm>
                <div className="mb-3">
                  <CFormLabel htmlFor="accountNumber">{t('account_number')}</CFormLabel>
                  <CFormInput type="text" id="accountNumber" />
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="type">{t('account_type')}</CFormLabel>
                  <CFormSelect id="type">
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </CFormSelect>
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="status">{t('status')}</CFormLabel>
                  <CFormSelect id="status">
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </CFormSelect>
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="note">{t('note')}</CFormLabel>
                  <CFormTextarea type="text" id="note" rows={3} />
                </div>
                <div className="d-flex justify-content-between">
                  <CButton color="primary">{t('view_records')}</CButton>
                  <CButton color="primary" variant="outline">
                    {t('edit')}
                  </CButton>
                </div>
                <br />
                <hr />
                <br />
                <CRow>
                  <CCol>
                    <div className="d-grid gap-2">
                      <CButton color="primary" variant="outline">
                        {t('register_to_products')}
                      </CButton>
                      <CButton
                        color="primary"
                        variant="outline"
                        onClick={() => {
                          history.push('/nasabah/details/cashIn')
                        }}
                      >
                        {t('cash_in')}
                      </CButton>
                    </div>
                  </CCol>
                  <CCol>
                    <div className="d-grid gap-2">
                      <CButton
                        color="primary"
                        variant="outline"
                        onClick={() => {
                          history.push('/nasabah/details/transfer')
                        }}
                      >
                        {t('transfer')}
                      </CButton>
                      <CButton
                        color="primary"
                        variant="outline"
                        onClick={() => {
                          history.push('/nasabah/details/cashOut')
                        }}
                      >
                        {t('cash_out')}
                      </CButton>
                    </div>
                  </CCol>
                </CRow>
              </CForm>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </CContainer>
  ) : (
    Loader()
  )
}

export default NasabahDetail
