import React, { useContext, useEffect, useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardImage,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CRow,
} from '@coreui/react'
import { useHistory, useParams } from 'react-router-dom'
import Loader from '../../../components/Loader'
import { store } from 'react-notifications-component'
import { danger, success } from '../../../helpers/notifications'
import { getPackage, updatePackage } from '../../../api/api_package'
import { createNotification } from '../../../api/api_notification'
import { Services } from '../../../helpers/notification_types'
import { UserContext } from '../../../helpers/user'
import { useTranslation } from 'react-i18next'

const PackageDetail = () => {
  const { t } = useTranslation()
  const { userState } = useContext(UserContext)
  const history = useHistory()
  let { id } = useParams()
  const [pack, setPack] = useState({})
  const [hasLoaded, setHasLoaded] = useState()

  useEffect(
    () => {
      getPackage(id).then((data) => {
        if (data.ok) {
          setPack(data.data)
          console.log(data.data)
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

  useEffect(() => {
    console.log(pack)
  }, [pack])

  const handleEdit = () => {
    console.log(pack)
    updatePackage(pack.id, pack).then((data) => {
      if (data.ok) {
        createNotification(userState.user.wa_number, Services.packageEdit, pack.name).then(
          (resp) => {
            console.log('Notification created: ' + resp.id)
          },
        )
        store.addNotification(success(t('notifications.package_update', { name: pack.name })))
        history.push('/packages')
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

  return hasLoaded ? (
    <CContainer className="d-flex justify-content-center">
      <CCard style={{ width: '35rem' }}>
        <CCardImage
          orientation="top"
          src={
            'https://via.placeholder.com/550x390.png?text=' + (pack.name ? pack.name : t('no_name'))
          }
        />
        <CCardBody>
          <CForm>
            <CRow>
              <CCol>
                <div className="mb-3">
                  <CFormLabel htmlFor="name">{t('name')}</CFormLabel>
                  <CFormInput
                    type="text"
                    id="name"
                    required
                    placeholder={t('no_data')}
                    value={pack.name}
                    onChange={(e) => {
                      setPack((pack) => ({ ...pack, name: e.target.value }))
                    }}
                  />
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="description">{t('description')}</CFormLabel>
                  <CFormInput
                    type="text"
                    id="description"
                    placeholder={t('no_data')}
                    value={pack.description}
                    onChange={(e) => {
                      setPack((pack) => ({ ...pack, description: e.target.value }))
                    }}
                  />
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="slug">{t('slug')}</CFormLabel>
                  <CFormInput
                    type="text"
                    id="slug"
                    required
                    placeholder={t('no_data')}
                    value={pack.slug}
                    onChange={(e) => {
                      setPack((pack) => ({ ...pack, slug: e.target.value }))
                    }}
                  />
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="status">{t('status')}</CFormLabel>
                  <CFormSelect
                    id="status"
                    value={pack.active}
                    onChange={(e) => {
                      setPack((pack) => ({ ...pack, active: e.target.value }))
                    }}
                  >
                    <option value="true">{t('active')}</option>
                    <option value="false">{t('inactive')}</option>
                  </CFormSelect>
                </div>
                <div className="pt-1">
                  <hr />
                  <h3>{t('price')}</h3>
                  <CRow className="pt-2">
                    <CCol>
                      <div className="mb-3">
                        <CFormLabel htmlFor="monthly">{t('monthly')}</CFormLabel>
                        <CFormInput
                          type="number"
                          id="monthly"
                          required
                          placeholder={t('no_data')}
                          value={pack.price.monthly}
                          onChange={(e) => {
                            setPack((pack) => ({
                              ...pack,
                              price: {
                                ...pack.price,
                                monthly: parseInt(e.target.value),
                              },
                            }))
                          }}
                        />
                      </div>
                    </CCol>
                    <CCol>
                      <div className="mb-3">
                        <CFormLabel htmlFor="yearly">{t('yearly')}</CFormLabel>
                        <CFormInput
                          type="number"
                          id="yearly"
                          required
                          placeholder={t('no_data')}
                          value={pack.price.yearly}
                          onChange={(e) => {
                            setPack((pack) => ({
                              ...pack,
                              price: {
                                ...pack.price,
                                yearly: parseInt(e.target.value),
                              },
                            }))
                          }}
                        />
                      </div>
                    </CCol>
                  </CRow>
                </div>

                <div>
                  <hr />
                  <h3>{t('quota')}</h3>
                  <CRow className="pt-2">
                    <CCol>
                      <div className="mb-3">
                        <CFormLabel htmlFor="account_officer">{t('account_officer')}</CFormLabel>
                        <CFormInput
                          type="number"
                          id="account_officer"
                          required
                          placeholder={t('no_data')}
                          value={pack.quota.account_officer}
                          onChange={(e) => {
                            setPack((pack) => ({
                              ...pack,
                              quota: {
                                ...pack.quota,
                                account_officer: parseInt(e.target.value),
                              },
                            }))
                          }}
                        />
                      </div>
                    </CCol>
                    <CCol>
                      <div className="mb-3">
                        <CFormLabel htmlFor="nasabah">{t('nasabah')}</CFormLabel>
                        <CFormInput
                          type="number"
                          id="nasabah"
                          required
                          placeholder={t('no_data')}
                          value={pack.quota.nasabah}
                          onChange={(e) => {
                            setPack((pack) => ({
                              ...pack,
                              quota: {
                                ...pack.quota,
                                nasabah: parseInt(e.target.value),
                              },
                            }))
                          }}
                        />
                      </div>
                    </CCol>
                  </CRow>
                </div>
              </CCol>
            </CRow>
            <CRow className="mt-3 mb-1">
              <div className="d-flex justify-content-end">
                <CButton color="primary" onClick={handleEdit}>
                  {t('edit')}
                </CButton>
              </div>
            </CRow>
          </CForm>
        </CCardBody>
      </CCard>
    </CContainer>
  ) : (
    Loader()
  )
}

export default PackageDetail
