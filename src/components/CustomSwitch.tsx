import React, { useState } from 'react'
import { Platform, Switch } from 'react-native'

interface Props {
    isOn: boolean,
    onChange: (value: boolean) => void
}

const CustomSwitch = ({ isOn, onChange }: Props) => {

    const [isEnabled, setIsEnabled] = useState(isOn)
    const toggleSwitch = () => {
        setIsEnabled(!isEnabled),
        onChange(!isEnabled)
    }

    return (
        <Switch
            trackColor={{ false: "#c5c5c5", true: "#5856d6" }}
            thumbColor={ (Platform.OS === 'android') ? "#5856d6" : '' }
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
        />
    )
}

export default CustomSwitch
