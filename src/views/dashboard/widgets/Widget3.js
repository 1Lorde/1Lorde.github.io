import {
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CWidgetStatsA,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilOptions } from '@coreui/icons'
import { CChartBar } from '@coreui/react-chartjs'
import React from 'react'

function Widget3(props) {
  return (
    <CWidgetStatsA
      className="mb-4"
      color="danger"
      /* eslint-disable-next-line react/prop-types */
      value={props.value}
      /* eslint-disable react/prop-types */
      title={props.title}
      action={
        <CDropdown alignment="end">
          <CDropdownToggle color="transparent" caret={false} className="p-0">
            <CIcon icon={cilOptions} className="text-high-emphasis-inverse" />
          </CDropdownToggle>
          <CDropdownMenu>
            <CDropdownItem>Action</CDropdownItem>
            <CDropdownItem>Another action</CDropdownItem>
            <CDropdownItem>Something else here...</CDropdownItem>
            <CDropdownItem disabled>Disabled action</CDropdownItem>
          </CDropdownMenu>
        </CDropdown>
      }
      chart={
        <CChartBar
          className="mt-3 mx-3"
          style={{ height: '70px' }}
          data={{
            labels: [
              'January',
              'February',
              'March',
              'April',
              'May',
              'June',
              'July',
              'August',
              'September',
              'October',
              'November',
              'December',
              'January',
              'February',
              'March',
              'April',
            ],
            datasets: [
              {
                label: 'My First dataset',
                backgroundColor: 'rgba(255,255,255,.2)',
                borderColor: 'rgba(255,255,255,.55)',
                data: [78, 81, 80, 45, 34, 12, 40, 85, 65, 23, 12, 98, 34, 84, 67, 82],
                barPercentage: 0.6,
              },
            ],
          }}
          options={{
            maintainAspectRatio: false,
            plugins: {
              legend: {
                display: false,
              },
            },
            scales: {
              x: {
                grid: {
                  display: false,
                  drawTicks: false,
                },
                ticks: {
                  display: false,
                },
              },
              y: {
                grid: {
                  display: false,
                  drawBorder: false,
                  drawTicks: false,
                },
                ticks: {
                  display: false,
                },
              },
            },
          }}
        />
      }
    />
  )
}

export default Widget3
