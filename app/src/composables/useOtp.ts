import * as OTPAuth from "otpauth"

const otp = new OTPAuth.TOTP({
  secret: 'PV5USRLMJPGSIT7K'
})

export const getToken = () => {
  return otp.generate()
}