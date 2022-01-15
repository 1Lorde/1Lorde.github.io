import React, { useContext } from 'react'
import {
  CAvatar,
  CDropdown,
  CDropdownHeader,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from '@coreui/react'
import { cilUser } from '@coreui/icons'
import CIcon from '@coreui/icons-react'

import { UserContext } from '../../helpers/user'
import avatar_placeholder from '../../assets/images/avatar_placeholder.png'
import { useTranslation } from 'react-i18next'

const AppHeaderDropdown = () => {
  const { t } = useTranslation()
  const { userState } = useContext(UserContext)

  return (
    <CDropdown variant="nav-item">
      <CDropdownToggle placement="bottom-end" className="py-0" caret={false}>
        <CAvatar
          src={!userState.user.avatar ? avatar_placeholder : userState.user.avatar}
          size="lg"
        />
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownHeader className="bg-light fw-semibold py-2">{t('account')}</CDropdownHeader>
        <CDropdownItem href="/#/profile">
          <CIcon icon={cilUser} className="me-2" />
          {t('my_profile')}
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  )
}

export default AppHeaderDropdown
