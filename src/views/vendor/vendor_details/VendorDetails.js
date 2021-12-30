import React, { useEffect, useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CContainer,
  CForm,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CFormTextarea,
} from '@coreui/react'
import Loader from '../../../components/Loader'
import { store } from 'react-notifications-component'
import { danger, success } from '../../../helpers/notifications'
import { useParams } from 'react-router-dom'
import { getVendor } from '../../../api/api_vendors'

const VendorDetails = () => {
  const { id } = useParams()
  const [vendor, setVendor] = useState()
  const [hasLoaded, setHasLoaded] = useState()

  useEffect(
    () => {
      getVendor(id).then((data) => {
        if (data.ok) {
          setVendor(data.vendor)
          setHasLoaded(true)
        } else {
          if (data.message) {
            console.log(data)
            store.addNotification(success(data.message))
          } else {
            console.log(data)
            store.addNotification(danger(data.error))
          }
        }
      })
    }, // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  )

  // function handleEdit() {
  //   console.log(vendor)
  //   updateProduct(product).then((data) => {
  //     console.log(data)
  //     if (data.ok) {
  //       createNotification(
  //         userState.user.wa_number,
  //         Services.productCreate,
  //         product.name + ' (' + product.tipe + ')',
  //       ).then((resp) => {
  //         console.log('Notification created: ' + resp.id)
  //       })
  //       store.addNotification(success('Product updated'))
  //     } else {
  //       store.addNotification(danger(data.message))
  //     }
  //   })
  // }

  return hasLoaded ? (
    <CContainer className="d-flex justify-content-center">
      <CCard style={{ width: '35rem' }}>
        <CCardBody>
          <CForm>
            <div className="mb-3">
              <CFormLabel htmlFor="fullnameInput">Company Name</CFormLabel>
              <CFormInput type="text" id="nameInput" defaultValue={vendor.name} />
            </div>
            <div className="mb-3">
              <CFormLabel htmlFor="descInput">Description</CFormLabel>
              <CFormTextarea type="text" id="descInput" defaultValue={vendor.desc} />
            </div>
            <div className="mb-3">
              <CFormLabel htmlFor="apiInput">API URL</CFormLabel>
              <CFormInput type="text" id="apiInput" defaultValue={vendor.api_base_url} />
            </div>
            <div className="mb-3">
              <CFormLabel htmlFor="statusInput">Status</CFormLabel>
              <CFormSelect type="text" id="statusInput" defaultValue={vendor.status}>
                <option value="NOT-ACTIVE">Inactive</option>
                <option value="ACTIVE">Active</option>
              </CFormSelect>
            </div>
            <div className="d-flex justify-content-between">
              <CButton color="primary" variant="outline">
                Edit
              </CButton>
            </div>
          </CForm>
        </CCardBody>
      </CCard>
    </CContainer>
  ) : (
    Loader()
  )
}

export default VendorDetails
