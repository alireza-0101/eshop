import React from "react"
import { useBattery } from "react-use"
import {
  BsBattery,
  BsBatteryCharging,
  BsBatteryFull,
  BsBatteryHalf,
} from "react-icons/bs"

export default function BatteryDetailes() {
  const { isSupported, level, charging } = useBattery()

  const levelOfCharge = (level * 100).toFixed(0)

  return (
    isSupported && (
      <div className={`${levelOfCharge < 20 ? "text-red-600" : "dark:text-gray-300 text-gray-800"} select-none flex justify-center items-center gap-2 text-base`}>
        {charging ? (
          <BsBatteryCharging className="text-xl" />
        ) : (
          <>
            {levelOfCharge <= 30 && <BsBattery className="text-xl" />}
            {levelOfCharge > 30 && levelOfCharge <= 80 && (
              <BsBatteryHalf className="text-xl" />
            )}
            {levelOfCharge > 80 && <BsBatteryFull className="text-xl" />}
          </>
        )}

        <span className="mt-2">{levelOfCharge}%</span>
      </div>
    )
  )
}
