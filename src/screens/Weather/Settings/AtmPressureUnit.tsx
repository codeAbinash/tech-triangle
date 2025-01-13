import { weatherStore } from '@/zustand/weatherStore'
import Check from '@components/Check'
import { Gap12 } from '@components/Gap'
import SettGroup from '@components/Settings/SettGroup'
import { SettOption } from '@components/Settings/SettOption'
import SettText from '@components/Settings/SettText'
import SettWrapper from '@components/Settings/SettWrapper'
import type { NavProp } from '@utils/types'

export default function AtmPressureUnit({ navigation }: NavProp) {
  const atmPressureUnit = weatherStore((state) => state.atmPressureUnit)
  const setAtmPressureUnit = weatherStore((state) => state.setAtmPressureUnit)
  return (
    <SettWrapper navigation={navigation} title='Atmospheric Pressure Unit'>
      <Gap12>
        <SettText className='mt-3'>Select the unit of atmospheric pressure you want to use.</SettText>
        <SettGroup>
          <SettOption
            title='Hectopascal (hPa)'
            Right={<Check checked={atmPressureUnit === 'hPa'} />}
            onPress={() => setAtmPressureUnit('hPa')}
          />
          <SettOption
            title='Inches of mercury (inHg)'
            Right={<Check checked={atmPressureUnit === 'inHg'} />}
            onPress={() => setAtmPressureUnit('inHg')}
          />
          <SettOption
            title='Millimeter of mercury (mmHg)'
            Right={<Check checked={atmPressureUnit === 'mmHg'} />}
            onPress={() => setAtmPressureUnit('mmHg')}
          />
          <SettOption
            title='Millibar (mbar)'
            Right={<Check checked={atmPressureUnit === 'mbar'} />}
            onPress={() => setAtmPressureUnit('mbar')}
          />
          <SettOption
            title='Atmosphere (atm)'
            Right={<Check checked={atmPressureUnit === 'atm'} />}
            onPress={() => setAtmPressureUnit('atm')}
          />
        </SettGroup>
      </Gap12>
    </SettWrapper>
  )
}
